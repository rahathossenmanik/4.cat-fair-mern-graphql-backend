const { queries, author, book, date } = require('./queries');

exports.resolvers = {
  Date: date,
  Query: queries,
  Author: author,
  Book: book
};
