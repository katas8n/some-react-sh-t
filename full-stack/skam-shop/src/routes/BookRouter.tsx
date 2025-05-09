import { Route, Routes } from "react-router-dom";
import { Book, Books, NewBook } from "../pages";
import BooksLayout from "../pages/BooksLayout";

export function BookRouter() {
    return ( 
        <>
            <BooksLayout />

            <Routes>
                <Route index element={<Books />}/>
                <Route path=":id" element={<Book />}/>
                <Route path="new_book" element={<NewBook />}/>
            </Routes>
        </>
     );
}
