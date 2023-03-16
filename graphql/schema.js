const { readdirSync, readFileSync } = require('fs');
const { join } = require('path');
const { queries, author, book, date } = require('./resolvers/queries');

const gqlFiles = readdirSync(join(__dirname, './interfaces'));

let typeDefs = '';

gqlFiles.forEach((file) => {
  typeDefs += readFileSync(join(__dirname, './interfaces', file), {
    encoding: 'utf8'
  });
});

exports.typeDefs = typeDefs;

exports.resolvers = {
  Date: date,
  Query: queries,
  Author: author,
  Book: book
};
