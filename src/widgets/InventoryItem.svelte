<script lang="ts">
	import ArrowRight from '@shared/assets/icons/ArrowRight.svelte';
	import Heart from '@shared/assets/icons/Heart.svelte';
	import MediaDot from '@shared/ui/MediaDot.svelte';
	import { cx } from '@shared/utils/cx';

	import emblaCarouselSvelte, { type EmblaCarouselSvelteType } from 'embla-carousel-svelte';
	import type { HTMLMediaAttributes, HTMLVideoAttributes } from 'svelte/elements';
	import { fade } from 'svelte/transition';

	export let heading = '';

	export let subheading = '';

	export let features: {
		label: string;
		value: string;
	}[] = [];

	export let medias: {
		type: 'image' | 'video';
		url: string;
	}[] = [];

	export let videoProps: HTMLMediaAttributes<HTMLVideoElement> = {};

	let loading = true;

	let starred = false;

	let isMouseDown = false;

	let emblaApi: EmblaCarouselSvelteType;

	let currentIndex = 0;

	let timeout: number;

	function logEmblaEvent(emblaApi: EmblaCarouselSvelteType): void {
		//@ts-ignore
		currentIndex = emblaApi.selectedScrollSnap();
	}

	function onInit(event: CustomEvent<EmblaCarouselSvelteType>): void {
		emblaApi = event.detail;
		//@ts-ignore
		emblaApi.on('slidesInView', logEmblaEvent);
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

	$: mediasType = medias.map((media) => media.type);

	$: console.log(currentIndex);
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class={cx(
		'relative overflow-hidden transition-colors rounded',
		isMouseDown ? 'bg-gray-100' : 'bg-white'
	)}
	style="flex: 0 0 100%"
	transition:fade={{
		duration: 100
	}}
	on:mousedown={handleMouseDown}
	on:mouseup={handleMouseUp}
>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="p-2 absolute top-0 right-0 z-30" on:click={() => (starred = !starred)}>
		<div
			class={cx(
				'flex items-center justify-center bg-black/20 rounded-full p-1 cursor-pointer transition-colors',
				starred ? 'text-white' : 'text-transparent'
			)}
		>
			<Heart className={cx('w-6 h-6')} />
		</div>
	</div>

	<div
		class="wrapper flex relative overflow-hidden rounded-xl no-scrollbar"
		use:emblaCarouselSvelte
		on:emblaInit={onInit}
	>
		<div class="flex relative">
			{#if loading}
				<div class="rounded-md aspect-[4/3] animate-pulse min-w-[100vw] bg-gray-200" />
			{/if}

			{#each medias as media}
				<div
					class="relative w-full flex-shrink-0 inner-shadow min-w-0 aspect-[4/3]"
					style="flex: 0 0 100%"
				>
					{#if media.type === 'image'}
						<img
							alt="Item"
							src={media.url}
							on:load={handleLoad}
							class="w-full h-full object-cover"
						/>
					{:else if media.type === 'video'}
						<!-- svelte-ignore a11y-media-has-caption -->
						<video
							src={media.url}
							class="w-full h-full object-cover"
							autoplay
							controls={false}
							loop
							muted
						/>
					{/if}
				</div>
			{/each}
		</div>

		<MediaDot
			className="absolute bottom-2 w-full"
			length={medias.length}
			current={currentIndex}
			maxVisibleIndicators={5}
		/>

		<div class="absolute bottom-0 right-0 p-2 bg-white rounded-tl-[30px] z-30">
			<button
				class="flex items-center justify-center w-12 h-12 text-white bg-amber-650 rounded-full"
			>
				<ArrowRight />
			</button>
		</div>
	</div>

	<p
		class="text-base text-neutral-750 mt-3 font-medium text-nowrap text-ellipsis overflow-hidden"
		title={heading}
	>
		{heading}
	</p>
	<p class="text-sm text-neutral-750 font-normal">{subheading}</p>
	<div class="grid grid-cols-2">
		{#each features as feature}
			<div>
				<span class="text-xs text-neutral-250">{feature.label}: </span>
				<span class="text-xs text-neutral-750 mr-2">{feature.value}</span>
			</div>
		{/each}
	</div>
</div>

<style>
	.inner-shadow::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 40%;
		background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
		pointer-events: none;
	}
</style>
