import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaRegCheckCircle, FaPlus, FaEllipsisV } from "react-icons/fa";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import * as client from "./client";
function ModuleList() {
  const dispatch = useDispatch();

  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);

  const { courseId } = useParams();
  
  const handleUpdateModule = async () => {
    await client.updateModule(module);
    dispatch(updateModule(module));
  };


  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then(
      dispatch(deleteModule(moduleId)));
   
  };


  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  useEffect(() => {
    client.findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
      );
  }, [courseId, dispatch]);
  return (
    <div className="d-flex flex-column px-4">

      <div className="d-flex">
        <button className="wd-btn">Collapse All</button>
        <button className="wd-btn">View Progress</button>
        <button className="wd-btn dropdown dropdown-toggle d-flex align-items-center">
          <FaRegCheckCircle className="green" />
          Publish All
        </button>
        <button className="wd-btn btn-primary ">
          <FaPlus />
          Module</button>
        <button className="wd-btn"><FaEllipsisV /></button>
      </div>

      <hr></hr>
      <ul className="list-group">
        <li className="list-group-item">
          <button className="wd-btn"
            onClick={handleAddModule}
          >
            Add
          </button>
          <button className="wd-btn" onClick={handleUpdateModule}>Update</button>
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
              <button className="wd-btn"
              onClick={() => handleDeleteModule(module._id)}
            >
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