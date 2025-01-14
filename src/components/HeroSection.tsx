import { Box, Button } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React from 'react';
// @ts-ignore
import { Autoplay, Controller, Pagination, Scrollbar, Zoom } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/controller';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';
import { Swiper, SwiperSlide } from 'swiper/react';

('@mantine/core');

const HeroSection: React.FC = () => {
	const largeScreen = useMediaQuery('(min-width: 60em)');
	return (
		<Box className='relative'>
			<Swiper
				// install Swiper modules
				modules={[Pagination, Scrollbar, Autoplay, Controller, Zoom]}
				spaceBetween={50}
				slidesPerView={1}
				navigation
				pagination={{ clickable: true }}
				autoplay={true}
			>
				<SwiperSlide
					style={{
						backgroundImage: `url('/assets/hero-banners/slide1.jpg')`,
						height: '100vh',
						width: '100%',
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
						transform: ' translate(0px, 0px)',
						visibility: 'visible',
						backgroundPositionY: 'top',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<div className='container mx-auto px-6 flex justify-center'>
						<div className='text-center'>
							<h2
								data-aos='fade-down'
								className='slider-title font-bold mb-4 text-white text-[60px] leading-[65px]'
							>
								Achieve Your Dreams with Care2
							</h2>

							<p
								data-aos='fade-down'
								className='text-[25px] slider-tagline font-semibold mb-6 text-white'
							>
								Transforming Dreams Into International Success Stories
							</p>
							<Button
								data-aos='fade-up'
								size='xl'
								radius={100}
								variant='gradient'
								gradient={{ from: '#F57878', to: '#F77C94' }}
							>
								<a href='#contact'>Make an Appointment</a>
							</Button>
						</div>
					</div>{' '}
				</SwiperSlide>
				<SwiperSlide
					style={{
						backgroundImage: `url('/assets/hero-banners/slide2.jpg')`,
						height: '100vh',
						width: '100%',
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
						transform: ' translate(0px, 0px)',
						visibility: 'visible',
						backgroundPositionY: 'top',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<div className='container mx-auto px-6 flex justify-center'>
						<div className='text-center'>
							<h2
								data-aos='fade-down'
								className='slider-title font-bold mb-4 text-white text-[60px] leading-[65px]'
							>
								Change Your Life Today
							</h2>

							<p
								data-aos='fade-down'
								className='text-[25px] slider-tagline font-semibold mb-6 text-white'
							>
								Your Gateway to Global Education and Career Opportunities
							</p>
							<Button
								data-aos='fade-up'
								size='xl'
								radius={100}
								variant='gradient'
								gradient={{ from: '#F57878', to: '#F77C94' }}
							>
								<a href='#contact'>Make an Appointment</a>
							</Button>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide
					style={{
						backgroundImage: `url('/assets/hero-banners/slide3.jpg')`,
						height: '100vh',
						width: '100%',
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
						transform: ' translate(0px, 0px)',
						visibility: 'visible',
						backgroundPositionY: 'top',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<div className='container mx-auto px-6 flex justify-center'>
						<div className='text-center'>
							<h2
								data-aos='fade-down'
								className='slider-title font-bold mb-4 text-white text-[60px] leading-[65px]'
							>
								The Smart Choise For Future!
							</h2>

							<p
								data-aos='fade-down'
								className='text-[25px] slider-tagline font-semibold mb-6 text-white'
							>
								Guiding You Towards a Brighter Future Abroad
							</p>
							<Button
								data-aos='fade-up'
								size='xl'
								radius={100}
								variant='gradient'
								gradient={{ from: '#F57878', to: '#F77C94' }}
							>
								<a href='#contact'>Make an Appointment</a>
							</Button>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</Box>
	);
};

export default HeroSection;

// <div
// 	className='relative bg-cover bg-center h-screen flex justify-center items-center'
// 	style={{ backgroundImage: "url('/assets/hero-banners/slide1.jpg')" }}
// >
// 	<div className='container mx-auto px-6 flex justify-center'>
// 		<div className='text-center'>
// 			<h2
// 				data-aos='fade-down'
// 				className='slider-title font-bold mb-4 text-white text-[60px] leading-[65px]'
// 			>
// 				The Smart Choise For Future!
// 			</h2>

// 			<p
// 				data-aos='fade-down'
// 				className='text-[25px] slider-tagline font-semibold mb-6 text-white'
// 			>
// 				{/* Your Gateway to Global Education and Career Opportunities */}
// 				Guiding You Towards a Brighter Future Abroad
// 			</p>
// 			<Button
// 				data-aos='fade-up'
// 				size='xl'
// 				radius={100}
// 				variant='gradient'
// 				gradient={{ from: '#F57878', to: '#F77C94' }}
// 			>
// 				<a href='#contact'>Make an Appointment</a>
// 			</Button>
// 		</div>
// 	</div>
// </div>
