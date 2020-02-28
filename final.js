// function giveOpacity() {
//     let box = document.getElementsByClassName("box");
//     let opacities = box.style.opacity;
//     let heh2 = Number(opacities);
//     let box2 = document.getElementById("indomap");
//     let opacit = box2.style.opacity;
//     let hehe = Number(opacit);
//     heh2 += 0.1;
function Opacity() {
    let box = document.getElementsByClassName('box');
    let indomap = document.getElementsByClassName("indomap");
    console.log(window.scrollY);
    if (window.scrollY >= 550 && window.scrollY <= 980) {
        for (let i = 0; i < box.length; i++) {
            let transparency = Number(box[i].style.opacity);
            if (transparency <= 1) {
                transparency += 0.05;
                box[i].style.opacity = transparency;
            }
        }
    }
    if (window.scrollY >= 1200 && window.scrollY <= 1400) {
        for (let i = 0; i < indomap.length; i++) {
            let transparency2 = Number(indomap[i].style.opacity);
            if (transparency2 <= 1) {
                transparency2 += 0.05;
                indomap[i].style.opacity = transparency2;
            }
        }
    }
}
// Thanks
window.addEventListener('scroll', () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;

    if (scrolled === scrollable) {
        alert('Thanks! See ya!');
    }
});

function dot() {
    alert(`Hello I'm Irwan, This is my first website...`)
}
function dot2() {
    alert(`Website ini hanya untuk sementara..`)
}
function dot3() {
    alert(`Coming Soon`)
}
function dot4() {
    alert(`Soon...`)
}