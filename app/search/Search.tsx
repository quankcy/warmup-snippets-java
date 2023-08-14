import {Dropdown} from "semantic-ui-react";
import {SearchOption, searchOptionObject} from "./SearchOption";
// import React from "react";

const tags: SearchOption[] = [
    searchOptionObject("string"),
    searchOptionObject("number"),
    searchOptionObject("collection"),
    searchOptionObject("list"),
    searchOptionObject("set"),
    searchOptionObject("queue"),
    searchOptionObject("stack"),
    searchOptionObject("map"),
    searchOptionObject("sort")
]

function Search() {
    return (
        <Dropdown
            placeholder='Tags'
            icon={'search'}
            labeled
            fluid
            multiple
            search
            selection
            options={tags}
            style={{float: "right"}}
        />
    )
}

export default Search;