

var tl = gsap.timeline()

tl.from("#name h1",{
    x:-500,
    opacity: 0,
    duration: 0.8,
    stagger: 0.3
})

tl.from(".nav-menu li",{
    y: -50,
    opacity: 1,
    duration: 0.5,
    stagger: 0.1
})


gsap.from("#summary",{
    x:-500,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3
})



gsap.from(".cards-content .card",{
    scale: 0,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger:{
        trigger: ".cards-content .card",
        scroller: "body",
        // markers: true,
        start: "30% 80%",
        end: "30% 20%",
    }
})


gsap.from("#skills .my-cursor",{
    scale: 0,
    duration: 1,
    stagger: 0.2,
    delay: 1.5,
    scrollTrigger:{
        trigger: "#skills .my-cursor",
        scroller: "body",
    }
})

const mycursor = document.querySelector("#skills .my-cursor");
const skillsSection = document.querySelector("#skills");

skillsSection.addEventListener("mousemove", (event) => {
    mycursor.style.display = "block";
    gsap.to(mycursor, {
        left: event.clientX,
        top: event.clientY,
    });
});

skillsSection.addEventListener("mouseenter", () => {
    skillsSection.style.cursor = "none";
});

skillsSection.addEventListener("mouseleave", () => {
    mycursor.style.display = "none";
});




lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
    disableScrolling: true,
});


