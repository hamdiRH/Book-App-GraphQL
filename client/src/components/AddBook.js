import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import {
  GetAuthorsQuery,
  AddBookMutation,
  GetBooksQuery,
} from "../queries/queries";

const AddBook = () => {
  const [form, setform] = useState({});
  const { loading, error, data } = useQuery(GetAuthorsQuery);
  const [addBookMutation] = useMutation(AddBookMutation);
  if (error) return <p>Error :(</p>;

  const displayAuthors = () => {
    if (loading) {
      return <option disabled>Loading authors</option>;
    } else {
      return data.authors.map((author) => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        );
      });
    }
  };
  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addBookMutation({
      variables: {
        ...form,
      },
      refetchQueries: [{ query: GetBooksQuery }],
    });
  };
  return (
    <form id="add-book" onSubmit={handleSubmit}>
      <div className="field">
        <label>Book name:</label>
        <input type="text" name="name" onChange={handleChange} />
      </div>
      <div className="field">
        <label>Genre:</label>
        <input type="text" name="genre" onChange={handleChange} />
      </div>
      <div className="field">
        <label>Author:</label>
        <select name="authorId" onChange={handleChange}>
          <option>Select author</option>
          {displayAuthors()}
        </select>
      </div>
      <button>+</button>
    </form>
  );
};

export default AddBook;
