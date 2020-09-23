function $() 
{var elements = new Array(); 
for (var i = 0; i < arguments.length; i++) 
{var element = arguments[i]; 
if (typeof element == 'string') 
element = document.getElementById(element); 
if (arguments.length == 1) 
return element; 
elements.push(element); 
} 
return elements; } 

function js1_f1()
{
$('sp1').style.background="url(logo1.png) repeat-y #fc0";
}

function js1_f2()
{
$('sp1').style.background="#f00";
}

function js1_f3()
{
$('layer').style.clip="rect(40px, auto, auto, 40px)";
}
function js1_f4()
{
$('layer').style.width="400px";
}
function js1_f5()
{
$('layerss').style.opacity="0.0";
}

function js1_f6()
{
$('layerss').style.opacity="6";
}
function js1_f7()
{
$('turn').style.rotate="15deg";
}

function js1_f8()
{
$('layer3').style.font="30pt sans-serif";
}

function js1_f9()
{
$('layer4').style.color="red" ;
}

