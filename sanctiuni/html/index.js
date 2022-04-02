$(document).ready(function() {
    $('.Regulament').hide(0)
    window.addEventListener("message", function(event) {
        var item = event.data;
        if (item.adam == true) {
            $('.Regulament').show(650)
        }

    })

    $(document).on("click", "#exit", function(event) {
        $.post(`https://${GetParentResourceName()}/Regulament`, JSON.stringify({}));
        $('.Regulament').hide(100)
    })
})