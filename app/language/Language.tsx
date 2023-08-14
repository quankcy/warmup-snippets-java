import {SearchOption} from "../search/SearchOption";
// import React from "react";

const languages: SearchOption[] = [
    {key: "java", text: "Java", value: "java"}
]

export function Language() {
    return (
        // <Dropdown
        //     // placeholder='Language'
        //     icon={'file code'}
        //     fluid
        //     selection
        //     options={languages}
        //     defaultValue={languages[0].value}
        //     // text={'asd'}
        //     labeled
        //     button
        //     className='icon'
        // />
        <select className="ui fluid search dropdown" multiple={false}>
            <option value="">State</option>
            <option value="AL">Alabama</option>
        </select>
    );
}