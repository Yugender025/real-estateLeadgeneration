const testimonials = [
  {
    id: 1,
    name: "Bharath",
    image: "assets/images/kapil.png",
    text: "Lorem ipsum dolor sit amet consectetur. Nisi eu ullamcorper arcu metus. Sed sit imperdiet in egestas at imperdiet quam pretium. Libero vel lacus augue in faucibus nulla. At dolor sit imperdiet lacus.",
  },
  {
    id: 2,
    name: "Hari",
    image: "assets/images/kapil.png",
    text: "Lorem ipsum dolor sit amet consectetur. Nisi eu ullamcorper arcu metus. Sed sit imperdiet in egestas at imperdiet quam pretium. Libero vel lacus augue in faucibus nulla. At dolor sit imperdiet lacus.",
  },
  {
    id: 3,
    name: "Pavan",
    image: "assets/images/kapil.png",
    text: "Lorem ipsum dolor sit amet consectetur. Nisi eu ullamcorper arcu metus. Sed sit imperdiet in egestas at imperdiet quam pretium. Libero vel lacus augue in faucibus nulla. At dolor sit imperdiet lacus.",
  },
  {
    id: 4,
    name: "Nithin Reddy",
    image: "assets/images/kapil.png",
    text: "Lorem ipsum dolor sit amet consectetur. Nisi eu ullamcorper arcu metus. Sed sit imperdiet in egestas at imperdiet quam pretium. Libero vel lacus augue in faucibus nulla. At dolor sit imperdiet lacus.",
  },
  {
    id: 5,
    name: "Bharth naik",
    image: "assets/images/kapil.png",
    text: "Lorem ipsum dolor sit amet consectetur. Nisi eu ullamcorper arcu metus. Sed sit imperdiet in egestas at imperdiet quam pretium. Libero vel lacus augue in faucibus nulla. At dolor sit imperdiet lacus.",
  },
  {
    id: 6,
    name: "Lakshmi",
    image: "assets/images/kapil.png",
    text: "Lorem ipsum dolor sit amet consectetur. Nisi eu ullamcorper arcu metus. Sed sit imperdiet in egestas at imperdiet quam pretium. Libero vel lacus augue in faucibus nulla. At dolor sit imperdiet lacus.",
  },
  {
    id: 7,
    name: "Yuktha",
    image: "assets/images/kapil.png",
    text: "Lorem ipsum dolor sit amet consectetur. Nisi eu ullamcorper arcu metus. Sed sit imperdiet in egestas at imperdiet quam pretium. Libero vel lacus augue in faucibus nulla. At dolor sit imperdiet lacus.",
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
