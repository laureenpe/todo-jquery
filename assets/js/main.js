var i = 0; //contador, para poder crear ID dinamicos en la variable html, con un onclick.
$(document).ready(function () {

    $('#new-task').keydown(onKeyPress);//listener para cuando las teclas esten oprimidas.

});//end dom ready

function onKeyPress(event) {
    if (event.keyCode == 13) { //Este ENTER key se encontro evento en: https://msdn.microsoft.com/en-us/library/aa243025(v=vs.60).aspx
        if ($('#new-task').val() != '') {//Si el valor del new task no esta vacìo, continue.
            var html = '<div class="row item" id="item_' + i + '"><div class="col s10"><input type="checkbox" ><label for="item" onclick="onSelectItem(item_' + i + ')">' + $('#new-task').val() + '</label> </div>'; //Esta variable crea el html con sus clases y pone un onclick que va creando divs dinamicos, llamando a la clase new-task
            html += '<div class="col s2"><button class="btn waves-effect waves-light green deleteButton" type="button" onclick="OnRemove(item_' + i + ')">Remove</button></div></div>'; //Concateno el valor html creado con el boton 
            $(".todo-items").append(html);//selecciono el div con la clase y en esta le adiciono el texto html
            $('#new-task').val(''); //borro contenido
            i++; //vaya sumando mi variable contador
        } else {
            alert('La tarea no puede estar vacía');
        }
    }
}
function OnRemove(item) { //Quito los elementos creados
    $(item).remove();
}

function onSelectItem(item) {
    var html = '<div class="row item" id="' + item.id + '">' + $(item).html() + '</div>'; //id item nuevo
    console.log(html);
    $(item).remove();
    $(".completed-items").append(html); //añadir completed items al html
}