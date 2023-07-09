// =========================toggle icon navbar =======================
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = ()=> {
    menuIcon.classlist.toggle(" bx-x");
    navbar.classlist.toggle("active");

};

  // scroll reveal //

  ScrollReveal({
    // reset:true,
    distance:'80px',
    duration: 2000,
    delay:200,
});

ScrollReveal().reveal('.paragraph , .heading '  , { origin: 'top'});
ScrollReveal().reveal('.my-img , .service-portion  .portfolio-object , .conatct-container '  , { origin: 'bottom'});
ScrollReveal().reveal('.about-img , .paragraph h1  ', { origin: 'left'});
ScrollReveal().reveal('.paragraph h3 ', { origin: 'right'});

// ----------------------------- Typed JS --------------------------------------->


const typed =  new Typed('.multiple-text', {
    strings:[`  Web-developer`, `  YouTuber` , 'Insta-Influencer' , "Actor", 'Blogger'     ],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true,

});


// --------------------- scrollsection out line link -------------------
let section = document.querysselectorAll("section")
let navlink = document.querySelectorAll("header nav a")

window.onscroll = ()=> {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150 ;
        let height = sec.offsetheight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height ){
            navlink.foreach(links => {
                links.classlist.remove("active");
                 document.querySelector('header nav a[href*=' + id + ']').classlist.add("ACtive");
            })

        }
    });
    // -------------------------------------------sticky Nav-bar----------------------------.
    let header = document.querySelector("header")

    header.classlist.toggle("sticky", window.scrollY > 100 )

}
