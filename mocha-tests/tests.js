//*** TO RUN THIS FILE, JUST GO INTO ITS FOLDER (IN CMD/TERMINAL) AND TYPE -> node tests.js
const Container = require('./object');

const container = new Container();

const data1 = [
    {id: 1, name: "John"},
    {id: 2, name: "Bob"},
    {id: 1, name: "John", product: "Hub"},
    {id: 3, name: "Alice"}
];

const data2 = [
    {id: 1, name: "John", product: "Computer", price: 599.99},
    {id: 2, name: "Bob", product: "Desktop", price: 799.99},
    {id: 1, name: "John", product: "Hub", price: 199.99},
    {id: 3, name: "Alice", product: "iPhone", price: 999.99}
];

container.merge1(data1);
container.merge2(data1, data2);

const values = [8, 5, 2, 8, 3, 1, 8];
container.maths(values);
/*
container.add(5);
container.add(4);
container.add(3);
container.add(9);

//console.log("TAMANHO: ", container.length);

container.getAll();

container.setElementAtIndex(2, 7);

container.getAll();

console.log("--->>> MEDIAN: ", container.getMedian());

console.log("-> [3] ", container.getElementAtIndex(3));
*/

/*
if (container.delete(4)) {
    console.log("SUCESSO");
}
else{
    console.log("fracasso");
}

container.getAll();
*/