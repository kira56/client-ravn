import 'bootstrap/dist/css/bootstrap.css'; // Add this line
import { useEffect } from 'react';
import { Provider } from "react-redux";
import { useStore } from "src/store";
import Cookies from 'js-cookie'
import tokenAuth from "@config/token";
import { userAuthenticated } from "src/actions/auth.action";

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)
  const token = Cookies.get('token')



  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  useEffect(() => {

    if (token) {
      tokenAuth(token)
      return store.dispatch(userAuthenticated())
    }
  }, [store, token]);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp;
