// Api by banghasan
// Code by Wahyudi Firmansyah

const surah = document.getElementById("surah");
const ayat = document.getElementById("ayat");
const arti = document.getElementById("arti");
const wrapper = document.querySelector(".wrapper");
const preloader = document.querySelector(".preloader");

window.addEventListener("load", ()=> {
    preloader.classList.add("disable");
    setTimeout(() => {
        preloader.style.display = "none";
    }, 500)
})

function getImage() {
    let random = Math.floor(Math.random() * (5 - 1)) + 1;
    console.log(random);
    wrapper.style.background = `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(images/${random}.webp)`;
    wrapper.style.backgroundSize = "cover";
}

async function getData() {
    const fetchData = await fetch("https://api.banghasan.com/quran/format/json/acak");
    const response = await fetchData.json();
    getImage();
    render(response);
}

getData();

function render(data) {
    surah.innerText = `${data.surat.nama} (${data.acak.id.ayat})`;
    ayat.innerText = data.acak.ar.teks;
    arti.innerText = data.acak.id.teks;
}