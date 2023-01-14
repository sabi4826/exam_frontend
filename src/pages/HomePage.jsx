import { Link } from "react-router-dom";
import Menu from "../../components/Menu";
import Header from "../../components/Header";
import Schedule from "../../components/Schedule";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";
const HomePage = () => {
  return (
    <section>
      {/* <h2>Home Page</h2> */}
      {/* <Link to="/Ticketbutton">Ticket Button</Link> */}
      <Menu />
      <Header />
      <Schedule />
      <Newsletter />
      <Footer />
    </section>
  );
};
export default HomePage;
