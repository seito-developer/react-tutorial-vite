import "./Home.scss";
import Layout from "../../components/Layout/Layout";
import AddBoard from "../../components/AddBoard/AddBoard";

const Home = () => {

    return (
        <Layout title={"ToDo App"}>
            <div className="page-home">
                <div className="page-home__contents">
                    Hello Home!
                    <AddBoard />
                </div>
            </div>
        </Layout>
    );
};

export default Home;
