import React , {useState , useEffect} from 'react'
import useFetch from './useFetch'

const SearchLogic = () => {
      const { data } = useFetch();
      const categories = data.categories;
    
      const [items, setItems] = useState([]);
      const [query, setQuery] = useState("");
    
      useEffect(() => {
        if (categories) {
          setItems(categories.map((item) => item.title));
        }
      }, [categories]);
    
      const filteredItems = items
        .filter((item) => item.toLowerCase().includes(query.toLowerCase()))
        .sort((a, b) => a.localeCompare(b));

  return {filteredItems , query ,setQuery}
}

export default SearchLogic