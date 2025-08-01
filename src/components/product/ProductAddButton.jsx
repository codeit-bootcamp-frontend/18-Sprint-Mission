import React, { Children } from "react";
import './ProductAddButton.css';

export default function ProductAddButton({ children }) {
  return <button className="product-add-button">{children}</button>;
}
