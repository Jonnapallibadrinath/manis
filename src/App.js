import Header from "./components/Header/Header";
import "./App.css";
import MainNav from "./components/MainNav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "@material-ui/core";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Trending from "./Pages/Trending/Trending";
import Search from "./Pages/Search/Search";

const App = () => {
  return (
  
    <BrowserRouter>
    <Header/>
    <div className="app">
      <Container>
        <Routes>
        <Route exact  path="/" Component={Trending}  />
          <Route path="/movies" Component={Movies} />
          <Route path="/series" Component={Series} />
          <Route path="/search" Component={Search} />
        </Routes>
      </Container>

    </div>
    <MainNav/>
    </BrowserRouter>

    
  )
}

export default App
