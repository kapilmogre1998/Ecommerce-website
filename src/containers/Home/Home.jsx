import Header from '../../components/Header/Header';
import Product from '../../components/Product/Product';
import Review from '../../components/Review/Review';
import Section from '../../components/Section/Section';
import './Home.scss'

const Home = (props) => {
  const {headerSticky} = props;

    return (
        <>
          <Header headerSticky={headerSticky} />
          <Section/>
          <Product/>
          <Review/>
        </>
    )
}

export default Home;