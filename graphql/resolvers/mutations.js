const Author = require('../../models/Author');
const Book = require('../../models/Book');

exports.mutations = {
  createAuthor: async (_, { givenName, lastName, country, birthdate }, { dataSources }) => {
    return await Author.create({ givenName, lastName, country, birthdate });
  },
  createBook: async (_, { title, author, genre, publicationDate }, { dataSources }) => {
    return await Book.create({ title, author, genre, publicationDate });
  }
};
