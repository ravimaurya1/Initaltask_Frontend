import React, { useState } from "react";
import SearchField from "react-search-field";
import "./Menu.css";

const Menu = () => {
  const [search, setSearch] = useState("");
  const onChange = (value, event) => {
    setSearch(value);
  };
  const Sofas = [
    "One Seaters",
    "Two Seaters",
    "Three Seaters",
    "Sofas Sets",
    "L-Shape Sofas",
    "Sofa cum Beds",
    "Recliner",
    "Ottomans",
    "All Sofas",
  ];
  const Beds = [
    "Single Beds",
    "Queen Beds",
    "King Beds",
    "Diwans",
    "Matresses",
    "Bunk Beds",
    "All Beds",
  ];

  const Television = [
    "LED/PLASMA",
    "LCD",
    "HD Ready",
    "Full HD",
    "Ultra HD(4k)",
    "Smart Tvs",
    "OLED",
    "All TVs"
  ];

  const Laptop = [
    "Lenovo",
    "Apple",
    "HP",
    "Dell",
    "Acer",
    "Asus",
    "MSI",
    "Microsoft"
  ];

  const Appliances = [
    "Refrigerators",
    "Washing Machine",
    "Air Conditioners",
    "Microwaves",
    "Audio Store"

  ];

  return (
    <div className="Menu">
      <div className="Item">
        <ul>
          <li>
            <b>FURNITURE</b>
            <div className="sub-menu-1">
              <div className="menu-item">
                <div>
                  <h3>SOFAS</h3>
                  <hr />
                  <ul>
                    {Sofas.map((sofa, index) => {
                      return (
                        <li key={index}>
                          <a href="#">{sofa}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div>
                  <h3>BEDS</h3>
                  <hr />
                  <ul>
                    <li>Single Beds</li>
                    <li>Queen Beds</li>
                    <li>King Beds</li>
                    <li>Diwans</li>
                    <li>Mattresses</li>
                    <li href="#">Bunk Beds</li>
                    <li href="#">All Beds</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <b>TELEVISION</b>
            <div className="sub-menu-1">
              <div className="menu-item">
                <div>
                  <h3>TELEVISION</h3>
                  <hr />
                  <ul>
                    {Television.map((tel, index) => {
                      return (
                        <li key={index}>
                          <a href="#">{tel}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <b>APPLIANCES</b>
            <div className="sub-menu-1">
              <div className="menu-item">
                <div>
                  <h3>Appliance</h3>
                  <hr />
                  <ul>
                    {Appliances.map((sofa, index) => {
                      return (
                        <li key={index}>
                          <a href="#">{sofa}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <b>LAPTOP</b>
            <div className="sub-menu-1">
              <div className="menu-item">
                <div>
                  <h3>Laptops</h3>
                  <hr />
                  <ul>
                    {Laptop.map((sofa, index) => {
                      return (
                        <li key={index}>
                          <a href="#">{sofa}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <b>NEW ARRIVALS</b>
            <div className="sub-menu-1">
              <div className="menu-item">
                <div>
                  <h3>SOFAS</h3>
                  <hr />
                  <ul>
                    {Sofas.map((sofa, index) => {
                      return (
                        <li key={index}>
                          <a href="#">{sofa}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div>
                  <h3>BEDS</h3>
                  <hr />
                  <ul>
                    <li>Single Beds</li>
                    <li>Queen Beds</li>
                    <li>King Beds</li>
                    <li>Diwans</li>
                    <li>Mattresses</li>
                    <li href="#">Bunk Beds</li>
                    <li href="#">All Beds</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="Search">
        <SearchField
          placeholder="Search from 10,000+ unique products"
          onChange={onChange}
          searchText=""
          classNames="test-class"
        />
      </div>
    </div>
  );
};

export default Menu;
