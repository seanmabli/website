import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="site">
    <div>
      <h1>Sean Mabli</h1>
      <div className="linkContainer">
        <a href="https://www.youtube.com/@seanmabli">YouTube</a>
      </div>
      <div className="linkContainer">
        <a href="https://github.com/seanmabli">Github</a>
      </div>
      <div className="linkContainer">
        <a href="https://www.linkedin.com/in/sean-mabli-803954207/">Linkedin</a>
      </div>
      <h2>The Ultrasonicists <h3>(World Robot Olympiad Team)</h3></h2>
      <div className="linkContainer">
        <a href="https://www.youtube.com/@ultrasonicists">
           YouTube
        </a>
      </div>
      <div className="linkContainer">
        <a href="https://github.com/seanmabli/wro">
         Github
        </a>
      </div>
      <h2>aiinpy</h2>
      <div className="linkContainer">
        <a href="https://pypi.org/project/aiinpy/">PYPI</a>
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
