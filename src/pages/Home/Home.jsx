import "./Home.scss";
import Layout from "../../components/Layout/Layout";
import AddBoard from "../../components/AddBoard/AddBoard";
import Board from "../../components/Board/Board";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
    const [boardsData, setBoardsData] = useState([]);
    const [error, setError] = useState("");

    useEffect(()=>{
        const fetch = async () => {
            try {
                const res = await axios.get('http://localhost:3000/boards');
                setBoardsData(res.data);
            } catch (error) {
                setError(error.message);
                console.log('error:', error.message);
            }
        }
        fetch();
    },[]);

    return (
        <Layout title={"ToDo App"}>
            <div className="page-home">
                <div className="page-home__contents">
                    { error && 
                        <p>{ error }</p>
                    }
                    { boardsData.map((board, index) => {
                        return <Board key={index} {...board} />
                    })}
                    <AddBoard boardsData={boardsData} setBoardsData={setBoardsData} />
                </div>
            </div>
        </Layout>
    );
};

export default Home;
