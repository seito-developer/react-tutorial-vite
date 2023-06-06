import React from "react";
import "./Home.scss";
import Layout from "../../components/Layout/Layout";

const Home = () => {

    return (
        <Layout title={"ToDo App"}>
            <div className="page-home">
                <div className="page-home__contents">
                    Hello Home!
                </div>
            </div>
        </Layout>
    );
};

export default Home;
