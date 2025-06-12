'use client';
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { animateSlider } from '@/app/utils/animations';
const Change = ({
  array,
}: {
  array: {
    color: string;
    patternColor: string;
    main: string;
    side1: string;
    side2: string;
  }[];
}) => {
  const [srcImage, setSrcImage] = useState<string[]>([
    array[0].main,
    array[0].side1,
    array[0].side2,
  ]);
  return (
    <>
      <button
        onClick={() => {
          animateSlider(
            array[1].color,
            array[1].patternColor,
            array[1].main,
            array[1].side1,
            array[1].side2,
            setSrcImage
          );
        }}
      >
        left
      </button>
      <Image
        className="chips z-[1]"
        style={{ gridArea: 'b' }}
        src={srcImage[0]}
        width={400}
        height={300}
        alt="chips"
      ></Image>
      <Image
        className={`z-[0] tomato1`}
        style={{ gridArea: 'a' }}
        src={srcImage[1]}
        width={80}
        height={100}
        alt="chips"
      ></Image>
      <Image
        className={`z-[0] tomato2`}
        style={{ gridArea: 'v' }}
        src={srcImage[1]}
        width={80}
        height={100}
        alt="chips"
      ></Image>
      <Image
        className="z-[0] stick"
        style={{ gridArea: 'c' }}
        src={srcImage[2]}
        width={80}
        height={80}
        alt="chips"
      ></Image>
      <Image
        className="z-[0] stick2 "
        style={{ gridArea: 'g' }}
        src={srcImage[2]}
        width={80}
        height={100}
        alt="chips"
      ></Image>
      <Image
        className="z-[0] stick3"
        style={{ gridArea: 'i' }}
        src={srcImage[2]}
        width={80}
        height={100}
        alt="chips"
      ></Image>
      <Image
        className="z-[0] stick4 "
        style={{ gridArea: 'p' }}
        src={srcImage[2]}
        width={80}
        height={100}
        alt="chips"
      ></Image>
    </>
  );
};

export default Change;
