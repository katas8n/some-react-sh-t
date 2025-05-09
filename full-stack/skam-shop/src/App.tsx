import { Route, Routes } from 'react-router-dom';
import './index.css';
import { Books } from './pages';


function App() {



  return (
    <>
      {/* <header>
        <nav>
          <ul>
            <li>
              <NavLink  style={{ background: "darkmagenta" }} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/books">Books</NavLink>
            </li>
          </ul>
        </nav>
      </header> */}
      <Routes>
        <Route path='books' element={<Books />} /> 
        {/* path */}
        {/* <Route path='/' element={<Home />} />
        <Route path='/books' element={<BooksLayout />}>
          <Route index element={<Books />}/>
          <Route path=':id' element={<Book />}  />
          <Route path='new_book' element={<NewBook />}  />
        </Route>
        <Route path='*' element={<NotFound />}  />
        <Route /> */}
      </Routes>
    </>
  )
}

export default App
