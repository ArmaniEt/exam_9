import React from 'react';
import Card from "../../components/UI/Card/Card";

const GoodCard = function (props) {
    const {good, className} = props;
    const {name, id, good_photo} = good;
    const link = {
      url: '/goods/' + id,
      text: "Узнать о товаре..."
    };


    return <Card image={good_photo} header={name} link={link.url}
                 link_text={link.text} className='h-100'/>

};

export default GoodCard;