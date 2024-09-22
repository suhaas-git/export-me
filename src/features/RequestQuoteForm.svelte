<script>
	import { createEventDispatcher } from 'svelte';
	import Input from '@shared/ui/Input.svelte';
	import scaleElementOnClick from '@shared/actions/scaleElementOnClick';
	import { cx } from '@shared/utils/cx.js';
	import dayjs from 'dayjs';
	import Button from '@shared/ui/Button.svelte';

	const dispatch = createEventDispatcher();

	let name = '';
	let email = '';
	let phoneNumber = '';
	let countryCode = '+91'; // Default to India
	let query = '';

	let isLoading = false;

	let errors = {
		name: '',
		email: '',
		phoneNumber: '',
		query: ''
	};

	function validateForm() {
		errors = {
			name: name.trim() === '' ? 'Name is required' : '',
			email: !email.includes('@') ? 'Invalid email address' : '',
			phoneNumber: phoneNumber.length < 10 ? 'Invalid phone number' : '',
			query: query.trim() === '' ? 'Query is required' : ''
		};

		return Object.values(errors).every((error) => error === '');
	}

	async function handleSubmit() {
		if (validateForm()) {
			isLoading = true;

			const formData = {
				id: 'INCREMENT',
				name,
				email,
				query,
				phoneNumber: countryCode.substring(1) + '-' + phoneNumber,
				createdOn: dayjs().format('DD/MM/YYYY hh:mm A')
			};

			try {
				const response = await fetch('https://sheetdb.io/api/v1/un9om0sl4njok', {
					method: 'POST',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						data: [formData]
					})
				});

				if (response.ok) {
					dispatch('submit', formData);
					// Clear form fields
					name = '';
					email = '';
					phoneNumber = '';
					query = '';
				} else {
					throw new Error('Failed to submit form');
				}
			} catch (error) {
				console.error('Error:', error);
			} finally {
				isLoading = false;
			}
		}
	}
</script>

<form on:submit|preventDefault={handleSubmit} class="space-y-4">
	<label for="name" class="flex flex-col gap-1 text-sm font-medium text-gray-700">
		Full Name
		<Input
			id="name"
			bind:value={name}
			placeholder="Enter your name"
			variant={errors.name ? 'danger' : 'default'}
		/>
		{#if errors.name}
			<span class="text-xs text-red-500">{errors.name}</span>
		{/if}
	</label>

	<label for="email" class="flex flex-col gap-1 text-sm font-medium text-gray-700">
		Email
		<Input
			id="email"
			type="email"
			bind:value={email}
			placeholder="Enter your email"
			variant={errors.email ? 'danger' : 'default'}
		/>
		{#if errors.email}
			<span class="text-xs text-red-500">{errors.email}</span>
		{/if}
	</label>

	<label class="flex flex-col gap-1 text-sm font-medium text-gray-700">
		Phone Number
		<div
			class={cx(
				'flex shadow-sm border border-gray-300 rounded-lg',
				errors.phoneNumber && 'border-red-500'
			)}
		>
			<select bind:value={countryCode} class="bg-white text-gray-500 sm:text-sm">
				<option value="+91">🇮🇳 +91</option>
				<option value="+971">🇦🇪 +971</option>
			</select>
			<Input
				type="tel"
				bind:value={phoneNumber}
				className="border-r-0 !border-0"
				placeholder="Phone number"
				variant={errors.phoneNumber ? 'danger' : 'default'}
			/>
		</div>
		{#if errors.phoneNumber}
			<span class="text-xs text-red-500">{errors.phoneNumber}</span>
		{/if}
	</label>

	<label class="flex flex-col gap-1 text-sm font-medium text-gray-700">
		Query
		<textarea
			bind:value={query}
			class={cx(
				'w-full relative border rounded-lg overflow-hidden text-sm text-neutral-900 p-2',
				errors.query ? 'border-red-500' : 'border-gray-300'
			)}
			rows="3"
			placeholder=" Your query here"
		/>
		{#if errors.query}
			<span class="text-xs text-red-500">{errors.query}</span>
		{/if}
	</label>

	<Button {isLoading} type="submit">Submit</Button>
</form>
