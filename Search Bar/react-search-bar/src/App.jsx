import { useState } from 'react'
import './App.css'
import { Search } from "./Components/Search.jsx"
import { SearchResults } from './Components/SearchResults';

const App = () => {
  const [result, setResults] = useState([]);

  return (
    <>
    <h1>React Search Bar</h1>
      <Search setResults={setResults}/>
      <SearchResults result={result}/>
    </>
  )
}

export default App;