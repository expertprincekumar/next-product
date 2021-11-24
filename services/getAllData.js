import axios from "axios";
import { config } from "../config";

export const getAllProductData = async () => {
  try {
    const productData = await axios.get(`${config.base_api_url}/products`);
    if (productData?.data) {
      return productData?.data;
    } else {
      return [];
    }
  } catch (err) {
    console.error("Error in Fetch products => ", err);
    return [];
  }
};

export const getProductDataById = async (id) => {
  try {
    const productData = await axios.get(
      `${config.base_api_url}/products/${id}`
    );
    if (productData?.data) {
      return productData?.data;
    } else {
      return null;
    }
  } catch (err) {
    console.error("Error in Fetch product by id => ", err);
    return null;
  }
};
