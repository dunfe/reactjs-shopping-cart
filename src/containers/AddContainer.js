import React from "react";
import Add from "../components/add/AddForm";
import {connect} from "react-redux";
import {addNewProduct} from "../action";
import {getProducts} from "../reducers/Product";

const AddContainer = ({products, addNewProduct}) => (
    <Add products={products} addNewProduct={addNewProduct}/>
);

const mapStateToProps = state => {
  return {
    products: getProducts(state)
  };
};

export default connect(
  mapStateToProps,
  { addNewProduct }
)(AddContainer);
