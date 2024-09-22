<script lang="ts">
	import { onMount } from 'svelte';
	import emblaCarouselSvelte, { type EmblaCarouselSvelteType } from 'embla-carousel-svelte';
	import type { Gallery } from '@shared/types/inventory.js';
	import { cx } from '@shared/utils/cx';

	export let className = '';
	export let gallery: Gallery[] = [];
	export let showControls = true;

	let currentIndex = 0;
	let emblaApi: EmblaCarouselSvelteType;
	let carouselRef: HTMLDivElement;

	const updateIndex = () => {
		if (emblaApi) currentIndex = emblaApi.selectedScrollSnap();
	};

	const onInit = (event: CustomEvent<EmblaCarouselSvelteType>) => {
		emblaApi = event.detail;
		emblaApi.on('select', updateIndex);
	};

	const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
	const scrollNext = () => emblaApi && emblaApi.scrollNext();

	const handleKeydown = (e: KeyboardEvent) => {
		if (e.key === 'ArrowLeft') scrollPrev();
		if (e.key === 'ArrowRight') scrollNext();
	};

	onMount(() => {
		carouselRef && carouselRef.focus();
	});

	$: validMedias = gallery.filter((media) => media.src);
</script>

<div
	class={cx('overflow-hidden relative rounded-lg', className)}
	use:emblaCarouselSvelte={{ loop: true }}
	on:emblaInit={onInit}
	bind:this={carouselRef}
	tabindex="0"
	role="region"
	aria-roledescription="carousel"
	on:keydown={handleKeydown}
>
	<div class="flex relative">
		{#each validMedias as media, i}
			<div
				class="relative w-full flex-shrink-0 min-w-0"
				role="group"
				aria-roledescription="slide"
				on:click
				aria-label={`${i + 1} of ${validMedias.length}`}
			>
				{#if media.type === 'image'}
					<img
						alt={media.alt || `Gallery item ${i + 1}`}
						src={media.src}
						class="w-full h-full object-cover"
						loading={i === 0 ? 'eager' : 'lazy'}
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
						playsinline
					/>
				{/if}
			</div>
		{/each}
	</div>

	{#if showControls}
		<button
			class="absolute top-1/2 left-2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition-colors"
			on:click={scrollPrev}
			aria-label="Previous slide"
		>
			❮
		</button>
		<button
			class="absolute top-1/2 right-2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition-colors"
			on:click={scrollNext}
			aria-label="Next slide"
		>
			❯
		</button>
	{/if}

	<div
		class="bg-black/40 rounded-md px-3 py-1 absolute bottom-5 right-2 text-white text-sm font-semibold"
	>
		<span>{currentIndex + 1} / {validMedias.length}</span>
	</div>
</div>
