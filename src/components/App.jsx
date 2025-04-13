import Header from './App/Header';
import Landing from './App/Landing';
import Footer from './App/Footer';
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;