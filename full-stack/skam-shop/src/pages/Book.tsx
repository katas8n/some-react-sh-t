import { useParams } from "react-router-dom";

export function Book() {
    const { id } = useParams()
    // const { books } = useOutletContext()
    
    // const [currentBook] = books.filter(b => +b.id == +id);
    
    

    return (  
        <h2>There is a book : {id}</h2>
    );
}
