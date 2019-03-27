function saveRoll(){
    var setting = document.getElementById('roll_option');
    var enabled; //= document.querySelector('input[name = "captcha_option"]:checked').value;
    var radio = document.getElementsByName('captcha_option');
    for(var i = 0; i < radio.length; i++){
        if(radio[i].checked){
            enabled = radio[i].value;
            break;
        }
    }
    if(setting.checked){
        localStorage.setItem('roll_option', setting.checked);
    }else{
        localStorage.removeItem('roll_option');
    }

    if(enabled === "yes"){
        localStorage.setItem('captcha_enabled', enabled);
    }else if (enabled === "no"){
        localStorage.setItem('captcha_enabled', enabled);
    }
}

function resetRoll(){
    location.reload();
    localStorage.removeItem('roll_option');
}

function loadRoll(){
    var check = JSON.parse(localStorage.getItem('roll_option'));
    var setting = document.getElementById('roll_option');
    var enabled = localStorage.getItem('captcha_enabled');

    if(check === true){
        setting.checked = check;
    }

    if(enabled === "yes"){
        document.getElementById('captcha_yes').checked = true;
    }else if (enabled === "no"){
        document.getElementById('captcha_no').checked = true;
    }

}
loadRoll();

//-----------------------------------------------------------------------

function autoroll(){
    var check = localStorage.getItem('roll_option');
    var enabled = localStorage.getItem('captcha_enabled');

    var rollBtn = document.getElementById('free_play_form_button');
    var display = window.getComputedStyle(rollBtn).getPropertyValue('display');

    if(display === 'none'){
    }else{
        if(check === true){
            if(enabled === 'yes'){
                var nocap = document.getElementById('play_without_captchas_button');
                var nocapDisplay = window.getComputedStyle(nocap).getPropertyValue('display');
                if(nocapDisplay === 'none'){
                }else{
                  nocap.click();
                }
            }
            rollBtn.click();
        }
    }

}
//--------------------------------------------
setTimeout(function(){
    autoroll();
}, 3000);
