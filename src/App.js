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

  const [resultValue, changResult] = useState(0);

  //Add line Braker between Price Item and Quantity item based on window width
  function addNewLineBasedOnWidth() {
    if (window.innerWidth < 851) {
      return (<br />)
    }
  }

  //Elements Buying
  function bodyBuying() {
    return (<>
      <fieldset>
        <legend><h4 style={{ color: greenColor }}>Buying</h4>{"\n"}</legend>
        <label>Price</label>
        <input type="number" placeholder="Enter the Buying Price" required ref={bPrice} step=".00001"></input>&nbsp;&nbsp;
      {addNewLineBasedOnWidth()}
        <label>Quantity</label>
        <input type="number" required ref={bQuantity}></input>
      </fieldset>
    </>)
  }

  //Elements Selling
  function bodySelling() {
    return (<>
      <fieldset>
        <legend><h4 style={{ color: redColor }}>Selling</h4>{"\n"}</legend>
        <label>Price</label>
        <input type="number" placeholder="Enter the Selling Price" required ref={sPrice} step=".00001"></input>&nbsp;&nbsp;
          {addNewLineBasedOnWidth()}
        <label>Quantity</label>
        <input type="number" required ref={sQuantity}></input>
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

  const calculate = (e) => {
    e.preventDefault();
    console.log("->" + sPrice.current.value == '' + "<-")
    if ((sPrice.current.value !== isNaN && bPrice.current.value !== null) && (sPrice.current.value !== "" && bPrice.current.value != "")) {

      var bTotal = bPrice.current.value * bQuantity.current.value;
      var sTotal = sPrice.current.value * sQuantity.current.value;
      changResult(sTotal - bTotal);
    }
  }

  const clear = () => {
    sPrice.current.value = bPrice.current.value = sQuantity.current.value = bQuantity.current.value = null;
    changResult("");
  }

  function portfolioSection() {
    return (
      <>
        <hr />
        <h3 class="sameline">Portfolio</h3>
        <h3 class="sameline rightelmnt" ><div class="sameLIne" style={{ color: resultValue < 0 ? redColor : greenColor }}>₹ {resultValue}</div></h3>
        <hr />
      </>
    );
  }

  return (
    <>
      <form onSubmit={calculate}>
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
        <br />
        <center>
          <button type="submit" class="button button--pipaluk button--text-thick" >Calculate</button>
          <button class="button button--reset button--text-thick" onClick={() => { clear() }}>Clear</button>
        </center>
      </form>

      <br />
      {portfolioSection()}
      <p style={{ color: 'grey', fontSize: 12, fontStyle: 'italic' }}>Note: Brokerage and other fees are not included.</p>
    </>
  );
}

export default App;
