<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import dayjs from 'dayjs';
	import type { Gallery as TGallery, Inventory } from '@shared/types/inventory';
	import type { Seller } from '@entities/seller';
	import { cx } from '@shared/utils/cx';
	import scaleElementOnClick from '@shared/actions/scaleElementOnClick';
	import { getBasicInfo, getDetails, getGallery } from '@entities/data';
	import { getSellerById } from '@entities/seller';

	// Components
	import Divider from '@shared/ui/Divider.svelte';
	import DetailTable from '@widgets/detail/DetailTable.svelte';
	import Gallery from '@shared/ui/Gallery.svelte';
	import FullPageGallery from '@widgets/detail/FullPageGallery.svelte';
	import Tag from '@shared/ui/Tag.svelte';
	import RequestQuoteForm from '@features/RequestQuoteForm.svelte';
	import BottomSheet from '@shared/ui/BottomSheet.svelte';

	// Icons
	import ArrowDown from '@shared/assets/icons/ArrowDown.svelte';
	import Check from '@shared/assets/icons/Check.svelte';
	import ArrowRight from '@shared/assets/icons/ArrowRight.svelte';

	const id = $page.params.id;

	let fullPageGallery = false;
	let itemData: Inventory;
	let gallery: TGallery[] = [];
	let details: Record<string, any> = {};
	let isHidden: Record<string, boolean> = {};
	let seller: Seller;
	let isRequestingForm = false;

	async function fetchData() {
		const [basicInfo, galleryData, detailsData, sellerData] = await Promise.all([
			getBasicInfo(id),
			getGallery(id),
			getDetails(id),
			getBasicInfo(id).then((info) => getSellerById(info.sellerId))
		]);

		itemData = basicInfo;
		gallery = galleryData;
		details = detailsData;
		seller = sellerData;
	}

	onMount(fetchData);
</script>

<div class="w-full pb-4 bg-offWhite">
	<div class="relative">
		<Gallery {gallery} className="top-0 w-full z-10" on:click={() => (fullPageGallery = true)} />

		<button
			class="fixed top-4 left-4 z-20 p-2 bg-white inline-flex rounded-full text-charcoal shadow-md hover:bg-amber-60 transition-colors duration-300"
			on:click={() => goto(`/${$page.params.category}`)}
		>
			<ArrowRight className="rotate-180 w-6 h-6" />
		</button>
	</div>

	{#if itemData}
		<div class="bg-white p-6 shadow-sm rounded-t-xl -mt-4 relative z-20">
			<h1 class="text-xl font-semibold mb-3 text-charcoal">{itemData.item}</h1>
			<div class="flex flex-wrap gap-2 mb-4">
				{#each Object.values(itemData.others) as data}
					<Tag variant="default">{data}</Tag>
				{/each}
				<Tag variant="highlight">{dayjs(itemData.createdAt).format('DD MMM, YY')}</Tag>
			</div>

			{#if seller}
				<Divider className="my-4" />
				<div
					class="flex items-center space-x-4 cursor-pointer hover:bg-amber-60 p-2 rounded-lg transition-colors duration-300"
				>
					<img class="w-16 h-16 rounded-full shadow-md" src={seller.sellerLogo} alt={seller.name} />
					<div>
						<p class="text-lg font-medium text-charcoal">{seller.name}</p>
						<p class="text-sm text-neutral-750">{seller.age} years in business</p>
					</div>
				</div>
			{/if}

			<button
				use:scaleElementOnClick
				class="mt-6 bg-amber-650 text-white rounded-lg p-4 w-full font-bold text-base hover:bg-amber-450 transition-colors duration-300"
				on:click={() => (isRequestingForm = true)}
			>
				Request a Quote
			</button>
		</div>

		{#if itemData.features.length > 0}
			<div class="bg-white p-6 mt-4 shadow-sm">
				<h2 class="text-lg font-medium text-charcoal mb-4">Top Features</h2>
				<ul class="space-y-3">
					{#each itemData.features as feature}
						<li class="flex items-center space-x-3 text-neutral-750">
							<Check className="text-amber-650 flex-shrink-0" />
							<span>{feature}</span>
						</li>
					{/each}
				</ul>
			</div>
		{/if}

		{#each Object.entries(details) as [key, detail]}
			{@const { label, ...itemData } = detail}
			{@const isOpen = !isHidden[key]}

			<div class="bg-white mt-4 shadow-sm">
				<button
					class="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-amber-650 rounded-lg"
					on:click={() => (isHidden[key] = !isHidden[key])}
				>
					<div class="flex justify-between items-center">
						<span class="font-medium text-charcoal">{label}</span>
						<ArrowDown
							className={cx(
								isOpen ? '-rotate-180' : 'rotate-0',
								'transition-transform w-5 h-5 text-neutral-750'
							)}
						/>
					</div>
				</button>

				{#if isOpen}
					<div class="px-6 pb-6">
						<DetailTable {itemData} {gallery} />
					</div>
				{/if}
			</div>
		{/each}
	{/if}
</div>

<FullPageGallery
	{gallery}
	{details}
	onClose={() => (fullPageGallery = false)}
	isVisible={fullPageGallery}
/>

<BottomSheet bind:isOpen={isRequestingForm}>
	<RequestQuoteForm on:submit={() => (isRequestingForm = false)} />
</BottomSheet>
