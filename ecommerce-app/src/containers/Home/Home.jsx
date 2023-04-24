import Header from "../../components/Home/Header";
import Section from "../../components/Home/Section";
import './Home.scss'

const Home = (props) => {
  const {headerSticky} = props;

    return (
        <div className="home-container" >
          <Header headerSticky={headerSticky} />
          <Section/>
        </div>
    )
}

export default Home;