
let menu = document.querySelector('#menu-icon');
let nav = document.querySelector('.nav');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('open');
}

const optionMenu = document.querySelector(".dropdown"),
      selectBtn = optionMenu.querySelector(".dropdown-select"),
      options = optionMenu.querySelectorAll(".option"),
      sBtn_text = optionMenu.querySelector(".select");

 selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

options.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOPtion = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOPtion;

        optionMenu.classList.remove("active");
    })
}
)

