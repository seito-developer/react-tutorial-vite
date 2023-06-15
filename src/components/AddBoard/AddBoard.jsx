import { useState } from 'react';
import "./AddBoard.scss";
import axios from 'axios';

const AddBoard = ({boardsData, setBoardsData}) => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title) {
      try {
        const res = await axios.post('http://localhost:3000/boards', {
          title: title,
          tasks: []
        });
        setBoardsData([...boardsData, res.data])
      } catch (error) {
        console.log('error:', error.message);
      }
      setTitle("");
      console.log(title);
    }
  };

  return (
    <form className="add-board" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new board"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddBoard;