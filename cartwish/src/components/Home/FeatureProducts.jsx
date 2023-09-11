import React from "react";

import "./FeatureProducts.css";
import ProductCard from "../Products/ProductCard";
import useData from "./../../hooks/useData";
import ProductCardSkeleton from "../Products/ProductCardSkeleton";

const FeatureProducts = () => {
  const { data, error, isLoading } = useData("/products/featured");
  const skeletons = [1, 2, 3];
  return (
    <section className="feature_products">
      <h2>Featured Products</h2>
      <div className="align_center feature_products_list">
        {error && <em className="form_error">{error}</em>}
        {data &&
          data.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        {isLoading && skeletons.map((n) => <ProductCardSkeleton key={n} />)}
      </div>
    </section>
  );
};

export default FeatureProducts;
