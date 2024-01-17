// In this topic we will learn about the new operator called inner HTML.
// This method will rpint all the chiled elements of a perant..
// And with the use of this we can add more item in the html.

const headLine = document.querySelector(".headline");
console.log(headLine.innerHTML);

// Now we can add more items in that
// NOTE - If you use only equal (=) sign. Then it will delete all the existing elements inside of parent. If you want to keep existing elements then plus equal (+=) sign.

// headLine.innerHTML = "<button> Hello </button>"  // It wll remove existing element


headLine.innerHTML += "<button class=\"btn btn-headline\"> Hello </button>";

// We can also give them an extra attribute. i-e class, id, type etc

console.log(headLine.innerHTML);
// Now in the output, the new elements will present.