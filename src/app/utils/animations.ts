import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import ScrollSmoother from 'gsap/dist/ScrollSmoother';

const switchColor = (color: any, i: any) => {
  const main = document.getElementById('main');
  const img = document.getElementById('img');
  const pattern = document.getElementById('pattern');
  const section = document.getElementsByClassName('section');
  const sections: HTMLDivElement[] = gsap.utils.toArray(section);
  // sections[0].dataset.bgcolor = color;
  // gsap.to(main, {
  //   duration: 0.4,
  //   ease: 'power1.inOut',
  //   backgroundColor: color,
  // });
  // gsap.to(pattern, {
  //   duration: 0.4,
  //   ease: 'power1.inOut',
  //   '--colorArrow': i,
  // });
};
export const animateSlider = (
  color: string,
  patternColor: any,
  mainp: string,
  side1: string,
  side2: string,
  setSrcImage: React.Dispatch<React.SetStateAction<string[]>>
) => {
  // const main = document.getElementById('main');
  // console.log(color);
  // animatePageIn();
  // setSrcImage([mainp, side1, side2]);
  // switchColor(color, patternColor);
};

export const animatePageIn = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  const section = document.getElementsByClassName('section');
  const tomato1 = document.querySelector('.tomato1');
  const tomato2 = document.querySelector('.tomato2');
  const stick = document.querySelector('.stick');
  const stick2 = document.querySelector('.stick2');
  const stick3 = document.querySelector('.stick3');
  const stick4 = document.querySelector('.stick4');
  const sections: HTMLDivElement[] = gsap.utils.toArray(section);
  const co = ['#c21f28', '#eda554', 'white'];
  // const tl = gsap.timeline();
  // tl.set([tomato1, tomato2, stick, stick2, stick3, stick4], { opacity: 0 });
  // tl.fromTo(
  //   '.chips',
  //   {
  //     y: -250,
  //   },
  //   {
  //     y: 0,
  //     duration: 1.5,
  //     rotate: -4,
  //     ease: 'bounce',
  //   }
  // )
  //   .fromTo(
  //     tomato1,
  //     {
  //       x: 200,
  //       y: 100,
  //     },
  //     {
  //       x: 0,
  //       y: 0,
  //       opacity: 1,
  //     }
  //   )
  //   .fromTo(
  //     stick,
  //     {
  //       x: -200,
  //       y: 100,
  //     },
  //     {
  //       x: -100,
  //       y: 0,
  //       position: 'relative',
  //       zIndex: 2,
  //       rotate: -45,
  //       opacity: 1,
  //     },
  //     '<'
  //   )
  //   .fromTo(
  //     tomato2,
  //     {
  //       x: -200,
  //       y: -100,
  //     },
  //     {
  //       x: 0,
  //       y: 0,
  //       position: 'relative',
  //       zIndex: 2,
  //       opacity: 1,
  //     },
  //     '<'
  //   )
  //   .fromTo(
  //     stick2,
  //     {
  //       x: -200,
  //       y: -100,
  //     },
  //     {
  //       x: -10,
  //       y: -50,
  //       position: 'relative',
  //       zIndex: 2,
  //       rotate: 10,
  //       opacity: 1,
  //     },
  //     '<'
  //   )
  //   .fromTo(
  //     stick3,
  //     {
  //       x: 200,
  //       y: 100,
  //     },
  //     {
  //       x: 100,
  //       y: 0,
  //       rotate: 45,
  //       position: 'relative',
  //       zIndex: 2,
  //       opacity: 1,
  //     },
  //     '<'
  //   )
  //   .fromTo(
  //     stick4,
  //     {
  //       x: 200,
  //       y: -100,
  //     },
  //     {
  //       x: -10,
  //       y: 0,
  //       rotate: -40,
  //       position: 'relative',
  //       zIndex: 2,
  //       opacity: 1,
  //     },
  //     '<'
  //   )
  //   .fromTo(
  //     [tomato1, stick, tomato2, stick2, stick3, stick4],
  //     {
  //       y: 10,
  //     },
  //     {
  //       y: 0,
  //       ease: 'linear',
  //       duration: 1,
  //       yoyo: true,
  //       repeat: -1,
  //     }
  //   );

  // if (sections) {
  //   sections.forEach((section: any, i) => {
  //     const color = section.dataset.bgcolor;
  //     const previousColor = sections[i - 1]
  //       ? sections[i - 1].dataset.bgcolor
  //       : '#000000';
  //     ScrollTrigger.create({
  //       trigger: section,
  //       start: 'top center',
  //       end: 'bottom center',
  //       onEnter: () => switchColor(color, co[i]),
  //       onEnterBack: () =>
  //         i === sections.length - 1 && switchColor(color, co[i]),
  //       onLeave: () =>
  //         i === sections.length - 1 && switchColor('#000000', co[i]),
  //       onLeaveBack: () =>
  //         switchColor(previousColor, co[i - 1] ? co[i - 1] : '#000000'),
  //       id: (i + 1).toString(),
  //     });
  //   });
  // }
};
