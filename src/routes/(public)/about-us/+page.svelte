<script>
	import { fade, fly, scale } from 'svelte/transition';
	import { onMount } from 'svelte';
	import logo from '@shared/assets/images/logo.png';
	import Footer from '@widgets/Footer.svelte';

	const offerings = [
		{
			title: 'Building Online Brand',
			description:
				'Build a compelling product portfolio and establish an online presence to attract buyers and gain their trust.',
			icon: '🌐'
		},
		{
			title: 'Export Logistics and Certifications',
			description:
				'We handle all hassles and logistics, so you can focus on your products and quality.',
			icon: '🚢'
		},
		{
			title: 'Buyer and Vendor Verifications',
			description: 'Verified buyers ensure secure payments, giving you peace of mind.',
			icon: '✅'
		}
	];

	let isLoaded = false;

	onMount(() => {
		isLoaded = true;
	});
</script>

<div class="bg-sunburstHorizon-offWhite min-h-screen" in:fade={{ duration: 300 }}>
	<header
		class="bg-sunburstHorizon-navy text-sunburstHorizon-offWhite py-16 relative overflow-hidden"
	>
		<div class="max-w-5xl mx-auto px-4 relative z-10">
			<a href="/">
				<img
					src={logo}
					alt="Qivly"
					class="w-24 sm:w-32 mx-auto mb-8"
					in:scale={{ duration: 500 }}
				/>
			</a>
			<h1 class="text-4xl sm:text-5xl font-bold text-center" in:fly={{ y: -20, duration: 500 }}>
				About Qivly
			</h1>
		</div>
		<div class="absolute inset-0 bg-sunburstHorizon-orange opacity-10 transform -skew-y-6"></div>
	</header>

	<main class="max-w-5xl mx-auto px-4 py-12 sm:py-16">
		<section class="mb-16 sm:mb-24" in:fly={{ y: 20, duration: 500, delay: 200 }}>
			<h2
				class="text-3xl sm:text-4xl font-semibold text-sunburstHorizon-navy text-center mb-6 sm:mb-8"
			>
				Our Mission
			</h2>
			<p
				class="text-lg sm:text-xl text-sunburstHorizon-charcoal mb-4 max-w-3xl mx-auto leading-relaxed"
			>
				Empowering SMEs to grow globally through a tech-enabled platform that simplifies exports and
				access to international buyers.
			</p>
		</section>

		<section class="mb-16 sm:mb-24">
			<h2
				class="text-3xl sm:text-4xl font-semibold text-sunburstHorizon-navy text-center mb-8 sm:mb-12"
			>
				Our Offerings to SMEs
			</h2>
			<div class="grid gap-6 sm:gap-8">
				{#each offerings as offering, i}
					{#if isLoaded}
						<div
							class="bg-white rounded-lg shadow-md p-6 sm:p-8 transition-all duration-300 hover:shadow-lg hover:scale-102 transform"
							in:fly={{ y: 50, duration: 500, delay: 400 + i * 100 }}
						>
							<div class="text-3xl sm:text-4xl mb-4">{offering.icon}</div>
							<h3
								class="text-xl sm:text-2xl font-semibold text-sunburstHorizon-orange mb-3 sm:mb-4"
							>
								{offering.title}
							</h3>
							<p class="text-sunburstHorizon-charcoal">{offering.description}</p>
						</div>
					{/if}
				{/each}
			</div>
		</section>
	</main>

	<Footer />
</div>

<style>
	:root {
		--scroll-progress: 0;
	}

	:global(body) {
		background: linear-gradient(
			to right,
			var(--sunburstHorizon-orange-light) calc(var(--scroll-progress) * 100%),
			var(--sunburstHorizon-offWhite) 0
		);
	}
</style>
