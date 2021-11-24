import { Col, Container, Row } from "reactstrap";
import ProductCard from "./productCard";

const ProductList = ({ allProductsData }) => {
  return (
    <Container>
      <Row>
        {allProductsData?.length > 0 ? (
          allProductsData?.map((productData, idx) => (
            <Col
              className="bg-light border"
              xs="3"
              key={idx}
              style={{ marginBottom: "15px" }}
            >
              <ProductCard productData={productData} />
            </Col>
          ))
        ) : (
          <Col xs="12">No data Found</Col>
        )}
      </Row>
    </Container>
  );
};

export default ProductList;
