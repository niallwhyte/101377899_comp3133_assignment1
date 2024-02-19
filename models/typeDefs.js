const gql = require("graphql-tag");

const typeDefs = gql`
  type Query {
    greetings: String
    welcome(name: String): String
    employees: [Employee]
    employee(id: ID): Employee
    login(username: String, password: String): User
  }

  type Employee {
    id: ID
    firstName: String
    lastName: String
    email: String
    gender: String
    salary: Int
  }
  
  type User {
    id: ID
    username: String
    email: String
    password: String
  }

  type Mutation {
    create(firstName: String, lastName: String, email: String, gender: String, salary: Int): Employee
    update(id: ID, firstName: String, lastName: String, email: String, gender: String, salary: Int): Employee
    delete(id: ID): Employee
    
    createUser(username: String, email: String, password: String): User
  }
`;

module.exports = { typeDefs };