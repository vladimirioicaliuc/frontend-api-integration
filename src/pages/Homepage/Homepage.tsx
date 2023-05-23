import React, { FunctionComponent } from "react";

import Products from "./../../components/Products/Products";

export type HomepageProps = {};

const Homepage: FunctionComponent<HomepageProps> = () => {
  return (
    <div className="container-fluid" data-testid="homepage">
      <Products />
    </div>
  );
};

export default Homepage;
