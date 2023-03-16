const { mutations } = require('./mutations');
const { queries, author, book, date } = require('./queries');

exports.resolvers = {
  Date: date,
  Query: queries,
  Mutation: mutations,
  Author: author,
  Book: book
};
