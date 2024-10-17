import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="site">
    <div>
      <h1>Sean Mabli <h3>(sean@synodic.ai)</h3>
      </h1>
      <div className="linkContainer">
        <a href="https://github.com/seanmabli">Github</a>
      </div>
      <div className="linkContainer">
        <a href="https://x.com/seanmabli">X</a>
      </div>
      <div className="linkContainer">
        <a href="https://www.youtube.com/@seanmabli">YouTube</a>
      </div>
      <h2>Synodic AI</h2>
      <div className="linkContainer">
        <a href="https://datasetcolab.com">Synodic AI</a>
      </div>
      <div className="linkContainer">
        <a href="https://github.com/synodicai">Github</a>
      </div>
      <div className="linkContainer">
        <a href="https://x.com/syndoic_ai">X</a>
      </div>
      <h2>The Ultrasonicists <h3>(World Robot Olympiad Team)</h3>
      </h2>
      <div className="linkContainer">
        <a href="https://www.youtube.com/@ultrasonicists"> YouTube </a>
      </div>
      <div className="linkContainer">
        <p>
          <a href="https://github.com/seanmabli/wro2023">Github</a> (2023)
        </p>
      </div>
      <div className="linkContainer">
        <p>
          <a href="https://github.com/seanmabli/wro">Github</a> (2021, 2022)
        </p>
      </div>
      <h2>aiinpy</h2>
      <div className="linkContainer">
        <a href="https://pypi.org/project/aiinpy/">PyPI</a>
      </div>
      <div className="linkContainer">
        <a href="https://aiinpy.org">Documentation</a>
      </div>
      <div className="linkContainer">
        <a href="https://github.com/seanmabli/aiinpy">Github</a>
      </div>
    </div>{" "}
  </div>
);
