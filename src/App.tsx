import ProviderTheme from "./styles/ProviderTheme";
import SearchToDisplay from "./pages/searchToDisplay";
import { Route, Routes } from "react-router-dom";
import UseMap from "./components/UseMap";

function App() {
  return (
    <ProviderTheme>
      <Routes>
        <Route path="/" element={<SearchToDisplay />} />
        <Route path="/map" element={<UseMap />} />
      </Routes>
    </ProviderTheme>
  );
}

export default App;
