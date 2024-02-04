import Navbar from "./Navbar";

const MainLayout = ({ children }) => (
  <>
    <Navbar />
    <div className="container py-10">{children}</div>
  </>
);

export default MainLayout;
