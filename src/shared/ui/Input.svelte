<script lang="ts">
	import { cx } from '@shared/utils/cx';

	export let className: string = '';
	export let placeholder = 'Search...';
	export let id: string | undefined = undefined;
	export let name: HTMLInputElement['name'] = undefined;
	export let value = '';
	export let type: HTMLInputElement['type'] = 'text';
	export let required: HTMLInputElement['required'] = false;
	export let variant: 'default' | 'danger' = 'default';

	$: properties = { type, required, id, name };

	$: inputClasses = cx(
		'w-full placeholder:text-gray-300 p-2 text-inherit',
		$$slots.rightIcon && 'pl-10'
	);

	$: containerClasses = cx(
		'w-full relative border rounded-lg overflow-hidden text-sm',
		variant === 'danger' ? 'border-red-500' : 'border-gray-300 text-neutral-900',
		className
	);
</script>

<div class={containerClasses}>
	<input bind:value {placeholder} class={inputClasses} {...properties} />

	{#if $$slots.rightIcon}
		<div class="absolute top-2/4 -translate-y-2/4 left-4">
			<slot name="rightIcon" />
		</div>
	{/if}
</div>
