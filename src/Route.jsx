import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function Route() {
    return (
        <div className=" w-full h-full overflow-scroll no-scrollbar">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}
export default Route;