import React, {Component, Fragment} from 'react';
import MenuItem from '../Menu/MenuItem/MenuItem';
import connect from "react-redux/es/connect/connect";


class Menu extends Component {

    state = {
        menuCollapse: true,
    };

    toggle = () => {
        this.setState({menuCollapse: !this.state.menuCollapse})
    };


    render() {
        const {username} = this.props.auth;
        return <Fragment>
            <button onClick={this.toggle}
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className={(this.state.menuCollapse ? "collapse" : "") + " navbar-collapse"} id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <MenuItem to="/">Товары</MenuItem>

                </ul>
                <ul className='navbar-nav ml-auto'>
                    {username ?
                        [
                            <li key='greetings' className="nav-link text-white">Привет {username}!</li>,
                            <MenuItem key='basket' to="/basket">Корзина ({this.props.basket.basket.length})</MenuItem>,
                            <MenuItem to="/logout" key="logout">Выйти</MenuItem>

                        ] :
                        [
                            <MenuItem key='login' to="/login">Войти</MenuItem>
                        ]
                    }
                </ul>
            </div>
        </Fragment>
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    basket: state.basket

});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);