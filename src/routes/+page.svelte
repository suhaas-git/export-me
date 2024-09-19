<script>
	import logo from '@shared/assets/images/logo.png';
	import sheetMetal from '@shared/assets/images/sheet-metal.png';
	import electricals from '@shared/assets/images/electricals.png';
	import harness from '@shared/assets/images/harness.png';
	import heavyMachine from '@shared/assets/images/heavy-machine.png';

	import { goto } from '$app/navigation';

	const categories = [
		{ label: 'Electricals', href: '/electricals', img: electricals },
		{ label: 'Heavy Machines', href: '/heavy-machines', img: heavyMachine },
		{ label: 'Wire Harness', href: '/wire-harness', img: harness },
		{ label: 'Sheet Metal', href: '/sheet-metal', img: sheetMetal }
	];

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

<div class="bg-[#f5f5f5] min-h-screen py-6 px-4 no-scrollbar">
	<div class="max-w-4xl mx-auto mt-10">
		<header class="text-center mb-16">
			<img src={logo} alt="Qivly" class="w-40 mx-auto mb-4" />
			<p class="text-4xl text-amber-650 font-bold capitalize mb-4">Seamlessly export</p>

			<p class="text-xl font-medium text-amber-600">
				Go global instantly - sell your products worldwide with just a click.
			</p>
		</header>

		<section>
			<p class="text-3xl font-semibold text-gray-800 text-center mb-8">Our categories</p>
			<div class="grid grid-cols-2 gap-6">
				{#each categories as category}
					<div
						on:click={() => goto(category.href)}
						class="bg-white rounded-lg shadow-md p-4 flex flex-col gap-1 items-center justify-between hover:bg-amber-50 transition-colors text-center
									text-base font-medium text-gray-700"
					>
						<span>
							{category.label}
						</span>
						<img src={category.img} class="h-[155px] object-contain" />
					</div>
				{/each}
			</div>
		</section>

		<section class="mt-16">
			<p class="text-3xl font-semibold text-gray-800 text-center mb-8">Our Mission</p>
			<p class="text-base text-gray-700 mb-4">
				Empowering SMEs to grow globally through a tech-enabled platform that simplifies exports and
				access to international buyers.
			</p>
		</section>

		<section class="mt-16">
			<p class="text-3xl font-semibold text-gray-800 text-center mb-8">Our offerings to SMEs</p>
			<div class="grid md:grid-cols-3 gap-5">
				{#each offerings as offering}
					<div class="bg-white rounded-lg shadow-md p-3 transition-all hover:shadow-lg">
						<h3 class="text-base font-semibold text-amber-650 mb-4">{offering.title}</h3>
						<p class="text-sm text-gray-600">{offering.description}</p>
					</div>
				{/each}
			</div>
		</section>
	</div>
</div>
