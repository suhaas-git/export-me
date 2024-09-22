<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fade, fly } from 'svelte/transition';
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

	// Local state
	let searchQuery = '';
	let filterType = 'All';
	let isSearchFocused = false;

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

	function handleSearchFocus() {
		isSearchFocused = true;
	}

	function handleSearchBlur() {
		isSearchFocused = false;
	}
</script>

<div class="flex flex-col min-h-screen bg-offWhite">
	<header
		class="sticky top-0 z-[1000] bg-white shadow-md transition-all duration-300"
		class:shadow-lg={isSearchFocused}
	>
		<div class="items-center mx-auto px-4 py-4">
			<div class="flex items-center justify-between mb-4 gap-2">
				<button
					class="p-2 rounded-full hover:bg-amber-60 transition-colors duration-300 shadow-md"
					on:click={handleBackClick}
				>
					<ArrowRight className="transform rotate-180 text-charcoal" />
				</button>

				<Search
					bind:value={searchQuery}
					on:focus={handleSearchFocus}
					on:blur={handleSearchBlur}
					placeholder="Search inventory..."
				/>
			</div>
			<div class="overflow-x-auto -mx-4 px-4">
				<Chips
					bind:selectedValue={filterType}
					options={filters.map((e) => e.label)}
					defaultValue="All"
				/>
			</div>
		</div>
	</header>

	<main class="mx-auto px-4 py-6">
		{#if filteredInventory.length > 0}
			<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each filteredInventory as item (item.id)}
					<div in:fade={{ duration: 300 }}>
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
					</div>
				{/each}
			</div>
		{:else}
			<div class="text-center py-12">
				<p class="text-lg text-charcoal">No items found. Try adjusting your search or filters.</p>
			</div>
		{/if}
	</main>
</div>
