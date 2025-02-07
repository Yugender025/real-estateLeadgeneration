function loadSVG() {
  fetch("Container_animater.svg")
    .then((response) => response.text())
    .then((svg) => {
      document.getElementById("bg_city").innerHTML = svg;
      document
        .querySelector("#bg_city svg")
        .setAttribute("preserveAspectRatio", "xMidYMid slice");
      setAnimationScroll();
    })
    .catch((error) => console.error("Error loading SVG:", error));
}

function setAnimationScroll() {
  gsap.registerPlugin(ScrollTrigger);

  const runAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: "#bg_city",
      start: "top top",
      end: "+=1000",
      scrub: 1, // Added smoothing to the scrub
      pin: true,
    },
  });

  runAnimation
    .to(
      "#Image\\ Container-1",
      {
        x: -500,
        y: -200,
        ease: "power2.inOut",
        duration: 1,
        onStart: () => console.log("Animation 1 started"),
      },
      0
    )
    .to(
      "#Image\\ Container-2",
      {
        x: -500,
        y: 200,
        ease: "power2.inOut",
        duration: 1,
        onStart: () => console.log("Animation 2 started"),
      },
      0
    )
    .to(
      "#Image\\ Container-3",
      {
        x: 500,
        y: -200,
        ease: "power2.inOut",
        duration: 1,
        onStart: () => console.log("Animation 3 started"),
      },
      0
    )
    .to(
      "#Image\\ Container-4",
      {
        x: 500,
        y: 200,
        ease: "power2.inOut",
        duration: 1,
        onStart: () => console.log("Animation 4 started"),
      },
      0
    );
}

loadSVG();
