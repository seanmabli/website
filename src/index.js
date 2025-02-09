import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./index.css";
function Link({ href, children }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="link-grid"
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >{children}
      </a>
      {isHovered && <p className="truncate-text">{href.replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/$/, '')}</p>}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="site">
    <div>
      <div className="header-container">
        <div>
          <h1 className="no-margin">Sean Mabli</h1>
          <p>seanmabli4@gmail.com</p>
          <p>978.460.5363</p>
        </div>
        {/* <button className="download-button">Download Full Resume</button> */}
      </div>
      <Link href="https://github.com/seanmabli">Github</Link>
      <Link href="https://www.youtube.com/@seanmabli">YouTube</Link>
      <div className="section-container">
        <h1 className="no-margin">Synodic AI<span className="year"> 2024-</span></h1>
        <p>Automating image collection, labeling, and model training for object detection model development.</p>
      </div>
      <Link href="https://synodic.ai">Synodic AI</Link>
      <Link href="https://www.youtube.com/watch?v=ZZaLB54iTHM">Indian Diaspora Interview</Link>
      <Link href="https://github.com/synodicai">Github</Link>
      <Link href="https://youtube.com/@synodic_ai">YouTube</Link>
      <div className="section-container">
        <h1 className="no-margin">Dataset Colab<span className="year"> 2023-</span></h1>
        <p>A collaborative platform for FRC teams to create and share object detection datasets and models.</p>
      </div>
      <Link href="https://datasetcolab.com">Dataset Colab</Link>
      <Link href="https://www.chiefdelphi.com/t/introducing-dataset-colab-an-object-detection-dataset-collaboration-software/447259">Cheif Delphi Launch Post</Link>
      <div className="section-container">
        <h1 className="no-margin">The Ultrasonicists<span className="year"> 2019-2023</span></h1>
        <p>Two-time United States National Champion in the World Robot Olympiad through designing, building and programming python-based autonomous robots.</p>
      </div>
      <Link href="https://www.youtube.com/@ultrasonicists">YouTube</Link>
      <Link href="https://github.com/seanmabli/wro2023">Github (2023)</Link>
      <Link href="https://github.com/seanmabli/wro">Github (2021, 2022)</Link>
      <div className="section-container">
        <h1 className="no-margin">AIinPy<span className="year"> 2020-2022</span></h1>
        <p>Built and published a Python package for training several types of neural networks.</p>
      </div>
      <Link href="https://github.com/seanmabli/aiinpy">Github</Link>
      <Link href="https://pypi.org/project/aiinpy/">PyPI</Link>
    </div>
  </div>
);
