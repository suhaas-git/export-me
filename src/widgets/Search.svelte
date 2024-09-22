<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	import SearchIcon from '@shared/assets/icons/Search.svelte';
	import { cx } from '@shared/utils/cx';

	export let className = '';
	export let value = '';
	export let placeholder = 'Search...';
	export let autofocus = false;

	let focused = false;
	let inputElement: HTMLInputElement;

	const dispatch = createEventDispatcher();

	function handleFocus() {
		focused = true;
	}

	function handleBlur() {
		focused = false;
	}

	function handleSubmit() {
		dispatch('search', value);
	}

	function handleClear() {
		value = '';
		inputElement.focus();
	}

	$: if (autofocus && inputElement) {
		inputElement.focus();
	}
</script>

<form on:submit|preventDefault={handleSubmit} class={cx('relative w-full', className)}>
	<div
		class={cx(
			'flex items-center bg-gray-250 rounded-full overflow-hidden',
			'transition-all duration-300 ease-in-out',
			focused ? 'ring-2 ring-amber-650 bg-white' : 'hover:bg-amber-60'
		)}
	>
		<input
			bind:value
			{placeholder}
			on:focus={handleFocus}
			on:blur={handleBlur}
			bind:this={inputElement}
			class={cx(
				'w-full py-2 pl-4 pr-10 bg-transparent',
				'text-sm text-neutral-750 placeholder-neutral-250',
				'focus:outline-none'
			)}
		/>

		<button
			type="submit"
			class={cx(
				'absolute right-0 p-2',
				'text-neutral-750 hover:text-amber-650 transition-colors duration-300'
			)}
		>
			<SearchIcon className="w-5 h-5" />
		</button>
	</div>

	{#if focused && value}
		<button
			type="button"
			class="absolute right-10 top-1/2 -translate-y-1/2 text-neutral-250 hover:text-amber-650 transition-colors duration-300"
			on:click={handleClear}
			transition:fade={{ duration: 150 }}
		>
			<svg
				class="w-4 h-4"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				></path>
			</svg>
		</button>
	{/if}

	{#if focused && value}
		<div
			class="absolute left-0 right-0 top-full mt-2 bg-white rounded-lg shadow-lg overflow-hidden z-10"
			transition:fly={{ y: -10, duration: 200 }}
		>
			<!-- Placeholder for search suggestions -->
			<div class="p-2 text-sm text-neutral-750">
				Suggestions for "{value}"...
			</div>
		</div>
	{/if}
</form>
