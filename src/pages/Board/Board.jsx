import "./Board.scss";
import Layout from "../../components/Layout/Layout";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Board = () => {

    const { state } = useLocation();
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState("");

    useEffect(()=>{
        const fetch = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/boards/${state.boardId}`);
                setTasks(res.data.tasks);
                // console.log('res:', res.data.tasks);
            } catch (error) {
                setError(error.message);
                console.log('error:', error.message);
            }
        }
        fetch();
    },[]);

    return (
        <Layout title={"ToDo App"}>
            <div className="page-board">
                <div className="page-board__contents">
                    <h2>This Board ID is {state.boardId}</h2>
                    <ul>
                        {tasks.map((task) => {
                            return <li key={task.id}>{task.title}</li>
                        })}
                    </ul>
                </div>
            </div>
        </Layout>
    );
};

export default Board;
