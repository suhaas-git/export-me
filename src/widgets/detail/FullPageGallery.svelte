<script lang="ts">
	import ArrowDown from '@shared/assets/icons/ArrowDown.svelte';
	import type { Gallery, GeneralAppearance } from '@shared/types/inventory.js';
	import { slide } from 'svelte/transition';

	export let onClose = () => {};

	export let gallery: Gallery[] = [];

	export let isVisible = false;

	$: okMedias = gallery.filter((e) => e.src);

	function slideTransition(node, { duration = 100 }) {
		return {
			duration,
			css: (t) => `transform: translateY(${(1 - t) * 100}%)`
		};
	}
</script>

{#if isVisible}
	<div
		class="fixed z-50 top-0 bottom-0 right-0 left-0 bg-white w-full h-full overflow-auto"
		transition:slideTransition
	>
		<div
			class="sticky top-0 flex items-center gap-3 p-3 border-b border-black/8 bg-white shadow-sm"
			on:click={onClose}
		>
			<ArrowDown className="rotate-90" />
			<span class="text-neutral-900 font-medium">Back to details</span>
			<div></div>
		</div>

		<div class="flex flex-col gap-6 p-4">
			{#each okMedias as image, i}
				<div class="flex flex-col gap-2">
					<div class="flex justify-between mb-2">
						<span class="text-sm text-neutral-750">{image.name}</span>
						<span class="text-sm text-neutral-750">{i + 1}/{okMedias.length}</span>
					</div>
					<img src={image.src} alt="Gallery Image" class="w-full h-auto rounded-md" />
				</div>
			{/each}
		</div>
	</div>
{/if}
