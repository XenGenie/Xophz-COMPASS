// const Sales = () => import(
//   #<{(| webpackChunkName : "bazaar-sales" |)}>#
//   './routes/bazaar-sales/bazaar-sales'
// );

import { TrinityRingsSpinner } from 'epic-spinners'
import Sales from './routes/bazaar-sales/bazaar-sales.vue'
import MonthlySales from './routes/bazaar-sales/bazaar-sales-monthly/bazaar-sales-monthly.vue'
// const MonthlySales = () => import(
//   #<{(| webpackChunkName : "bazaar-sales-monthly" |)}>#
//   './routes/bazaar-sales/bazaar-sales-monthly/bazaar-sales-monthly'
// );

const Bazaar = () => import(
  /* webpackChunkName: "bazaar" */
  './bazaar'
)

const Dash = () => import(
  /* webpackChunkName: "bazaar-dash" */
  './routes/bazaar-dash/bazaar-dash'
)

const Products = () => import(
  /* webpackChunkName: "bazaar-products" */
  './routes/bazaar-products/bazaar-products'
)

const ProductsIndex = () => import(
  /* webpackChunkName : "bazaar-products-index" */
  './routes/bazaar-products/index/index'
)
const ProductsGrid = () => import(
  /* webpackChunkName : "bazaar-products-grid" */
  './routes/bazaar-products/grid/grid'
)
const ProductsStats = () => import(
  /* webpackChunkName : "bazaar-products-stats" */
  './routes/bazaar-products/stats/stats'
)
const Orders = () => import(
  /* webpackChunkName : "bazaar-orders" */
  './routes/bazaar-orders/orders'
)
const OrdersIndex = () => import(
  /* webpackChunkName : "bazaar-orders-index" */
  './routes/bazaar-orders/index/index'
)

export default {
  path: '/bazaar',
  name: 'xophz-compass-bazaar',
  component: Bazaar,
  loading: TrinityRingsSpinner,
  children: [
    {
      name: 'Bazaar Dashboard',
      path: '/bazaar',
      component: Dash,
      meta: { icon: 'store', color: 'blue' }
    },
    {
      name: 'Product Inventory',
      path: '/bazaar/products',
      component: Products,
      meta: { icon: 'shopping-bag', color: '#DE3648', hash: 'bazaar-products' },
      children: [
        {
          name: 'Products Index',
          path: '/bazaar/products',
          component: ProductsIndex
        },
        {
          name: 'Products Grid',
          path: '/bazaar/products/grid',
          component: ProductsGrid
        },
        {
          name: 'Products Stats',
          path: '/bazaar/products/stats',
          component: ProductsStats
        }
      ]
    },
    {
      name: 'Customer Orders',
      path: '/bazaar/orders',
      component: Orders,
      meta: { icon: 'cash-register', color: 'orange', hash: 'bazaar-orders' },
      children: [
        {
          name: 'Orders Index',
          path: '/bazaar/orders',
          component: OrdersIndex
        },
        {
          name: 'Orders Grid',
          path: '/bazaar/orders/grid',
          component: ProductsGrid
        }
        // {
        //   name : 'Sales Report',
        //   path : '/bazaar/inventory/stats',
        //   component : ProductsStats
        // }
      ]
    },
    {
      name: 'Sales Reports',
      path: '/bazaar/sales',
      meta: { icon: 'money-bill-wave', color: 'green', hash: 'bazaar-sales' },
      component: Sales,
      children: [
        {
          name: 'Monthly Sales',
          path: '/bazaar/sales',
          component: MonthlySales
        },
        {
          name: 'Export Monthly Sales',
          path: '/bazaar/sales/export/:sheet?',
          props: true,
          component: MonthlySales
        },
        {
          name: 'Yearly Sales',
          path: '/bazaar/sales/grid',
          component: ProductsGrid
        }
      ]
    }
    // {
    //   name : 'Reporting Tools',
    //   path : '/bazaar',
    //   component : Dash
    // }
  ]
}
