import { React, useContext, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { MainContext } from "../context/context";
import ThemeSelector from "./ThemeSelector";

function Settings() {
  const { instruments, setInstruments } = useContext(MainContext);

  function handleSelect(selectedInstrumentName) {
    const updatedInstruments = instruments.map((instrument) => {
      return instrument.name === selectedInstrumentName
        ? { ...instrument, selected: true }
        : { ...instrument, selected: false };
    });
    setInstruments(updatedInstruments);
  }

  return (
    <div>
      <h3>Settings</h3>
      <div className="d-flex flex-column align-items-start">
        <h5>Theme selection</h5>
        <ThemeSelector />

        <h5>Instrument audio select</h5>
        <Dropdown>
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
        </Dropdown>
      </div>
    </div>
  );
}

export default Settings;
