const blogPosts = [
  {
    title: "GR mayoora",
    category: "create",
    link: "case1.html",
    image: "assets/images/mayoora-8.jpg",
    content:
      "The apartments at GR Mayoora are thoughtfully designed to provide residents with a luxurious lifestyle, offering spacious 2 and 3-bedroom options that truly redefine contemporary living...",
    date: "Jun 11, 2024",
  },
  {
    title: "Anivta High9",
    category: "services",
    link: "case2.html",
    image: "assets/images/high9anivita.jpg",
    content:
      "A leading real estate developer approached us to market their newly launched residential project and drive high-quality sales conversions. The project featured premium apartments in a prime location..",
    date: "Jun 11, 2024",
  },
  {
    title: "Kapil properties",
    category: "create",
    link: "case3.html",
    image: "assets/images/kapil-1.png",
    content:
      "Strategically developed in proximity to Hyderabad’s international airport, Kapil Business Park is Shamshabad’s premier commercial real estate project...",
    date: "Jun 11, 2024",
  },
  // {
  //   title: "GR mayoora",
  //   category: "create",
  //   link: "case4.html",
  //   image: "assets/images/mayoora-8.jpg",
  //   content:
  //     "A leading real estate developer approached us to market their newly launched residential project and drive high-quality sales conversions. The project featured premium apartments in a prime location..",
  //   date: "Jun 11, 2024",
  // },
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
                  <div class="leads_continaer">
                   <div class="card-date">
                         <i class="fa-brands fa-google"> 
                            </i><p class="green" style="
                                color: green;
                                font-weight: bold;
                            ">24%</p>
                      </div>
                     <div class="card-date">
                         <i class="fa-brands fa-square-facebook" style="color: #0911e1;"></i>
                         <p class="green" style="
                                color: green;
                                font-weight: bold;
                            ">24%</p>
                      </div>  
                  </div>
                      <a target="_blank" href="${post.link}" class="read-more">
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
