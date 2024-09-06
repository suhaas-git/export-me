<script lang="ts">
	import { cx } from '@shared/utils/cx';

	export let currentIndex: number;

	export let totalMedias: number;

	export let maxDots = 4;

	export let className = '';

	export let medias = [] as string[];

	$: visibleDots = Math.min(maxDots, totalMedias);

	$: startIndex = Math.min(Math.max(0, currentIndex - 1), totalMedias - visibleDots);

	$: visibleIndices = Array.from({ length: visibleDots }, (_, i) => startIndex + i);
</script>

<div class={cx('flex justify-center gap-2 absolute bottom-4 z-10 w-full', className)}>
	{#each visibleIndices as _, index}
		<div
			class={cx(
				'w-[6px] h-[6px] rounded-full transition-all duration-300 ease-in-ou',
				index === 0 ? 'bg-white' : 'bg-white/60',
				index === 2 && 'scale-90',
				index === 3 && 'scale-75'
			)}
		/>
	{/each}
</div>
