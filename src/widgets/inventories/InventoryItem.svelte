<script lang="ts">
	import ArrowRight from '@shared/assets/icons/ArrowRight.svelte';
	import Heart from '@shared/assets/icons/Heart.svelte';
	import MediaDot from '@shared/ui/MediaDot.svelte';
	import { cx } from '@shared/utils/cx';

	import emblaCarouselSvelte, { type EmblaCarouselSvelteType } from 'embla-carousel-svelte';
	import type { HTMLMediaAttributes } from 'svelte/elements';
	import { fade } from 'svelte/transition';
	import type { Gallery } from '@shared/types/inventory';

	export let heading = '';
	export let subheading = '';
	export let features: { label: string; value: string }[] = [];
	export let medias: Gallery[] = [];
	export let videoProps: HTMLMediaAttributes<HTMLVideoElement> = {};

	let loading = true;
	let starred = false;
	let isMouseDown = false;
	let emblaApi: EmblaCarouselSvelteType;
	let currentIndex = 0;
	let timeout: number;

	function logEmblaEvent(emblaApi: EmblaCarouselSvelteType): void {
		currentIndex = emblaApi.selectedScrollSnap();
	}

	function onInit(event: CustomEvent<EmblaCarouselSvelteType>): void {
		emblaApi = event.detail;
		emblaApi.on('select', logEmblaEvent);
	}

	function handleLoad(): void {
		clearTimeout(timeout);
		loading = false;
	}

	function handleMouseDown(): void {
		isMouseDown = true;
	}

	function handleMouseUp(): void {
		timeout = setTimeout(() => {
			isMouseDown = false;
		}, 200);
	}

	$: mediasOk = medias.filter((media) => media.src);
</script>

<button
	class={cx(
		'relative transition-colors rounded-xl shadow-md text-left w-full',
		isMouseDown ? 'bg-amber-60' : 'bg-white'
	)}
	transition:fade={{ duration: 100 }}
	on:mousedown={handleMouseDown}
	on:mouseup={handleMouseUp}
	on:click
>
	<button
		tabindex="0"
		class="p-2 absolute top-0 right-0 z-30"
		on:click|stopPropagation={() => (starred = !starred)}
	>
		<span
			class={cx(
				'flex items-center justify-center bg-black/20 rounded-full p-1 cursor-pointer transition-colors',
				starred ? 'text-amber-650' : 'text-transparent'
			)}
		>
			<Heart className="w-6 h-6" />
		</span>
	</button>

	<div
		class="wrapper flex relative overflow-hidden rounded-t-xl no-scrollbar"
		use:emblaCarouselSvelte
		on:emblaInit={onInit}
	>
		<div class="flex relative">
			{#if loading}
				<div class="rounded-t-xl aspect-[4/3] animate-pulse w-full bg-gray-250" />
			{/if}

			{#each mediasOk as media}
				<div
					class="relative w-full flex-shrink-0 inner-shadow min-w-0 aspect-[4/3]"
					style="flex: 0 0 100%"
				>
					{#if media.type === 'image'}
						<img
							alt={heading}
							src={media.src}
							on:load={handleLoad}
							class="w-full h-full object-contain"
						/>
					{:else if media.type === 'video'}
						<!-- svelte-ignore a11y-media-has-caption -->
						<video
							src={media.src}
							class="w-full h-full object-cover"
							autoplay
							controls={false}
							loop
							muted
							{...videoProps}
						/>
					{/if}
				</div>
			{/each}
		</div>

		<MediaDot
			className="absolute bottom-2 w-full"
			length={mediasOk.length}
			current={currentIndex}
			maxVisibleIndicators={5}
		/>

		<div class="absolute bottom-0 right-0 p-2 bg-white rounded-tl-[30px] z-30">
			<button
				class="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 text-white bg-amber-650 rounded-full hover:bg-amber-450 transition-colors"
			>
				<ArrowRight />
			</button>
		</div>
	</div>

	<div class="py-3 px-4">
		<p
			class="text-base sm:text-lg text-charcoal font-medium text-ellipsis overflow-hidden"
			title={heading}
		>
			{heading}
		</p>
		<p class="text-sm sm:text-base text-neutral-750 font-normal mt-1">{subheading}</p>
		<div class="flex flex-wrap gap-2 sm:gap-4 mt-3">
			{#each features as feature}
				<span class="inline text-xs sm:text-sm">
					<span class="text-neutral-250">{feature.label}: </span>
					<span class="text-charcoal">{feature.value}</span>
				</span>
			{/each}
		</div>
	</div>
</button>

<style>
	.inner-shadow::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 40%;
		background: linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0));
		pointer-events: none;
	}
</style>
