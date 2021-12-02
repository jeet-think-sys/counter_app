import { Provider } from "react-redux";

import store from "./redux/store";

import Counter_Redux from "./Counter_Redux";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter_Redux />
      </div>
    </Provider>
  );
}

export default App;
