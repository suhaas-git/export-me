<script lang="ts">
	import { page } from '$app/stores';
	import { fly, fade, slide } from 'svelte/transition';
	import type { Gallery as TGallery, GeneralAppearance, Inventory } from '@shared/types/inventory';

	import scaleElementOnClick from '@shared/actions/scaleElementOnClick';
	import Divider from '@shared/ui/Divider.svelte';
	import { DETAILS_TO_SHOW } from '@widgets/detail/constants';
	import DetailTable from '@widgets/detail/DetailTable.svelte';
	import ArrowDown from '@shared/assets/icons/ArrowDown.svelte';
	import { cx } from '@shared/utils/cx';
	import { getDataById, getGallery, getGeneralAppearence } from '@entities/data';
	import Gallery from '@shared/ui/Gallery.svelte';
	import FullPageGallery from '@widgets/detail/FullPageGallery.svelte';
	import { quintOut } from 'svelte/easing';

	const id = $page.params.id;

	let loading = false;
	let fullPageGallery = false;
	let itemData: Inventory | undefined;
	let gallery: TGallery[] = [];
	let details: Partial<{
		generalAppearance: GeneralAppearance;
	}> = {};

	let isOpen = {
		generalAppearance: true
	};

	async function handleGetData(id: string) {
		loading = true;
		itemData = await getDataById(id);
		gallery = await getGallery(id);
		details.generalAppearance = await getGeneralAppearence(id);

		loading = false;
	}

	$: handleGetData(id);
</script>

<div class="w-full pb-4">
	<Gallery
		{gallery}
		className="shadow-md  top-0 w-full z-10"
		on:click={() => (fullPageGallery = !fullPageGallery)}
	/>

	<div class="relative pt-6 px-2 transition-all duration-300">
		{#if itemData}
			<div class="rounded-xl bg-white p-4 shadow-sm">
				<p class="text-sm font-semibold mb-2">{itemData.item}</p>
				<p class="text-xs text-gray-400 font-normal mb-3">
					{#each itemData.features as feature, i}
						<span>{feature}{i !== itemData.features.length - 1 ? ',' : ''} </span>
					{/each}
				</p>

				<button
					use:scaleElementOnClick
					class="bg-amber-650 text-white rounded-md p-3 w-full font-bold text-sm"
				>
					Request a Quote
				</button>
			</div>

			<Divider className="my-4" />

			{#each DETAILS_TO_SHOW as detail}
				<div
					class="rounded-xl bg-white p-4 shadow-sm mb-4"
					on:click={() => (isOpen[detail.key] = !isOpen[detail.key])}
				>
					<div class="flex justify-between items-center h-fit">
						<p class="text-base font-medium text-neutral-750">
							{detail.title}
						</p>
						<ArrowDown
							className={cx(
								isOpen[detail.key] ? '-rotate-180' : 'rotate-0',
								'transition-transform text-neutral-900'
							)}
						/>
					</div>

					{#if isOpen[detail.key]}
						<DetailTable itemData={details[detail.key]} {gallery} />
					{/if}
				</div>
			{/each}
		{/if}
	</div>
</div>

<FullPageGallery onClose={() => (fullPageGallery = false)} {gallery} isVisible={fullPageGallery} />
