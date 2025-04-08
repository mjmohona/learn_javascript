// var javasctipt = {
//     name: 'JavaScript',
//     libraries: ["React", "Angular", "Vue"],
//     printLibraries: function (){
//         this.libraries.forEach((a) => console.log(`${this.name} loves ${a}`));
//     },
// };
// javasctipt.printLibraries();

const searchInput = document.querySelector(".search");
const display = document.querySelector(".result");
const thanks = document.querySelector(".thanks");

// Normal function that works perfectly
function show(){
    display.innerHTML = this.value;
    setTimeout(function (){
        thanks.innerHTML = `you have typed: ${this.value}`;
    }, 1000);
}
// const showme = () => {
//     display.innerHTML = this.value;
// };

searchInput.addEventListener("Keyup", show);