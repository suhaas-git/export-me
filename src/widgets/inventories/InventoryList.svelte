<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import InventoryItem from '@widgets/inventories/InventoryItem.svelte';
	import Search from '@widgets/Search.svelte';
	import type { Gallery, Inventory } from '@shared/types/inventory';
	import Chips from '@shared/ui/Chips.svelte';
	import ArrowRight from '@shared/assets/icons/ArrowRight.svelte';
	import type { Filter } from '@shared/types/filter';

	// Props
	export let inventory: (Inventory & { gallery: Gallery[] })[] = [];
	export let filters: Filter[] = [];
	export let showBackButton: boolean = true;

	$: console.log(filters, inventory);

	// Local state
	let searchQuery = '';
	let filterType = 'All';

	const dispatch = createEventDispatcher();

	$: filterValue = filters.find((e) => e.label === filterType)?.value;

	$: filteredInventory = inventory
		.filter((e) => filterType === 'All' || e.type.includes(filterValue as string))
		.filter(
			(e) =>
				e.item.toLowerCase().includes(searchQuery.toLowerCase()) ||
				e.itemDescription.toLowerCase().includes(searchQuery.toLowerCase())
		);

	function handleItemClick(item: Inventory) {
		dispatch('itemClick', item);
	}

	function handleBackClick() {
		dispatch('backClick');
	}
</script>

<div class="flex flex-col gap-4 pb-[128px]">
	<div
		class="sticky top-0 z-[1000] bg-white flex flex-col gap-4 pt-4 pb-4"
		style="box-shadow: rgb(0 0 0/16%) 0 0 6px"
	>
		<div class="flex items-center pr-4">
			{#if showBackButton}
				<button class="-rotate-180 px-4" on:click={handleBackClick}>
					<ArrowRight />
				</button>
			{/if}
			<Search bind:value={searchQuery} />
		</div>

		<Chips
			bind:selectedValue={filterType}
			options={filters.map((e) => e.label)}
			defaultValue="All"
		/>
	</div>

	<div class="px-4 overflow-auto flex flex-col gap-6 pb-4">
		{#each filteredInventory as item}
			<InventoryItem
				subheading={item.itemDescription}
				heading={item.item}
				features={Object.entries(item.others)
					.splice(0, 3)
					.map((e) => {
						const [key, value] = e;
						return { label: key, value };
					})}
				medias={item.gallery}
				on:click={() => handleItemClick(item)}
			/>
		{/each}
	</div>
</div>
