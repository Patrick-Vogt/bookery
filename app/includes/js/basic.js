$( document ).ready(function() {
    ExecAjax('router.php','searchright', 'action=countbooks');
    ExecAjax('router.php','coverplace','action=loadrandombooks');


    $(document).keyup(function (e) {
    if ($("#searchterm:focus") && (e.keyCode === 13)) {
       performSearch();
    }
 });


    var myDropzone = new Dropzone("#upload");
});

/********************************************************************************
 * Start Ajax
 ********************************************************************************/
function ExecAjax(program, id, urldata) {
    $.ajax({
        type: "POST",
        cache: false,
        url: program,
        data: urldata,
        success: function(data) {
            //$("#progressModal").modal('hide');
            if (data.match(/CreateThumbnail/g)) {
                var array = data.split('|');
                CreateThumbnail('thumbnail-body',array[1],array[2]);

            }

            else if (data.match(/LoadOldThumbnails/g)) {
              var array = data.split('|');
              for (var i = 1; i < array.length -1; i++) {
                CreateThumbnail('thumbnail-body',array[i],array[i]);
              }

            }

            else if (data.match(/ERROR/g)) {
                var array = data.split('|');
                $('#output').html(array[1]);
            }
             else if (data.match(/INFO/g)) {
                var array = data.split('|');
                $('#logmessage').html(array[1]);
            }

            else if (data.match(/ADMIN/g)) {
                var array = data.split('|');
                $('#adminmessage').html('<div class="alert alert-success alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>'+array[1]+'</strong></div>');
            }

            else if (id && $('#' + id)) $('#' + id).html(data);
            /*      Scripte ausführen mit Ajax     */
            var jScripts = $(data).filter('script');
            $(jScripts).each(function(intI, objScript) {
                eval($(this).text());
            });
        }
    });
}


function sendReaderModal(book, author) {
    $('.modal-body').html('Send <b>'+author+ '</b> to your reader?');
    $('.modal-footer').html('<button type="button" class="btn btn-success" onclick="sendConfirmedBook(\''+book+'\')" data-dismiss="modal">Send</button>');
    $('#confirmsendbook').modal('show');

}

function sendConfirmedBook(book) {
    ExecAjax('router.php', '', 'action=sendebook&ebook='+book);
}


function performSearch() {

    var searchquery = $('#searchterm').val();
    ExecAjax('router.php','coverplace', 'action=performsearch&query='+searchquery);
}
