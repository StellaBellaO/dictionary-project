import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
     let [results, setResults] = useState(null);
      
    function handleResponse(response) {
    setResults(response.data[0]);
    }

    function search(event) {
        event.preventDefault();

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }
   

    return (
        <div className="Dictionary">
            <h1 className="form-paragraph text-center">What word are you searching for?</h1>
<form onSubmit={search} className="form-search">
    <input type="search" placeholder="Type a word.." size={50} onChange={handleKeywordChange}/>
</form>
<p className="example-section text-center"> i.e Ocean, Sunrise, River </p>
<Results results={results} />
        </div>
    );
}