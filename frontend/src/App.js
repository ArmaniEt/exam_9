import React, {Component} from 'react';
import {Route, Switch} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Layout from "./components/Layout/Layout";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Switch>
                       <Route/>
                    </Switch>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default App;
