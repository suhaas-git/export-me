<script lang="ts">
	import SearchIcon from '@shared/assets/icons/Search.svelte';
	import Input from '@shared/ui/Input.svelte';
	import { cx } from '@shared/utils/cx';

	export let className = '';

	export let value = '';
</script>

<Input className={cx('text-neutral-750 bg-gray-250 rounded-full text-sm', className)} bind:value>
	<svelte:fragment slot="rightIcon">
		<SearchIcon />
	</svelte:fragment>
</Input>
