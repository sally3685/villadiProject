import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
export const animatePageIn = (pathname: string) => {
  gsap.registerPlugin(ScrollTrigger);
  const section = document.getElementsByClassName("section");
  const sections: HTMLDivElement[] = gsap.utils.toArray(section);

  if (sections) {
    // Cache elements with proper types
    const main = document.querySelector("main") as HTMLElement;
    const sec1 = document.getElementById("section1") as HTMLElement;
    const sections = document.querySelectorAll("section");

    // Store current active section
    let activeSection: HTMLElement | null = null;

    // Function to update main background
    const updateMainBg = (color = "000000", pcolor = "ffffff") => {
      if (color != "000000" && pcolor !== "ffffff")
        gsap.to(main, {
          backgroundColor: color,
          duration: 0.5,
          ease: "power2.inOut",
          "--colorArrow": pcolor,
        });
    };

    // Initialize ScrollTrigger
    function initScrollColor() {
      sections.forEach((section) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top 50%",
          end: "bottom 50%",
          onEnter: () => {
            activeSection = section as HTMLElement;
            updateMainBg(
              activeSection.dataset.bgcolor,
              activeSection.dataset.color
            );
          },
          onEnterBack: () => {
            activeSection = section as HTMLElement;
            updateMainBg(
              activeSection.dataset.bgcolor,
              activeSection.dataset.color
            );
          },
        });
      });
    }

    // Watch for data-bgcolor changes (for your slider)
    function observeColorChanges() {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (
            mutation.type === "attributes" &&
            mutation.attributeName === "data-bgcolor" &&
            mutation.target === activeSection
          ) {
            const target = mutation.target as HTMLElement; // Fix: Type assertion

            updateMainBg(target.dataset.bgcolor, target.dataset.color);
          }
        });
      });

      sections.forEach((section) => {
        observer.observe(section, { attributes: true });
      });
    }

    // Initialize everything
    initScrollColor();
    observeColorChanges();
  }
};
