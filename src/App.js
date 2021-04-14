import React, { useRef, useState } from 'react'
import './App.css';

function App() {
  var mainSwitch = useRef()

  //the main var to store the switch state
  const [_switchState, changeState] = useState(false)

  var blshTxt = useRef()
  var ssTxt = useRef()


  // function changeState() {
  //   if (mainSwitch != undefined) {
  //     _switchState = mainSwitch.current.checked
  //   }
  //   if (ssTxt.current != undefined && blshTxt.current != undefined) {
  //     _switchState ? ssTxt.current.value = "sdf" : blshTxt.current.value = "sdfsd"
  //   }

  //   if (this != undefined) {
  //     console.log(this.ssTxt)
  //   }

  // }



  return (
    <>
      <label style={{ color: _switchState ? "grey" : 'rgb(58, 135, 236)' }}>Buy Low Sell High</label>
      <div class="toggle-switch" tabindex="0">
        <input type="checkbox" ref={mainSwitch} onChange={() => changeState(!_switchState)} name="my_checkbox" value="yes" id="checkbox-id" />
        <label for="checkbox-id">
          <div class="area" aria-hidden="true">
            <div class="background">
              <div class="handle"></div>
            </div>
          </div>
        </label>
      </div>
      <label style={{ color: !_switchState ? "grey" : 'rgb(58, 135, 236)' }}>Short Sell</label>

    </>
  );
}

export default App;
