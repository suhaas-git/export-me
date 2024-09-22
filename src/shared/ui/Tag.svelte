<script lang="ts">
	import { cx } from '@shared/utils/cx';

	export let variant: 'default' | 'highlight' = 'default';
	export let size: 'sm' | 'md' = 'md';
	export let className = '';
</script>

<div
	class={cx(
		'inline-flex items-center justify-center font-medium rounded-full transition-colors',
		variant === 'default' ? 'bg-amber-60 text-amber-650' : 'bg-amber-650 text-white',
		size === 'sm' ? 'text-xs px-2 py-0.5' : 'text-sm px-3 py-1',
		className
	)}
>
	<slot />
</div>
