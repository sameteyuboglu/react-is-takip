import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobList from "./pages/JobList";
import AddJob from "./pages/AddJob";
import Header from "./components/Header";
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<JobList />}></Route>
          <Route path="/add-job" element={<AddJob />}></Route>
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
