/*
dependencies
 */
import React, {useState} from "react";
import {AddCategory} from "./components/AddCategory";
import {GifGrid} from "./components/GifGrid";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Chelsea']);

    return (
        <>
            <h2>Premier League</h2>
            <AddCategory setCategory={setCategories}/>
            <hr/>
            <ol>
                {
                    categories.map((category) =>
                        <GifGrid
                            key={category}
                            category={category}/>
                    )
                }
            </ol>
        </>
    );
}
