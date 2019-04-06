import React, {Fragment, Component} from 'react';
import GoodCard from "../../components/GoodCard/GoodCard";
import {connect} from "react-redux";
import {loadGoods} from "../../store/actions/good-list";


class GoodList extends Component {
    componentDidMount() {
        this.props.loadGoods();
    }

    // redirectTo = () => {
    //     this.props.history.push('/login')
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