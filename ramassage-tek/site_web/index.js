document.addEventListener("DOMContentLoaded", () => {

    //Pagination Js

    const iconDroit = document.querySelector('.icndroit_pagin');
    const link_pagin = document.querySelectorAll('.link_pagin');
    let debut = 0;

    link_pagin.forEach((link, i) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const active = document.querySelector('.active');
            if (active) {
                active.classList.remove('active');
            }

            link.classList.add('active');
            debut = i;
        });
    });



    iconDroit.addEventListener('click', (e) => {
        e.preventDefault();


        if (debut < link_pagin.length - 1) {
            debut++;
        } else {
            debut = 0;
        }

        link_pagin.forEach((link, i) => {
            link.classList.toggle('active', i === debut);
        });
    });

    //filter select js

  const selects = document.querySelectorAll(".select");

  selects.forEach(select => {

    const input = select.querySelector(".fl_input");
    const arrow = select.querySelector(".arrow");
    const list = select.querySelector(".select_list");
    const items = select.querySelectorAll("li");

    
    select.addEventListener("click", (e) => {
      e.stopPropagation(); 

      const isOpen = list.style.display === "block";

      closeAll(); 

      if (!isOpen) {
        list.style.display = "block"; 
        arrow.classList.replace("ri-arrow-down-s-line", "ri-arrow-up-s-line"); 
      }
    });

    
    items.forEach(item => {
      item.addEventListener("click", () => {
        input.value = item.textContent; 
        list.style.display = "none"; 
        arrow.classList.replace("ri-arrow-up-s-line", "ri-arrow-down-s-line"); 
      });
    });

  });

  
  function closeAll() {
    document.querySelectorAll(".select_list").forEach(list => list.style.display = "none"); 
    document.querySelectorAll(".arrow").forEach(arrow => {
      arrow.classList.replace("ri-arrow-up-s-line", "ri-arrow-down-s-line"); 
    });
  }

  
  document.addEventListener("click", closeAll);

    //filter Range pagination js
    const rangeMin = document.getElementById("RangeMin");
    const rangeMax = document.getElementById("RangeMax");
    const progress = document.querySelector(".slider .progress");

    const priceMin = document.getElementById("priceMin");
    const priceMax = document.getElementById("priceMax");

    function updateRange() {

        let min = parseInt(rangeMin.value);
        let max = parseInt(rangeMax.value);
        let maxRange = parseInt(rangeMax.max);


        if (min > max) {
            rangeMin.value = max;
            min = max;
        }

        if (max < min) {
            rangeMax.value = min;
            max = min;
        }


        progress.style.left = (min / maxRange) * 100 + "%";
        progress.style.right = 100 - (max / maxRange) * 100 + "%";


        priceMin.textContent = min + "$";
        priceMax.textContent = max + "$";
    }

    rangeMin.addEventListener("input", updateRange);
    rangeMax.addEventListener("input", updateRange);

    updateRange();


});