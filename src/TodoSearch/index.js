//import { useState } from "react";
import "./TodoSearch.css"


const TodoSearch = ({
    searchValue,
    setSearchValue,

}) => {

    const handleChange = (e) => {
        setSearchValue(e.target.value)
    }



    const handleSubmit = (e) => {
        e.preventDefault()
    }




    return (
        <div className="TodoSearch">
            <div className="search__title">

                <span>ㄒㄖㅤᗪㄖ</span>
            </div>
            <form onSubmit={handleSubmit}>
                <label
                    htmlFor="search" className="search__input"
                >
                    <ion-icon name="search-outline"></ion-icon>
                    <input
                        id="search"
                        type="text"
                        value={searchValue}
                        onChange={handleChange}
                        placeholder="Procure seu To do"
                    ></input>
                </label>

            </form>
            <div >


            </div>
        </div >
    )
}

export { TodoSearch }
