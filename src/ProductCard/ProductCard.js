import React from 'react';
import plant from '../plant2.JPEG';

class ProductCardComponent extends React.Component{
  constructor (props){
    super(props);
  }
    render(){
      return(
        <div className="row">
          <div className="col-sm-12 col-md-12">
            <div className="thumbnail">
              <img className="Image" 
                src={plant} 
                alt="plant"/>
              <div className="caption">
                <h3>{this.props.product.title}</h3>
                  <p>Price: {this.props.product.price}$</p>
                  <p>Quantity: {this.props.product.quantity}</p>
                  <p>Description: {this.props.product.description}</p>
                  <p><a href="#" className="btn btn-default" 
                        role="button">More</a></p> 
                  <p><a href="#" className="btn btn-primary" 
                        role="button">Buy</a></p>
              </div>
            </div>
          </div>
        </div>
        );
    }
  };

export var P1=ProductCardComponent;
export default ProductCardComponent;