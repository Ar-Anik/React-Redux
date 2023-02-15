import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
  books: [
    { id: 1, title: "Why 14 February is Valentins Day.", author: "anik" },
    { id: 2, title: "Why I have no girl-Friend.", author: "aranik" },
  ],
};

const bookSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,

    addBook: (state, action) => {
      state.books.push(action.payload);
    },

    updateBook: (state, action) => {
      const { id, author, title } = action.payload;

      const BookList = state.books.filter((book) => book.id === id);

      if (BookList) {
        BookList[0].author = author;
        BookList[0].title = title;
      }
    },

    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
  },
});

export const { showBooks, addBook, updateBook, deleteBook } = bookSlice.actions;

export default bookSlice.reducer;
