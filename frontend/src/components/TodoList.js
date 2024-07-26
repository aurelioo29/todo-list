import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TodoList = () => {
  const [lists, setList] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    const response = await axios.get("http://localhost:8000/lists");
    setList(response.data);
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/lists/${id}`);
      getList();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <h1 className="title has-text-centered">TODO LIST</h1>
        <Link to={`add`} className="button is-success">
          Create Todo
        </Link>
        <table className="table is-stripped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Content</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {lists.map((list, index) => (
              <tr key={list.id}>
                <td>{index + 1}</td>
                <td>{list.content}</td>
                <td>{list.status}</td>
                <td>
                  <Link
                    to={`edit/${list.id}`}
                    className="button is-small is-info mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteTodo(list.id)}
                    className="button is-small is-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoList;
