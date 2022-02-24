import React, { useEffect, useState } from "react";
import Axios from "../components/config/Axios";
import {
  Card,
  CardBody,
  CardHeader,
  CardImg,
  Col,
  Container,
  Row,
} from "reactstrap";
import HomeImage from "./ultimate-material-lollipop-collection1.png";
function HomeScreen() {
  const [stockApi, setStockApi] = useState([]);
  useEffect(() => {
    Axios.get("/home")
      .then((response) => {
        console.log(response.data);
        setStockApi(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div>
        <Container className="text-center mt-3">
          <Card>
            <CardHeader>
              <h3>Offer Market</h3>
            </CardHeader>
            <CardBody>
              <Row>
                {stockApi.map((stock, index) => (
                  <>
                    <Col md={3} className="mt-2 p-2 mb-5">
                      <Card className="home-image">
                        <CardImg src={stock.img} style={{ minWidth: "100%",minHeight: "100%"}} />
                        <h1>{stock.name}</h1>
                        <h3>Price: {stock.price}</h3>
                        <h3>Quantity: {stock.quantity}</h3>
                        <h3>Category: {stock.category}</h3>
                      </Card>
                    </Col>
                  </>
                ))}
              </Row>
            </CardBody>
          </Card>
        </Container>
      </div>
    </>
  );
}

export default HomeScreen;
