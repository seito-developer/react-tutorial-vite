import React from "react";
import "./Board.scss";
import Layout from "../../components/Layout/Layout";

const Board = () => {

    return (
        <Layout title={"ToDo App"}>
            <div className="page-board">
                <div className="page-board__contents">
                    Hello Board!
                </div>
            </div>
        </Layout>
    );
};

export default Board;
