<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	import sample from '@shared/assets/images/WhatsApp Image 2024-09-01 at 15.11.28.jpeg';
	import type { Inventory } from '@shared/types/inventory';
	import { getDataById } from '@entities/data';

	import scaleElementOnClick from '@shared/actions/scaleElementOnClick';
	import Divider from '@shared/ui/Divider.svelte';
	import { DETAILS_TO_SHOW } from '@widgets/detail/constants';
	import DetailTable from '@widgets/detail/DetailTable.svelte';
	import ArrowDown from '@shared/assets/icons/ArrowDown.svelte';
	import { cx } from '@shared/utils/cx';
	import Dialog from '@shared/ui/Dialog.svelte';

	const id = $page.params.id;

	let loading = false;
	let itemData: Inventory | undefined;

	let isOpen = false;

	async function handleGetData(id: string) {
		loading = true;
		itemData = await getDataById(id);
		loading = false;
	}

	$: handleGetData(id);
</script>

<div class="bg-black w-full h-full">
	<div class="h-[220px] sticky top-0 w-full z-10">
		<img src={sample} alt="sample" class="h-full w-full object-cover" />
	</div>

	<div class="bg-white relative pt-6 px-6 transition-all duration-300">
		{#if itemData}
			<p class="text-xl font-semibold mb-4">{itemData.item}</p>

			<p class="text-sm text-gray-400 font-normal mb-3">
				{#each itemData.features as feature, i}
					<span>{feature}{i !== itemData.features.length - 1 ? ',' : ''} </span>
				{/each}
			</p>

			<button
				use:scaleElementOnClick
				class="bg-amber-650 text-white rounded-md p-3 w-full font-bold text-base mb-5"
			>
				Request a Quote
			</button>

			<Divider className="mb-5" />

			{#each DETAILS_TO_SHOW as details}
				<div class="flex justify-between" on:click={() => (isOpen = !isOpen)}>
					<p class="mb-5 text-xl font-medium text-neutral-750">
						{details.title}
					</p>
					<ArrowDown className={cx(isOpen ? '-rotate-180' : 'rotate-0', 'transition-transform')} />
				</div>
				{#if isOpen}
					<DetailTable {itemData} key={details.key} />
				{/if}
			{/each}
		{/if}
	</div>
</div>

<Dialog></Dialog>
