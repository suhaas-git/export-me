<script lang="ts">
	import { createTabs, melt } from '@melt-ui/svelte';
	import { cubicInOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';
	import { cx } from '@shared/utils/cx';

	export let className = '';
	export let tabs = [];
	export let defaultTab = 'tab-1';
	export let onValueChange = (value: string) => {};

	const {
		elements: { list, trigger },
		states: { value: valueStore }
	} = createTabs({
		defaultValue: defaultTab,
		onValueChange: (value) => {
			onValueChange(value.next);
			return value.next;
		}
	});

	const [send, receive] = crossfade({
		duration: 250,
		easing: cubicInOut
	});

	export let currentValue = valueStore;

	$: $currentValue && scrollToTab($currentValue);

	function scrollToTab(tabId: string) {
		const element = document.getElementById(tabId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

<div
	use:melt={$list}
	class={cx(
		'flex shrink-0 overflow-x-auto gap-10 no-scrollbar data-[orientation=vertical]:flex-col data-[orientation=vertical]:border-r',
		className
	)}
>
	{#each tabs as triggerItem}
		<div class={cx('relative text-center flex max-w-full')} use:melt={$trigger(triggerItem.id)}>
			<div class="mb-4" id="tab-{triggerItem.id}">
				<slot name="tab" {triggerItem} />
			</div>

			{#if $valueStore === triggerItem.id}
				<div
					in:send={{ key: 'trigger' }}
					out:receive={{ key: 'trigger' }}
					class="absolute bottom-0 left-1/2 h-1 -translate-x-1/2 rounded-full bg-orange-500 z-30 w-[90px] mt-4"
				/>
			{/if}
		</div>
	{/each}
</div>
