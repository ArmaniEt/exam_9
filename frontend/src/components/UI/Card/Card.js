import React from 'react';
import {NavLink} from 'react-router-dom';
import no_image from './../../../no_image/no_image.png'


const Card = props => {
    return (
        <div className={"bg-light card text-center text-sm-left " + (props.className ? props.className : "")}>
            {props.image[0] ? <img style={{width: '320px', height: '350px'}}
                                className="card-img-top m-auto" src={props.image[0].photo} alt="Good's poster"/>
                : <img style={{width: '320px', height: '350px'}} src={no_image}/>}
            <div className="card-body bg-light">
                <h5 className="card-title text-center">{props.header}</h5>
                <div className="d-block text-center m-3">
                    <NavLink className="badge badge-info p-2" to={props.link}>{props.link_text}</NavLink>
                </div>
            </div>
        </div>

    )
};

export default Card;