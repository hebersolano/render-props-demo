import { CompanyItem } from "./CompanyItem";
import Counter from "./Counter";
import withToggles from "./HOC";
import { List } from "./List";
import { ProductItem } from "./ProductItem";
import { ProductList } from "./ProductList";
import { companies, products } from "./data-api";

const ProductListWithToggles = withToggles(ProductList);

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
          render={(company) => (
            <CompanyItem key={company.name} company={company} defaultVisibility={false} />
          )}
        />
      </div>
      <div className="">
        <h1>Higher-Order Component</h1>
        <ProductListWithToggles title="Test title" items={products} />
      </div>

      <div>
        <h1>Compound Component Pattern</h1>
        {/* <Counter
          iconIncrease="+"
          iconDecrease="-"
          label="My NOT so flexible counter"
          hideLabel={false}
          hideIncrease={false}
          hideDecrease={false}
          positionCount="top"
        /> */}

        <Counter>
          <Counter.Label>My super flexible counter</Counter.Label>
          <Counter.Increase icon="+" />
          <Counter.Count />
          <Counter.Decrease icon="-" />
        </Counter>
      </div>
    </div>
  );
}
