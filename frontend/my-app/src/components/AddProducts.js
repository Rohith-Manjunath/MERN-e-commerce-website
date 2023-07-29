import React, { useState } from "react";

const AddProducts = () => {
  const [ImageUrl, setImgurl] = useState("");
  const [Model, setModel] = useState("");
  const [Price, setPrice] = useState("");
  const [Description, setDescription] = useState("");

  async function addProducts(e) {
    e.preventDefault();

    let result = await fetch("http://localhost:2000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ ImageUrl, Model, Price, Description }),
    });

    result = await result.json();
    console.log(result);
  }

  return (
    <div className="signup-container">
      <h1>Login</h1>

      <input
        type="email"
        placeholder="Enter image url"
        required
        onChange={(e) => setImgurl(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter model"
        required
        onChange={(e) => setModel(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter price"
        required
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter description"
        required
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit" onClick={addProducts}>
        Add
      </button>
    </div>
  );
};

export default AddProducts;
