import React, { Component } from "react";
import { useQuery } from "@apollo/client";

import { GetBookQuery } from "../queries/queries";

const BookDetails = ({ bookId }) => {
  const { loading, error, data } = useQuery(GetBookQuery, {
    variables: {
      id: bookId,
    },
  });

  const displayBookDetails = () => {
    if (data && data.book) {
      const { book } = data;
      return (
        <div>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <p>All books by this author:</p>
          <ul className="other-books">
            {book.author.books.map((item) => {
              return <li key={item.id}>{item.name}</li>;
            })}
          </ul>
        </div>
      );
    } else {
      return <div>No book selected...</div>;
    }
  };
  return (
    <div id="book-details">
      <p>{displayBookDetails()}</p>
    </div>
  );
};

export default BookDetails;
