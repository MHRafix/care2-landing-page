import { Container } from '@mantine/core';
import Image from 'next/image';
import React from 'react';

const AboutUsSection: React.FC = () => (
	<div className='bg-gray-100 py-16 px-6'>
		<Container size={'lg'}>
			<h1 className='text-[45px] font-bold mb-7 text-center'>About Us</h1>
			<div className='grid md:grid-cols-2 gap-7'>
				<Image
					src={'/assets/about-banner/aboutus-banner.webp'}
					alt='aboutus-section-banner'
					data-aos='fade-up'
					width={300}
					height={300}
					className='!w-full rounded-md'
				/>
				<div data-aos='fade-down'>
					<h2 className='text-[25px] font-bold mb-2'>Care2 Consaltency</h2>
					<p className='text-lg'>
						Care2 Training Consultancy transforms your global dreams into
						achievable goals. Specializing in student visa assistance, study
						abroad planning, and work abroad opportunities, we provide expert,
						personalized guidance at every step. With our proven expertise and
						unwavering support, navigating international education and careers
						becomes seamless. Trust Care2 to open doors to a world of
						possibilities and success.
					</p>
				</div>
			</div>
		</Container>
	</div>
);

export default AboutUsSection;
