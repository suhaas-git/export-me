<script lang="ts">
	import { slide } from 'svelte/transition';
	import type { Inventory } from '@shared/types/inventory';
	import { cx } from '@shared/utils/cx';
	import Camera from '@shared/assets/icons/Camera.svelte';
	import Video from '@shared/assets/icons/Video.svelte';
	import Dialog from '@shared/ui/Dialog.svelte';

	export let itemData: Inventory['generalAppearance'] = {};
	export let key = '';

	let media = [];

	$: values = Object.values(itemData[key] || {});
</script>

<div
	class="max-w-md mx-auto bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200"
	transition:slide={{ delay: 0, duration: 200, axis: 'y' }}
>
	<table class="w-full border-collapse">
		<thead>
			<tr>
				<th
					class="px-4 py-2 text-left text-sm font-semibold text-gray-600 border-b border-r border-gray-200"
				>
					Description
				</th>
				<th
					class="px-4 py-2 text-left text-sm font-semibold text-gray-600 border-b border-r border-gray-200"
				>
					Rate
				</th>
				<th
					class="px-4 py-2 text-left text-sm font-semibold text-gray-600 border-b border-r border-gray-200"
				>
					Details
				</th>
				<th
					class="px-4 py-2 text-left text-sm font-semibold text-gray-600 border-b border-gray-200"
				>
				</th>
			</tr>
		</thead>
		<tbody>
			{#each values as data, i}
				{@const commonClass = cx(
					'px-4 py-3 border border-gray-200 text-sm text-gray-600',
					i === values.length - 1 && 'border-b-0'
				)}
				<tr>
					<td class={cx(commonClass, '!border-l-0')}>{data.label}</td>
					<td class={commonClass}>
						<div class="flex">
							<!-- Placeholder for rating stars -->
						</div>
					</td>
					<td class={commonClass}>
						<span>{data.value || '-'}</span>
					</td>
					<td
						class={cx('!border-r-0 !text-neutral-300', commonClass)}
						on:click={() => {
							// media = {
							// 	type: data.type,
							// 	src: data.src
							// };
						}}
					>
						{#if data.type === 'image'}
							<Camera />
						{:else}
							<Video />
						{/if}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
