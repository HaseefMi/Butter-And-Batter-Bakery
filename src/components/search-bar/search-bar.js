import './search-bar.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

function SearchBar() {
    const [query, setQuery] = useState("");
    const [noProducts, setNoProducts] = useState(false)
    const [counter, setCounter] = useState(false);
    const [results, setResults] = useState([])

    useEffect(() => {
        const delayDebounceFn = setTimeout(async () => {
            if (query) { 
                try {
                    const response = await axios.get(`http://127.0.0.1:8000/search-bar/search/?q=${query}`);
                    setResults(response.data); 
                } catch (error) {
                    console.error('Error fetching search results:', error);
                }
            } else {
                setResults([]); 
            }
        }, 300); 
    
        return () => clearTimeout(delayDebounceFn); 
    }, [query]);

    useEffect(() => {
        setNoProducts(results.length === 0);
    }, [results]);

    useEffect(() => {
        setCounter(query.length > 0);
    }, [query]);

    return (
        <div className='search-bar-container'>
            <input 
                type='text' 
                placeholder='Search' 
                onChange={(e) => setQuery(e.target.value)}
                value={query}
            />
            <div>
                {results.length > 0 ? (
                    results.map((item, index) => (
                        <div key={index}>
                            {item.name}
                            <img className='search-img' src={item.image_url} alt={item.name} />
                        </div>
                    ))
                ) : (
                    <></> 
                )}
            </div>
            {noProducts && counter && <p>No Results Found</p>}
        </div>
    );
}

export default SearchBar;
