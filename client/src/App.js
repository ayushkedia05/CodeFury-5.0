import './App.css';
import './index.css'
import Navigation from './components/Header';
import React, {createContext , useState} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import Landing from "./screens/Landing/Landing"
import SignUp from "./screens/Signup/SignUp"
import Login from "./screens/Login/Login"
import Select from "./screens/Selection Page/Select"
import Disease from "./screens/Disease/Disease"
import Map from "./screens/Map/Map"
import Reviews from './components/Review';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: `'Roboto Mono', monospace`,
      fontWeightLight: 400,
      fontWeightRegular: 600,
      fontWeightMedium: 900,
    },
  },
})

export const UserContext = createContext(null)




function App() {
  const [user, setUser] = useState({
    username: "",
    id: "",
    email: "",
  })

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <UserContext.Provider value={{ user, setUser }}>
          <Navigation />
          <div style={{ marginTop: "75px" }}>
            <Routes>
              <Route exact path='/' element={<Landing />} />
              <Route exact path='demo' element={<Landing />} />
              <Route path='signup' element={<SignUp />} />
              <Route path='login' element={<Login />} />
              <Route path='select' element={<Select />} />
              <Route path='map' element={<Map />} />
              <Route path='disease' element={<Disease />} />
              <Route path='reviews' element={<Reviews />} />

            </Routes>
          </div>
        </UserContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
  )
}


export default App;
