import ProviderTheme from "./styles/ProviderTheme";
import SearchToDisplay from "./pages/searchToDisplay";
import { Route, Routes } from "react-router-dom";
import UseMap from "./components/UseMap";
import PhotoStatistics from "./pages/statistics/PhotoStatistics";
import UserStatistics from "./pages/statistics/UserStatistics";
import UserPhotos from "./pages/UserPhotos";
import ChangeLang from "./components/ChangeLang";

function App() {
  return (
    <ProviderTheme>
      <ChangeLang />  
      <Routes>
        <Route path="/" element={<SearchToDisplay />} />
        <Route path="/map" element={<UseMap />} />
        <Route path="/photoStatistics/:photoId" element={<PhotoStatistics />} />
        <Route path="/userStatistics/:name" element={<UserStatistics />} />
        <Route path="/userPhotos/:name" element={<UserPhotos />} />
      </Routes>
    </ProviderTheme>
  );
}

export default App;
