/* =-=-=-=-=- Ordered list -=-=-=-=-= */

let ordered_list_why_deb = window.document.querySelectorAll('.why-deb ol li');
let list_counter = 1

for (item of ordered_list_why_deb) {
    let list_indicator_number = window.document.createElement('span');
    list_indicator_number.textContent = list_counter;
    item.appendChild(list_indicator_number);
    list_counter++;
}

/* =-=-=-=-=- Change testimonial -=-=-=-=-= */

let testimonials_list = window.document.querySelectorAll('.testimonials ul li');
let previous_button = window.document.querySelector('.testimonials button#previous');
let next_button = window.document.querySelector('.testimonials button#next');
let next_testimonial = 1
let current_testimonial = 0
let previous_testimonial = testimonials_list.length - 1

function changeTestimonial() {
    (current_testimonial != null) && testimonials_list[current_testimonial].classList.remove('show-testimonial');
    testimonials_list[previous_testimonial].classList.remove('previous-testimonial');
    testimonials_list[next_testimonial].classList.remove('next-testimonial');
    testimonials_list[next_testimonial].classList.add('show-testimonial');

    previous_testimonial = current_testimonial;
    current_testimonial = next_testimonial;
    next_testimonial = ((next_testimonial + 1) / testimonials_list.length) != 1 ? next_testimonial + 1 : 0;

    testimonials_list[previous_testimonial].classList.add('previous-testimonial');
    testimonials_list[next_testimonial].classList.add('next-testimonial');
}

let changeTestimonialTimer = setInterval(changeTestimonial, 5000);

previous_button.addEventListener('click', () => {
    clearInterval(changeTestimonialTimer);
    testimonials_list[current_testimonial].classList.remove('show-testimonial');
    testimonials_list[previous_testimonial].classList.remove('previous-testimonial');
    testimonials_list[next_testimonial].classList.remove('next-testimonial');

    next_testimonial = current_testimonial;
    current_testimonial = previous_testimonial;
    testimonials_list[current_testimonial].classList.add('show-testimonial');
    previous_testimonial = ((previous_testimonial - 1) < 0) ? testimonials_list.length - 1 : previous_testimonial - 1;

    testimonials_list[previous_testimonial].classList.add('previous-testimonial');
    testimonials_list[next_testimonial].classList.add('next-testimonial');

    changeTestimonialTimer = setInterval(changeTestimonial, 5000);
})

next_button.addEventListener('click', () => {
    clearInterval(changeTestimonialTimer);
    testimonials_list[current_testimonial].classList.remove('show-testimonial');
    testimonials_list[previous_testimonial].classList.remove('previous-testimonial');
    testimonials_list[next_testimonial].classList.remove('next-testimonial');

    previous_testimonial = current_testimonial;
    current_testimonial = next_testimonial;
    testimonials_list[current_testimonial].classList.add('show-testimonial');
    next_testimonial = ((next_testimonial + 1) / testimonials_list.length) != 1 ? next_testimonial + 1 : 0;

    testimonials_list[previous_testimonial].classList.add('previous-testimonial');
    testimonials_list[next_testimonial].classList.add('next-testimonial');

    changeTestimonialTimer = setInterval(changeTestimonial, 5000);
})
