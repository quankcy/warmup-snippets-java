// import React from 'react';
import {CopyBlock, dracula} from "react-code-blocks";
// import * as fs from "fs";

// export function CodePane(props) {
export function CodePane() {

    return (
        <CopyBlock
            text={''}
            language={'java'}
            showLineNumbers={true}
            theme={dracula}
        />
    );
}

// export default CodePane;