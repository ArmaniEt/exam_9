import React, {Component} from 'react';
import {Route, Switch} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Layout from "./components/Layout/Layout";
import GoodList from "./containers/GoodList/GoodList";
import GoodDetail from "./containers/GoodDetail/GoodDetail";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route path="/goods/:id" component={GoodDetail}/>
                        <Route path="/" component={GoodList}/>
                    </Switch>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default App;
