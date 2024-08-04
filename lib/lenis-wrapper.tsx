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
		const lenis = new Lenis({
			duration: 5,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
			touchMultiplier: 2,
			smoothWheel: true,
			syncTouch: true,
		});
		function update(time: number) {
			lenis.raf(time * 1000);
		}
		function initSmoothScrolling() {
			lenis.on('scroll', () => ScrollTrigger.update);
			gsap.ticker.add(update, false, true);
			gsap.ticker.lagSmoothing(0);
		}
		initSmoothScrolling();
		return () => {
			gsap.ticker.remove(update);
			lenis.destroy();
		};
	}, []);
	return children;
}
