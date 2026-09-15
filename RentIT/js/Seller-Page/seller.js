document.addEventListener("DOMContentLoaded", ()=> {
    const nav1 = document.querySelector(".nav1");
    const nav2 = document.querySelector(".nav2");
    const nav3 = document.querySelector(".nav3");
    const nav4 = document.querySelector(".nav4");
    const nav5 = document.querySelector(".nav5");
    const nav6 = document.querySelector(".nav6");
    const date = new Date();

    nav1.addEventListener("click", (event)=> {
        event.preventDefault();
        nav1.classList.add('active');
        nav2.classList.remove('active');
        nav3.classList.remove('active');
        nav4.classList.remove('active');
        nav5.classList.remove('active');
        nav6.classList.remove('active');
    });
    nav2.addEventListener("click", (event)=> {
        event.preventDefault();
        nav2.classList.add('active');
        nav1.classList.remove('active');
        nav3.classList.remove('active');
        nav4.classList.remove('active');
        nav5.classList.remove('active');
        nav6.classList.remove('active');
    });
    nav3.addEventListener("click", (event)=> {
        event.preventDefault();
        nav3.classList.add('active');
        nav2.classList.remove('active');
        nav1.classList.remove('active');
        nav4.classList.remove('active');
        nav5.classList.remove('active');
        nav6.classList.remove('active');
    });
    nav4.addEventListener("click", (event)=> {
        event.preventDefault();
        nav4.classList.add('active');
        nav2.classList.remove('active');
        nav3.classList.remove('active');
        nav1.classList.remove('active');
        nav5.classList.remove('active');
        nav6.classList.remove('active');
    });
    nav5.addEventListener("click", (event)=> {
        event.preventDefault();
        nav5.classList.add('active');
        nav2.classList.remove('active');
        nav3.classList.remove('active');
        nav4.classList.remove('active');
        nav1.classList.remove('active');
        nav6.classList.remove('active');
    });
    nav6.addEventListener("click", (event)=> {
        event.preventDefault();
        nav6.classList.add('active');
        nav2.classList.remove('active');
        nav3.classList.remove('active');
        nav4.classList.remove('active');
        nav5.classList.remove('active');
        nav1.classList.remove('active');
    });

    const options = { month: "long", day: "numeric", year: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);

    const dateSpan = document.getElementById("dateToday");
    if (dateSpan) {
        dateSpan.textContent = formattedDate;
    }
});
