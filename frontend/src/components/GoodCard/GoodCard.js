import React from 'react';
import Card from "../../components/UI/Card/Card";

const GoodCard = function (props) {
    const {movie, className} = props;
    const {name, id, description, poster, release_date, finish_date} = good;
    const link = {
      url: '/movies/' + id,
      text: "Узнать больше..."
    };


    return <Card image={poster} header={name} text={description}
                 release_date={release_date} finish_date={finish_date}
                 link={link.url} link_text={link.text} className='h-100' deleteMovie={onDelete}/>

};

export default MovieCard;