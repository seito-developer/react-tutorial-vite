import "./Home.scss";
import Layout from "../../components/Layout/Layout";
import AddBoard from "../../components/AddBoard/AddBoard";
import Board from "../../components/Board/Board";
import { useEffect, useState } from "react";
import axios from "axios";

const boards = [
    {
        id: 1,
        title: "Weekly tasks"
    }, {
        id: 2,
        title: "Private tasks"
    }
];

const Home = () => {
    const [boardsData, setBoardsData] = useState(null);

    useEffect(()=>{
        const fetch = async () => {
            const res = await axios.get('http://localhost:3000/boards');
            console.log('res:', res);
            return res;
        }
        setBoardsData(fetch());
        
    },[]);

    return (
        <Layout title={"ToDo App"}>
            <div className="page-home">
                <div className="page-home__contents">
                    { boards.map((board, index) => {
                        return <Board key={index} {...board} />
                    })}
                    <AddBoard />
                </div>
            </div>
        </Layout>
    );
};

export default Home;
