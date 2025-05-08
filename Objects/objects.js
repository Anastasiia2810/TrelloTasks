let book = {
    title:"Колонія.Нові Темні Віки",
    author:"Макс Кідрук",
    year:2022,
};
console.log(book);


let bookData = {
    title:"Колонія.Нові Темні Віки",
    author:"Макс Кідрук",
    year:2022,
};

bookData.genre = "Фантастика";

console.log(bookData);


let bookObjects = {
    title:"Колонія.Нові Темні Віки",
    author:"Макс Кідрук",
    year:2022,
    genre:"Фантастика",
};

delete bookObjects.year;

console.log(bookObjects);