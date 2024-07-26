import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoList from "./components/TodoList";
import AddList from "./components/AddList";
import EditList from "./components/EditList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="add" element={<AddList />} />
        <Route path="edit/:id" element={<EditList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
