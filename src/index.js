import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./index.css";

function Link({ href, children }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      style={{ textDecoration: 'none' }}
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <span style={{ textDecoration: 'underline' }}>{children}</span>
      {isHovered && <span> ({href.replace(/^https?:\/\//, '').replace(/^www\./, '')})</span>}
    </a>
    <br />
  </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="site">
    <div>
      <h1>Sean Mabli <h3>(sean@synodic.ai)</h3>
      </h1>
      <Link href="https://github.com/seanmabli">Github</Link>
      <Link href="https://x.com/seanmabli">X</Link>
      <Link href="https://www.youtube.com/@seanmabli">YouTube</Link>
      <h2>Synodic AI</h2>
      <Link href="https://datasetcolab.com">Synodic AI</Link>
      <Link href="https://www.youtube.com/watch?v=ZZaLB54iTHM">Indian Diaspora Interview</Link>
      <Link href="https://github.com/synodicai">Github</Link>
      <Link href="https://x.com/synodicai">X</Link>
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
