import React from 'react';
import '../css/App.css';

export default function AddNew() {
  return (
    <div className="addnew-form">
      <div>
        <h1>Add New Recipe</h1>
      </div>


      <div className="form-group">
        <label htmlFor="message">Cooking Instructions</label>
        <textarea className="form-control" rows="10"></textarea>
      </div>
    </div>
  );
}