import React from 'react';
import plant from '../plant2.JPEG';

class ProductCardComponent extends React.Component{
    render(){
      return(
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <div className="thumbnail">
              <img className="Image" 
                src={plant} 
                alt="plant"/>
              <div className="caption">
                <h3>Plant</h3>
                  <p>Price: 1,000,000$</p>
                  <p>Some description</p>
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