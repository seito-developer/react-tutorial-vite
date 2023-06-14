import "./Home.scss";
import Layout from "../../components/Layout/Layout";
import AddBoard from "../../components/AddBoard/AddBoard";
import Board from "../../components/Board/Board";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
    const [boardsData, setBoardsData] = useState([]);

    useEffect(()=>{
        const fetch = async () => {
            try {
                const res = await axios.get('http://localhost:3000/boards');
                setBoardsData(res.data);
            } catch (error) {
                console.log('error:', error);
            }
        }
        fetch();
    },[]);

    return (
        <Layout title={"ToDo App"}>
            <div className="page-home">
                <div className="page-home__contents">
                    { boardsData.map((board, index) => {
                        return <Board key={index} {...board} />
                    })}
                    <AddBoard />
                </div>
            </div>
        </Layout>
    );
};

export default Home;
