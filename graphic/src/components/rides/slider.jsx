import React from 'react';

const Slid = () => {
    return(
        <div id="sli-box">
            <h2 id="val">1</h2>
            <input id="sl" type="range" defaultValue={1} onChange={changeval} min={1} max={5} />
        <script src="./b.js"></script>
        </div>
    )
}

function changeval(){
    if (
        document.getElementById("val") &&
        document.getElementById("sl")
      ) {
        var s = document.getElementById("val");
        var t = document.getElementById("sl");
        s.innerHTML = t.value;
    
        t.oninput = function() {
            s.innerHTML = this.value;
        }
      }
}

export default Slid;