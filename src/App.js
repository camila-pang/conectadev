import logo from './logo.svg';

import Home from './pages/Home'
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme'
import SignIn from './pages/SignIn'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  // console.log(window.location.href)
  // const url = windows.location.href;
  return(
    <ThemeProvider theme={theme}>
       <BrowserRouter>
           <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/sign-in" element={<SignIn />} />
             <Route path="*" element={<h1>Not found 404!</h1>} />
           </Routes>
       </BrowserRouter>
        {/* {
           url === 'http://localhost:3000/'
           ? <Home />
           :
           <SignIn />
        } */}
    </ThemeProvider>
  )
}
export default App;
