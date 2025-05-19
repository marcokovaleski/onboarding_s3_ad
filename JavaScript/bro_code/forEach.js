let fruits = ['apple', 'banana', 'orange', 'coconut'];

fruits.forEach(capitalize)
fruits.forEach(display);

function capitalize(element, index, array) {
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function display(element) {
    console.log(element);
}