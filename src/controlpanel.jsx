import React, { useState, useEffect } from 'react';
import Button from './Button';  // Your styled button component
import { StyledInput, StyledRange } from './StyledControls'; // file where above styled components live
import controlsData from './MainButtons.json';

const ControlPanel = () => {
  const [controls, setControls] = useState([]);

  useEffect(() => {
    setControls(controlsData);
  }, []);

  const handleToggle = (ctrl, id) => {
    setControls(prev =>
      prev.map(ctrl =>
        ctrl.id === id ? { ...ctrl, active: !ctrl.active } : ctrl
      )
    );
    

  };
  const handleDialChange = (id, newValue) => {
    setControls(prev =>
      prev.map(ctrl =>
        ctrl.id === id ? { ...ctrl, value: newValue } : ctrl
      )
    );
  };

  return (
    <div>
      {controls.map(ctrl => (
        <div key={ctrl.id} className={`control ${ctrl.category.toLowerCase()}`}>
          {ctrl.type === 'button' && (
            <Button
              text={ctrl.text}
              onClick={() => {handleToggle(ctrl.id); alert(ctrl.instruction)}}
              active={ctrl.active}
            />
          )}

          {ctrl.type === 'dial' && (
            <div>
              <label>{ctrl.text}</label>
              <StyledRange
                min={ctrl.min ?? 0}
                max={ctrl.max ?? 100}
                value={ctrl.value ?? 0}
                onChange={e => handleDialChange(ctrl.id, Number(e.target.value))}
              />
              <span>{ctrl.value ?? 0}</span>
            </div>
          )}

          {ctrl.type === 'input' && (
            <div>
              
              <StyledInput
                placeholder={ctrl.placeholder}
                onBlur={(e) => console.log(`Submitted: ${e.target.value}`)}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ControlPanel;
