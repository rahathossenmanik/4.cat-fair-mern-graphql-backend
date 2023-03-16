const Author = require('../../models/Author');
const Book = require('../../models/Book');
const { GraphQLScalarType } = require('graphql');

exports.date = new GraphQLScalarType({
  name: 'Date',
  description: 'A date represented as an ISO-8601 string',
  serialize: (value) => value.toISOString().slice(0, 10)
});

exports.queries = {
  authors: () => {
    return Author.find().then((data) => data);
  },
  author: (parent, args) => {
    const { id } = args;
    return Author.findById(id).then((data) => data);
  },
  books: () => {
    return Book.find().then((data) => data);
  },
  book: (parent, args) => {
    const { id } = args;
    return Book.findById(id).then((data) => data);
  }
};

exports.author = {
  books: (parent) => {
    const { id } = parent;
    return Book.find()
      .where('author')
      .equals(id)
      .then((data) => data);
  }
};

exports.book = {
  author: (parent) => {
    const { id } = parent;
    return Book.findById(id)
      .populate('author')
      .then((data) => data.author);
  }
};
