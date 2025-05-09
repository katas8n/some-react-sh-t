import { Link, Outlet } from "react-router-dom";
import { books } from "../constants/constants";

function BooksLayout() {
    return ( 
        <section>
            <Link to="1">Book 1</Link>
            <br />
            <Link to="2">Book 2</Link>
            <br />
            <Link to="3">Book 3</Link>
            <br />

            <Outlet context={{ extraInfo: "Extra Info", books }}/>
        </section>
    );
}

export default BooksLayout;