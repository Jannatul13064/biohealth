import Card from "@/components/Card";
import React from "react";

const Products = () => {
  return (
    <div className="container my-20">
      <div className="text-center font-extrabold text-2xl">Products</div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 place-items-center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Products;
