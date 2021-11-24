import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { Button, Col, Container, Row } from "reactstrap";
import { updateCart } from "../actions";

const ProductDetails = ({ productData }) => {
  const dispatch = useDispatch();
  const _handleAddToCart = () => {
    dispatch(updateCart(productData));
  };
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <Link href="/">
            <a>Go Back</a>
          </Link>
        </Col>
        <Col xs={12} className="border">
          <div style={{ width: "100%", textAlign: "center" }}>
            <Image
              src={productData?.image}
              alt={productData?.title}
              width={500}
              height={500}
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs="12">
          <Row>
            <Col xs="12">
              <h3>{productData?.title}</h3>
            </Col>
            <Col xs="12">
              <p>{productData?.description}</p>
            </Col>
          </Row>
        </Col>
        <Col
          xs="12"
          className="border"
          style={{
            paddingTop: "15px",
            background: "#ccc",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <Row>
            <Col xs="3">
              <p>Price:- ${productData?.price}</p>
            </Col>
            <Col xs="3">
              <p>Category:- {productData?.category}</p>
            </Col>
            <Col xs="3">
              <p>Ratings:- {productData?.rating?.rate}/5</p>
            </Col>
            <Col xs="3">
              <p>Available:- {productData?.rating?.count}</p>
            </Col>
          </Row>
        </Col>
        <hr />
        <Col xs="12" style={{ marginTop: "20px" }}>
          <Button onClick={_handleAddToCart} block color="primary">
            Add Item To Cart
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
