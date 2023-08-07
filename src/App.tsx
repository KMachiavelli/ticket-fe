import { BrowserRouter } from "react-router-dom";
import { Layout } from "./components/shared/layout/Layout";
import { Routing } from "./routing/Routing";
import "./style.scss";
import { Provider } from "react-redux";
import store from "./store/store";
import { ToastContainer } from "react-toastify";
import { Toast } from "./components/shared/toast/Toast";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <main>
            <Routing />
          </main>
        </Layout>
        <Toast />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
