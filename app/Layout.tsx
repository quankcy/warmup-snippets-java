// import Search from "./search/Search";
// import {Grid} from "semantic-ui-react";
import {Folders} from "./folders/Folders";
import {Language} from "./language/Language";
// import React from "react";
import {CodePane} from "./code/CodePane";
import {Loader} from "./code/Loader";
import {Grid} from "semantic-ui-react";
import Search from "./search/Search";
// import 'semantic-ui-css/semantic.min.css';

function Layout() {
    // @ts-ignore
  return (
        <Grid>
            <Grid.Row>
                <Grid.Column width={16}>
                    <Loader/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={1}/>
                <Grid.Column width={2}>
                    <Language/>
                </Grid.Column>
                <Grid.Column width={12}>
                    <Search/>
                </Grid.Column>
                <Grid.Column width={1}/>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={1}/>
                <Grid.Column width={2}>
                    <Folders/>
                </Grid.Column>
                <Grid.Column width={12}>
                    {/*<CodePane text={''}/>*/}
                    <CodePane />
                </Grid.Column>
                <Grid.Column width={1}/>
            </Grid.Row>
        </Grid>
    );
}

export default Layout;