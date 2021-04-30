import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GetBooksQuery } from "../queries/queries";

// components
import BookDetails from "./BookDetails";

const BookList = () => {
    const [selectedBookId, setselectedBookId] = useState()
  const { loading, error, data } = useQuery(GetBooksQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <ul id="book-list">
        {data.books.map((book) => {
          return <li key={book.id} onClick={
              ()=>setselectedBookId(book.id)
          }>{book.name}</li>;
        })}
      </ul>
      <BookDetails bookId={selectedBookId} />
    </div>
  );
};

export default BookList;
