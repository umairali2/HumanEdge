import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feedback from "../pages/Feedback/Feedback";

type Props = {};

export const RootRoute = (props: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Feedback />} />
        <Route index element={<Feedback />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="contact" element={<h1>Contact</h1>} />
        <Route path="*" element={<h1>NoPage</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
