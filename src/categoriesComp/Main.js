import React,{useState,useEffect} from 'react'
import Menu from './Menu'
import Category from './Category'
import items from './data'
import Search from './Search'

const allCategories = ['all', ...new Set(items.map((item) => (item.category)))]


export default function Main() {
    const [searchTerm, setSearchTerm] = useState("");
    const [menuItems, setMenuItems] = useState(items)
    const [categories, setCategories] = useState([allCategories])


    const filterItems = (category) => {
        const newItems = items.filter(item=> item.category === category)
        if(category==="all"){
            return setMenuItems(items)
        } else {
          return setMenuItems(newItems)
        }
        
    }

    const submitHandler = (term) => {
      const results = items.filter((item) =>
          item.title.toLowerCase().includes(term)
        );
       return setMenuItems(results);
    }



    return (
        <main>
            <h2 className='btn-container'>Restaurant Menu</h2>
            <Search  searcher={submitHandler} />
            <Category categories={allCategories} filteredItems={filterItems}/>
            <Menu items={menuItems} />
            
        </main>
    )
}
