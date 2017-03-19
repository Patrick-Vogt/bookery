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
            if (data.match(/CreateThumbnail/g)) {
                var array = data.split('|');
                CreateThumbnail('photo',array[1],array[2]);

            }
            else if (data.match(/INFO/g)) {
                var array = data.split('|');
                $('#logmessage').html(array[1]);
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
