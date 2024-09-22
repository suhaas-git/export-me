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
	export let disabled: boolean = false;
	export let readonly: boolean = false;

	let focused = false;

	$: inputClasses = cx(
		'w-full p-2 text-neutral-900 placeholder:text-neutral-250',
		'focus:outline-none focus:ring-2 transition-all duration-300',
		variant === 'danger' ? 'focus:ring-red-500' : 'focus:ring-amber-650',
		disabled && 'bg-gray-250 text-neutral-750 cursor-not-allowed',
		$$slots.rightIcon && 'pl-10'
	);

	$: containerClasses = cx(
		'w-full relative border rounded-lg overflow-hidden text-sm',
		variant === 'danger' ? 'border-red-500' : 'border-gray-300',
		focused && variant !== 'danger' && 'border-amber-650',
		disabled && 'bg-gray-250 border-gray-300',
		className
	);

	function onInput(event: Event) {
		const target = event.target as HTMLInputElement;
		value = target.value;
	}
</script>

<div class={containerClasses}>
	<input
		{value}
		on:input={onInput}
		{placeholder}
		{type}
		{required}
		{id}
		{name}
		{disabled}
		{readonly}
		class={inputClasses}
		on:focus={() => (focused = true)}
		on:blur={() => (focused = false)}
		{...$$restProps}
	/>

	{#if $$slots.rightIcon}
		<div class="absolute top-1/2 -translate-y-1/2 left-3">
			<slot name="rightIcon" />
		</div>
	{/if}
</div>
