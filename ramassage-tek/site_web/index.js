
iconDroit = document.querySelector('.icndroit_pagin');
link_pagin = document.querySelectorAll('.link_pagin');

    debut = 0;

link_pagin.forEach((link_pagins, i) => {
    link_pagins.addEventListener('click', () => {
        debut = i;
        document.querySelector('.active').classList.remove('active');
        link_pagins.classList.add('active');
    })

    
        /*iconDroit.addEventListener('click', (e) => {
            if( debut < 10){ debut += e.target.id === "link" ? -1 : 1;
                link_pagins.forEach((link_pagins, i) => {
                    link_pagins.classList.toggle('active', i === debut);
                })
            } 1
2

        })*/
   

});