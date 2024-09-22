<script lang="ts">
	import { slide } from 'svelte/transition';
	import { cx } from '@shared/utils/cx';

	export let itemData: Record<string, { label: string; value: string }> = {};

	$: values = Object.entries(itemData || {});
</script>

<div
	class="w-full max-w-lg mx-auto overflow-hidden mt-4"
	transition:slide={{ delay: 0, duration: 200, axis: 'y' }}
>
	<div class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
		{#each values as [key, data]}
			<div class="border-b border-gray-250 pb-2">
				<p class="text-xs text-neutral-250 mb-1">{data.label}</p>
				<p class="text-sm text-charcoal">{data.value ?? '-'}</p>
			</div>
		{/each}
	</div>
</div>

<style>
	@media (min-width: 640px) {
		.grid > div:nth-last-child(-n + 2):nth-child(odd):last-child {
			grid-column: span 2;
		}
	}
</style>
