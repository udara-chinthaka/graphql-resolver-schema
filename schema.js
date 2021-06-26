const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
type Query{
    author(
    id:ID
    authorName:String
    authorCountry:String
    language:String):[Author],
    findAuthorById(id:ID):Author
}

type Author {
        id:ID!
        authorName:String!
        authorCountry:String
        language:String
        book:[Book]
    }

type Book {
        id:ID!
        name:String!
        price: Int
        isbn:Int!
        category:Category
    }

enum Category{
        NOVEL
        DRAMA
        POEMS
        BIOGRAPHY
        COMEDIES
    }
`
module.exports = typeDefs;