import { gql } from "@apollo/client";

const GetBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

const GetAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

const AddBookMutation = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;


const GetBookQuery = gql`
    query GetBook($id: ID){
        book(id: $id) {
            id
            name
            genre
            author {
                id
                name
                age
                books {
                    name
                    id
                }
            }
        }
    }
`;

export { GetBooksQuery, GetAuthorsQuery, AddBookMutation, GetBookQuery };
