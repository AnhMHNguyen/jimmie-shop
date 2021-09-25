import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {ErrorBoundary} from 'react-error-boundary'
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Spinner from './components/spinner/spinner.component';
import ErrorFallback from './components/error-boundary/error-boundary.component';
import { selectCurrentUser } from './redux/user/user.selectors';
import { selectCartItems } from './redux/cart/cart.selectors';
import './App.css';
const HomePage  = lazy(() => import('./pages/homepage/homepage.componet'));
const CollectionPage = lazy(() => import('./pages/collectionPage/collectionPage.component'));
const ProductPage = lazy(() => import('./pages/productPage/productPage.component')) ;
const SignInSignUpPage = lazy(() => import('./pages/signinSignupPage/signinSignupPage.component'));
const CheckoutPage = lazy(() => import('./pages/checkoutPage/checkoutPage.component'));
const ShoppingBagPage = lazy(() => import('./pages/shoppingBagPage/shoppingBagPage.component'));
const AccountPage = lazy(() => import('./pages/accountPage/accountPage.component'));
const OrderPage = lazy(() => import('./pages/orderPage/orderPage.component'));
const AdminProductPage = lazy(() => import('./pages/adminProductPage/adminProductPage.component'));
const AdminUserPage = lazy(() => import('./pages/adminUserPage/adminUserPage.component'));
const AdminOrderPage = lazy(() => import('./pages/adminOrderPage/adminOrderPage.component'));


function App() {
  const currentUser = useSelector(selectCurrentUser);
  const cartItems = useSelector(selectCartItems);
  return (
    <div className="App">
      <Header />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<Spinner />}>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/cart" component={ShoppingBagPage} />
            <Route exact path="/shop/:category?" component={CollectionPage} />
            <Route exact path="/product/:id" component={ProductPage} />
            
            <Route path="/signin" render={() => 
              currentUser ? 
                (<Redirect to='/' />) 
              : 
                (<SignInSignUpPage />)} 
            />
            <Route 
              path='/checkout' 
              render={(props) => cartItems.length === 0 ? (
                <Redirect to='/cart' />
              ) : currentUser === null ? 
              (<Redirect to='/signin' />)
              :
              (
                <CheckoutPage {...props}/>
              )}   
            />
          <Route exact
            path='/account' 
            render={(props) => currentUser === null ? (
              <Redirect to='/signin' />
            ) : (
              <AccountPage {...props}/>
            )}   
          />
          <Route exact path='/order/:id' render={(props) => 
            currentUser === null ? 
              (<Redirect to='/signin' />) 
            : 
              (<OrderPage {...props}/>)} 
          />
          <Route exact path='/admin/productlist' render={(props) => 
            currentUser === null ? 
              (<Redirect to='/signin' />) 
            : currentUser.isAdmin ?
              (<AdminProductPage {...props}/>) 
            : 
              (<Redirect to='/' />)}
          />
          <Route exact path='/admin/userlist' render={(props) => 
            currentUser === null ? 
              (<Redirect to='/signin' />) 
            : currentUser.isAdmin ?
              (<AdminUserPage {...props}/>) 
            : 
              (<Redirect to='/' />)}
          />
          <Route exact path='/admin/orderlist' render={(props) => 
            currentUser === null ? 
              (<Redirect to='/signin' />) 
            : currentUser.isAdmin ?
              (<AdminOrderPage {...props}/>) 
            : 
              (<Redirect to='/' />)}
          />
          
          <Route component={ErrorFallback}/>
          
        </Switch>
      </Suspense>
      </ErrorBoundary>
      <Footer />
    </div>
  );
}

export default App;
