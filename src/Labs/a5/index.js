import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithObjects from "./WorkingWithObjects";

function Assignment5() {
    return (
      <div className="container">
        <h1>Assignment 5</h1>
        <div className="list-group">
          <a href={process.env.REACT_APP_BASE`/a5/welcome`}
             className="list-group-item">
            Welcome
          </a>
        </div>

        {/* <SimpleAPIExamples /> */}
        <EncodingParametersInURLs/>
        <WorkingWithObjects/>
        <WorkingWithArrays/>
      </div>
    );
  }
  export default Assignment5;