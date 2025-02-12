const blogPosts = [
  {
    title: "Anvita",
    category: "aws",
    link: "blog2.html",
    image: "assets/images/high9-slider-2.jpg",
    content:
      "A leading real estate developer approached us to market their newly launched residential project and drive high-quality sales conversions. The project featured premium apartments in a prime location..",
    date: "Jun 11, 2024",
  },
  {
    title: "Urbanrise",
    category: "services",
    link: "blog2.html",
    image: "assets/images/urbanrise3.webp",
    content:
      "A leading real estate developer approached us to market their newly launched residential project and drive high-quality sales conversions. The project featured premium apartments in a prime location..",
    date: "Jun 11, 2024",
  },
  {
    title: "GR mayoora",
    category: "create",
    link: "blog3.html",
    image: "assets/images/mayoora-8.jpg",
    content:
      "A leading real estate developer approached us to market their newly launched residential project and drive high-quality sales conversions. The project featured premium apartments in a prime location..",
    date: "Jun 11, 2024",
  },
  //   {
  //     title: "hihg9",
  //     category: "create",
  //     link: "blog5.html",
  //     image: "assets/images/iamuser.png",
  //     content:
  //       "AWS Identity and Access Management (IAM) is an essential service that allows you to manage user access and control permissions for resources in your AWS environment. Creating individual IAM users for each person or application accessing..",
  //     date: "Jun 11, 2024",
  //   },
];

function createBlogCard(post) {
  return `
          <div class="blog-card">
              <div class="card-image">
                 
                      <img src="${post.image}" alt="icon" style="width: 100%; height: 100%; object-fit: cover;">
               
                 
              </div>
              <div class="card-content">
                  <h4 class="card-title">${post.title}</h4>
                  <p class="card-text">${post.content}</p>
                  <div class="card-footer">
                      <span class="card-date">${post.date}</span>
                      <a href="${post.link}" class="read-more">
                          Read more
                          <span>→</span>
                      </a>
                  </div>
              </div>
          </div>
      `;
}

// Function to filter blog posts
function filterPosts(category) {
  const blogGrid = document.getElementById("blogGrid");
  blogGrid.innerHTML = "";

  const filteredPosts =
    category === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === category);

  filteredPosts.forEach((post) => {
    blogGrid.innerHTML += createBlogCard(post);
  });
}

// Initialize the blog grid
filterPosts("all");

// Add click event listeners to filter buttons
document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    // Update active button
    document.querySelector(".filter-btn.active").classList.remove("active");
    button.classList.add("active");

    // Filter posts
    filterPosts(button.dataset.category);
  });
});
