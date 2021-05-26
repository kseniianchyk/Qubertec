$(document).ready(function() {

    //  FIRST INDEX.HTML
    $('.close-img').on('click', function() {
        $('#name').val('');
    });

    $('#submit').on("click", function() {
        $('input').css("border-color", "")

        let name = $('#name');
        let password = $('#password');

        let hasError = false;

        if (!name.val()) {
            name.css("border", "1px solid red")
            hasError = true;
        }
        if (!password.val()) {
            password.css("border", "1px solid red")
            hasError = true;
        }
        if (!hasError) {
            window.open("second-index.html");
        }
    });

    //  SECOND INDEX.HTML
    $('input.checkbox').click(function() {
        if ($(this).prop('checked')) {
            $(this).parent().siblings('.table__action').show(100);
        } else {
            $(this).parent().siblings('.table__action').hide(100);
        }
    });


    if ($('html').width() <= 768) {
        $('#form__btn').val('')
    } else {
        $('#form__btn').val('הצעה חדשה')
    }








});