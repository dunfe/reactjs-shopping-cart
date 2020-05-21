import React from "react";
import Add from "../components/AddForm";
import { connect } from "react-redux";
import { addNewProduct } from "../action";

const AddContainer = ({ products, addNewProduct }) => (
  <Add products={products} addNewProduct={addNewProduct} />
);

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(
  mapStateToProps,
  { addNewProduct }
)(AddContainer);
