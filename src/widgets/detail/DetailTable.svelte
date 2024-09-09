<script lang="ts">
	import { slide } from 'svelte/transition';

	export let itemData = {};

	$: values = Object.values(itemData || {});
</script>

<div
	class="max-w-md mx-auto overflow-hidden mt-4 grid grid-cols-2 gap-x-3 gap-y-4 pt-2"
	transition:slide={{ delay: 0, duration: 200, axis: 'y' }}
>
	{#each values as value}
		<div>
			<p class="text-xs text-neutral-400 mb-1">{value.label}</p>
			<p class="text-sm text-neutral-500">{value.value}</p>
		</div>
	{/each}
</div>
