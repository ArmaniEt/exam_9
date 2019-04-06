import React from 'react';
import './GoodCategories.css';


const GoodCategories = props => {
    const {categories} = props;
    return <p>{categories.map(category => <span key={category.id} className="badge badge-primary category-badge">
        {category.name}
    </span>)}</p>
};

export default GoodCategories;