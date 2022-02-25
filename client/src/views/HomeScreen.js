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
import { Link } from "react-router-dom";
import NavBarScreen from "./NavBarScreen/NavBarScreen";
function HomeScreen() {
  const [stockApi, setStockApi] = useState([]);
  useEffect(() => {
    Axios.get("/home")
      .then((response) => {
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
          <Card style={{ backgroundColor: "black" }}>
            <CardHeader style={{ color: "white" }}>
              <h3 className="mb-4">Offer Market</h3>
              <NavBarScreen />
            </CardHeader>
            <CardBody>
              <Row>
                {stockApi.map((stock, index) => (
                  <Col key={index} md={3} className="mt-4 p-2 mb-5">
                    <Card className="home-image">
                      <CardBody>
                        {" "}
                        <CardImg
                          style={{ minWidth: 100, minHeight: 500 }}
                          className="mb-3"
                          src={stock.img}
                        />
                        <Link
                          style={{
                            textDecoration: "none",
                            fontSize: "30px",
                            color: "#000",
                          }}
                          to={`/productScreen/${stock.id}`}
                        >
                          {stock.title}
                        </Link>
                      </CardBody>
                    </Card>
                  </Col>
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
