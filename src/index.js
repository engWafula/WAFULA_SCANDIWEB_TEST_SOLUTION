import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import client from "./Services/apolloClient";
import { Provider } from "react-redux";
import {store,persistor} from "./Redux/store";
import { PersistGate } from "redux-persist/integration/react";

import { ApolloProvider } from "@apollo/client";

ReactDOM.render(
  <ApolloProvider client={client}>

    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
      </PersistGate>
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
