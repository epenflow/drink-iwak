'use client';
import Image from 'next/image';
import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);
export const OurStory = () => {
	const containerRef = React.useRef<React.ElementRef<'div'>>(null);
	const headingRef = React.useRef<React.ElementRef<'h1'>>(null);
	const imageRef = React.useRef<HTMLImageElement>(null);
	useGSAP(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				pin: containerRef.current,
				start: 'top top',
				end: 'bottom+=200% top',
				scrub: 1,
			},
		});
		tl.from(imageRef.current, {
			y: '100vh',
			ease: 'sine.in',
			autoAlpha: 0,
		});
		const paragraphs: React.ElementRef<'p'>[] =
			gsap.utils.toArray('.story-trigger');
		const textMarkers: React.ElementRef<'span'>[] =
			gsap.utils.toArray('.text-markers');
		tl.from(
			headingRef.current,
			{
				yPercent: 50,
				autoAlpha: 0,
			},
			'+=2',
		);
		paragraphs.forEach((paragraph) => {
			tl.from(paragraph, {
				yPercent: 50,
				autoAlpha: 0,
			});
		});
		textMarkers.forEach((marker, index) => {
			tl.to(marker, {
				backgroundSize: '100%',
				ease: 'sine.in',
			});
		});
	}, [containerRef]);
	return (
		<div
			ref={containerRef}
			style={{
				backgroundImage: `url("./bg-pattern.jpg")`,
			}}
			className="h-screen lg:h-screen w-screen relative bg-cover bg-center bg-no-repeat flex lg:justify-end flex-col lg:flex-row">
			<div className="lg:px-10 lg:basis-1/3 py-3 space-y-5 z-10">
				<h1
					ref={headingRef}
					className="uppercase text-center font-iwak text-[#09211a] text-4xl lg:text-8xl">
					<span className="text-[#7d1e21] text-2xl lg:text-4xl">
						Indonesian’s
					</span>
					<br />
					Drinking
					<br />
					culture
				</h1>
				<p className="story-trigger text-justify px-2">
					Contrary to popular opinion,
					<span className="text-markers">
						{` Indonesia is historically a nation with a robust
						drinking culture`}
					</span>
					, dating back to the 7th century when it was still called
					“Nusantara”. As an ancient Javanese proverb utters “Gemah
					ripah loh jinawi” which translates to “affluent and
					abundant, prosperous and fertile”,
					<span className="text-markers">
						{`
							Indonesia is a land rich with spices and ingredients.
						`}
					</span>
				</p>
				<p className="story-trigger text-justify px-2">
					<span className="text-markers">
						Evolving from its humble beginnings as fermented palm
						saps called “Tuak”, the story of “Arak” carries a
						captivating tale of survival and adaptation
					</span>
					, and holds itself as a true symbol of Nusantara’s
					resilience.
				</p>
			</div>
			<Image
				ref={imageRef}
				src={'/tuak-edit.png'}
				alt="tuak-edit"
				width={0}
				height={0}
				sizes="100vh"
				className="h-auto w-full lg:h-full lg:w-auto absolute lg:left-0 bottom-0"
			/>
		</div>
	);
};
