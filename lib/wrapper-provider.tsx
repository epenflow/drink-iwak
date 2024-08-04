'use client';

import { LenisWrapper } from '@/lib/lenis-wrapper';
import React from 'react';

interface WrapperProviderProps {
	children: React.ReactNode;
}
export function WrapperProvider({ children }: WrapperProviderProps) {
	return <LenisWrapper>{children}</LenisWrapper>;
}
