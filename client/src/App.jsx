import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from './components/auth/Layout'
import Authlogin from './pages/auth/Login'
import AuthRegister from './pages/auth/Register'
import AdminLayout from './components/admin-view/Layout'
import AdminProducts from './pages/admin-view/Products'
import AdminOrders from './pages/admin-view/Orders'
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

const App = () => {

  const isAuthenticated = false; // Replace with actual authentication logic
  const user =null;

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
          <Route path='orders' element={<AdminOrders/>} />
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
         </Route> 

         <Route path='/unauth-page' element={<UnAuthPage/>} />
          <Route path='*' element={<NotFound/>} />
      </Routes>

    </div>
  )
}

export default App