// const array = [
//     45, 
//     "I", 
//     true, 
//     null, 
//     "am", 
//     3.56, 
//     "a", 
//     undefined, 
//     { catchphrase: "Oh hai, Mark"}, 
//     "JS", 
//     "rockstar"]; 

//     const stringArray = [];

// array.forEach(element => {
//    if(typeof element === "string") {
//        stringArray.push(element);
//    }

// });
// console.log(stringArray)

// alternative option

// let array = [45, "I", true, null, "am", 3.56, "a", undefined, { catchphrase: "Oh hai, Mark"}, "JS", "rockstar"]

// const strings = array.filter(item => {
//     const isString = (typeof item === 'string')
//     return isString;
// })

// console.log(strings)

// alternative option

let array = [45, "I", true, null, "am", 3.56, "a", undefined, { catchphrase: "Oh hai, Mark"}, "JS", "rockstar"]

const strings = array.filter(item => {
    return typeof item === 'string';
});

console.log(strings)

let mainContent = document.querySelector(".main-content")
mainContent.innerHTML = `<h1>${strings.join(" ")}</h1>`