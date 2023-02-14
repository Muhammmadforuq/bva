document.querySelector('.menu-btn').addEventListener('click', () => {
  document.querySelector('.menu').classList.toggle('-translate-x-full')
  document.querySelector('.overlay').classList.toggle('hidden')
  document.querySelector('.hamburger').classList.toggle('hidden')
  document.querySelector('.hide').classList.toggle('hidden')
})

document.querySelector('.overlay').addEventListener('click', () => {
  document.querySelector('.menu').classList.toggle('-translate-x-full')
  document.querySelector('.overlay').classList.toggle('hidden')
  document.querySelector('.hamburger').classList.toggle('hidden')
  document.querySelector('.hide').classList.toggle('hidden')
})


// home page tab functionality
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  if(tab) {
    tab.addEventListener('click', () => {
      const target = document.querySelector(tab.dataset.tabTarget)
      tabContents.forEach(tabContent => {
        tabContent.classList.remove('active')
      })
      tabs.forEach(tab => {
        tab.classList.remove('active')
      })
      tab.classList.add('active')
      target.classList.add('active')
    })
  }
})


// accordion
const menuLinks = document.querySelectorAll(".accordion button");
menuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        let menuContent = link.nextElementSibling;
        let active = document.querySelector(".accordion section.active");

        if (menuContent) {
            if (active) {
                if (link.parentElement.classList.contains("active")) {
                    link.parentElement.classList.remove("active");
                    link.parentElement.classList.remove("text-brand-green");
                    link.parentElement.classList.remove("border-brand-green");
                    active.lastElementChild.style.height = "0";
                    link.querySelector(".plus").classList.toggle('hidden')
                    link.querySelector(".minus").classList.toggle('hidden')
                } else {
                    active.classList.remove("active");
                    active.classList.remove("text-brand-green");
                    active.classList.remove("border-brand-green");
                    active.querySelector(".plus").classList.toggle('hidden')
                    active.querySelector(".minus").classList.toggle('hidden')
                    active.lastElementChild.style.height = "0";
                    link.parentElement.classList.add("active");
                    link.parentElement.classList.add("text-brand-green");
                    link.parentElement.classList.add("border-brand-green");
                    menuContent.style.height = menuContent.scrollHeight + "px";
                    link.querySelector(".plus").classList.toggle('hidden')
                    link.querySelector(".minus").classList.toggle('hidden')
                }
            }
            else {
                link.parentElement.classList.add("active");
                link.parentElement.classList.add("text-brand-green");
                link.parentElement.classList.add("border-brand-green");
                menuContent.style.height = menuContent.scrollHeight + "px";
                link.querySelector(".plus").classList.toggle('hidden')
                link.querySelector(".minus").classList.toggle('hidden')
            }
        }
    });
});