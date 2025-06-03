import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="main min-w-full">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
