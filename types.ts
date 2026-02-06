// Fix: Added missing React import to resolve the 'Cannot find namespace React' error
import React from 'react';

export interface SlideData {
  id: string;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  image?: string;
  accent?: boolean;
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}
