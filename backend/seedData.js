const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Book = require('./models/Book');

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const sampleBooks = [
  {
    name: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    category: "Classic",
    description: "A story of decadence and excess in Jazz Age America.",
    price: 12.99,
    imageUrl: "https://www.google.com/imgres?q=the%20great%20gatsby%20book&imgurl=https%3A%2F%2Fd28hgpri8am2if.cloudfront.net%2Fbook_images%2Fonix%2Fcvr9781645176596%2Fthe-great-gatsby-and-other-works-9781645176596_hr.jpg&imgrefurl=https%3A%2F%2Fwww.simonandschuster.co.in%2Fbooks%2FThe-Great-Gatsby-and-Other-Works%2FF-Scott-Fitzgerald%2FLeather-bound-Classics%2F9781645176596&docid=7DE2wvhjBFgnyM&tbnid=-fBr7dY_KSlsCM&vet=12ahUKEwitwsaS4NWKAxX-SGcHHQ9fJIIQM3oECBwQAA..i&w=1400&h=2195&hcb=2&ved=2ahUKEwitwsaS4NWKAxX-SGcHHQ9fJIIQM3oECBwQAA"
  },
  {
    name: "To Kill a Mockingbird",
    author: "Harper Lee",
    category: "Classic",
    description: "A novel about racial injustice and the loss of innocence.",
    price: 14.99,
    imageUrl: "https://www.dramaticpublishing.com/media/catalog/product/cache/1/image/300x436/9df78eab33525d08d6e5fb8d27136e95/t/o/to_kill_a_mockingbird_cover-t34.jpg"
  },
  {
    name: "1984",
    author: "George Orwell",
    category: "Science Fiction",
    description: "A dystopian novel set in a totalitarian society.",
    price: 11.99,
    imageUrl: "https://example.com/1984.jp"
  }
];

async function seedDatabase() {
  try {
    await Book.deleteMany({});
    await Book.insertMany(sampleBooks);
    console.log('Database seeded successfully');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding database:', error);
    mongoose.connection.close();
  }
}

seedDatabase();

