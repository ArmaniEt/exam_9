import React, {Fragment, Component} from 'react';
import GoodCard from "../../components/GoodCard/GoodCard";
import {connect} from "react-redux";
import {loadGoods} from "../../store/actions/good-list";
import Select from "react-select";


class GoodList extends Component {
    componentDidMount() {
        this.props.loadGoods();
    }

    // state = {
    //     categories: []
    // };

    // redirectTo = () => {
    //     this.props.history.push('/login')
    // };

    //
    // getCategoryOptions = () => {
    //     return this.props.goods.categories.map(category => {
    //         return {value: category.id, label: category.name}
    //     })
    // };
    //
    // getCategoryValue = () => {
    //     if (this.props.goods.categories.length > 0) {
    //         return this.props.goods.categories.map(id => {
    //             const category = this.state.categories.find(category => category.id === id);
    //             return {value: id, label: category.name}
    //         })
    //     }
    //     return [];
    // };



    render() {
        return (
            <Fragment>
                <div className='row'>
                    {this.props.goods.map(good => {
                        return <div className='col-xs-12 col-sm-6 col-lg-4 mt-3' key={good.id}>
                            <GoodCard good={good}/>
                        </div>
                    })}
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => state.goodList;
const mapDispatchToProps = (dispatch) => ({
    loadGoods: () => dispatch(loadGoods()),

});

export default connect(mapStateToProps, mapDispatchToProps)(GoodList);