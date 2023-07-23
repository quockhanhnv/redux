import Navbar from "../../components/Navbar/Navbar";

// eslint-disable-next-line react/prop-types
const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Navbar />

      <div className="container">{children}</div>
    </div>
  );
};

export default DefaultLayout;
