import Header from "./Header";

const PageWrapper = ({ children }) => (
  <div>
    <Header />
    <div style={{ marginTop: "5%" }}>{children}</div>
  </div>
);

export default PageWrapper;
