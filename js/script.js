let slideIndex = 1;
showSlide(slideIndex);

function slide_change(n){
    showSlide(slideIndex += n);
}

function current_slide(n){
    showSlide(slideIndex = n);
}

function showSlide(n){
    let i;
    let slides = document.getElementsByClassName("image");
    let doots = document.getElementsByClassName("dot");
    if(n > slides.length){
        slideIndex = 1
    }
    else if(n < 1){
        slideIndex = slides.length
    }
    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    for(i = 0; i < doots.length; i++){
        doots[i].className = doots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    doots[slideIndex - 1].className += " active";
}