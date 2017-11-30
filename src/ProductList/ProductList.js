import React from 'react';
import P1 from '../ProductCard/ProductCard';

class ProductListComponent extends React.Component{
    render(){
        return(
            <div>
            <P1 product={{}}/>
            <P1 product={{}}/>
            </div>
        );
    }
};

export var PList=ProductListComponent;
export default ProductListComponent;