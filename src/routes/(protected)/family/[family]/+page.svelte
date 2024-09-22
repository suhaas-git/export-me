<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import type { Family, FamilyDetail } from '@shared/types/family';
	import Search from '@widgets/Search.svelte';
	import ArrowRight from '@shared/assets/icons/ArrowRight.svelte';
	import { getFamily } from '@entities/family';
	import Divider from '@shared/ui/Divider.svelte';

	let familyName = $page.params.family;
	let searchQuery: string = '';
	let family: Family[] = [];
	let familyDetail: FamilyDetail;
	let isLoaded = false;

	$: filteredFamily = family.filter((e) =>
		e.name.toLowerCase().includes(searchQuery.toLowerCase())
	);

	async function fetchFamilies() {
		const f = await getFamily(familyName);
		family = f.family;
		familyDetail = f.detail;
		isLoaded = true;
	}

	onMount(() => {
		fetchFamilies();
	});
</script>

<div class="min-h-screen bg-offWhite" in:fade={{ duration: 300 }}>
	<div class="sticky top-0 z-[1000] bg-white flex flex-col gap-4 pt-4 pb-4 shadow-md">
		<div class="flex items-center pr-4">
			<button
				class="-rotate-180 px-4 text-navy hover:text-amber-650 transition-colors"
				on:click={() => goto('/')}
			>
				<ArrowRight />
			</button>
			<Search bind:value={searchQuery} />
		</div>
	</div>

	{#if isLoaded}
		<div class="px-4 sm:px-6 pt-6" in:fly={{ y: 20, duration: 300 }}>
			<h1 class="text-2xl sm:text-3xl text-charcoal font-bold uppercase">
				{familyDetail?.name ?? ''}
			</h1>

			<Divider className="my-4 sm:my-6 w-full" />

			<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
				{#each filteredFamily as member, i}
					<button
						on:click={() => goto(member.href)}
						class="bg-white rounded-lg shadow-md p-4 flex flex-col gap-2 items-center justify-between hover:bg-amber-60 transition-all duration-300 ease-in-out transform hover:scale-105"
						in:fly={{ y: 20, duration: 300, delay: 100 + i * 50 }}
					>
						<img src={member.src} class="object-contain h-24 sm:h-32" alt={member.name} />
						<span class="text-sm sm:text-base font-normal text-neutral-750 text-center mt-2">
							{member.name}
						</span>
					</button>
				{/each}
			</div>
		</div>
	{:else}
		<div class="flex justify-center items-center h-64">
			<p class="text-charcoal">Loading...</p>
		</div>
	{/if}
</div>
