<script>
	import { cx } from '@shared/utils/cx.js';

	export let className = '';
</script>

<svg width="24" height="24" viewBox="0 0 24 24" fill="none" class={cx(className)}>
	<circle cx="12" cy="12" r="12" transform="matrix(0 -1 -1 0 24 24)" fill="currentColor" />
	<path
		d="M5 12.1251L12 19L19 12.1251"
		stroke="white"
		stroke-width="1.5"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
	<path d="M12 5L12 18.1255" stroke="white" stroke-width="1.5" stroke-linecap="round" />
</svg>
