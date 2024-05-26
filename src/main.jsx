import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter } from 'react-router-dom'
import Protected from './components/AuthLayout.jsx'
import { Home, Login, AddPost, AllPosts, EditPost, Post, Signup} from "./pages"
import { RouterProvider } from 'react-router-dom'

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/login",
        element:(
          <Protected authentication={false}>
            <Login/>
          </Protected>
        )
      },
      {
        path:"/signup",
        element:(
          <Protected authentication={false}>
            <Signup/>
          </Protected>
        )
      },
      {
        path:"/all-posts",
        element:(
          <Protected authentication>
            {" "}
            <AllPosts/>
          </Protected>
        )
      },
      {
        path:"/add-post",
        element:(
          <Protected>
            {" "}
            <AddPost/>
          </Protected>
        )
      },
      {
        path:"/edit-post/:slug",
        element:(
          <Protected authentication>
            {" "}
            <EditPost/>
          </Protected>
        )
      },
      {
        path:"/post/:slug",
        element:<Post/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
