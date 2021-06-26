const AuthorService = require('./dataSource/AuthorService');
// data source
const dataSources = () => ({
    authorService: new AuthorService()
})

// resolver
const resolvers = {
    Query: {
        // get author by id
        findAuthorById: (parent, { id }, { dataSources }, info) => {
            // make sure to use getAuthorById function same as in AuthorService class
            return dataSources.authorService.getAuthorById(id)[0];
        },
        author: (parent, args, { dataSources }, info) => {
            // make sure to use getAllAuthors function same as in AuthorService class
            return dataSources.authorService.getAllAuthors(args);
        }
    }
}
module.exports = { resolvers, dataSources };