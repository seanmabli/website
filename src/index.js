import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./index.css";

function Link({ href, children }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ display: 'grid', gridTemplateColumns: '230px 1fr' }}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >{children}
      </a>
      {isHovered && <p>({href.replace(/^https?:\/\//, '').replace(/^www\./, '')})</p>}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="site">
    <div>
      <div style={{ marginBottom: "20px" }}>
        <h1 style={{ margin: 0 }}>Sean Mabli</h1>
        <p>seanmabli4@gmail.com</p>
        <p>978.460.5363</p>
      </div>
      <Link href="https://github.com/seanmabli">Github</Link>
      <Link href="https://x.com/seanmabli">X</Link>
      <Link href="https://www.youtube.com/@seanmabli">YouTube</Link>
      <h2>Synodic AI</h2>
      <Link href="https://datasetcolab.com">Synodic AI</Link>
      <Link href="https://www.youtube.com/watch?v=ZZaLB54iTHM">Indian Diaspora Interview</Link>
      <Link href="https://github.com/synodicai">Github</Link>
      <Link href="https://x.com/synodicai">X</Link>
      <Link href="https://youtube.com/@synodic_ai">YouTube</Link>
      <h2>The Ultrasonicists <h3>(World Robot Olympiad Team)</h3></h2>
      <Link href="https://www.youtube.com/@ultrasonicists">YouTube</Link>
      <Link href="https://github.com/seanmabli/wro2023">Github (2023)</Link>
      <Link href="https://github.com/seanmabli/wro">Github (2021, 2022)</Link>
      <h2>aiinpy</h2>
      <Link href="https://pypi.org/project/aiinpy/">PyPI</Link>
      <Link href="https://github.com/seanmabli/aiinpy">Github</Link>
    </div>
  </div>
);
