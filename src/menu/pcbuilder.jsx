import Header from "../components/Header";
import Footer from "../components/Footer";
import "./pcbuilder.css";
import cpuIcon from "../assets/cpu.png";
import motherboardIcon from "../assets/motherboard.png";
import ramIcon from "../assets/ram.png";
import ssdIcon from "../assets/ssd.png";
import psuIcon from "../assets/psu.png";
import caseIcon from "../assets/case.png";
import monitorIcon from "../assets/monitor.png";
import keyboardIcon from "../assets/keyboard.png";
import gpuIcon from "../assets/GPU.png";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useBuilder } from "../BuilderContext";
import { GpuIcon } from "lucide-react";

export default function Builder() {
  const { builder } = useBuilder();
  const [totalPrice, setTotalPrice] = useState(0);

useEffect(() => {
  let total = 0;
  Object.values(builder).forEach((component) => {
    if (component && component.price) total += parseInt(component.price, 10);
  });
  setTotalPrice(total);
}, [builder]);


  return (
    <>
      <Header />
      <div className="super-mega-container">
        <div className="builder-container">
          <div className="title-container">
            <p className="title">Build Your own PC</p>
            <p className="total-price">৳{totalPrice}</p>
          </div>
          <div className="component-list">
            {/* CPU */}
            <div className="component-card">
              <img src={builder.cpu?`http://localhost:3000/images/by-id/${builder.cpu.productid}`:cpuIcon} alt="CPU Icon" />
              <div className="component-info">
                <p className="comp-title">
                  Processor <span className="required">Select First</span>
                </p>
                <p className="name">{builder.cpu?.name || "Not selected"}</p>
              </div>
              <div className="component-action">
                <p className="price">
                  Price: ৳{builder.cpu?.price || 0}
                </p>
                <Link to="/cpu">
                  <button className="select-button">Choose</button>
                </Link>
              </div>
            </div>

            {/* Motherboard */}
            <div className="component-card">
              <img src={builder.mobo?`http://localhost:3000/images/by-id/${builder.mobo.productid}`:motherboardIcon} alt="MOBO Icon" />
              <div className="component-info">
                <p className="comp-title">
                  Motherboard <span className="required">Select After CPU</span>
                </p>
                <p className="name">{builder.mobo?.name || "Not selected"}</p>
              </div>
              <div className="component-action">
                <p className="price">Price: ৳{builder.mobo?.price || 0}</p>
                <Link to="/motherboard">
                  <button className="select-button">Choose</button>
                </Link>
              </div>
            </div>

            {/* RAM */}
            <div className="component-card">
              <img src={builder.ram?`http://localhost:3000/images/by-id/${builder.ram.productid}`:ramIcon} alt="RAM Icon" />
              <div className="component-info">
                <p className="comp-title">
                  RAM <span className="required">Select After CPU</span>
                </p>
                <p className="name">{builder.ram?.name || "Not selected"}</p>
              </div>
              <div className="component-action">
                <p className="price">Price: ৳{builder.ram?.price || 0}</p>
                <Link to="/ram">
                  <button className="select-button">Choose</button>
                </Link>
              </div>
            </div>

            {/* SSD */}
            <div className="component-card">
              <img src={builder.ssd?`http://localhost:3000/images/by-id/${builder.ssd.productid}`:ssdIcon} alt="SSD Icon" />
              <div className="component-info">
                <p className="comp-title">Storage</p>
                <p className="name">{builder.ssd?.name || "Not selected"}</p>
              </div>
              <div className="component-action">
                <p className="price">Price: ৳{builder.ssd?.price || 0}</p>
                <Link to="/ssd">
                  <button className="select-button">Choose</button>
                </Link>
              </div>
            </div>

            <div className="component-card">
              <img src={builder.gpu?`http://localhost:3000/images/by-id/${builder.gpu.productid}`:gpuIcon} alt="PSU Icon" />
              <div className="component-info">
                <p className="comp-title">Graphics Card</p>
                <p className="name">{builder.gpu?.name || "Not selected"}</p>
              </div>
              <div className="component-action">
                <p className="price">Price: ৳{builder.gpu?.price || 0}</p>
                <Link to="/gpu">
                  <button className="select-button">Choose</button>
                </Link>
              </div>
            </div>

            <div className="component-card">
              <img src={builder.psu?`http://localhost:3000/images/by-id/${builder.psu.productid}`:psuIcon} alt="PSU Icon" />
              <div className="component-info">
                <p className="comp-title">Power Supply</p>
                <p className="name">{builder.psu?.name || "Not selected"}</p>
              </div>
              <div className="component-action">
                <p className="price">Price: ৳{builder.psu?.price || 0}</p>
                <Link to="/psu">
                  <button className="select-button">Choose</button>
                </Link>
              </div>
            </div>

            <div className="component-card">
              <img src={builder.case?`http://localhost:3000/images/by-id/${builder.case.productid}`:caseIcon} alt="CPU Icon" />
              <div className="component-info">
                <p className="comp-title">Casing</p>
                <p className="name">{builder.case?.name || "Not selected"}</p>
              </div>
              <div className="component-action">
                <p className="price">Price: ৳{builder.case?.price || 0}</p>
                <Link to="/case">
                  <button className="select-button">Choose</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
