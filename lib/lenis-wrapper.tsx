'use client';
import Lenis from 'lenis';
import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
interface LenisWrapperProps {
	children: React.ReactNode;
}
export function LenisWrapper({ children }: LenisWrapperProps) {
	const scrollRef = React.useRef<Lenis>(null);
	React.useLayoutEffect(() => {
		function initSmoothScrolling() {
			const lenis = new Lenis({
				smoothWheel: true,
				lerp: 0.15,
			});
			lenis.on('scroll', () => ScrollTrigger.update());
			const scrollFn = (time: number) => {
				lenis.raf(time);
				requestAnimationFrame(scrollFn);
			};
			requestAnimationFrame(scrollFn);
		}
		initSmoothScrolling();
	}, []);
	return children;
}
