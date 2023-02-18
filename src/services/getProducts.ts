import axios from "axios";
import { GetProductsService } from "../types/services";

const getProducts: GetProductsService = async (payload) => {
  try {
    const { data } = await axios.post("product/getAllProduct", payload);
    return [data, null];
  } catch (error) {
    return [null, error];
  }
};

export default getProducts;
