// import React from "react";
// import {Button} from "semantic-ui-react";
import {readFileSync} from "fs";
import { join } from 'path';

export function Loader(){
    function click() {
        // console.log("clicked");
        // const result = readFileSync(join(__dirname, filename), 'utf-8');
        // const result = readFileSync("/Volumes/Dane/Projekty/github/quankcy/warmup-snippets/src/content/Diff21Test.java", 'utf-8');
        // console.log(result);
    }

    return(
        // <button className="ui button" onClick={click}>Click Here</button>
        <button className="ui button">Click Here</button>
    )
}