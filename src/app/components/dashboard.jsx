import React from 'react';
import { Segment, Button } from 'semantic-ui-react';

class Dashboard extends React.Component{

    renderWidgets(widgets){
        return "teste2";
    }

    render(){
        return(
            <div>
                {this.renderWidgets(this.props.widgets)}
                <br/>
                <Button onClick={ () => this.props.teste()} >Click Me</Button>
            </div>
        );
    }
};

export default Dashboard;