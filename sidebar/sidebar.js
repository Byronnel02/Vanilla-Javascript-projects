const exit = document.querySelector('.exit')
const menu = document.querySelector('.bars')
const sidebar = document.querySelector('.side-container')
const breakpoint = 700; 

const updateMenuVisibility = () => {
  if(window.innerWidth < breakpoint) {
    if (sidebar.classList.contains('show-sidebar')) {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'inline';
    } 
  } else {
    menu.style.display = 'inline';
  }
};

menu.addEventListener("click", () => {
  sidebar.classList.toggle('show-sidebar')
  updateMenuVisibility()
})


exit.addEventListener("click", () => {
  sidebar.classList.toggle('show-sidebar')
  updateMenuVisibility()
})

window.addEventListener('resize', () => updateMenuVisibility());










// if(sidebar.classList.contains("show-sidebar") && window.innerWidth > breakpoint) {
//     sidebar.classList.remove("bars")
// } else {
//     sidebar.classList.add("bars")

// }

