<script lang="ts">
	import { createRadioGroup, melt } from '@melt-ui/svelte';
	import { cx } from '@shared/utils/cx';
	import { fade, fly } from 'svelte/transition';

	export let defaultValue: string;
	export let options: string[] = [];
	export let selectedValue: string;
	export let classNames: {
		wrapper?: string;
		item?: string;
	} = {
		wrapper: '',
		item: ''
	};

	const {
		elements: { root, item },
		helpers: { isChecked },
		states: { value }
	} = createRadioGroup({
		defaultValue
	});

	$: selectedValue = $value;

	let scrollContainer: HTMLDivElement;

	function scrollToSelected() {
		const selectedElement = scrollContainer?.querySelector('[aria-checked="true"]');
		if (selectedElement) {
			selectedElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
		}
	}

	$: if ($value) {
		setTimeout(scrollToSelected, 100); // Delay to ensure DOM is updated
	}
</script>

<div class={cx('relative', classNames.wrapper)} in:fade={{ duration: 200 }}>
	<div
		class="flex gap-3 overflow-x-auto no-scrollbar py-2 chips scrollbar-hide"
		use:melt={$root}
		bind:this={scrollContainer}
	>
		{#each options as option}
			{@const isOptionSelected = $isChecked(option)}
			<button
				use:melt={$item(option)}
				class={cx(
					'rounded-full py-2 px-4 transition-all text-sm font-medium whitespace-nowrap',
					'focus:outline-none focus:ring-2 focus:ring-amber-650 focus:ring-opacity-50',
					isOptionSelected ? 'bg-amber-650 text-white' : 'bg-gray-250 text-charcoal',
					'hover:bg-amber-60 hover:text-amber-650',
					'active:scale-95',
					classNames.item
				)}
				id={option}
				aria-labelledby="{option}-label"
				in:fly={{ y: 10, duration: 200 }}
			>
				{option}
			</button>
		{/each}
	</div>
	<div
		class="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-white to-transparent pointer-events-none"
	></div>
	<div
		class="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-white to-transparent pointer-events-none"
	></div>
</div>

<style>
	.chips > button:first-child {
		@apply ml-4;
	}

	.chips > button:last-child {
		@apply mr-4;
	}

	.scrollbar-hide {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
	.scrollbar-hide::-webkit-scrollbar {
		display: none;
	}
</style>
