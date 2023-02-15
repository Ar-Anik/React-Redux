import { Route, Routes } from "react-router-dom";
import AddBook from "../features/AddBook";
import BookView from "../features/BooksView";
import EditBook from "../features/EditBook";
import Error from "../features/Error";
import Navbar from "../layout/Navbar";

const AppRouter = () => {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<BookView />} />

          <Route path="/addbook" element={<AddBook />} />

          <Route path="/editbook" element={<EditBook />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </>
  );
};

export default AppRouter;
