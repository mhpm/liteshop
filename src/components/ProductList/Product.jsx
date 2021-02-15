import React from "react";
import { Link } from "react-router-dom";
import Rating from "components/Rating";
import Card from 'components/common/Card'

const Product = ({ product }) => {
  return (
    <Card className="mb-3">
      <Link to={`/product/${product._id}`}>
        <img src={product.image} className="card-img-top" alt="logo here" />
      </Link>
      <div className="card-body">
        <h6 className="card-title">{product.name}</h6>
        <p className="card-text">
          <Rating value={product.rating} text={product.numReviews} />
        </p>
        <div className="row">
          <div className="col-6 text-muted">{product.brand}</div>
          <div
            className="col-6 text-right font-weight-bold"
            style={{ color: "#6c757d" }}
          >
            ${product.price}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Product;
