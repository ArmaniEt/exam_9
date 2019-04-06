import React, {Fragment, Component} from 'react';
import {connect} from "react-redux";
import {loadGood} from "../../store/actions/good-detail";
import GoodCategories from "../../components/GoodCategories/GoodCategories";
import Slider from 'react-slick';
import {NavLink} from "react-router-dom";
import {addToBasket} from "../../store/actions/basket";


class GoodDetail extends Component {
    componentDidMount() {
        this.props.loadGood(this.props.match.params.id)
    }


    render() {
        let settings = {
            dots: true,
            autoplay: true,
            autoplaySpeed: 1300,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        const {good} = this.props.goodDetail;
        const token = localStorage.getItem('auth-token');
        if (!good) return null;
        const date = new Date(good.arrival_date);
        return (
            <Fragment>
                <div className="col-4 m-auto">
                    <div className="card">
                        <Slider {...settings}>
                            {good.good_photo.map((photo, index) => {
                                return photo ?
                                    <img key={index} className="card-img-top" src={photo.photo} alt="Good's poster"/> : null
                            })}
                        </Slider>
                        <div className="card-body">
                            <h3>{good.name}</h3>
                            {good.categories.length > 0 ?
                                <GoodCategories categories={good.categories}/> : null}
                            <p className="text-center m-2">Описание Товара</p>
                            <p className="card-text">{good.description}</p>
                        </div>
                        <div className="card-footer">
                            <p className='text-center'>Цена: {good.price} сом</p>
                            <p className='text-center'>Дата поступления товара: {date.toLocaleDateString()}</p>
                        </div>
                        { token ?
                            <button onClick={() => this.props.addToBasket(good)} type="button" className="btn btn-primary">Добавить в корзину</button>
                            : null
                        }
                        {this.props.basket.basket.length > 0  ?
                            <NavLink className="text-center m-3" to="/basket">Оформить заказ</NavLink> : null
                        }
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        goodDetail: state.goodDetail,
        basket: state.basket
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loadGood: (id) => dispatch(loadGood(id)),
        addToBasket: (data) => dispatch(addToBasket(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GoodDetail);