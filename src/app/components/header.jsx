import React from 'react';
import {Segment, Header } from 'semantic-ui-react';

class AppHeader extends React.Component{

    render(){
        return(
            <Segment clearing>
                <Header as='h2' floated='left'>
                    Safira
                </Header>
            </Segment>
        );
    }
}

export default AppHeader;