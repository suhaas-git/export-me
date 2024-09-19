<script lang="ts">
	import { page } from '$app/stores';

	import InventoryItem from '@widgets/InventoryItem.svelte';
	import Search from '@widgets/Search.svelte';
	import type { Gallery, Inventory } from '@shared/types/inventory';

	import Chips from '@shared/ui/Chips.svelte';
	import { goto } from '$app/navigation';
	import getData, { getGallery } from '@entities/data';
	import ArrowRight from '@shared/assets/icons/ArrowRight.svelte';

	let searchQuery = '';

	let inventory: (Inventory & { gallery: Gallery[] })[] = [];

	let filterType = 'All';

	async function fetchData() {
		const basicInfo = await getData($page.params.category);
		const newInventory: any = [];

		for (const item of basicInfo) {
			const gallery = await getGallery(item.id);
			newInventory.push({ ...item, gallery });
		}

		inventory = newInventory;
	}

	function handleOnClick(item: Inventory) {
		goto(`/${item.category}/detail/${item.id}`);
	}

	$: filteredInventory = inventory
		.filter((e) => filterType === 'All' || e.type === filterType)
		.filter(
			(e) =>
				e.item.toLowerCase().includes(searchQuery.toLowerCase()) ||
				e.itemDescription.toLowerCase().includes(searchQuery.toLowerCase())
		);

	$: fetchData();
</script>

<div class="flex flex-col gap-4 pb-[128px]">
	<div
		class="sticky top-0 z-[1000] bg-white flex flex-col gap-4 pt-4 pb-4"
		style="box-shadow: rgb(0 0 0/16%) 0 0 6px"
	>
		<div class="flex items-center pr-4">
			<div class="-rotate-180 px-4" on:click={() => goto('/')}>
				<ArrowRight />
			</div>
			<Search bind:value={searchQuery} />
		</div>

		<Chips
			bind:selectedValue={filterType}
			options={['All', 'Wheel Loader', 'Excavator', 'Backhoe Loader', 'Truck Tractor']}
			defaultValue="All"
		/>
	</div>

	<div class="px-4 overflow-auto flex flex-col gap-6 pb-4">
		{#each filteredInventory as item}
			<InventoryItem
				subheading={item.itemDescription}
				heading={item.item}
				features={[
					{
						label: 'Meter',
						value: item.meter
					},
					{
						label: 'Manufacturer',
						value: item.manufacturer
					}
				]}
				medias={item.gallery}
				on:click={() => handleOnClick(item)}
			/>
		{/each}
	</div>
</div>
