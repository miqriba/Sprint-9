import { React, useContext, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { MainContext } from "../context/context";

function Settings() {
  const { instruments } = useContext(MainContext);

  return (
    <div style={{ color: "white" }}>
      <h3>Settings</h3>
      <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          {`${instruments.filter((sam) => sam.selected === true)[0].text}`}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {instruments
            .filter((e) => e.selected !== true)
            .map((e, index) => (
              <Dropdown.Item
                onClick={() => console.log(e.text + " clicked")}
                key={index}
              >
                {e.text}
              </Dropdown.Item>
            ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Settings;
