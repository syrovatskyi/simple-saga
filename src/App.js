import React from "react";
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {asyncDecrementCreator, asyncIncrementCreator, decrementCreator, incrementCreator} from "./redux/countReducer";
import {fetchUsers} from "./redux/userReducer";

function App() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.countReducer.count);
  const users = useSelector(state => state.userReducer.users);

  const handleClickAdd = () => {
    dispatch(incrementCreator())
  };
  const handleClickAsyncAdd = () => {
    dispatch(asyncIncrementCreator())
  };

  const handleClickAsyncRemove = () => {
    dispatch(asyncDecrementCreator())
  };
  const handleClickRemove = () => {
    dispatch(decrementCreator())
  };

  const handleClickAsyncUsers = () => {
    dispatch(fetchUsers());
  };

  return (
    <div className="App">

      <h1>{count}</h1>

      <div className="btn-group">
        <button
          className="btn btn-info"
          onClick={handleClickAdd}
        >
          Add number
        </button>
        <button
          className="btn btn-info"
          onClick={handleClickAsyncAdd}
        >
          Async add number
        </button>
        <button
          className="btn btn-danger"
          onClick={handleClickRemove}
        >
          Remove number
        </button>
        <button
          className="btn btn-danger"
          onClick={handleClickAsyncRemove}
        >
          Async remove number
        </button>
        <button
          className="btn btn-primary"
          onClick={handleClickAsyncUsers}
        >
          Create users +++
        </button>
      </div>
      <div>
        {users.map(user => (
          <div key={user.id}>
            {user.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
