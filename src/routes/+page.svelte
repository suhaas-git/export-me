<script lang="ts">
	import InventoryItem from '@widgets/InventoryItem.svelte';
	import Search from '@widgets/Search.svelte';
	import type { Inventory } from '@shared/types/inventory';

	import getData from '@entities/data';

	import Chips from '@shared/ui/Chips.svelte';

	let searchQuery = '';

	let inventory: Inventory[] = [];

	async function fetchData() {
		inventory = await getData();
	}

	$: filteredInventory = inventory.filter(
		(e) =>
			e.item.toLowerCase().includes(searchQuery.toLowerCase()) ||
			e.itemDescription.toLowerCase().includes(searchQuery.toLowerCase())
	);

	$: fetchData();
</script>

<div class="flex flex-col gap-4">
	<div
		class="sticky top-0 z-10 bg-white flex flex-col gap-4 pt-4 pb-4"
		style="box-shadow: rgb(0 0 0/16%) 0 0 6px"
	>
		<div class="px-4">
			<Search bind:value={searchQuery} />
		</div>

		<Chips
			options={['All', 'JCB', 'Excavator', 'Bulldozer', 'Crane', 'Forklift']}
			defaultValue="All"
		/>
	</div>

	<div class="px-4 overflow-auto flex flex-col gap-4">
		{#each filteredInventory as item}
			<InventoryItem
				subheading={item.itemDescription}
				heading={item.item}
				features={item.features}
				medias={item.gallery}
			/>
		{/each}
	</div>
</div>
