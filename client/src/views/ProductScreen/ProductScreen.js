import React, { useEffect, useState } from "react";
import { Card, CardBody, CardHeader, CardImg, Container } from "reactstrap";
import { useParams } from "react-router-dom";
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
  },[])
  return (
    <>
      <Container className="text-center mt-3">
        <Card style={{ backgroundColor: "black" }}>
          <CardHeader style={{ color: "white" }}>
            {product.title}
          </CardHeader>
          <CardBody>
              <CardImg src={product.img} />
          </CardBody>
        </Card>
      </Container>
    </>
  );
}

export default ProductScreen;
