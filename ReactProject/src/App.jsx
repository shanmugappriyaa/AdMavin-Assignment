
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Assign1 from "./Assign1";
import NestedListExample from "./Assign2";
import Assign3 from "./Assign3";
import "./App.css";
import Assign4 from "./Assign4";
import Layout from "./components/Layout";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
      <Route path='/assign1' element={<Assign1 />}/>
      <Route path='/assign2' element={<NestedListExample />}/>
      <Route path='/assign3' element={<Assign3 />}/>
      <Route path='/assign4' element={<Assign4 />}/>
      </Route>
    </Routes>
    </BrowserRouter>
     
    </>
  );
}

export default App;
