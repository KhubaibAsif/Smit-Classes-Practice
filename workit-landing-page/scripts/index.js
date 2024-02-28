const info = [
  {
    id: 1,
    title: "Actionable insights",
    desc: "Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.",
  },
  {
    id: 2,
    title: "Data-driven decisions",
    desc: "Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.",
  },
  {
    id: 3,
    title: "Always affordable",
    desc: "Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.",
  },
];

const featuresContainer = document.getElementById("feature");
featuresContainer.innerHTML = info
  .map((item) => {
    return `
  <div class="feature__wrapper">
  
  <div class="feature__wrapper--top">
  <div class="feature__wrapper--circle">
  <span class="feature__wrapper--circle-title">${item.id}</span>
  </div>
  </div>
  <div class="feature__wrapper--bottom">
  <h1 class="feature__wrapper--title">${item.title}</h1>
  <p class="feature__wrapper--desc">
  ${item.desc}
  </p>
  </div>
 
</div>
  
  `;
  })
  .join("");
