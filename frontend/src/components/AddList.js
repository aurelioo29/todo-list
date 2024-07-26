import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddList() {
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("Pending");
  const navigate = useNavigate();

  const saveTodo = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/lists", {
        content,
        status,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveTodo}>
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
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddList;
