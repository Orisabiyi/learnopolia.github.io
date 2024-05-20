// Changing navbar styles on scroll
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

// Toggle answers to FAQs
const quesContainer = document.querySelector(".faqs__container");
// faqs.forEach(faq => {
//   faq.addEventListener('click', () => {
//     faq.classList.toggle('open');
//     // change faq icon
//     const icon = faq.querySelector('.faq__icon i');
//     if (icon.className === 'uil uil-plus') {
//       icon.className = 'uil uil-minus';
//     } else {
//       icon.className = 'uil uil-plus';
//     }
//   });
// });

quesContainer.addEventListener("click", function (e) {
  const targetElement = e.target.closest(".faq");

  document.querySelectorAll(".faq").forEach((faq) => {
    faq.classList.remove("open");
    faq.querySelector(".faq__icon i").classList?.remove("uil-minus");
    faq.querySelector(".faq__icon i").classList?.add("uil-plus");
  });

  if (targetElement) {
    targetElement.classList.add("open");
    targetElement.querySelector(".faq__icon i").classList.add("uil-minus");
  }
});

// Show/hide Navigation Menu Button
const menu = document.querySelector(".nav__menu");
const openMenuBtn = document.querySelector("#open-menu-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");

// Adding click listener for the open-menu-btn
openMenuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeMenuBtn.style.display = "inline-block";
  openMenuBtn.style.display = "none";
});

// Closing the navigation menu
const closeMenuNav = () => {
  menu.style.display = "none";
  closeMenuBtn.style.display = "none";
  openMenuBtn.style.display = "inline-block";
};
// Adding click listener for the close-menu-btn
closeMenuBtn.addEventListener("click", closeMenuNav);
