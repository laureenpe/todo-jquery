
$(document).ready(function () {
    $("button").click(function (e) {
        e.preventDefault();
        var text = $(".text").val();
        if (text == "") {
            alert("Debes escribir una tarea");
        } else {
            $('#to-do').append('<div><form> class="paragraph>' + text + '</form><p class="center-align>' + text + '</p></div>');
        }

    });
    //Delete button click event
    $('.deleteButton').click(function () {
        deleteRow($(this));
    });
    /**
 * Deletes the grandparent of the delete button
 */
    function deleteRow(thisButton) {
        thisButton.parent().parent().remove();
    }
});