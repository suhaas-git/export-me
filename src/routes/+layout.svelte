<script>
	import '@src/app/global.css';
	import { onMount } from 'svelte';

	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	onMount(() => {
		// if ($page.url.pathname === '/') goto('/listing');
	});
</script>

<slot />
