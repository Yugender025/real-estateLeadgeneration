const testimonials = [
  {
    id: 1,
    name: "Kapil properties",
    image: "assets/images/kapil.png",
    text: "Choosing Digital Win was the best decision.Their expertise in real estate marketing isunmatched. Transparent communication made our colaboration efficient and successful.",
  },
  {
    id: 2,
    name: "AVL SAMSKRUTI",
    image: "assets/images/avl.png",
    text: "Working with Digital Win was a game changer. Their focused approach on leads brought tangible results. Expertise and transparency set them apart.",
  },
  {
    id: 3,
    name: "PSR PRIME TOWERS",
    image: "assets/images/psr.png",
    text: "The team at Digital Win provided expert guidance every step of the way. Their in-depth market knowledge and personalized approach made all the difference for our business.",
  },
  {
    id: 4,
    name: "Urbanrise",
    image: "assets/images/urbanriselogo.png",
    text: "Digital Win went above and beyond to ensure our real estate listings stood out. Their marketing strategies delivered exceptional results, exceeding our expectations!",
  },
  {
    id: 5,
    name: "Anvita",
    image: "assets/images/anvita.png",
    text: "From the first interaction, Digital Win impressed us with their transparency and dedication. They truly understand the real estate market and deliver outstanding results.",
  },
  {
    id: 6,
    name: "Vasavi Group",
    image: "assets/images/vasavi.png",
    text: "Thanks to Digital Win, our property listings gained maximum exposure, and we saw a significant increase in sales. Their expertise is second to none!",
  },
  {
    id: 7,
    name: "High9",
    image: "assets/images/client7.webp",
    text: "Digital Win’s team is highly professional and results-driven. Their innovative marketing strategies helped us reach the right buyers quickly. Highly recommended!",
  },
];

class TestimonialCarousel {
  constructor(testimonials) {
    this.testimonials = testimonials;
    this.currentIndex = 3; // Start with middle testimonial
    this.wrapper = document.querySelector(".testimonials-wrapper");
    this.dotsContainer = document.querySelector(".dots");
    this.init();
  }

  init() {
    this.createTestimonials();
    this.createDots();
    this.updateCarousel();
    this.startAutoplay();
  }

  createTestimonials() {
    this.testimonials.forEach((testimonial, index) => {
      const element = document.createElement("div");
      element.className = "testimonial";
      element.innerHTML = `
                          <div class="avatar">
                              <img src="${testimonial.image}" alt="${testimonial.name}">
                          </div>
                          <div class="content">
                              <div class="name">${testimonial.name}</div>
                              <div class="text">${testimonial.text}</div>
                          </div>
                      `;
      this.wrapper.appendChild(element);
    });
  }

  createDots() {
    this.testimonials.forEach((_, index) => {
      const dot = document.createElement("div");
      dot.className = "dot";
      dot.addEventListener("click", () => this.setCurrentIndex(index));
      this.dotsContainer.appendChild(dot);
    });
  }

  updateCarousel() {
    const testimonialElements = document.querySelectorAll(".testimonial");
    const dots = document.querySelectorAll(".dot");

    testimonialElements.forEach((element, index) => {
      let position = index - this.currentIndex;
      if (position < -3) position += this.testimonials.length;
      if (position > 3) position -= this.testimonials.length;

      element.className = "testimonial";
      if (Math.abs(position) <= 2) element.classList.add("visible");
      if (position === 0) element.classList.add("active");

      element.style.transform = `
                          translateX(${position * 120}px)
                          scale(${position === 0 ? 1.2 : 0.8})
                      `;
      element.style.zIndex = 3 - Math.abs(position);
    });

    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === this.currentIndex);
    });
  }

  setCurrentIndex(index) {
    this.currentIndex = index;
    this.updateCarousel();
  }

  startAutoplay() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
      this.updateCarousel();
    }, 5000);
  }
}

// Initialize the carousel
new TestimonialCarousel(testimonials);
