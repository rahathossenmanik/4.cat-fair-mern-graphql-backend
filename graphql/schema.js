const { readdirSync, readFileSync } = require('fs');
const { join } = require('path');
const { resolvers } = require('./resolvers');

const gqlFiles = readdirSync(join(__dirname, './interfaces'));

let typeDefs = '';

gqlFiles.forEach((file) => {
  typeDefs += readFileSync(join(__dirname, './interfaces', file), {
    encoding: 'utf8'
  });
});

exports.typeDefs = typeDefs;

exports.resolvers = resolvers;
