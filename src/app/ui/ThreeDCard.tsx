'use client';
import React, { useRef, useEffect, useState } from 'react';

interface ThreeDCardProps {
  children?: React.ReactNode;
  imageUrl?: string;
  className?: string;
  width?: string;
  height?: string;
}

const ThreeDCard: React.FC<ThreeDCardProps> = ({
  children = '3D Card',
  imageUrl = 'https://images.unsplash.com/photo-1557672199-6e8c8b2b8fff?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
  className = '',
  width = '300px',
  height = '400px',
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [bounds, setBounds] = useState<DOMRect | null>(null);

  const handleMouseEnter = () => {
    if (cardRef.current) {
      setBounds(cardRef.current.getBoundingClientRect());
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = '';
      const glow = cardRef.current.querySelector('.glow') as HTMLElement;
      if (glow) {
        glow.style.backgroundImage =
          'radial-gradient(circle at 50% -20%, #ffffff22, #0000000f)';
      }
    }
    setBounds(null);
  };

  const rotateToMouse = (e: MouseEvent) => {
    if (!bounds || !cardRef.current) return;

    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.left;
    const topY = mouseY - bounds.top;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2,
    };
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    cardRef.current.style.transform = `
      scale3d(1.07, 1.07, 1.07)
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * 2}deg
      )
    `;

    const glow = cardRef.current.querySelector('.glow') as HTMLElement;
    if (glow) {
      glow.style.backgroundImage = `
        radial-gradient(
          circle at
          ${center.x * 2 + bounds.width / 2}px
          ${center.y * 2 + bounds.height / 2}px,
          #ffffff55,
          #33261a0f
        )
      `;
    }
  };

  useEffect(() => {
    if (bounds) {
      window.addEventListener('mousemove', rotateToMouse);
    } else {
      window.removeEventListener('mousemove', rotateToMouse);
    }

    return () => {
      window.removeEventListener('mousemove', rotateToMouse);
    };
  }, [bounds]);

  return (
    <div
      ref={cardRef}
      className={`bg-[#33261a] relative font-bold p-4 text-right text-gray-900 shadow-sm rounded-xl transition-all duration-300 ease-out ${className}`}
      style={{
        width,
        height,
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <div
        className="glow absolute inset-0 w-full h-full pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% -20%, #ffffff22, #0000000f)',
        }}
      />
    </div>
  );
};

export default ThreeDCard;
