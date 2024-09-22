<script>
	import logo from '@shared/assets/images/logo.png';
	import sheetMetal from '@shared/assets/images/sheet-metal.png';
	import electricals from '@shared/assets/images/electricals.png';
	import harness from '@shared/assets/images/harness.png';
	import heavyMachine from '@shared/assets/images/heavy-machine.png';
	import { fade, fly } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import SearchIcon from '@shared/assets/icons/Search.svelte';

	let searchQuery = '';

	function handleSearch() {
		goto(`/search?q=${encodeURIComponent(searchQuery)}`);
	}

	const categories = [
		{ label: 'Electricals', href: '/family/cables', img: electricals },
		{ label: 'Heavy Machines', href: '/heavy-machines', img: heavyMachine },
		{ label: 'Wire Harness', href: '/wire-harness', img: harness },
		{ label: 'Sheet Metal', href: '/sheet-metal', img: sheetMetal }
	];
</script>

<div class="min-h-screen flex flex-col bg-white" transition:fade={{ duration: 300 }}>
	<main class="flex-grow flex flex-col items-center justify-center px-4 relative">
		<div class="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-gray-50 to-white"></div>
		<div class="w-full max-w-2xl z-10">
			<img
				src={logo}
				alt="Qivly"
				class="w-[150px] mx-auto mb-12 mt-12 drop-shadow-md"
				transition:fly={{ y: -20, duration: 500 }}
			/>

			<form
				on:submit|preventDefault={handleSearch}
				class="relative w-full mb-8 flex flex-col gap-2 bg-red-900 rounded-full"
			>
				<input
					type="text"
					bind:value={searchQuery}
					placeholder="Search for products..."
					class="w-full py-4 px-4 rounded-full bg-white text-base text-gray-800 placeholder-gray-400 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent shadow-md transition-all duration-300 ease-in-out"
				/>

				<button
					type="submit"
					class="absolute right-2 top-2/4 -translate-y-2/4 p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-300 ease-in-out"
				>
					<SearchIcon className="w-7 h-7" />
				</button>
			</form>
		</div>
	</main>

	<footer class="py-12 bg-gray-50">
		<div class="max-w-4xl mx-auto px-4">
			<div class="grid grid-cols-2 gap-2 mb-8">
				{#each categories as category}
					<a href={category.href} class="flex flex-col items-center group">
						<div
							class="w-full bg-white shadow-md flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:scale-105 transition-all duration-300 ease-in-out p-2 rounded-md"
						>
							<img src={category.img} alt={category.label} class="w-12 h-12 object-cover" />
						</div>
						<span
							class="text-sm text-gray-700 group-hover:text-blue-600 transition-colors duration-300"
						>
							{category.label}
						</span>
					</a>
				{/each}
			</div>
			<div class="w-full h-px bg-gray-200 mb-8"></div>
			<div class="flex justify-center items-center mb-4">
				<a
					href="/about-us"
					class="text-sm text-blue-600 hover:text-blue-800 transition-colors duration-300"
					>About Us</a
				>
			</div>
			<p class="text-center text-sm text-gray-600">© 2024 Qivly. All rights reserved.</p>
		</div>
	</footer>
</div>
