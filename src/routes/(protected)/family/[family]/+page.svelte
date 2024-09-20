<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import type { Family, FamilyDetail } from '@shared/types/family';
	import Search from '@widgets/Search.svelte';
	import ArrowRight from '@shared/assets/icons/ArrowRight.svelte';
	import { getFamily } from '@entities/family';
	import Divider from '@shared/ui/Divider.svelte';

	let familyName = $page.params.family;

	let searchQuery: string = '';
	let family: Family[] = [];
	let familyDetail: FamilyDetail;

	$: filteredFamily = family.filter((e) =>
		e.name.toLowerCase().includes(searchQuery.toLowerCase())
	);

	$: fetchFamilies();

	async function fetchFamilies() {
		const f = await getFamily(familyName);

		family = f.family;
		familyDetail = f.detail;
	}
</script>

<div class="" transition:fade={{ duration: 100 }}>
	<div
		class="sticky top-0 z-[1000] bg-white flex flex-col gap-4 pt-4 pb-4"
		style="box-shadow: rgb(0 0 0/16%) 0 0 6px"
	>
		<div class="flex items-center pr-4">
			<button class="-rotate-180 px-4" on:click={() => goto('/')}>
				<ArrowRight />
			</button>
			<Search bind:value={searchQuery} />
		</div>
	</div>

	<p class="px-5 pt-5 text-2xl text-gray-600 font-bold uppercase">
		{familyDetail?.name ?? ''}
	</p>

	<Divider className="my-5 mx-5 w-[unset]" />

	<div class="grid grid-cols-2 gap-6 px-5">
		{#each filteredFamily as member}
			<button
				on:click={() => goto(member.href)}
				class="bg-white rounded-lg shadow-md p-4 flex flex-col gap-2 items-center justify-between hover:bg-amber-50 transition-colors"
			>
				<img src={member.src} class="object-contain" alt="member" />
				<span class="text-sm font-normal text-gray-400 whitespace-pre-line">
					{member.name}
				</span>
			</button>
		{/each}
	</div>
</div>
