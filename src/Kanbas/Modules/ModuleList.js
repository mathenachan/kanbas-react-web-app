import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaRegCheckCircle, FaPlus, FaEllipsisV } from "react-icons/fa";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";
function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  return (
    <div className="d-flex flex-column px-4">
      
        <div className="d-flex">
          <button className="wd-btn">Collapse All</button>
          <button className="wd-btn">View Progress</button>
          <button className="wd-btn dropdown dropdown-toggle d-flex align-items-center">
            <FaRegCheckCircle className="green"/>
            Publish All
          </button>
          <button className="wd-btn btn-primary ">
            <FaPlus/>
            Module</button>
          <button className="wd-btn"><FaEllipsisV/></button>
        </div>
      
      <hr></hr>
      <ul className="list-group">
        <li className="list-group-item">
          <button className="wd-btn"
            onClick={() => dispatch(addModule({ ...module, course: courseId }))}
          >
            Add
          </button>
          <button className="wd-btn" onClick={() => dispatch(updateModule(module))}>Update</button>
          <input
          className="form-control"
            value={module.name}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }
          />
          <textarea
          className="form-control"
            value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }
          />
        </li>
        {modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-group-item">
              <button className="wd-btn" onClick={() => dispatch(setModule(module))}>Edit</button>
              <button className="wd-btn" onClick={() => dispatch(deleteModule(module._id))}>
                Delete
              </button>
              <h3>{module.name}</h3>
              <p>{module.description}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
export default ModuleList;