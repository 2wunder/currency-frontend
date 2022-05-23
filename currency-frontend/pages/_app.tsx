import '../styles/globals.scss';
import { wrapper, store } from "../pages/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return( 
  <>
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
  </>);
}

export default wrapper.withRedux(MyApp);
