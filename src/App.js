import React, { useRef, useState } from 'react'
import './App.css';

function App() {
  var mainSwitch = useRef()

  var greenColor = "rgb(76, 175, 80)"
  var redColor = "rgb(244, 67, 54)"

  //the main var to store the switch state
  const [_switchState, changeState] = useState(false)

  var sPrice = useRef()
  var bPrice = useRef()
  var bQuantity = useRef();
  var sQuantity = useRef();


  function bodyBuying() {
    return (<>
      <fieldset>
        <legend><h4 style={{ color: greenColor }}>Buying</h4>{"\n"}</legend>
        <label>Price</label>
        <input type="number" placeholder="Enter the Buying Price" required ref={bPrice}></input>&nbsp;&nbsp;
      <label>Quantity</label>
        <input type="number" ref={bQuantity}></input>
      </fieldset>
    </>)
  }

  function bodySelling() {
    return (<>
      <fieldset>
        <legend><h4 style={{ color: redColor }}>Selling</h4>{"\n"}</legend>
        <label>Price</label>
        <input type="number" placeholder="Enter the Selling Price" required ref={sPrice}></input>&nbsp;&nbsp;
      <label>Quantity</label>
        <input type="number" ref={sQuantity}></input>
      </fieldset>
    </>)
  }


  function fullBody() {
    //check the switch state and change the bodies
    if (_switchState) {
      return [bodySelling(), bodyBuying()];
    } else {
      return [bodyBuying(), bodySelling()];
    }
  }

  function calculate() {
    console.log("->" + sPrice.current.value == '' + "<-")
    if ((sPrice.current.value !== isNaN && bPrice.current.value !== null) && (sPrice.current.value !== "" && bPrice.current.value != "")) {
      alert("bPrice" + bPrice.current.value + " sPrice" + sPrice.current.value)
      sPrice.current.value = null;
      bPrice.current.value = null;
    }

  }

  return (
    <>
      <form onSubmit={() => calculate()}>
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
        {fullBody()}
        <br></br>

        <button type="submit" class="button button--pipaluk button--text-thick" >Calculate</button>
      </form>
    </>
  );
}

export default App;
