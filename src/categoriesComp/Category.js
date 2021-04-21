import React from 'react'

export default function Category({categories, filteredItems}) {
    return (
        <div className="btn-container">
            {categories.map((category)=>{
                return (
                    <button className="filter-btn" onClick={()=>filteredItems(category)} >{category}</button>
                )
            })
            
        }



            
            {/* <button className="filter-btn" onClick={()=>filteredItems('breakfast')} >breakfast</button> */}
        </div>
    )
}
