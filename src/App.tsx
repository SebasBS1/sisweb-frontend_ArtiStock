import { Outlet } from "react-router";
import "./App.css";
import "./style_ap.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

interface Props {}

const App = (_props: Props) => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;