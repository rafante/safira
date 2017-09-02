import React from 'react';
import _ from 'lodash';
import faker from 'faker';
import { Grid, Segment, List, Divider, Accordion, Sidebar, Label, Form, Checkbox, Button } from 'semantic-ui-react';
import AppHeader from '../components/header.jsx';
import Dashboard from '../components/dashboard.jsx';
import AppMenu from '../components/menu.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';

var detail = function (state, teste) {
    if (state == 'dashboard')
        return (<Dashboard teste={teste} />);
}

class App extends React.Component {

    render() {
        return (
            <div>
                <AppHeader />
                <Grid >
                    <Grid.Column width={4}>
                        <Segment>
                        <AppMenu content={this.props.entities} visible={true} />
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Grid.Row stretched>
                            <Segment>
                                <Label as='a' color='red' attached='top left' ribbon>Material</Label>
                                <Grid.Row >
                                    <Form>
                                        <Form.Field>
                                            <label>Descrição</label>
                                            <input readOnly value='Barra de aço 22"'/>
                                        </Form.Field>
                                        <Form.Field>
                                            <label>Last Name</label>
                                            <input placeholder='Last Name' />
                                        </Form.Field>
                                        <Form.Field>
                                            <Checkbox label='I agree to the Terms and Conditions' />
                                        </Form.Field>
                                        <Button type='submit'>Submit</Button>
                                    </Form>
                                </Grid.Row>
                            </Segment>
                        </Grid.Row >
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        projs: state.projs.data,
        entity: state.entity,
        phase: state.phase,
        entities: state.entities
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);