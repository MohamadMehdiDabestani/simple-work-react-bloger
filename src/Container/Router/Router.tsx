import { Fragment, lazy, memo } from "react";
import { Route, Switch } from "react-router";

import Layout from "../Layout/Layout";
const Router = () => {
  console.log("render router");
  const Main = lazy(() => import("../../Components/Main/Main"));
  const BecomeBloger = lazy(
    () => import("../../Components/BecomeBloger/BecomeBloger")
  );
  const Login = lazy(() => import("../../Components/Login/Login"));
  const Register = lazy(() => import("../../Components/Register/Register"));
  const Search = lazy(() => import("../../Components/Search/Search"));
  const Best = lazy(() => import("../../Components/Best/Best"));
  const SinglePost = lazy(
    () => import("../../Components/SinglePost/SinglePost")
  );
  const UserPanel = lazy(() => import("../../Components/UserPanel/UserPanel"));
  const NotFound = lazy(() => import("../../Components/NotFound/NotFound"));
  return (
    <Fragment>
      <Layout>
        <Switch>
          <Route path="/guid" component={BecomeBloger} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/search" component={Search} />
          <Route path="/best" component={Best} />
          <Route path="/post/:id" component={SinglePost} />
          <Route path="/Userpanel" component={UserPanel} />
          <Route exact path="/" component={Main} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </Fragment>
  );
};

export default memo(Router);
