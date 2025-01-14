import { Button, Paper, Space, Text, ThemeIcon } from '@mantine/core';
import Image from 'next/image';
import React from 'react';

const services = [
	{
		title: 'Student Visa Assistance',
		description:
			'We assist students in securing visas for their dream universities.',
		thumbnail: 'https://cdn-icons-png.flaticon.com/128/14232/14232330.png',
	},
	{
		title: 'Work Abroad Opportunities',
		description: 'Explore job opportunities in top destinations worldwide.',
		thumbnail: 'https://cdn-icons-png.flaticon.com/128/1830/1830794.png',
	},
	{
		title: 'Living Abroad Consultancy',
		description: 'Get personalized guidance on living in a foreign country.',
		thumbnail: 'https://cdn-icons-png.flaticon.com/128/4565/4565685.png',
	},
];

const ServicesSection: React.FC = () => (
	<div className='py-16 px-6'>
		<div className='max-w-5xl mx-auto text-center'>
			<h2 className='text-[45px]  font-bold mb-8'>Our Services</h2>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
				{services.map((service, index) => (
					<Paper
						data-aos='fade-up'
						key={index}
						className='text-left relative !rounded-lg grid
			 px-8 pb-5 pt-10 drop-shadow-lg hover:duration-300 hover:bg-slate-50'
					>
						<ThemeIcon variant='light' radius={200} size={80}>
							<Image
								src={service?.thumbnail || ''}
								alt='service_icon'
								width={40}
								height={40}
							/>
						</ThemeIcon>

						<Space h={'xl'} />

						<Text w={500} ff='Nunito Sans, sans-serif' fz={20}>
							{service?.title}
						</Text>

						<Space h={5} />

						<Text color='dimmed' ff='Nunito Sans, sans-serif' fz={15}>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe,
							dignissimos recusandae...
						</Text>
						<Space h={15} />
						<Button
							size='sm'
							radius={5}
							variant='gradient'
							gradient={{ from: '#F57878', to: '#F77C94' }}
						>
							Learn More
						</Button>
					</Paper>
				))}
			</div>
		</div>
	</div>
);

export default ServicesSection;
