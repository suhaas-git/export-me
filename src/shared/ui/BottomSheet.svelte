<script>
	import { linear } from 'svelte/easing';
	import { fade } from 'svelte/transition';
	import { createEventDispatcher, onMount } from 'svelte';

	export let isOpen = false;

	export let height = 'h-1/2'; // Tailwind height class

	const dispatch = createEventDispatcher();

	function slideTransition(node, { duration = 250 }) {
		return {
			duration,
			easing: linear,
			css: (t) => `transform: translateY(${(1 - t) * 100}%)`
		};
	}

	function close(e) {
		dispatch('close', e);
		isOpen = false;
	}
</script>

{#if isOpen}
	<button
		transition:fade
		class="fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-md"
		on:click={close}
	/>
	<div
		class="fixed left-0 right-0 bottom-0 bg-white rounded-t-[32px] z-50 p-5 shadow-md"
		class:pointer-events-none={!isOpen}
		transition:slideTransition
	>
		<div class="w-16 h-1 bg-gray-300 rounded-full mx-auto mb-3"></div>
		<slot></slot>
	</div>
{/if}
