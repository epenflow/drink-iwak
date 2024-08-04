'use client';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import React from 'react';
gsap.registerPlugin(ScrollTrigger);
export const IwakArumery = () => {
	const containerRef = React.useRef<React.ElementRef<'div'>>(null);
	const imageRef = React.useRef<HTMLImageElement>(null);
	useGSAP(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				pin: containerRef.current,
				start: 'top top',
				end: 'bottom+=500vh top',
				scrub: 1,
				markers: true,
			},
		});
		tl.to(imageRef.current, {
			y: '50vh',
		})
			.to(imageRef.current, {
				rotate: 360,
			})
			.to(imageRef.current, {
				y: '150vh',
			});
	}, [containerRef]);
	return (
		<div
			ref={containerRef}
			className="w-screen h-screen relative flex items-end">
			<Image
				ref={imageRef}
				alt="Mangoestin.png"
				src={'/drinkiwak/Mangoestin.png'}
				width={0}
				height={0}
				sizes="100vw"
				className="size-3/4 object-contain absolute top-0 left-1/2 -translate-x-1/2"
			/>
			<div className="space-y-2.5">
				<h1 className="font-iwak uppercase text-4xl">iwak Arumery</h1>
				<p>
					Iwak Arumery is a double-distilled blend of three different
					kinds of pure fermented palm sap infused with exotic fruits
					and spices, aged for 1.5 years to perfection. It is a
					distillation of the childhood memories and experience of Ida
					Ayu Puspa Eny (Puspa), a female Brahman former journalist
					who had spent her life travelling the world and lived a good
					portion of her life in three different continents. Combining
					a technique commonly found in European colonies with the
					legendary “Arak Jung” from Bali, Puspa has spent 14 years
					innovating the tradition she holds dear into a unique
					offering that has become the embryo of Iwak Arumery, the
					Drinkers’ Drink.
				</p>
			</div>
		</div>
	);
};
