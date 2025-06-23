import {configureStore} from "@reduxjs/toolkit"
import authReducer from "./auth-slice" 
import adminProductsSlice from "./admin/product-slice"
import shoppingProductSlice from "./shop/product-slice"
import shopCartSlice from "./shop/cart-slice"
import shopAddressSlice from "./shop/address-slice"
import shopOrderSlice from "./shop/order-slice"
import adminOrders from "./admin/order-slice"
import shopSearchSlice from "./shop/search-slice"
import shopReviewSlice from "./shop/review-slice"
import commonFeatureSlice from "./common-slice/index"

const store  =  configureStore({
    reducer:{
        auth:authReducer,

        adminProducts:adminProductsSlice,
        adminOrder:adminOrders,

        shopProducts:shoppingProductSlice ,
        shopCart: shopCartSlice,
        shopAddress:shopAddressSlice,
        shopOrder:shopOrderSlice,
        shopSearch: shopSearchSlice,
        shopReview : shopReviewSlice,
        
        commonFeature : commonFeatureSlice
    }
})

export default store;