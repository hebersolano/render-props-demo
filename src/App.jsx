import { CompanyItem } from "./CompanyItem";
import { List } from "./List";
import { ProductItem } from "./ProductItem";
import { companies, products } from "./data-api";

export default function App() {
  return (
    <div>
      <h1>Render Props Demo</h1>

      <div className="col-2">
        <List
          title="Products"
          items={products}
          render={(product) => <ProductItem key={product.productName} product={product} />}
        />
        <List
          title="Companies"
          items={companies}
          render={(company) => <CompanyItem key={company.name} company={company} />}
        />
      </div>
    </div>
  );
}
