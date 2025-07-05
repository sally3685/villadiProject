"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useRef } from "react";
// { t }: { t: any }
const AboutUs = () => {
  // Example dictionary structure
  const t = {
    aboutUs: {
      title: "About Our Company",
      subtitle: "Discover our journey, values, and the team behind our success",
      whoWeAre: {
        title: "Who We Are",
        content1: "We are innovators and problem-solvers dedicated to...",
        content2: "Our diverse team brings together expertise from...",
      },
      ourStory: {
        title: "Our Story",
        content1:
          "Founded in 2015, we started as a small team with big dreams...",
        content2:
          "Today, we serve customers worldwide with innovative solutions...",
      },
      ourMission: {
        title: "Our Mission",
        point1: "Deliver exceptional quality products",
        point2: "Prioritize customer satisfaction",
        point3: "Innovate continuously",
      },
      ourTeam: {
        title: "Our Team",
        content:
          "We're a diverse group of professionals united by our passion...",
        stat1: "50+",
        stat1Label: "Team Members",
        stat2: "10+",
        stat2Label: "Countries",
      },
    },
  };
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      // Hero animation
      gsap.from(heroRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });

      // Who We Are animation
      gsap.from(section1Ref.current, {
        scrollTrigger: {
          trigger: section1Ref.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.2,
      });

      // Our Story animation
      gsap.from(section2Ref.current, {
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.3,
      });

      // Our Mission animation
      gsap.from(section3Ref.current, {
        scrollTrigger: {
          trigger: section3Ref.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.4,
      });

      // Our Team animation
      gsap.from(section4Ref.current, {
        scrollTrigger: {
          trigger: section4Ref.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.5,
      });
    },
    { scope: containerRef }
  );

  return (
    <main
      ref={containerRef}
      className="min-h-screen w-full flex justify-center items-center flex-col relative before:absolute before:content-[''] before:w-full before:h-full before:bg-[#395a50] before:top-0 before:block before:mask-[url(/pattern2.svg)] before:mask-center before:mask-cover bg-[#ffffff] p-8"
    >
      <div className="w-full max-w-6xl mx-auto py-20 pt-40 z-[0] bg-white">
        {/* Hero Section */}
        <div ref={heroRef} className="text-center mb-20">
          <h1 className=" text-2xl sm:text-4xl xl:text-5xl font-bold text-black mb-4">
            {t.aboutUs.title}
          </h1>
          <p className="text:lg lg:text-xl black max-w-2xl mx-auto">
            {t.aboutUs.subtitle}
          </p>
        </div>

        {/* Section 1: Who We Are */}
        <div
          ref={section1Ref}
          className="flex flex-col md:flex-row gap-12 items-center mb-32  p-12 rounded-xl"
        >
          <div className="md:w-1/2">
            <h2 className="text-xl sm:text-3xl xl:text-4xl font-bold text-black mb-6">
              {t.aboutUs.whoWeAre.title}
            </h2>
            <p className="black mb-4">{t.aboutUs.whoWeAre.content1}</p>
            <p className="black">{t.aboutUs.whoWeAre.content2}</p>
          </div>
          <div className="md:w-1/2 w-full h-full">
            <Image
              src="/about-identity.jpg"
              alt="Who We Are"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>

        {/* Section 2: Our Story */}
        <div
          ref={section2Ref}
          className="flex flex-col md:flex-row gap-12 items-center  p-12 mb-32"
        >
          <div className="md:w-1/2  w-full h-full">
            <Image
              src="/about-story.jpg"
              alt="Our Story"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl sm:text-3xl xl:text-4xl font-bold text-black mb-6">
              {t.aboutUs.ourStory.title}
            </h2>
            <p className="black mb-4">{t.aboutUs.ourStory.content1}</p>
            <p className="black">{t.aboutUs.ourStory.content2}</p>
          </div>
        </div>

        {/* Section 3: Our Mission */}
        <div
          ref={section3Ref}
          className="flex flex-col md:flex-row-reverse gap-12  p-12 items-center mb-32"
        >
          <div className="md:w-1/2 w-full h-full">
            <Image
              src="/about-mission.jpg"
              alt="Our Mission"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl sm:text-3xl xl:text-4xl font-bold text-black mb-6">
              {t.aboutUs.ourMission.title}
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-black mr-3">✓</span>
                <span className="black">{t.aboutUs.ourMission.point1}</span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3">✓</span>
                <span className="black">{t.aboutUs.ourMission.point2}</span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3">✓</span>
                <span className="black">{t.aboutUs.ourMission.point3}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 4: Our Team */}
        <div
          ref={section4Ref}
          className="flex flex-col md:flex-row gap-12  p-12 items-center"
        >
          <div className="md:w-1/2 w-full h-full">
            <Image
              src="/about-team.jpg"
              alt="Our Team"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl sm:text-3xl xl:text-4xl font-bold text-black mb-6">
              {t.aboutUs.ourTeam.title}
            </h2>
            <p className="black mb-4">{t.aboutUs.ourTeam.content}</p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-[#f8f8f8] p-4 rounded-lg">
                <h3 className="font-bold text-black">
                  {t.aboutUs.ourTeam.stat1}
                </h3>
                <p className="text-gray-500 text-sm">
                  {t.aboutUs.ourTeam.stat1Label}
                </p>
              </div>
              <div className="bg-[#f8f8f8] p-4 rounded-lg">
                <h3 className="font-bold text-black">
                  {t.aboutUs.ourTeam.stat2}
                </h3>
                <p className="text-gray-500 text-sm">
                  {t.aboutUs.ourTeam.stat2Label}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
