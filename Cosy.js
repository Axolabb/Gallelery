const Animates = document.querySelectorAll('.animate')
/* Создаем переменную Animates,в которой есть все классы .animate */

for(const animate of Animates) { /* Цикл проходит по каждому классу(картинке) в переменной Animates*/   
    animate.addEventListener('click', () =>  {/* При клике на картинку - */
    if (animate.classList.contains('active')) { /* если в классе есть active то удалаем, либо если нет то добавляем */
        animate.classList.remove('active');
    } else {
        animate.classList.add('active');
    }
    });
}



