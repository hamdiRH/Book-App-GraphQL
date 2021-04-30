import React, { Component } from "react";
import { useQuery, gql } from "@apollo/client";

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

const BookList = () => {
  const { loading, error, data } = useQuery(getBooksQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <ul id="book-list">
        {data.books.map((book) => {
          return <li key={book.id}>{book.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default BookList;
