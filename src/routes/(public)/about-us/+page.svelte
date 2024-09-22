<script>
	import { fade, fly } from 'svelte/transition';
	import logo from '@shared/assets/images/logo.png';

	const offerings = [
		{
			title: 'Building Online Brand',
			description:
				'Build a compelling product portfolio and establish an online presence to attract buyers and gain their trust.'
		},
		{
			title: 'Export Logistics and Certifications',
			description:
				'We handle all hassles and logistics, so you can focus on your products and quality.'
		},
		{
			title: 'Buyer and Vendor Verifications',
			description: 'Verified buyers ensure secure payments, giving you peace of mind.'
		}
	];
</script>

<div class="bg-white min-h-screen" transition:fade={{ duration: 300 }}>
	<header class="bg-gray-50 py-8">
		<div class="max-w-5xl mx-auto px-4">
			<img src={logo} alt="Qivly" class="w-24 mx-auto mb-6" />
			<h1
				class="text-4xl font-bold text-center text-gray-800"
				transition:fly={{ y: -20, duration: 500 }}
			>
				About Qivly
			</h1>
		</div>
	</header>

	<main class="max-w-5xl mx-auto px-4 py-12">
		<section class="mb-16" transition:fly={{ y: 20, duration: 500, delay: 200 }}>
			<h2 class="text-3xl font-semibold text-gray-800 text-center mb-8">Our Mission</h2>
			<p class="text-lg text-gray-700 mb-4 max-w-3xl mx-auto">
				Empowering SMEs to grow globally through a tech-enabled platform that simplifies exports and
				access to international buyers.
			</p>
		</section>

		<section class="mb-16" transition:fly={{ y: 20, duration: 500, delay: 400 }}>
			<h2 class="text-3xl font-semibold text-gray-800 text-center mb-8">Our Offerings to SMEs</h2>
			<div class="grid md:grid-cols-3 gap-8">
				{#each offerings as offering}
					<div class="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg">
						<h3 class="text-xl font-semibold text-blue-600 mb-4">{offering.title}</h3>
						<p class="text-gray-600">{offering.description}</p>
					</div>
				{/each}
			</div>
		</section>
	</main>

	<footer class="bg-gray-50 py-8 mt-12">
		<div class="max-w-5xl mx-auto px-4 text-center text-gray-600">
			<p>© 2024 Qivly. All rights reserved.</p>
		</div>
	</footer>
</div>
