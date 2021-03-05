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
          </li>
          <li>
            <b>APPLIANCES</b>
          </li>
          <li>
            <b>LAPTOP</b>
          </li>
          <li>
            <b>NEW ARRIVALS</b>
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
