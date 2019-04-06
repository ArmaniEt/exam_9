import React, {Component, Fragment} from 'react';
import connect from "react-redux/es/connect/connect";


class Basket extends Component {
    render() {
        return <div>
            {this.props.basket.basket.length > 0 ? (this.props.basket.basket.map(orderedGood => {
                    return <Fragment>
                        <div className="card mt-2">
                            <div className="card-header">
                                Товар №: {orderedGood.id}
                            </div>
                            <h5 className="card-header text-center">{orderedGood.name}</h5>
                            <div className="card-body">
                                <p className="card-text">{orderedGood.description}</p>
                            </div>
                        </div>
                    </Fragment>
                })
            )
                : <h4 className="text-center mt-3">Корзина пуста!</h4>
            }
        </div>
    }
}

const mapStateToProps = state => {
    return {
        basket: state.basket
    }
};

const mapDispatchToProps = dispatch => {
    return {}
};
export default connect(mapStateToProps, mapDispatchToProps)(Basket);