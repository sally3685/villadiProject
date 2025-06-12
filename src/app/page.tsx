import Change from '@/components/change';
export default async function Home() {
  const array = [
    {
      color: '#8e191c',
      patternColor: '#c21f28',
      main: '/ketchup.png',
      side1: '/tomato.png',
      side2: '/puff.png',
    },
    {
      color: '#cd6628',
      patternColor: '#eda554',
      main: '/77.png',
      side1: '/tomato.png',
      side2: '/puff.png',
    },
  ];
  return (
    <main
      id="main"
      className="h-full w-full flex justify-center items-center flex-col max-w-8xl relative before:absolute before:content-[''] before:w-full before:h-full before:bg-[var(--colorArrow)] before:top-0 before:block before:mask-[url(/pattern2.svg)] before:mask-center before:mask-cover "
      // style={{ "&::before": { mask: "url(/pattern.svg) center / cover" } }}
      // mask: url(/pattern.svg) center center / cover;
    >
      <section
        className="w-full flex justify-center items-center h-[100vh]  section"
        data-bgcolor="#8e191c"
      >
        <div
          className="grid w-[500px] h-1/2 justify-center items-center relative  before:absolute before:content-[''] before:w-1/2 before:h-full before:bg-[#ffffffa6] before:top-0 before:blur-3xl before:left-[22%]"
          style={{
            gridTemplateAreas:
              "'a b .' '. b c' 'i b v' '. b .' 'p b g' '. b .'",
          }}
        >
          <Change array={array} />
        </div>
      </section>
      <section className="w-full h-[100vh]  section" data-bgcolor="#cd6628">
        second
      </section>
      <section className="w-full h-[100vh] section" data-bgcolor="#016101">
        third
      </section>
      <section className="w-full h-[100vh] section" data-bgcolor="#016101">
        third
      </section>
      <section className="w-full h-[100vh] section" data-bgcolor="#016101">
        third
      </section>
    </main>
  );
}
