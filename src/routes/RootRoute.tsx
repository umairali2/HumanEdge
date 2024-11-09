import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

type Props = {};

export const RootRoute = (props: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route index element={<h1>Home 1</h1>} />
        <Route path="blogs" element={<h1>Blogs</h1>} />
        <Route path="contact" element={<h1>Contact</h1>} />
        <Route path="*" element={<h1>NoPage</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
