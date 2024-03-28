import { ProductItem } from "./ProductItem";

// LATER: Let's say we got this component from a 3rd-party library, and can't change it. But we still want to add the 2 toggle functionalities to it
export function ProductList({ title, items }) {
  return (
    <ul className="list">
      <h1>{title}</h1>
      {items.map((product) => (
        <ProductItem key={product.productName} product={product} />
      ))}
    </ul>
  );
}
