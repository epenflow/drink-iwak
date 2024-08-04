'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useMediaQuery } from '@uidotdev/usehooks';
import Image from 'next/image';
gsap.registerPlugin(ScrollTrigger);
const Images = [
	{
		url: '/drinkiwak/Ameritha.png',
		backgroundColor: '#f7f8f8',
		label: 'Ameritha',
		text: 'Silky smooth, woody, and slightly saline',
	},
	{
		url: '/drinkiwak/Aveguele.png',
		backgroundColor: '#c22929',
		label: 'Aveugle',
		text: 'A good balance between the bitterness of coffee and the complexity of spices',
	},
	{
		url: '/drinkiwak/Berries.png',
		backgroundColor: '#ff8d63',
		label: 'Berries',
		text: 'Silky smooth, woody, and slightly saline',
	},
	{
		url: '/drinkiwak/Origine.png',
		backgroundColor: '#ffda41',
		label: 'Origine',
		text: 'Delicate flavor of Arak combined with well balanced spices and a hint of sweetness',
	},
	{
		url: '/drinkiwak/Mangoestin.png',
		backgroundColor: '#ffbc3e',
		label: 'Mangoestin',
		text: 'Sweetness of honey, vanilla, and cinnamon spice, the warmth of ginger cookies, and a hint of mangosteen tannin sensation',
	},
];
export const Collections = () => {
	const containerCollection = React.useRef<React.ElementRef<'section'>>(null);
	const sm = useMediaQuery('(min-width: 640px)');
	useGSAP(() => {
		const elements: HTMLDivElement[] = gsap.utils.toArray(
			'.collection-trigger',
		);
		const tl = gsap.timeline({
			scrollTrigger: {
				pin: containerCollection.current,
				scrub: 1,
				start: 'top top',
				end: `bottom+=${Images.length + 1}000vh bottom`,
			},
		});
		const bottleTrigger: HTMLImageElement[] =
			gsap.utils.toArray('.bottle-trigger');
		const textTrigger: HTMLElement[] = gsap.utils.toArray(
			'.text-collection-trigger',
		);

		tl.from(bottleTrigger, {
			yPercent: -200,
			top: -200,
			rotate: 360,
			xPercent: -100,
			scale: 0.25,
			duration: 1.5,
			ease: 'sine.in',
		});
		tl.from(textTrigger, {
			autoAlpha: 0,
			ease: 'sine.in',
		});
		elements.forEach((element, index) => {
			tl.to(element, {
				clipPath: 'inset(0% 100% 0% 0%)',
				autoAlpha: 0,
				ease: 'power1.inOut',
				delay: 0.5,
			});
		});
	}, [containerCollection]);
	return (
		<section ref={containerCollection} className="relative h-screen">
			{Images.map(({ backgroundColor, url, text, label }, index) => (
				<div
					key={index}
					style={{
						zIndex: (Images.length - 1 - index) * 10,
					}}
					className={cn(
						'absolute top-0 left-1/2 -translate-x-1/2 flex-shrink-0 h-screen px-10',
					)}>
					<div
						style={{
							clipPath: 'inset(0% 0% 0% 0%)',
							backgroundColor,
						}}
						className={cn(
							'w-screen h-screen flex flex-col items-center justify-between box-content gap-2',
							index !== Images.length - 1 && 'collection-trigger',
						)}>
						<h1
							className={cn(
								'text-5xl font-medium mt-5',
								index === 0 && 'text-collection-trigger',
							)}>
							{label}
						</h1>
						<Image
							alt="img"
							src={url}
							sizes="100vw"
							height={0}
							width={0}
							className={cn(
								'size-3/4 object-contain',
								index === 0 && 'bottle-trigger',
							)}
						/>
						<span
							className={cn(
								'text-center w-full lg:w-1/2 px-5 h-28 line-clamp-3 lg:line-clamp-2 mb-5',
								index === 0 && 'text-collection-trigger',
							)}>
							{text}
						</span>
					</div>
				</div>
			))}
		</section>
	);
};
