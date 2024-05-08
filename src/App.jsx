import { MainRoutes } from "./routes";
import { GlobalStyle } from "./styles/GlobalStyles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer position="top-right" theme="crimson" />
      <MainRoutes />
    </>
  );
}

export default App;
