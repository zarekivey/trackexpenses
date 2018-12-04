import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
    <div>
    <Header />
    <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} /> 
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage}/>
    </Switch>
    </div>
</BrowserRouter>
);
// Browser Router can only take one jsx argument, so we wrap the routes in a div
// Exact meaning the exact path, not a related one. 
  
export default AppRouter;
