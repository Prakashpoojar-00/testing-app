import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Productpage = React.lazy(() => import("pages/Productpage"));
const Shoppingcart = React.lazy(() => import("pages/Shoppingcart"));
const Homepage = React.lazy(() => import("pages/Homepage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/shoppingcart" element={<Shoppingcart />} />
          <Route path="/productpage" element={<Productpage />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
