import React, {Fragment, Component} from 'react';
import {connect} from "react-redux";
import {loadGood} from "../../store/actions/good-detail";
import GoodCategories from "../../components/GoodCategories/GoodCategories";
import Slider from 'react-slick';


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
        if (!good) return null;
        return (
            <Fragment>
                <div className="col-4 m-auto">
                    <div className="card">
                        <Slider {...settings}>
                            {good.good_photo.map(photo => {
                                return photo ?
                                    <img className="card-img-top" src={photo.photo} alt="Good's poster"/> : null
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
                            <p>Дата поступления товара: {good.arrival_date}</p>
                        </div>

                        {/*<NavLink to={'/goods/' + good.id + '/edit'}*/}
                        {/*className="btn btn-primary m-2">Edit Good</NavLink>*/}
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        goodDetail: state.goodDetail,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loadGood: (id) => dispatch(loadGood(id)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GoodDetail);