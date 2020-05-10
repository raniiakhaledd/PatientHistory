// language Button 

$(document).ready(function(){
    $(".toggle_container").hide(); 
    $("button.Lang").click(function(){
        $(this).toggleClass("active").next().slideToggle("fast");
        
        if ($.trim($(this).text()) === 'En') {
            $(this).text('Ar');
        } else {
            $(this).text('En');        
        }
        
        return false; 
    });
    });

// ------------step-wizard-------------
$(document).ready(function () {
    $('.nav-tabs > li a[title]').tooltip();
    
    //Wizard
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

        var target = $(e.target);
    
        if (target.parent().hasClass('disabled')) {
            return false;
        }
    });

    $(".next-step").click(function (e) {

        var active = $('.wizard .nav-tabs li.active');
        active.next().removeClass('disabled');
        nextTab(active);

    });
    $(".prev-step").click(function (e) {

        var active = $('.wizard .nav-tabs li.active');
        prevTab(active);

    });
});

function nextTab(elem) {
    $(elem).next().find('a[data-toggle="tab"]').click();
}
function prevTab(elem) {
    $(elem).prev().find('a[data-toggle="tab"]').click();
}



$('.nav-tabs').on('click', 'li', function() {
    $('.nav-tabs li.active').removeClass('active');
    $(this).addClass('active');
});

$(document).ready(function() {
    $("input[name$='cars']").click(function() {
        var test = $(this).val();

        $("div.desc").hide();
        $("#Cars" + test).show();
    });
});
$(document).ready(function() {
    $("input[name$='car']").click(function() {
        var test = $(this).val();

        $("div.des").hide();
        $("#Car" + test).show();
    });
});

/* img */ 
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreview').css('background-image', 'url('+e.target.result +')');
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$("#imageUpload").change(function() {
    readURL(this);
});


