import React from 'react';
import P1 from './ProductCard/ProductCard';

class ProductListComponent extends React.Component{
    render(){
        return(
            <ProductCardComponent product={P1}/>
        );
    }
};

export var PList=ProductListComponent;
export default ProductListComponent;