// 简单轮播图切换
let currentSlide = 0;
const slides = document.querySelectorAll(".slides img");
const dots = document.querySelectorAll(".banner-dots .dot");

function showSlide(index) {
  slides.forEach((img, i) => {
    img.classList.toggle("active", i === index);
    dots[i].classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // 每3秒自动切换

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    currentSlide = i;
    showSlide(i);
  });
});

// 模拟商品数据
const products = [
  { id: 1, name: "华为 Mate70 Pro", price: 6999, img: "img/mate70.png" },
  { id: 2, name: "iPhone 17", price: 5999, img: "img/iphone17.png" },
  { id: 3, name: "小米电视 65英寸", price: 3299, img: "img/p3.jpg" },
  { id: 4, name: "美的空调 1.5匹", price: 2599, img: "img/p4.jpg" },
  { id: 5, name: "耐克运动鞋", price: 699, img: "img/p5.jpg" },
  { id: 6, name: "戴尔笔记本", price: 4999, img: "img/p6.jpg" },
  { id: 7, name: "索尼耳机", price: 899, img: "img/p7.jpg" },
  { id: 8, name: "安踏外套", price: 499, img: "img/p8.jpg" },
];

// 渲染商品到首页
const productContainer = document.getElementById("productContainer");
products.forEach((p) => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${p.img}" alt="${p.name}">
    <h3>${p.name}</h3>
    <p>￥${p.price}</p>
    <button class="add-cart-btn">加入购物车</button>
  `;
  productContainer.appendChild(card);
});
