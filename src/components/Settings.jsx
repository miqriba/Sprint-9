import { React, useContext, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { MainContext } from "../context/context";
import ThemeSelector from "./ThemeSelector";

function Settings() {
  const { instruments, setInstruments } = useContext(MainContext);

  function handleSelect(event) {
    const updatedInstruments = instruments.map((instrument) => {
      return instrument.name === event.target.value
        ? { ...instrument, selected: true }
        : { ...instrument, selected: false };
    });
    setInstruments(updatedInstruments);
  }

  return (
    <div className="p-4 background d-flex flex-column justify-content-center align-items-center">
      <div className="d-flex flex-column align-items-start base p-4 w-100">
        <h3 className="align-self-center mb-4">Settings</h3>
        <h5>Theme selection</h5>
        <ThemeSelector />

        <h5>Instrument audio select</h5>

        <select
          className="but mb-3"
          value={instruments.find((e) => e.selected).name}
          onChange={handleSelect}
        >
          {instruments.map((instrument, index) => (
            <option key={index} value={instrument.name}>
              {instrument.text}
            </option>
          ))}
        </select>
        <p
          className="fw-bold fs-5 align-self-center mt-4"
          style={{ color: "var(--accent-color)" }}
        >
          Log out
        </p>

        {/* <Dropdown>
          <Dropdown.Toggle className="but" id="dropdown-basic">
            {`${instruments.filter((e) => e.selected === true)[0].text}`}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {instruments
              .filter((e) => e.selected !== true)
              .map((e, index) => (
                <Dropdown.Item onClick={() => handleSelect(e.name)} key={index}>
                  {e.text}
                </Dropdown.Item>
              ))}
          </Dropdown.Menu>
        </Dropdown> */}
      </div>
    </div>
  );
}

export default Settings;
