import { Container, Space } from '@mantine/core';
import Image from 'next/image';
import React from 'react';

const benefits = [
	'Expert guidance from experienced consultants.',
	'Personalized support tailored to your needs.',
	'Comprehensive services for students and professionals.',
	'Strong track record of success.',
	'Access to a global network of education and career opportunities.',
	'End-to-end assistance from application to settlement.',
	'In-depth knowledge of international immigration policies.',
	'Transparent and hassle-free process for clients.',
	'Innovative solutions to match your unique aspirations.',
];

const WhyChooseUsSection: React.FC = () => (
	<div className='bg-blue-100 py-16 px-6'>
		<Container size={'lg'}>
			<h2 className='text-[45px] text-center font-bold mb-6'>Why Choose Us</h2>
			<Space h={'md'} />
			<div className='grid md:grid-cols-2 gap-7'>
				<Image
					src={'/assets/why-choose-us/why-choose-us.webp'}
					alt='why-choose-us-banner'
					data-aos='fade-right'
					width={400}
					height={400}
					className='!w-full rounded-md'
				/>
				<ul className='text-left space-y-4'>
					{benefits.map((benefit, index) => (
						<li data-aos='fade-left' key={index} className='flex items-start'>
							<span className='w-6 h-6 bg-gradient-to-r from-[#F57878] to-[#F77C94] text-white rounded-full flex items-center justify-center mr-4'>
								✓
							</span>
							{benefit}
						</li>
					))}
				</ul>
			</div>
		</Container>
	</div>
);

export default WhyChooseUsSection;
