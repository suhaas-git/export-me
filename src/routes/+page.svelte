<script>
	import { fade, fly, scale } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import logo from '@shared/assets/images/logo.png';
	import sheetMetal from '@shared/assets/images/sheet-metal.png';
	import electricals from '@shared/assets/images/electricals.png';
	import harness from '@shared/assets/images/harness.png';
	import heavyMachine from '@shared/assets/images/heavy-machine.png';
	import SearchIcon from '@shared/assets/icons/Search.svelte';
	import Footer from '@widgets/Footer.svelte';

	let searchQuery = '';
	let isLoaded = false;

	function handleSearch() {
		goto(`/search?q=${encodeURIComponent(searchQuery)}`);
	}

	const categories = [
		{ label: 'Electricals', href: '/family/cables', img: electricals },
		{ label: 'Heavy Machines', href: '/heavy-machines', img: heavyMachine },
		{ label: 'Wire Harness', href: '/wire-harness', img: harness },
		{ label: 'Sheet Metal', href: '/sheet-metal', img: sheetMetal }
	];

	onMount(() => {
		isLoaded = true;
	});
</script>

<div class="min-h-screen flex flex-col bg-offWhite" in:fade={{ duration: 300 }}>
	<main class="flex-grow flex flex-col items-center justify-center px-4 relative py-8 sm:py-16">
		<div
			class="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-amber-60 to-offWhite opacity-20"
		></div>
		<div class="w-full max-w-2xl z-10">
			<img
				src={logo}
				alt="Qivly"
				class="w-32 sm:w-40 mx-auto mb-8 sm:mb-12 drop-shadow-md"
				in:scale={{ duration: 500 }}
			/>

			<form
				on:submit|preventDefault={handleSearch}
				class="relative w-full mb-8 sm:mb-12 flex flex-col gap-2"
			>
				<label for="search-input" class="sr-only">Search for imports from India</label>
				<input
					id="search-input"
					type="text"
					bind:value={searchQuery}
					placeholder="Import from India..."
					class="w-full py-4 px-6 rounded-full bg-white text-base sm:text-lg text-charcoal placeholder-neutral-250 border-2 border-navy focus:outline-none focus:ring-2 focus:ring-amber-650 focus:border-transparent shadow-md transition-all duration-300 ease-in-out"
				/>
				<button
					type="submit"
					class="absolute right-2 top-2/4 -translate-y-2/4 p-2 sm:p-3 rounded-full bg-amber-650 text-white hover:bg-amber-450 focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2 transition-all duration-300 ease-in-out"
					aria-label="Search"
				>
					<SearchIcon className="w-6 h-6 sm:w-7 sm:h-7" />
				</button>
			</form>
		</div>
	</main>

	{#if isLoaded}
		<div class="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-16 px-4 sm:px-8">
			{#each categories as category, i}
				<a
					href={category.href}
					class="flex flex-col items-center group"
					in:fly={{ y: 20, duration: 300, delay: 200 + i * 100 }}
				>
					<div
						class="flex flex-col gap-2 p-4 w-full aspect-square bg-white shadow-md items-center justify-center rounded-lg group-hover:shadow-lg group-hover:scale-105 transition-all duration-300 ease-in-out"
					>
						<img
							src={category.img}
							alt={category.label}
							class="h-12 sm:h-16 object-contain"
							loading="lazy"
						/>
						<span
							class="text-sm sm:text-base text-center text-charcoal group-hover:text-amber-650 transition-colors duration-300"
						>
							{category.label}
						</span>
					</div>
				</a>
			{/each}
		</div>
	{/if}

	<Footer />
</div>
