import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loading from '@/components/Loading';
import ErrorPage from '@/components/ErrorPage';

const Example = React.lazy(() => import(/* webpackChunkName: "example" */ '../pages/example'));

const Routes = () => (
  <Suspense fallback={'...'}>
    <Switch>
      <Route exact path={`/`} component={Example} />
      <Route exact path={`/Example`} component={Example} />
      <Route exact path={`/ErrorPage`} component={ErrorPage} />
      <Redirect from="*" to={`/`} />
    </Switch>
  </Suspense>
);

export default Routes;
