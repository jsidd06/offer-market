import React, { useEffect, useState } from "react";
import { Button, Card, CardBody, CardHeader, CardImg, Col, Container, Row } from "reactstrap";
import { Link, useParams } from "react-router-dom";
import Axios from "../../components/config/Axios";
function ProductScreen() {
  const { id } = useParams();
    const [product, setProduct] = useState({});
  useEffect(() => {
      Axios.post("/product", { id }).then((response) => {
        console.log(response.data)
        setProduct(response.data);
      }).catch((error) => {
          console.log(error);
      });
  },[id])
  return (
    <>
      <Container className="text-center mt-3">
        <Card style={{ backgroundColor: "black" }}>
          <Row>
            <Col md={6} className="mt-5">
              <CardHeader style={{ color: "white" }}>
                <h3>{product.title}</h3>
              </CardHeader>
              <CardBody>
                <CardImg src={product.img} />
              </CardBody>
            </Col>
            <Col md={6} className="mt-5">
              <CardBody className="mt-5 p-3">
                <CardBody style={{ color: "white" }}>
                  <h3>Description</h3>
                  <br></br>
                  <h6>{product.description}</h6>
                  <span>
                    <del style={{ color: "red", fontSize: "20px" }}>
                      Price:- {product.price}
                    </del>
                  </span>
                  <h6 style={{ color: "green" }}>
                    Discount Price:- {product.discountPrice}
                  </h6>
                  <br></br>
                  <p>
                    <i style={{ color: "green"}}className="fa-solid fa-plus">1</i>
                  </p>
                    <p>
                        <i style={{color:"red"}} className="fa-solid fa-minus">2</i>
                    </p>
                </CardBody>
                <Row>
                  <Col md={6}>
                    <Link to="/login" style={{paddingLeft:40,paddingRight:40}} className="btn btn-warning">BuyNow</Link>
                    </Col>
                  <Col md={6}>
                    <Button style={{paddingLeft:40,paddingRight:40}} className="btn btn-info" >Add To Cart</Button>
                    </Col>
                </Row>
              </CardBody>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
}

export default ProductScreen;
