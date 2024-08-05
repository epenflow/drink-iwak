'use client';
import React from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(TextPlugin);
export const Hero = () => {
	const containerRef = React.useRef<React.ElementRef<'div'>>(null);
	const videoRef = React.useRef<React.ElementRef<'video'>>(null);
	const headingRef = React.useRef<React.ElementRef<'h1'>>(null);
	useGSAP(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				pin: containerRef.current,
				start: 'top top',
				end: 'bottom top',
				scrub: true,
			},
		});
		tl.from(headingRef.current, {
			autoAlpha: 0,
			scale: 0.25,
			text: '',
			ease: 'sine.inOut',
		}).to(videoRef.current, {
			clipPath: 'inset(0% 0% 0% 0%)',
			delay: 1.5,
			ease: 'power1.inOut',
		});
	}, [containerRef]);

	return (
		<section
			ref={containerRef}
			style={{
				backgroundImage: `url(./bg-horizontal.png)`,
			}}
			className="w-screen h-screen flex items-center bg-cover bg-no-repeat bg-center justify-center overflow-hidden bg-black">
			<h1
				ref={headingRef}
				className="text-7xl lg:text-9xl font-medium z-20 text-white mix-blend-difference font-iwak">
				The <br />
				Drinkers'
				<br /> DRINK
			</h1>

			<video
				ref={videoRef}
				autoPlay
				loop
				muted
				style={{
					clipPath: 'inset(100% 0% 0% 0%)',
				}}
				className="w-full h-full absolute top-0 object-cover left-1/2 -translate-x-1/2">
				<source src="./Iwak Arumery Homepage.mp4" />
			</video>
		</section>
	);
};
