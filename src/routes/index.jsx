import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { SearchScreen } from "../pages/SearchScreen";
import { SearchByLicensePlate } from "../pages/SearchByLicensePlate";
import { SearchByCode } from "../pages/SearchByCode";
import { AboutTheProject } from "../pages/AboutTheProject";
import { SearchResults } from "../pages/SearchResults";
import { OrderSummary } from "../pages/OrderSummary";

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about_the_project" element={<AboutTheProject />} />
      <Route path="/search_screen" element={<SearchScreen />} />
      <Route
        path="/search_by_license_plate"
        element={<SearchByLicensePlate />}
      />
      <Route path="/search_by_code" element={<SearchByCode />} />
      <Route path="/search_results" element={<SearchResults />} />
      <Route path="/order_summary" element={<OrderSummary />} />
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
