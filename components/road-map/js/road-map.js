

$('form').submit(function () {
    var radioValue = $("input[name='options']:checked").val();
    if (radioValue) {
        alert("You selected - " + radioValue);
    };
    return false;
});

// js for tooltip
$(function () {
    $('[data-bs-toggle="tooltip"]').tooltip({ trigger: 'manual' }).tooltip('show');
});


$(".progress-bar").each(function () {
    each_bar_width = $(this).attr('aria-valuenow');
    $(this).width(each_bar_width + '%');
});

