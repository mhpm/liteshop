import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Card from 'components/common/Card'

const Remove = styled.button`
  &:focus {
    box-shadow: none;
  }
`

const Item = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  color: ${(p) => p.theme.colors.primary};
`

const Main = styled.div`
  padding-left: 40px;
  padding-right: 40px;
  @media (max-width: 500px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`

const CartScheen = () => {
  const { cartItems } = useSelector((state) => state.cart)

  return (
    <Main className="container">
      <Link className="btn text-muted mb-2 pl-0 m-0" to="/">
        Go Back
      </Link>
      <div className="row">
        <div className="col-md">
          <Card className="p-3">
            <div className="row no-gutters pt-3">
              <div className="col-1">
                <h6 style={{ color: '#cecece' }} className="pl-2">
                  QTY
                </h6>
              </div>
              <div className="col">
                <h6 style={{ color: '#cecece' }} className="pl-3">
                  NAME
                </h6>
              </div>
              <div className="col-3">
                <h6 style={{ color: '#cecece' }} className="pl-3">
                  PRICE
                </h6>
              </div>
              <div className="col-2 col-md-1"></div>
            </div>
            {cartItems.map((item) => (
              <div key={item._id} className="mb-3 position-relative">
                <hr />
                <div className="row no-gutters">
                  <div className="col-1">
                    <Item>
                      <h6 className="pl-3">{item.quantity}</h6>
                    </Item>
                  </div>
                  <div className="col">
                    <Item>
                      <h6 className="pl-3">{item.name}</h6>
                    </Item>
                  </div>
                  <div className="col-3">
                    <Item>
                      <h6 className="pl-3">${item.price}</h6>
                    </Item>
                  </div>
                  <div className="col-2 col-md-1">
                    <Item>
                      <Remove className="btn btn-sm pb-2 rounded-pill text-muted">
                        <i class="fas fa-trash ml-1"></i>
                      </Remove>
                    </Item>
                  </div>
                </div>
              </div>
            ))}
          </Card>
        </div>
        <div className="col-md-12">
          <Card className="p-3 mt-4">
            <div className="row">
              <span className="col-4">
                <Item>
                  <h6 className="pl-3">TOTAL:</h6>
                </Item>
              </span>
              <span className="col-8">
                <Item className="justify-content-end">
                  <h6 className="pr-3">$ 89.98</h6>
                </Item>
              </span>
            </div>
            <div className="d-grid gap-2 mt-3">
              <button className="btn btn-dark rounded-pill">CHECKOUT</button>
            </div>
          </Card>
        </div>
      </div>
    </Main>
  )
}

export default CartScheen
