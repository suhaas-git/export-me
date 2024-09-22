<script lang="ts">
	import { afterUpdate, onDestroy } from 'svelte';
	import ArrowDown from '@shared/assets/icons/ArrowRight.svelte';
	import type { Gallery } from '@shared/types/inventory.js';
	import Tabs from '@shared/ui/Tabs.svelte';
	import Divider from '@shared/ui/Divider.svelte';

	export let onClose = () => {};
	export let details: { [key: string]: any };
	export let isVisible = false;
	export let gallery: Gallery[] = [];

	let value: string;
	let observers: IntersectionObserver[] = [];
	let isInitialized = false;
	let isTabClicked = false;

	$: okMedias = gallery.filter((e) => e.src);

	$: tabs = Object.values(details).map((e) => {
		const name = e.label;
		const values = Object.values(e);
		const firstValidSrcId = values.find((v: any) => v && v.srcId)?.srcId;
		return { title: name, id: firstValidSrcId };
	});

	function slideTransition(node: HTMLElement, { duration = 100 }) {
		return {
			duration,
			css: (t: number) => `transform: translateY(${(1 - t) * 100}%)`
		};
	}

	function onTabChange(newValue: string) {
		isTabClicked = true;
		const element = document.getElementById(newValue);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
		setTimeout(() => {
			isTabClicked = false;
		}, 100);
	}

	function updateTabOnScroll(entries: IntersectionObserverEntry[]) {
		if (isTabClicked) return;
		for (const entry of entries) {
			if (entry.isIntersecting) {
				const tabIndex = tabs.findIndex((e) => e.id === entry.target.id);
				if (tabIndex !== -1) {
					value = entry.target.id;
				}
				break;
			}
		}
	}

	function initObserver() {
		observers.forEach((observer) => observer.disconnect());
		observers = [];

		const options = {
			root: null,
			rootMargin: '0px',
			threshold: 0.5
		};

		okMedias.forEach((image) => {
			const element = document.getElementById(image.id);
			if (element) {
				const observer = new IntersectionObserver(updateTabOnScroll, options);
				observer.observe(element);
				observers.push(observer);
			}
		});
	}

	afterUpdate(() => {
		if (isVisible && okMedias.length && !isInitialized) {
			setTimeout(() => {
				initObserver();
				isInitialized = true;
			}, 0);
		}
	});

	onDestroy(() => {
		observers.forEach((observer) => observer.disconnect());
	});
</script>

{#if isVisible}
	<div class="fixed z-50 inset-0 bg-white w-full h-full overflow-auto" transition:slideTransition>
		<div class="sticky top-0 pb-0 border-b border-black/8 bg-white shadow-sm">
			<button
				class="flex items-center gap-3 p-3 w-full text-left hover:bg-gray-250 transition-colors"
				on:click|stopPropagation={onClose}
			>
				<ArrowDown className="rotate-180" />
				<span class="text-neutral-900 font-medium">Back to details</span>
			</button>

			<Divider className="my-4" />

			<Tabs className="px-3" {tabs} defaultTab={tabs[0]?.id} bind:value onValueChange={onTabChange}>
				<span let:triggerItem slot="tab" class="text-nowrap text-sm text-neutral-750">
					{triggerItem.title}
				</span>
			</Tabs>
		</div>

		<div class="flex flex-col gap-6 p-4">
			{#each okMedias as image, i}
				<div class="flex flex-col gap-2" id={image.id}>
					<div class="flex justify-between mb-2">
						<span class="text-sm text-neutral-750">{image.name}</span>
						<span class="text-sm text-neutral-750">{i + 1}/{okMedias.length}</span>
					</div>
					<img
						src={image.src}
						alt={image.name || `Gallery Image ${i + 1}`}
						class="w-full h-auto rounded-md"
						loading={i === 0 ? 'eager' : 'lazy'}
					/>
				</div>
			{/each}
		</div>
	</div>
{/if}
