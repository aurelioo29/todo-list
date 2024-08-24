import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditList() {
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("Pending");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getListById();
  });

  const updateTodo = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:8000/lists/${id}`, {
        content,
        status,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getListById = async () => {
    const response = await axios.get(`http://localhost:8000/lists/${id}`);
    setContent(response.data.content);
    setStatus(response.data.status);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateTodo}>
          <div className="field">
            <label className="label">Content</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Content"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Status</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="Done">Done</option>
                  <option value="Pending">Pending</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditList;
