import { Provider } from "react-redux";

import store from "./redux/store";

//Components
import ShowData from "./components/showData";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ShowData />
      </div>
    </Provider>
  );
}

export default App;
