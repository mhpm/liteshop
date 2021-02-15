import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productDetails } from 'redux/actions/productActions'
import { AddToCart } from 'redux/actions/cartActions'
import { Link } from 'react-router-dom'
import Rating from 'components/Rating'
import Card from 'components/common/Card'
import styled from 'styled-components'

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: white !important;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryHover};
  }

  &:focus {
    box-shadow: none;
  }
`

const ProductScreen = ({ match }) => {
  const dispatch = useDispatch()
  const { loading, product } = useSelector((state) => state.productDetails)

  useEffect(() => {
    dispatch(productDetails(match.params.id))
  }, [dispatch, match])

  return (
    <div className="container">
      <Link className="btn text-muted mb-2 pl-0 m-0" to="/">
        Go Back
      </Link>
      <div className="row">
        <div className="col-md-8 col-lg-9 mb-5">
          {loading && (
            <div class="spinner-border text-secondary" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          )}
          <Card>
            <div className="row no-gutters">
              <div className="col-md-12 col-lg-8">
                <img src={product.image} className="card-img" alt="..." />
              </div>
              <div className="col-md-12 col-lg-4">
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <hr />
                  <p className="card-text">
                    <Rating value={product.rating} text={product.numReviews} />
                  </p>
                  <hr />
                  <p className="card-text font-weight-bold">
                    Price: ${product.price}
                  </p>
                  <hr />
                  <p className="card-text">
                    Description: {product.description}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="col-md-4 col-lg-3">
          <Card>
            <div className="card-body">
              <div className="card-text row">
                <span className="col-4">Price:</span>
                <span className="col-8 text-end">${product.price}</span>
              </div>
              <hr />
              <div className="card-text row">
                <span className="col-4">Status:</span>
                <span className="col-8 text-end">
                  {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
              <div className="d-grid gap-2 mt-4">
                <Button
                  onClick={() => dispatch(AddToCart(product))}
                  disabled={product.countInStock === 0}
                  className="btn rounded-pill"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ProductScreen
