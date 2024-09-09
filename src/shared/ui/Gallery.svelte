<script lang="ts">
	import emblaCarouselSvelte, { type EmblaCarouselSvelteType } from 'embla-carousel-svelte';
	import type { Gallery } from '@shared/types/inventory.js';
	import { cx } from '@shared/utils/cx';

	export let className = '';
	export let gallery: Gallery[] = [];

	let currentIndex = 0;
	let emblaApi: EmblaCarouselSvelteType;

	function logEmblaEvent(emblaApi: EmblaCarouselSvelteType): void {
		//@ts-ignore
		currentIndex = emblaApi.selectedScrollSnap();
	}

	function onInit(event: CustomEvent<EmblaCarouselSvelteType>): void {
		emblaApi = event.detail;
		//@ts-ignore
		emblaApi.on('slidesInView', logEmblaEvent);
	}

	$: okMedias = gallery.filter((media) => media.src);
</script>

<div
	class={cx('overflow-hidden relative', className)}
	use:emblaCarouselSvelte
	on:emblaInit={onInit}
>
	<div class="flex relative">
		{#each okMedias as media, i}
			<div class="relative w-full flex-shrink-0 inner-shadow min-w-0" on:click>
				{#if media.type === 'image'}
					<img alt="Item" src={media.src} class="w-full h-full object-cover" />
				{:else if media.type === 'video'}
					<!-- svelte-ignore a11y-media-has-caption -->
					<video
						src={media.src}
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

	<div
		class="bg-black/40 rounded-md p-2 absolute bottom-2 right-2 text-white text-sm font-semibold font-mono"
	>
		<span>{currentIndex + 1} / {okMedias.length}</span>
	</div>
</div>
