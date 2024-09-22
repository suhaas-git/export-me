<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { getAllProducts, getGallery } from '@entities/data';
	import InventoryList from '@widgets/inventories/InventoryList.svelte';
	import type { Gallery, Inventory } from '@shared/types/inventory';
	import type { Filter } from '@shared/types/filter';

	let inventory: (Inventory & { gallery: Gallery[] })[] = [];
	let filters: Filter[] = [];

	async function fetchData() {
		const urlParams = new URLSearchParams(window.location.search);
		const searchQ = (urlParams.get('q') ?? '').toLowerCase();

		const basicInfo = await getAllProducts();
		const filteredData = basicInfo.filter(
			(e) =>
				e.item.toLowerCase().includes(searchQ) ||
				e.itemDescription.toLowerCase().includes(searchQ) ||
				e.category.toLowerCase().includes(searchQ)
		);

		console.log(basicInfo, searchQ, filteredData);

		for (const item of filteredData) {
			const gallery = await getGallery(item.id);
			inventory.push({ ...item, gallery });
		}

		inventory = inventory;
	}

	function handleItemClick(event) {
		const item = event.detail;
		goto(`/${item.category}/detail/${item.id}`);
	}

	function handleBackClick() {
		goto('/');
	}

	onMount(fetchData);
</script>

<InventoryList
	{inventory}
	{filters}
	on:itemClick={handleItemClick}
	on:backClick={handleBackClick}
/>
