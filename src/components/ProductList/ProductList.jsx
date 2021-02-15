import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productList } from "redux/actions/productActions";
import Product from "./Product";

const ProductList = () => {
  const dispatch = useDispatch();
  const { loading, products } = useSelector((state) => state.productList);

  useEffect(() => dispatch(productList()), [dispatch]);
  return (
    <div className="row">
      {loading ? (
        <div class="spinner-border text-secondary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      ) : (
        products.map((product) => (
          <div className="col-md-4 col-sm-6 col-lg-3" key={product._id}>
            <Product product={product} />
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;
