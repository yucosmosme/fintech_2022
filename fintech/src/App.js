// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Welcome from './components/Welcome';
// import ArrayMap from './components/ArrayMap';
import AxiosTest from './pages/AxiosTest';
import NewsApiPage from './pages/NewsApiPage';
// import StateAndEvent from './components/StateAndEvent';
// import AppBar from './components/common/AppBar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/news" element={<NewsApiPage/>}/>
        {/* <Route path="/b" element={<ArrayMap/>}/> */}
        <Route path="/axiosTest" element={<AxiosTest/>}/>
      </Routes>
    </BrowserRouter>

    // <>
    //     <AppBar title={"메인화면"}></AppBar>
    // </>
    // <div className="App">
    //   <header className="App-header">
    //     {/* <StateAndEvent/> */}
    //     {/* <ArrayMap/> */}
    //   </header>
    // </div>
  );
}

export default App;
