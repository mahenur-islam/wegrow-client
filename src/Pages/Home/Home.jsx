import About from "../../Component/About/About";
import Banner from "../../Component/Banner/Banner";
import Package from "../../Component/Packages/Package";


const Home = () => {
    return (
        <div className="space-y-10">
           <Banner></Banner>
           <About></About>
           <Package></Package>
        </div>
    );
};

export default Home;