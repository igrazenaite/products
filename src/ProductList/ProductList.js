import React from 'react';
import P1 from '../ProductCard/ProductCard';

class ProductListComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <div className="container">
                    <div className="row1">
                        <div className="col-sm-4 col-md-4">
                            <P1 product={this.props.product[0]}/>
                        </div>
                        <div className="col-sm-4 col-md-4">
                            <P1 product={this.props.product[1]}/>
                        </div>
                        <div className="col-sm-4 col-md-4">
                            <P1 product={this.props.product[2]}/>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row2">
                        <div className="col-sm-4 col-md-4">
                            <P1 product={this.props.product[3]}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export var PList=ProductListComponent;
export default ProductListComponent;