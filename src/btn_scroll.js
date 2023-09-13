const $scrollBtn = document.querySelector(".scroll__top-btn");

export function scrollTopBtn() {
  document.addEventListener("scroll", (e) => {
    const scrollTop = document.documentElement.scrollTop;

    if (scrollTop > 1000) {
      $scrollBtn.classList.add("scroll__top-btn--visible");
    } else {
      $scrollBtn.classList.remove("scroll__top-btn--visible");
    }
  });

  $scrollBtn.addEventListener("click", (e) => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  });
}
