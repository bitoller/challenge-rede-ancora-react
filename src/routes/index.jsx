import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { SearchScreen } from "../pages/SearchScreen";
import { SearchByLicensePlate } from "../pages/SearchByLicensePlate";
import { SearchByCode } from "../pages/SearchByCode";

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/searchScreen" element={<SearchScreen />} />
      <Route path="/searchByLicensePlate" element={<SearchByLicensePlate />} />
      <Route path="/searchByCode" element={<SearchByCode />} />
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
