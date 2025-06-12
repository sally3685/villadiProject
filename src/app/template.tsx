'use client';

import { animatePageIn } from '@/app/utils/animations';
import { useEffect } from 'react';

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn();
  }, []);
  return <>{children}</>;
}
