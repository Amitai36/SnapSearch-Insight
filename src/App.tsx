import ProviderTheme from "./styles/ProviderTheme";
import SearchToDisplay from "./pages/searchToDisplay";
import { Route, Routes } from "react-router-dom";
import UseMap from "./components/UseMap";
import PhotoStatistics from "./pages/statistics/PhotoStatistics";

function App() {
  return (
    <ProviderTheme>
      <Routes>
        <Route path="/" element={<SearchToDisplay />} />
        <Route path="/map" element={<UseMap />} />
        <Route path="/photoStatistics/:photoId" element={<PhotoStatistics />} />
      </Routes>
    </ProviderTheme>
  );
}

export default App;
