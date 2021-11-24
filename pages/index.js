import { getAllProductData } from "../services/getAllData";
import ProductList from "../components/productList";

const Home = ({ allProductsData }) => {
  return (
    <>
      <ProductList allProductsData={allProductsData} />
    </>
  );
};

export async function getStaticProps() {
  const allProductsData = await getAllProductData();
  return {
    props: {
      allProductsData,
    },
  };
}

export default Home;
