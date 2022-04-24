import React from "react";

export default function AddNote() {
  return (
    <div className="my-5">
        <h3 className="text-center"><i>Add Note</i></h3>
        <form>
        <div className="form-group my-2">
          <label>Note Title</label>
          <input type="text" className="form-control my-2" />
        </div>
        <div className="form-group my-4">
          <label>Note Description</label>
          <textarea name="" rows="10" className="form-control my-2"></textarea>
        </div>
        <div className="form-group my-2">
          <label>Note Tag</label>
          <input type="text" className="form-control my-2" />
        </div>

        <button type="submit" className="btn btn-primary btn-lg my-2">
          Submit
        </button>
      </form>
    </div>
  );
}
