var rp = document.getElementsByClassName('user_reward_points');
   rp = rp[0].innerHTML;

   var container = document.createElement('div');
   container.innerHTML=" \
   <div id='btcosmo' style='width:500px; height:auto; padding:0 10px; background-color:white; border:black solid 2px; position:fixed; top:10%; text-align:center; '>\
       <h3>BTCosmo AutoBuyr</h3>\
       <h4 style='color:#00aaff;'>RP Balance: "+rp+"</h4> \
       <label for='RP_hejKJpC5'>Reward Points</label><br/>\
       <input type='checkbox' id='RP_hejKJpC5'>\
       <label for='FR_QkwW3KUu'>Roll Bonus</label><br/>\
       <input type='checkbox' id='FR_QkwW3KUu'><br/>\
       <input type='button' value='Save' onclick='saveCheck()'>\
       <input type='button' value='Reset' onclick='resetCheck()'>\
       <input type='button' value='Refresh' onclick='location.reload()'>\
       <p style='font-size:14px;'>Save: <i>Stores</i> your Auto Buy settings</p>\
       <p style='font-size:14px;'>Reset: <i>Erases</i> your Auto Buy settings</p>\
       <p style='font-size:14px;'>Refresh: Reloads the page to refresh balance and show your saved settings\
   </div> \ ";
   document.body.appendChild(container);
