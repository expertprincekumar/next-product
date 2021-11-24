import ProductDetails from "../components/productDetail";
import { getAllProductData, getProductDataById } from "../services/getAllData";

const ProductDetail = ({ productData }) => {
  return (
    <>
      <ProductDetails productData={productData} />
    </>
  );
};

export async function getStaticPaths() {
  const data = await getAllProductData();
  if (data.length > 0) {
    const paths = data.map((element) => ({
      params: {
        id: String(element.id),
      },
    }));
    return {
      paths: paths,
      fallback: true,
    };
  } else {
    return { paths: [], fallback: true };
  }
}

export async function getStaticProps({ params }) {
  const productData = await getProductDataById(params.id);
  return {
    props: {
      productData,
    },
  };
}

export default ProductDetail;
