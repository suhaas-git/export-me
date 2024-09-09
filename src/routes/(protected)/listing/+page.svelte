<script lang="ts">
	import InventoryItem from '@widgets/InventoryItem.svelte';
	import Search from '@widgets/Search.svelte';
	import type { Inventory } from '@shared/types/inventory';

	import getData from '@entities/data';

	import Chips from '@shared/ui/Chips.svelte';
	import { goto } from '$app/navigation';

	let searchQuery = '';

	let inventory: Inventory[] = [];

	let filterType = 'All';

	async function fetchData() {
		inventory = await getData();
	}

	function handleOnClick(item: Inventory) {
		goto(`/detail/${item.id}`);
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
		<div class="px-4">
			<Search bind:value={searchQuery} />
		</div>

		<Chips
			bind:selectedValue={filterType}
			options={['All', 'Wheel Loader', 'Excavator', 'Backhoe Loader', 'Truck Tractor']}
			defaultValue="All"
		/>
	</div>

	<div class="px-4 overflow-auto flex flex-col gap-6">
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
