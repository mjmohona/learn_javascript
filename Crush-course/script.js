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
// function show(){
//     display.innerHTML = this.value;
//     var self = this;
//     setTimeout(function (){
//         thanks.innerHTML = `you have typed: ${self.value}`;
//     }, 1000);
// }


searchInput.addEventListener("Keyup", () => {
    display.innerHTML = this.value;
    }
);