const Author = require('../../models/Author');
const Book = require('../../models/Book');

exports.mutations = {
  createAuthor: async (_, { givenName, lastName, country, birthdate }, { dataSources }) => {
    return await Author.create({ givenName, lastName, country, birthdate });
  },
  createBook: async (_, { title, author, genre, publicationDate }, { dataSources }) => {
    return await Book.create({ title, author, genre, publicationDate });
  },
  updateAuthor: async (_, { id, givenName, lastName, country, birthdate }, { dataSources }) => {
    await Author.findByIdAndUpdate(id, { id, givenName, lastName, country, birthdate });
    return Author.findById(id);
  },
  updateBook: async (_, { id, title, author, genre, publicationDate }, { dataSources }) => {
    await Book.findByIdAndUpdate(id, { id, title, author, genre, publicationDate });
    return Book.findById(id);
  },
  deleteAuthor: async (_, { id }, { dataSources }) => {
    const author = await Author.findById(id);
    await Author.findByIdAndDelete(id);
    return author;
  },
  deleteBook: async (_, { id }, { dataSources }) => {
    const book = await Book.findById(id);
    await Book.findByIdAndDelete(id);
    return book;
  }
};
