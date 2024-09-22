<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import scaleElementOnClick from '@shared/actions/scaleElementOnClick';
	import { cx } from '@shared/utils/cx';

	export let onClick: () => Promise<any> | void = () => {};
	export let isLoading = false;
	export let variant: 'primary' | 'secondary' = 'primary';
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let fullWidth = true;

	const dispatch = createEventDispatcher();
	let buttonContent: HTMLElement;

	async function handleClick() {
		dispatch('click');
		const clickPromise = onClick();

		if (clickPromise instanceof Promise) {
			isLoading = true;
			try {
				await clickPromise;
			} finally {
				isLoading = false;
			}
		}
	}

	$: buttonClasses = cx(
		'rounded-md font-bold flex items-center justify-center transition-colors duration-300',
		variant === 'primary'
			? 'bg-amber-650 text-white hover:bg-amber-450'
			: 'bg-gray-250 text-charcoal hover:bg-amber-60',
		size === 'sm'
			? 'px-2 py-1 text-xs'
			: size === 'md'
				? 'px-3 py-2 text-sm'
				: 'px-4 py-3 text-base',
		fullWidth ? 'w-full' : 'w-auto',
		isLoading ? 'opacity-75 cursor-not-allowed' : 'cursor-pointer',
		$$props.class
	);
</script>

<button
	use:scaleElementOnClick
	type="submit"
	class={buttonClasses}
	on:click={handleClick}
	disabled={isLoading}
	aria-busy={isLoading}
	{...$$restProps}
>
	{#if isLoading}
		<div
			class="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin mr-2"
			aria-hidden="true"
		></div>
		<span class="sr-only">Loading</span>
	{:else}
		<span bind:this={buttonContent}>
			<slot />
		</span>
	{/if}
</button>
