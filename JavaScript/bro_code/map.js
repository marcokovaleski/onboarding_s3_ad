const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(square);
const cubes = numbers.map(cube);

console.log(numbers);
console.log(squares);
console.log(cubes);

function square(numbers) {
    return Math.pow(numbers, 2);
}

function cube(numbers) {
    return Math.pow(numbers, 3);
}

const dates = ['2024-02-10', '2025-6-12', '2026-3-4'];
const formattedDates = dates.map(formatDates);

console.log(dates);
console.log(formattedDates);

function formatDates(element) {
    const parts = element.split('-');
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}