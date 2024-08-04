'use client';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';
gsap.registerPlugin(ScrollTrigger);

import Marquee from 'react-fast-marquee';

export const News = () => {
	const containerRef = React.useRef<React.ElementRef<'div'>>(null);
	const headingRef = React.useRef<React.ElementRef<'h1'>>(null);

	useGSAP(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: headingRef.current,
				start: 'top-=1000% top',
				end: 'top-=500% top',
				scrub: 1,
			},
		});
		tl.to(headingRef.current, {
			backgroundPositionX: 0,
			// onComplete: () => {
			// 	if (tl.progress()) tl.scrollTrigger?.kill();
			// 	tl.progress(1);
			// },
		});
	}, [containerRef]);
	return (
		<div
			ref={containerRef}
			className="w-full flex items-center justify-center overflow-hidden h-[75vh] bg-cover bg-no-repeat bg-center flex-col space-y-3 bg-black"
			style={
				{
					// backgroundImage: `url("./bg-home.png")`,
				}
			}>
			<h1
				ref={headingRef}
				className="news-text text-4xl font-iwak uppercase text-white">
				as seen on
			</h1>
			<Marquee>
				{Array.from({ length: 21 }).map((_, index) => (
					<div
						key={index}
						style={{
							backgroundImage: `url(./news/news${index}.webp)`,
						}}
						className="size-36 bg-contain bg-center mx-2.5"></div>
				))}
			</Marquee>
		</div>
	);
};
