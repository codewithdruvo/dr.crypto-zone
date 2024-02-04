import Navbar from "./Navbar";
import { SearchContextProvider } from "../context/SearchContext";

const MainLayout = ({ children }) => (
  <SearchContextProvider>
    <Navbar />
    <div className="container py-10">{children}</div>
  </SearchContextProvider>
);

export default MainLayout;
