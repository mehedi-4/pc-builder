import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./cpu.css";

function CPU() {
  const [cpus, setCpus] = useState([]);
  const [selectedCpu, setSelectedCpu] = useState(null);

  useEffect(() => {
    const fetchCpus = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/cpu");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCpus(data);
      } catch (err) {
        console.error("Error fetching CPUs:", err);
      }
    };

    fetchCpus();
  }, []);

  const handleLearnMore = (cpu) => {
    setSelectedCpu(cpu);
  };

  const handleClosePopup = () => {
    setSelectedCpu(null);
  };

  return (
    <>
      <Header />
      <h2 className="cpu-title">CPU List</h2>
      <div className="cpu-container">
        {cpus.map((cpu) => (
          <div key={cpu.id} className="cpu-card">
            <img src={`http://localhost:3000/images/by-id/${cpu.productid}`} alt={cpu.name} />
            <h3>{cpu.name}</h3>
            <p>Socket: {cpu.socket}</p>
            <p>Cores: {cpu.cores}</p>
            <p>Threads: {cpu.threads}</p>
            <p className="price-of-product">Price: <span className="cpu-price">${cpu.price}</span></p>
            <button className="add-to-builder-btn">Add to Builder</button>
            <button className="learn-more-btn" onClick={() => handleLearnMore(cpu)}>Learn More</button>
          </div>
        ))}
      </div>
      {selectedCpu && (
        <div className="cpu-popup-overlay" onClick={handleClosePopup}>
          <div className="cpu-popup" onClick={e => e.stopPropagation()}>
            <button className="close-popup-btn" onClick={handleClosePopup}>×</button>
            <div className="cpu-popup-content">
              <img src={`http://localhost:3000/images/by-id/${selectedCpu.productid}`} alt={selectedCpu.name} className="cpu-popup-img" />
              <div className="cpu-popup-info">
                <h3>{selectedCpu.name}</h3>
                <p>Brand: {selectedCpu.brand}</p>
                <p>Socket: {selectedCpu.socket}</p>
                <p>Cores: {selectedCpu.cores}</p>
                <p>Threads: {selectedCpu.threads}</p>
                <p>Cache: {selectedCpu.cache}</p>
                <p className="price-of-product">Price: <span className="cpu-price">${selectedCpu.price}</span></p>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default CPU;
