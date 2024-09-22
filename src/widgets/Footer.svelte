<script>
	export let links = [
		{
			label: 'About Us',
			href: '/about-us'
		}
		// {
		// 	label: 'Contact',
		// 	href: '/contact'
		// }
		// {
		// 	label: 'Privacy Policy',
		// 	href: '/privacy'
		// }
	];

	const phone = '+91 90087 08440';
	const email = 'suhaaskaul001@gmail.com';
</script>

<footer class="py-12 bg-offWhite">
	<div class="max-w-6xl mx-auto px-4">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
			<div class="text-center md:text-left">
				<h3 class="text-lg font-semibold text-charcoal mb-4">Quick Links</h3>
				<ul class="space-y-2">
					{#each links as link}
						<li>
							<a
								href={link.href}
								class="text-sm text-neutral-750 hover:text-amber-650 transition-colors duration-300"
							>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>
			<div class="text-center md:text-left">
				<h3 class="text-lg font-semibold text-charcoal mb-4">Contact Us</h3>
				<p class="text-sm text-neutral-750 mb-2">
					<span class="font-medium">Phone:</span>
					{phone}
				</p>
				<p class="text-sm text-neutral-750">
					<span class="font-medium">Email:</span>
					{email}
				</p>
			</div>
			<!--			<div class="text-center md:text-left">-->
			<!--				<h3 class="text-lg font-semibold text-charcoal mb-4">About Qivly</h3>-->
			<!--				<p class="text-sm text-neutral-750">-->
			<!--					Qivly is committed to providing innovative solutions for our customers. Our mission is to-->
			<!--					empower businesses through technology.-->
			<!--				</p>-->
			<!--			</div>-->
			<!--		</div>-->
			<div class="w-full h-px bg-gray-250 mb-8"></div>
			<div class="text-center">
				<p class="text-sm text-neutral-750">&copy; 2024 Qivly. All rights reserved.</p>
			</div>
		</div>
	</div>
</footer>
