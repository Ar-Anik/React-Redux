import { useState } from "react";
import { addBook } from "./BookSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const books = useSelector((state) => state.bookReducer.books);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const book = books[books.length - 1];
    const id = book.id + 1;

    dispatch(addBook({ id, title, author }));
    navigate("/", { replace: true });
  };

  return (
    <div>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="title">Title : </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>

        <div className="form-field">
          <label htmlFor="author">Author : </label>
          <input
            type="text"
            id="author"
            name="author"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddBook;
