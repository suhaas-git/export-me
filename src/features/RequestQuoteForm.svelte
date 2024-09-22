<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Input from '@shared/ui/Input.svelte';
	import Button from '@shared/ui/Button.svelte';
	import { cx } from '@shared/utils/cx.js';
	import dayjs from 'dayjs';

	const dispatch = createEventDispatcher();

	let name = '';
	let email = '';
	let phoneNumber = '';
	let countryCode = '+91';
	let query = '';

	let isLoading = false;
	let submitError = '';

	let errors = {
		name: '',
		email: '',
		phoneNumber: '',
		query: ''
	};

	function validateForm() {
		errors = {
			name: name.trim() === '' ? 'Name is required' : '',
			email: !isValidEmail(email) ? 'Invalid email address' : '',
			phoneNumber: !isValidPhoneNumber(phoneNumber) ? 'Invalid phone number' : '',
			query: query.trim() === '' ? 'Query is required' : ''
		};

		return Object.values(errors).every((error) => error === '');
	}

	function isValidEmail(email: string): boolean {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	}

	function isValidPhoneNumber(phone: string): boolean {
		return phone.length >= 10 && /^\d+$/.test(phone);
	}

	async function handleSubmit() {
		submitError = '';
		if (validateForm()) {
			isLoading = true;

			const formData = {
				id: 'INCREMENT',
				name,
				email,
				query,
				phoneNumber: `${countryCode.substring(1)}-${phoneNumber}`,
				createdOn: dayjs().format('DD/MM/YYYY hh:mm A')
			};

			try {
				const response = await fetch('https://sheetdb.io/api/v1/un9om0sl4njok', {
					method: 'POST',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({ data: [formData] })
				});

				if (response.ok) {
					dispatch('submit', formData);
					// Clear form fields
					name = email = phoneNumber = query = '';
				} else {
					throw new Error('Failed to submit form');
				}
			} catch (error) {
				console.error('Error:', error);
				submitError = 'An error occurred while submitting the form. Please try again.';
			} finally {
				isLoading = false;
			}
		}
	}
</script>

<form on:submit|preventDefault={handleSubmit} class="space-y-4" novalidate>
	<div class="space-y-4">
		<label for="name" class="flex flex-col gap-1">
			<span class="text-sm font-medium text-charcoal">Full Name</span>
			<Input
				id="name"
				bind:value={name}
				placeholder="Enter your name"
				variant={errors.name ? 'danger' : 'default'}
				aria-invalid={!!errors.name}
				aria-describedby="name-error"
			/>
			{#if errors.name}
				<span id="name-error" class="text-xs text-red-500">{errors.name}</span>
			{/if}
		</label>

		<label for="email" class="flex flex-col gap-1">
			<span class="text-sm font-medium text-charcoal">Email</span>
			<Input
				id="email"
				type="email"
				bind:value={email}
				placeholder="Enter your email"
				variant={errors.email ? 'danger' : 'default'}
				aria-invalid={!!errors.email}
				aria-describedby="email-error"
			/>
			{#if errors.email}
				<span id="email-error" class="text-xs text-red-500">{errors.email}</span>
			{/if}
		</label>

		<label for="phone" class="flex flex-col gap-1">
			<span class="text-sm font-medium text-charcoal">Phone Number</span>
			<div
				class={cx(
					'flex items-center border rounded-lg overflow-hidden',
					errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
				)}
			>
				<select
					bind:value={countryCode}
					class="bg-white text-neutral-750 text-sm px-2 py-2 border-r border-gray-300"
					aria-label="Country code"
				>
					<option value="+91">🇮🇳 +91</option>
					<option value="+971">🇦🇪 +971</option>
				</select>
				<input
					id="phone"
					type="tel"
					bind:value={phoneNumber}
					class={cx(
						'flex-1 p-2 text-neutral-900 placeholder:text-neutral-250',
						'focus:outline-none focus:ring-2 transition-all duration-300',
						errors.phoneNumber ? 'focus:ring-red-500' : 'focus:ring-amber-650'
					)}
					placeholder="Phone number"
					aria-invalid={!!errors.phoneNumber}
					aria-describedby="phone-error"
				/>
			</div>
			{#if errors.phoneNumber}
				<span id="phone-error" class="text-xs text-red-500">{errors.phoneNumber}</span>
			{/if}
		</label>

		<label for="query" class="flex flex-col gap-1">
			<span class="text-sm font-medium text-charcoal">Query</span>
			<textarea
				id="query"
				bind:value={query}
				class={cx(
					'w-full relative border rounded-lg overflow-hidden text-sm text-charcoal p-2',
					'focus:outline-none focus:ring-2 focus:ring-amber-650 focus:border-transparent transition-all duration-300',
					errors.query ? 'border-red-500' : 'border-unset'
				)}
				rows="3"
				placeholder="Your query here"
				aria-invalid={!!errors.query}
				aria-describedby="query-error"
			/>
			{#if errors.query}
				<span id="query-error" class="text-xs text-red-500">{errors.query}</span>
			{/if}
		</label>
	</div>

	{#if submitError}
		<p class="text-red-500 text-sm">{submitError}</p>
	{/if}

	<Button {isLoading} type="submit">Submit Request</Button>
</form>
