import Header from "../../components/Home/Header";
import Products from "../../components/Home/Products";
import Section from "../../components/Home/Section";
import './Home.scss'

const Home = (props) => {
  const {headerSticky} = props;

    return (
        <div className="home-container" >
          <Header headerSticky={headerSticky} />
          <Section/>
          <Products/>
        </div>
    )
}

export default Home;