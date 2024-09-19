<script lang="ts">
	import { page } from '$app/stores';
	import type { Gallery as TGallery, Inventory } from '@shared/types/inventory';

	import scaleElementOnClick from '@shared/actions/scaleElementOnClick';
	import Divider from '@shared/ui/Divider.svelte';
	import DetailTable from '@widgets/detail/DetailTable.svelte';
	import ArrowDown from '@shared/assets/icons/ArrowDown.svelte';
	import { cx } from '@shared/utils/cx';
	import { getBasicInfo, getDetails, getGallery } from '@entities/data';
	import Gallery from '@shared/ui/Gallery.svelte';
	import FullPageGallery from '@widgets/detail/FullPageGallery.svelte';
	import Image from '@shared/assets/icons/Image.svelte';
	import Check from '@shared/assets/icons/Check.svelte';
	import ArrowRight from '@shared/assets/icons/ArrowRight.svelte';
	import { goto } from '$app/navigation';

	const id = $page.params.id;

	let loading = false;

	let fullPageGallery = false;

	let itemData: Inventory | undefined;

	let gallery: TGallery[] = [];

	let details: Partial<{
		[key: string]: any;
	}> = {};

	let isHidden: { [k: string]: boolean } = {};

	async function handleGetData(id: string) {
		loading = true;

		itemData = await getBasicInfo(id);
		gallery = await getGallery(id);
		details = await getDetails(id);

		loading = false;
	}

	$: handleGetData(id);
</script>

<div class="w-full pb-4">
	<div class="relative">
		<Gallery
			{gallery}
			className="top-0 w-full z-10"
			on:click={() => (fullPageGallery = !fullPageGallery)}
		/>

		<div
			class="absolute top-2 left-2 z-10 p-2 bg-white inline-flex rounded-full text-black shadow"
			on:click={() => goto(`/${$page.params.category}`)}
		>
			<ArrowRight className="rotate-180" />
		</div>
	</div>

	<div class="relative transition-all duration-300">
		{#if itemData}
			<div class="bg-white p-4 shadow-sm">
				<p class="text-base font-semibold mb-2">{itemData.item}</p>
				<p class="text-sm font-normal text-neutral-500">
					{itemData.meter} · {itemData.manufacturer} · {itemData.createdAt}
				</p>

				{#if itemData}
					<Divider className="mt-6 mb-4" />
					<div class="flex gap-5 items-center cursor-pointer">
						<img class="w-14 h-14 rounded-full bg-gray-300" src={itemData.sellerLogo} />
						<div class="flex flex-col">
							<p class="text-xl text-neutral-950 font-medium">
								{itemData.sellerName}
							</p>
							<p class="text-sm text-neutral-500">
								{itemData.sellerAgeInYears}yr’s in the business
							</p>
						</div>
					</div>
					<Divider className="mb-6 mt-4" />
				{/if}

				<button
					use:scaleElementOnClick
					class="bg-amber-650 text-white rounded-md p-3 w-full font-bold text-sm"
				>
					Request a Quote
				</button>
			</div>

			<Divider className="my-4" />

			<div class="rounded-xl bg-white p-4 shadow-sm mx-3">
				<span class="text-neutral-750 font-medium">Top Features</span>

				<Divider className="my-4" />

				<div class="flex flex-col gap-3">
					{#each itemData.features as feature}
						<div class="flex gap-2 items-center text-neutral-500">
							<Check />
							<span class="text-sm">{feature} </span>
						</div>
					{/each}
				</div>
			</div>

			<Divider className="my-4" />

			{#each Object.entries(details) as [key, detail]}
				{@const { label, ...itemData } = detail}
				{@const isOpen = !isHidden[key]}

				<div
					role="button"
					tabindex="0"
					on:keydown={() => {}}
					class="rounded-xl bg-white p-4 shadow-sm mb-4 mx-3"
					on:click={() => (isHidden[key] = !isHidden[key])}
				>
					<div class="flex justify-between items-center h-fit text-neutral-400 text-base">
						<div class="flex justify-between items-center w-full pr-4">
							<span class="font-medium text-neutral-750">
								{label}
							</span>

							<Image className="w-5 h-5" />
						</div>

						<ArrowDown
							className={cx(isOpen ? '-rotate-180' : 'rotate-0', 'transition-transform w-5 h-5')}
						/>
					</div>

					{#if isOpen}
						<DetailTable {itemData} {gallery} />
					{/if}
				</div>
			{/each}
		{/if}
	</div>
</div>

<FullPageGallery
	{gallery}
	{details}
	onClose={() => (fullPageGallery = false)}
	isVisible={fullPageGallery}
/>
