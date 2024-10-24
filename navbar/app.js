const navToggle = document.querySelector('.bars')
const links = document.querySelector('.links')
const socials = document.querySelector('.socials')




navToggle.addEventListener("click", () => {
    links.classList.toggle("show-links");
    socials.classList.toggle("show-socials");
    navToggle.classList.add("animate");
    
    if (links.classList.contains("show-links")) {
      navToggle.classList.add("animate");
      navToggle.classList.remove("reverse");
    } else {
      navToggle.classList.add("reverse");
      navToggle.classList.remove("animate");
    }
  });

  

