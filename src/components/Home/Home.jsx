import React, { useState } from "react";
import Store from "../../Store/Store";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
  let [name, setName] = useState('')
  let [author, setAuthor] = useState('')
  let [price, setPrice] = useState('')

  let addItem = Store(state => state.addBook)

  let addBooks = () => {
    let produce = {
      id: uuidv4(),
      name: name,
      author: author,
      price: price
    }

    addItem(produce)
  }
  return (
    <div className="card w-50 mx-auto mt-5 p-3">
      <h2 className="text-center text-primary">Admin dashboard</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="Name Author"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Name Author"
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="number"
          className="form-control"
          id="exampleCheck1"
          placeholder="Number"
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <Link to='/books'>
        <button onClick={addBooks} type="button" className="btn btn-primary">
            Send
        </button>
      </Link>
    </div>
  );
};

export default Home;
