import React from 'react'
import About from './About';

export const metadata = {
    title: 'Helix | About',
    openGraph: {
        title: 'BME Bharat | About',
        url: `https://helixindia.com/about/`,
    },
    twitter: {
        title: 'Helix | About',
        url: `https://helixindia.com/about/`,
        card: 'summary_large_image',
    },
};

const page = () => {
    return (
        <About />
    )
}

export default page