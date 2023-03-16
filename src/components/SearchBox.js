import React from "react";   

const SearchBox = ({searchChange}) => {
    return (
        
    <div className="pa3">
            <input
                className=" pa3 ba b--green bg-light-blue"
                type="search"
                placeholder="searching robot"
                onChange={searchChange} //listen for changes in the search box
            
            >
                </input>
    </div >
        );
    }


export default SearchBox;