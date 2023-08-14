import {List} from "semantic-ui-react";
// import React from "react";

export function Folders() {
    return (
        <List>
            <List.Item>
                <List.Icon name='folder'/>
                <List.Content>
                    Java
                    <br/>
                    <List>
                        <List.Item>
                            <List.Icon name='folder'/>
                            <List.Content>CodingBat
                                <br/>
                                <List>
                                    <List.Item>
                                        <List.Icon name='folder'/>
                                        <List.Content>Group 1
                                            <br/><List>
                                                <List.Item>
                                                    <List.Icon name='file code outline'/>
                                                    <List.Content>Name 1</List.Content>
                                                </List.Item>
                                                <List.Item>
                                                    <List.Icon name='file code outline'/>
                                                    <List.Content>Name 1</List.Content>
                                                </List.Item>
                                                <List.Item>
                                                    <List.Icon name='file code outline'/>
                                                    <List.Content>Name 1</List.Content>
                                                </List.Item>
                                            </List>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name='folder'/>
                                        <List.Content>Group 2</List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name='folder'/>
                                        <List.Content>Group 3</List.Content>
                                    </List.Item>
                                </List>
                            </List.Content>
                        </List.Item>
                    </List>
                </List.Content>
            </List.Item>
        </List>
    );
}