import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./cpu.css";

function CPU() {
  const [cpus, setCpus] = useState([]);

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

  return (
    <>
      <Header />
      <h2 className="cpu-title">CPU List</h2>
      <div className="cpu-container">
        {cpus.map((cpu) => (
          <div key={cpu.id} className="cpu-card">
            {<img src={`http://localhost:3000/images/by-id/${cpu.productid}`} alt={cpu.name} />
}
            <h3>{cpu.name}</h3>
            <p>Brand: {cpu.brand}</p>
            <p>Cores: {cpu.cores}</p>
            <p>Price: ${cpu.price}</p>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default CPU;
