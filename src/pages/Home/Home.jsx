import React, { useEffect, useState } from "react";
import "./Home.scss";
import Layout from "../../components/Layout/Layout";

const Home = () => {
    const [boards, setBoards] = useState([]);
    const [error, setError] = useState("");

    return (
        <Layout title={"ToDo App"}>
            <div className="page-home">
                <div className="page-home__contents">
                    Hello World!
                </div>
            </div>
        </Layout>
    );
};

export default Home;
