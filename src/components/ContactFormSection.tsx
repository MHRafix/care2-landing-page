import { Button, Space, TextInput, Textarea } from '@mantine/core';
import { useForm } from '@mantine/form';

const ContactForm: React.FC = () => {
	const form = useForm({
		initialValues: { name: '', email: '', message: '' },
	});

	return (
		<div className='bg-gray-50 py-16 px-6' id='contact'>
			<div className='max-w-3xl mx-auto'>
				<h2 className='text-[45px] font-bold text-center mb-6'>Get in Touch</h2>
				<form
					onSubmit={form.onSubmit((values) =>
						alert(JSON.stringify(values, null, 2))
					)}
				>
					<TextInput
						label='Name'
						placeholder='Your Name'
						required
						{...form.getInputProps('name')}
					/>
					<Space h={'sm'} />
					<TextInput
						label='Email'
						placeholder='Your Email'
						required
						{...form.getInputProps('email')}
					/>
					<Space h={'sm'} />
					<Textarea
						label='Message'
						placeholder='Your Message'
						required
						{...form.getInputProps('message')}
					/>
					<Space h={'sm'} />
					<Button
						type='submit'
						radius={10}
						size='md'
						variant='gradient'
						gradient={{ from: '#F57878', to: '#F77C94' }}
						fullWidth
					>
						Send Message
					</Button>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
