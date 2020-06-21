const NUM_BOOKS = 10;
let total = 0,
  totalAuthor = 0,
  totalPic = 0;

//create arrays of books [Title]
const bookTitle = [
  "The Effective Engineer",
  "Built To Last",
  "The Lean Startup",
  "Effective Python",
  "Big Magic",
  "The Effective Engineer",
  "Built To Last",
  "The Lean Startup",
  "Effective Python",
  "Big Magic",
];

//an array of book pictures
const bookPicture = [
  "../Assets/Images/builttoLast.jpg",
  "../Assets/Images/theleanStartup.jpg",
  "../Assets/Images/effectivePython.jpg",
  "../Assets/Images/bigMagic.jpg",
  "../Assets/Images/builttoLast.jpg",
  "../Assets/Images/theleanStartup.jpg",
  "../Assets/Images/effectivePython.jpg",
  "../Assets/Images/bigMagic.jpg",
  "../Assets/Images/theleanStartup.jpg",
  "../Assets/Images/effectivePython.jpg",
];

//array of book type
const bookType = ["Motivational", "Business, Entrepreneurship"];
const bookStatus = ["Available", "Sold Out", "Borrowed Out"];

//array of authors of the books
const bookAuthors = [
  "Edmond Lau - 2009",
  "Jim Collins, Jerry I, Porras - 2001",
  "Eric Reis - 2005",
  "Diomidis Spinellis",
  "Elizabeth Gilbert - 2014",
  "Edmond Lau - 2009",
  "Jim Collins, Jerry I, Porras - 2001",
  "Eric Reis - 2005",
  "Diomidis Spinellis",
  "Elizabeth Gilbert - 2014",
];

// generate a random number between min and max
const rand = (max, min = 0) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

//get the title of books
const getTitle = () => `${bookTitle[total++]}`;
//get pictures of books
const getPicture = () => `${bookPicture[totalPic++]}`;
//get types of books
const getbookType = () => `${bookType[rand(bookType.length - 1)]}`;
//get status of book if sold out or not
const getStatus = () => `${bookStatus[rand(bookStatus.length - 1)]}`;
//get authors of books
const getAuthor = () => `${bookAuthors[totalAuthor++]}`;

//create an array of object of the book list
const createBookList = () => ({
  title: getTitle(),
  pictures: getPicture(),
  type: getbookType(),
  status: getStatus(),
  author: getAuthor(),
});

// add unique keys to list of array of object
const addKeys = (val, key) => ({ key, ...val });

// create an array of length NUM_CONTACTS and alphabetize by name
//loop through the array and add keys. loop through using 'map'
//the length shows how many array should be in the array container
const BookArray = Array.from({ length: NUM_BOOKS }, createBookList).map(
  addKeys
);
