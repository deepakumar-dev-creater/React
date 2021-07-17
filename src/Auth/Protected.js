import { Redirect, Route } from "react-router-dom";

import Layout from "../Pages/Layout";

const Protected = ({ component, ...rest }) => {
  let RenderComponent = component;
  return (
    <Route
      {...rest}
      render={(props) => {
        return true ? (
          <div>
            <Layout  name={rest.Name}>
              <RenderComponent {...props} />
            </Layout>
          </div>
        ) : (
          <Redirect to="/" />
        );
      }}
    />
  );
};
export default Protected;
