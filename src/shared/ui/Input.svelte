<script lang="ts">
	import { cx } from '@shared/utils/cx';

	export let className: string = '';

	export let value = '';
</script>

<div class="w-full relative">
	<input
		bind:value
		type="text"
		placeholder=" Type here"
		class={cx('w-full pl-10 text-black placeholder:text-black text-lg', className)}
	/>

	<div class="absolute top-2/4 -translate-y-2/4 left-4">
		<slot name="rightIcon" />
	</div>
</div>
