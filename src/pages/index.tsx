import AboutUsSection from '@/components/AboutSection';
import ContactForm from '@/components/ContactFormSection';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Geist, Geist_Mono } from 'next/font/google';
import { useEffect } from 'react';
const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export default function Home() {
	useEffect(() => {
		AOS.init({
			startEvent: 'DOMContentLoaded',
			initClassName: 'aos-init',
			animatedClassName: 'aos-animate',
			useClassNames: false,
			disableMutationObserver: false,
			debounceDelay: 500,
			throttleDelay: 99,
			offset: 120,
			delay: 0,
			duration: 800,
			easing: 'ease',
			once: false,
			mirror: false,
			anchorPlacement: 'top-bottom',
		});
	}, []);
	return (
		<div className='overflow-hidden'>
			<HeroSection />
			<AboutUsSection />
			<ServicesSection />
			<WhyChooseUsSection />
			<ContactForm />
			<Footer />
		</div>
	);
}
