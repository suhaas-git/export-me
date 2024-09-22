<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import getData, { getGallery } from '@entities/data';
	import { getFilter } from '@entities/filter';
	import InventoryList from '@widgets/inventories/InventoryList.svelte';
	import type { Gallery, Inventory } from '@shared/types/inventory';
	import type { Filter } from '@shared/types/filter';

	let category = $page.params.category;

	let inventory: (Inventory & { gallery: Gallery[] })[] = [];
	let filters: Filter[] = [];

	onMount(async () => {
		filters = await getFilter(category);
		const basicInfo = await getData(category);
		inventory = await Promise.all(
			basicInfo.map(async (item) => {
				const gallery = await getGallery(item.id);
				return { ...item, gallery };
			})
		);
	});

	function handleItemClick(event) {
		const item = event.detail;
		goto(`/${item.category}/detail/${item.id}`);
	}

	function handleBackClick() {
		goto('/');
	}
</script>

<InventoryList
	{inventory}
	{filters}
	on:itemClick={handleItemClick}
	on:backClick={handleBackClick}
/>
