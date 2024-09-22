<script lang="ts">
	import scaleElementOnClick from '@shared/actions/scaleElementOnClick';

	export let onClick: () => Promise<any> | void = () => {};
	export let isLoading = false;

	let buttonContent: HTMLElement;

	async function handleClick() {
		const clickPromise = onClick();
		let response = clickPromise;

		if (clickPromise instanceof Promise) {
			isLoading = true;
			response = await clickPromise;
			isLoading = false;
		}

		return response;
	}
</script>

<button
	use:scaleElementOnClick
	type="submit"
	class="bg-amber-650 text-white rounded-md p-3 w-full font-bold text-sm flex items-center justify-center"
	on:click={handleClick}
	disabled={isLoading}
	{...$$restProps}
>
	{#if isLoading}
		<div class="spinner"></div>
	{:else}
		<span bind:this={buttonContent}>
			<slot />
		</span>
	{/if}
</button>

<style>
	.spinner {
		width: 18px;
		height: 18px;
		border: 2px solid #ffffff;
		border-top: 2px solid transparent;
		border-radius: 50%;
		animation: spin 1s linear infinite;
		margin-right: 8px;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
