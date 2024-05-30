import { Outlet } from "react-router-dom";
import Navbar from "./component/navbar";
function App() {
  return (
    <main className="text-white font-poppins">
      <Navbar />
      <div className="mx-6 lg:mx-20  pt-14 min-h-100">
        <Outlet />
      </div>
    </main>
  );
}

export default App;
