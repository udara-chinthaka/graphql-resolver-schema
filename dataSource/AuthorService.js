const author = require('../data/author.json');
const _ = require('lodash');

// Author service
class AuthorService {

    getAllAuthors(args) {
        // use _ for filter from any data
        return _.filter(author, args);
    }

    // uer data from id
    getAuthorById(id) {
        return author.filter(function (author) {
            return author.id == id;
        });
    }
}
module.exports = AuthorService