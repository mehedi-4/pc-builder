import "./PartsGrid.css";
import cpuIcon from "../assets/cpu.png";
import motherboardIcon from "../assets/motherboard.png";
import ramIcon from "../assets/ram.png";
import ssdIcon from "../assets/ssd.png";
import psuIcon from "../assets/psu.png";
import caseIcon from "../assets/case.png";
import monitorIcon from "../assets/monitor.png";
import keyboardIcon from "../assets/keyboard.png";
import etcIcon from "../assets/GPU.png";
import { Link } from "react-router-dom";

const parts = [
  { name: "CPU", icon: cpuIcon },
  { name: "Motherboard", icon: motherboardIcon },
  { name: "Ram", icon: ramIcon },
  { name: "SSD", icon: ssdIcon },
  { name: "GPU", icon: etcIcon },
  { name: "PSU", icon: psuIcon },
  { name: "Case", icon: caseIcon },
  { name: "Monitor", icon: monitorIcon },
  { name: "Keyboard-Mouse", icon: keyboardIcon },
];

const PartsGrid = () => (
  <section className="parts-grid-section">
    <h2>Select Your Components</h2>
    <div className="parts-grid">
      {parts.map((part) => (
        <Link to={part.name}>
          <div className="part-card" key={part.name}>
            <img
              src={part.icon}
              alt={part.name + " icon"}
              className="part-icon"
            />
            <span>{part.name}</span>
          </div>
        </Link>
      ))}
    </div>
  </section>
);

export default PartsGrid;
