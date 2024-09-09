<script>
	import { cx } from '@shared/utils/cx.js';

	export let className = '';
</script>

<div class={cx('h-[1px] w-full bg-gray-200', className)} />
