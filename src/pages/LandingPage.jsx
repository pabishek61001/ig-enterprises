import React from 'react'
import Header from '../components/Header'
import { Box, Divider } from '@mui/material'
import HeroSlider from '../utils/HeroSlider'
import AboutSection from '../utils/AboutSection';
import ServiceSection from '../utils/ServiceSection';
import TransformingBusiness from '../utils/TransformingBusiness';
import AllServices from '../utils/AllServices';
import Platforms from '../utils/Platforms';
import Footer from '../components/Footer';
import Testimonials from '../utils/Testimonials';
import OurTeam from '../components/OurTeam';


const slides = [
    {
        src: 'https://img.freepik.com/premium-photo/trees-surround-corporate-buildings-cars-are-parked-street_848676-6833.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740',
        title: 'Deploying Indias largest quantum computer',
        description: 'A stunning low-angle view of modern city skyscrapers.',
    },
    {
        src: 'https://img.freepik.com/premium-photo/trees-surround-corporate-buildings-cars-are-parked-street_848676-6833.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740',
        title: 'Deploying Indias largest quantum computer',
        description: 'Trees and architecture blend in a calm corporate street scene.',
    },
    {
        src: 'https://img.freepik.com/premium-photo/trees-surround-corporate-buildings-cars-are-parked-street_848676-6833.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740',
        title: 'Deploying Indias largest quantum computer',
        description: 'Professional signage on an office building with clean design.',
    },
];


const LandingPage = () => {
    return (
        <Box>

            <Header />
            <HeroSlider slides={slides} options={{ loop: false }} />
            <AboutSection />
            <TransformingBusiness />
            <ServiceSection />
            <AllServices />
            <Platforms />
            <Testimonials />
            <OurTeam />
            <Footer />
        </Box>
    )
}

export default LandingPage