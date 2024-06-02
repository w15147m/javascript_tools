var bulb1 = document.getElementById('bulb-img1');
var bulb2 = document.getElementById('bulb-img2');
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
function onOff(option) {
    if (option) {
        bulb1.style.display = 'none';
        bulb2.style.display = 'block';
        btn1.style.display = 'none';
        btn2.style.display = 'block';
    }else{
        bulb2.style.display = 'none';
        bulb1.style.display = 'block';
        btn2.style.display = 'none';
        btn1.style.display = 'block';
    }
}