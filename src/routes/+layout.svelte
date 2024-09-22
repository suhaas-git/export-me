<script>
	import '@src/app/global.css';
	import { onMount } from 'svelte';

	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Footer from '@widgets/Footer.svelte';

	onMount(() => {
		// if ($page.url.pathname === '/') goto('/');
	});
</script>

<slot />
