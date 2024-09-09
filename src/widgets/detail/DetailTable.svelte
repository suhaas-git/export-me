<script lang="ts">
	import { slide } from 'svelte/transition';

	export let itemData = {};

	$: values = Object.values(itemData || {});
</script>

<div
	class="max-w-md mx-auto overflow-hidden mt-4 grid grid-cols-2 gap-x-3 gap-y-4 pt-2"
	transition:slide={{ delay: 0, duration: 200, axis: 'y' }}
>
	{#each values as value}
		<div>
			<p class="text-xs text-neutral-400 mb-1">{value.label}</p>
			<p class="text-sm text-neutral-500">{value.value}</p>
		</div>
	{/each}

	<!--	<table class="w-full border-collapse">-->
	<!--		<thead>-->
	<!--			<tr>-->
	<!--				<th-->
	<!--					class="px-4 py-2 text-left text-sm font-semibold text-gray-600 border-b border-r border-gray-200"-->
	<!--				>-->
	<!--					Description-->
	<!--				</th>-->
	<!--				<th-->
	<!--					class="px-4 py-2 text-left text-sm font-semibold text-gray-600 border-b border-r border-gray-200"-->
	<!--				>-->
	<!--					Rate-->
	<!--				</th>-->
	<!--				<th-->
	<!--					class="px-4 py-2 text-left text-sm font-semibold text-gray-600 border-b border-r border-gray-200"-->
	<!--				>-->
	<!--					Details-->
	<!--				</th>-->
	<!--				<th-->
	<!--					class="px-4 py-2 text-left text-sm font-semibold text-gray-600 border-b border-gray-200"-->
	<!--				>-->
	<!--				</th>-->
	<!--			</tr>-->
	<!--		</thead>-->
	<!--		<tbody>-->
	<!--			{#each values as data, i}-->
	<!--				{@const commonClass = cx(-->
	<!--					'px-4 py-3 border border-gray-200 text-sm text-gray-600',-->
	<!--					i === values.length - 1 && 'border-b-0'-->
	<!--				)}-->
	<!--				<tr>-->
	<!--					<td class={cx(commonClass, '!border-l-0')}>{data.label}</td>-->
	<!--					<td class={commonClass}>-->
	<!--						<div class="flex gap-1">-->
	<!--							{#each { length: 2 } as _}-->
	<!--								<Star class="w-2 h-2 text-yellow-400" />-->
	<!--							{/each}-->
	<!--						</div>-->
	<!--					</td>-->
	<!--					<td class={commonClass}>-->
	<!--						<span>{data.value || '-'}</span>-->
	<!--					</td>-->
	<!--					<td-->
	<!--						class={cx('!border-r-0 !text-neutral-300', commonClass)}-->
	<!--						on:click={() => {-->
	<!--							// media = {-->
	<!--							// 	type: data.type,-->
	<!--							// 	src: data.src-->
	<!--							// };-->
	<!--						}}-->
	<!--					>-->
	<!--						{#if data.type === 'image'}-->
	<!--							<Camera />-->
	<!--						{:else}-->
	<!--							<Video />-->
	<!--						{/if}-->
	<!--					</td>-->
	<!--				</tr>-->
	<!--			{/each}-->
	<!--		</tbody>-->
	<!--	</table>-->
</div>
