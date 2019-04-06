import React, {Component} from 'react';
import {Route, Switch} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Layout from "./components/Layout/Layout";
import GoodList from "./containers/GoodList/GoodList";
import GoodDetail from "./containers/GoodDetail/GoodDetail";
import {connect} from "react-redux";
import {tokenLogin} from "./store/actions/token-login";
import Login from "./containers/Login/Login";
import Logout from "./containers/Logout/Logout";

class App extends Component {
    componentDidMount() {
        this.props.tokenLogin();

    };


    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route path="/goods/:id" component={GoodDetail}/>
                        <Route path="/logout" component={Logout}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/" component={GoodList}/>
                    </Switch>
                </Layout>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = state => state.app;
const mapDispatchToProps = dispatch => ({
    tokenLogin: () => dispatch(tokenLogin())
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
