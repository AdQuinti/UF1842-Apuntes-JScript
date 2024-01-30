image1 = new Image();
image1.src = "image/heading1.jpg";
image2 = new Image();
image2.src = "image/heading2.jpg";

function mouseOver (e) {
    if (!e) {
        let e = window.event;
    }

    let target = getTarget (e);
            
            // cambio de imagen cuando el raton se posiciona encima de la imagen de la cabecera
    if (target.id == "heading") {
        target.src = image2.src;
        return;
    } // fin if - HEADING

// si un elemento está definido asignarle su correspondiente valor de código en color
    if (target.id)
        target.style.color = target.id;
} // fin fnction - MOUSEOVER

function mouseOut (e) {
    if (!e)
        var e = window.event;

    let target = getTarget (e);
            
// imagen original evento oneMouseOut imagen cabecera
    if (target.id == "heading") {
        target.src = image1.src;
        return;
    } // fin if - HEADING

// si el id de un elemento está definido se le asigna el id al innerHTML para que muestre su color
    if (target.id){
        target.innerHTML = target.id;
    }
} // fin funciton - MOUSEOUT

// return e.srcElement, e.target
function getTarget (e) {
    if (e.srcElement)
        return e.srcElement;
    else
        return e.target;
} // fin function - GETTARGET

document.onmouseover = mouseOver;
document.onmouseout = mouseOut;