import { Container } from '@mantine/core';
import React from 'react';

const Footer: React.FC = () => (
	<footer className='bg-gray-800 text-center text-white py-8'>
		<Container
			size={'lg'}
			className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'
		>
			<p>© 2025 Care2 Training Consultancy. All Rights Reserved.</p>
			<div className='space-x-4'>
				<a href='#' className='hover:text-blue-400'>
					Privacy Policy
				</a>
				<a href='#' className='hover:text-blue-400'>
					Terms of Service
				</a>
			</div>
		</Container>
	</footer>
);

export default Footer;
