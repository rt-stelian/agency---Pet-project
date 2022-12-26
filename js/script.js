const navList = document.querySelector(".works__nav-list");
const item = document.querySelectorAll(".works__column");

navList.addEventListener("click", (ev) => {
  if (ev.target.classList.contains("works__nav-items")) {
    const filterName = ev.target.dataset.filterSelector;

    item.forEach((el) => {
      el.classList.remove("hide");
      if (el.dataset.filterTarget !== filterName && filterName !== 'all') {
        el.classList.add('hide')
      }
    });
  }
});
