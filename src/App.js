import { Routes, Route } from "react-router-dom";
import { createContext, useReducer } from "react";
import { appReducer, initState } from "./reducers/appreducer"
import GlobalStyles from "./styles/GlobalStyles";
import axios from "axios";
import LoginPage from "./pages/LoginPage";
import TrialPage from "./pages/TrailPage";
import HomePage from "./pages/HomePage";

axios.defaults.baseURL = 'https://thebetter.bsgroup.eu';
axios.defaults.withCredentials = true

export const Appcontext = createContext();

function App() {

  const [state, dispatch] = useReducer(appReducer, initState)

  return (
    <Appcontext.Provider value={{ state, dispatch }}>
    <div className="App">
        <GlobalStyles />
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/trial" element={<TrialPage />} />
          <Route exact path="/home" element={<HomePage />} />
        </Routes>
    </div>
    </Appcontext.Provider>
  );
}

export default App;
