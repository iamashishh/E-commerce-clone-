import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from './components/auth/Layout'
import Authlogin from './pages/auth/Login'
import AuthRegister from './pages/auth/Register'
import AdminLayout from './components/admin-view/Layout'
import AdminProducts from './pages/admin-view/Products'
import AdminFeatures from './pages/admin-view/Features'
import AdminDashboards from './pages/admin-view/Dashboard'
import ShoppingLayout from './components/shopping-view/Layout'
import NotFound from './pages/not-found/Index'
import ShoppingHome from './pages/shopping-view/Home'
import ShoppingListing from './pages/shopping-view/Listing'
import ShoppingCheckOut from './pages/shopping-view/CheckOut'
import ShoppingAccount from './pages/shopping-view/Account'
import CheckAuth from './components/common/Check-Auth'
import UnAuthPage from './pages/unauth-page'
import { useDispatch, useSelector } from 'react-redux'
import { checkAuth } from './store/auth-slice'
import AdminOrdersView from './components/admin-view/orders'
import PaypalReturnPage from './pages/shopping-view/paypal-return'

const App = () => {


  const {isAuthenticated,user,isloading} = useSelector(state=> state.auth);

const dispatch = useDispatch();

  useEffect(() => {

    dispatch(checkAuth()).then((data) => {
      
    })

  }, [dispatch])

  if(isloading){
    return (
      <div className='flex items-center justify-center h-screen'>
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  return (
    <div className='flex flex-col overflow-hidden bg-white ' >
      <Routes>
        <Route path='/auth' element={
          <CheckAuth user={user} isAuthenticated={isAuthenticated} >
            <AuthLayout/>
          </CheckAuth>
        }>
          <Route path='login' element={<Authlogin/>} />
          <Route path='register' element={<AuthRegister/>} />
        </Route>

        <Route path='/admin' element={
          <CheckAuth user={user} isAuthenticated={isAuthenticated} >
            <AdminLayout/>
          </CheckAuth>

        } >
          <Route path='products' element={<AdminProducts/>} />
          <Route path='orders' element={<AdminOrdersView/>} />
          <Route path='features' element={<AdminFeatures/>} />
          <Route path='dashboard' element={<AdminDashboards/>} />
          </Route>

         <Route path='/shop' element={
          <CheckAuth user={user} isAuthenticated={isAuthenticated} >
            <ShoppingLayout/>
          </CheckAuth>

         } >
         <Route path='home' element={<ShoppingHome/>} />
         <Route path='listing' element={<ShoppingListing/>} />
         <Route path='checkout' element={<ShoppingCheckOut/>} />
         <Route path='account' element={<ShoppingAccount/>} />
         <Route path='paypal-return' element={<PaypalReturnPage/>} />
         </Route> 

         <Route path='/unauth-page' element={<UnAuthPage/>} />
          <Route path='*' element={<NotFound/>} />
      </Routes>

    </div>
  )
}

export default App