<script lang="ts">
	import { cx } from '@shared/utils/cx';

	export let length = 0;
	export let current = 0;
	export let maxVisibleIndicators = 4;
	export let className = '';

	$: if (maxVisibleIndicators < 3) maxVisibleIndicators = 3;

	$: min = Math.max(
		0,
		Math.min(current - Math.floor(maxVisibleIndicators / 2), length - maxVisibleIndicators)
	);
	$: max = Math.min(length - 1, min + maxVisibleIndicators - 1);

	function getIndicatorClass(index: number, current: number): string {
		const baseClasses =
			'rounded-full transition-all duration-500 ease-out overflow-hidden indent-[-9999px]';
		const isActive = index === current;
		const isEdge = (index === min && index > 0) || (index === max && index < length - 1);
		const isNearEdge =
			(index === min + 1 && index > 1) || (index === max - 1 && index < length - 2);
		const isVisible = index >= min && index <= max;

		if (!isVisible) return cx(baseClasses, 'w-0 h-0');

		const size =
			isActive || (!isEdge && !isNearEdge)
				? 'w-[8px] h-[8px]'
				: isNearEdge
					? 'w-[6px] h-[6px]'
					: 'w-1 h-1';

		const color = isActive ? 'bg-gray-200' : 'bg-gray-200/20';
		const margin = isEdge ? 'mx-[6px]' : isNearEdge ? 'mx-1' : 'mx-[3px]';

		return cx(baseClasses, size, color, margin);
	}
</script>

<div class={cx('flex justify-center items-center', className)}>
	{#each Array(length) as _, i}
		<span
			class={getIndicatorClass(i, current)}
			data-id={i}
			class:ml-5={i === 0}
			class:mr-5={i === length - 1}
		/>
	{/each}
</div>
