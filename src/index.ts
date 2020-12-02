import Addition from 'addition'
import Subtraction from 'subtraction'

// console.log('Addition Result: ', addition(1, 2))

// console.log('Subtraction Result: ', subtraction(5, 2))


import { ApolloServer, gql } from 'apollo-server'

const typeDefs = gql`
  type Query {
    addition(x: Int, y: Int): Int
    subtraction(x: Int, y: Int): Int
  }
`

const resolvers = {
  Query: {

    addition(_, { x = 0, y = 0 }) {
      return Addition(x, y)
    },

    subtraction(_, { x = 0, y = 0 }) {
      return Subtraction(x, y)
    }

  }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen(5000).then(({ url }) => console.log(`🚀  Server ready at ${url}`))