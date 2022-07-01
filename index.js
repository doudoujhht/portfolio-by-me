const spans = document.querySelectorAll("#intro-text span");

spans.forEach((span, i) => {
    setTimeout(() => {
        span.style.display = "inline-block";
        span.classList.add("bounceIn");
    },i * 100);
    setTimeout(() => {
        span.classList.remove("bounceIn");
    },i * 100+1000);
    
})


spans.forEach(span => {
    span.addEventListener("mouseover", function() {
        span.classList.add("rubberBand");

        setTimeout(function() {
            span.classList.remove("rubberBand");
        },1000);
    });
});