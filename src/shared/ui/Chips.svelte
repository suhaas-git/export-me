<script lang="ts">
	import { createRadioGroup, melt } from '@melt-ui/svelte';
	import { cx } from '@shared/utils/cx';

	export let defaultValue;

	export let classNames: {
		wrapper?: string;
		item?: string;
	} = {
		wrapper: '',
		item: ''
	};

	export let options: string[] = [];

	export let selectedValue;

	const {
		elements: { root, item },
		helpers: { isChecked },
		states: { value }
	} = createRadioGroup({
		defaultValue
	});

	$: selectedValue = $value;
</script>

<div class={cx('flex gap-3 overflow-auto no-scrollbar chips', classNames.wrapper)} use:melt={$root}>
	{#each options as option}
		{@const isOptionSelected = $isChecked(option)}

		<button
			use:melt={$item(option)}
			class={cx(
				'flex rounded-3xl flex-1 py-2 px-4 transition-all text-sm font-medium text-nowrap',
				isOptionSelected ? 'bg-amber-60' : 'bg-gray-250',
				isOptionSelected ? 'text-amber-650' : 'text-black',
				classNames.item
			)}
			id={option}
			aria-labelledby="{option}-label"
		>
			{option}
		</button>
	{/each}
</div>

<style>
	.chips > button:first-child {
		@apply ml-4;
	}

	.chips > button:last-child {
		@apply mr-4;
	}
</style>
