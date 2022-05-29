import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App'
import CssBaseline from '@mui/material/CssBaseline';



import Home from './pages/Home'


// ReactDOM.createRoot(root).render(
//   <Provider store={store}>
//      <Routes />
//   </Provider>,
// const container =   document.getElementById('root')
// // );

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <CssBaseline>
         <App />
  
  </CssBaseline>
     
)
