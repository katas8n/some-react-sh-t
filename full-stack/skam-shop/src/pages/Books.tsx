import { useEffect, useState } from "react";

export function Books() {
    const [books, setBooks] = useState([]); 
  
    useEffect(() => {
      (async function () {
        const response = await fetch("http://localhost:3000/books", {
          method: "GET"
        });
        const books = await response.json(); 
  
        setBooks(books);
        
      })()
  
    }, [])
    
    return (
        <>
            <h1>
                Books Page
            </h1>

            <section>
                {books.map(book => {
                    return (
                        <div className="bg-fuchsia-600" key={book.id}>
                            <h2 className="text-3xl font-bold underline text-purple-300">{book.title}</h2>
                            <h2>{book.descriotion}</h2>
                            <img src={book.imgSrc} alt="Try again later!" /> 
                            <p>Price: {book.price}</p>

                            <div className="btn-wrapper">
                                <button className="bg-fuchsia-400 rounded-md px-10 py-2 cursor-pointer border-2 border-amber-400">
                                    Buy
                                </button>
                            </div>
                        </div>
                    )
                })}
            </section>
        </>  
    );
}
