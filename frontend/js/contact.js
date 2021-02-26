/*if (window.location.protocol.indexOf('https') == 0) {
    var el = document.createElement('meta')
    el.setAttribute('http-equiv', 'Content-Security-Policy')
    el.setAttribute('content', 'upgrade-insecure-requests')
    document.head.append(el)
}
$("#myClickSendMail").click(function(e) {
    var object = $("#object").val(),
        text = $("#textF").val();
    if (!object || !text) {
        $(".myAlert").html(
            '<div class="alert alert-danger" role="alert">' +
            "Merci de remplir tout les champs !" +
            "</div>"
        );
        return;
    } else {
        $(".myAlert").empty();
    }
    myIp = "82.121.254.56"
        //myIp = $.getJSON('http://www.geoplugin.net/json.gp?jsoncallback=?', function(data) { data.geoplugin_request }); 
    _data = {
        "objet": object,
        "avis": text,
        "ip": myIp
    }
    console.log(_data);
    $.ajax({
        url: ipServer + "/avis",
        type: "POST",
        xhrFields: { withCredentials: true },
        crossDomain: true,
        data: {
            "objet": object,
            "avis": text,
            "ip": myIp
        },
        dataType: "JSON",
        success: (message) => $(".myAlert").html(
            '<div class="alert alert-success" role="alert">' +
            "Mail envoyé" +
            "</div>"
        )
    });
})*/

function copyMail() {
    var $temp = $("<input>");
    $("body").append($temp);
    let mail = "<u>theimpostors3@gmail.com</u>"
    $temp.val(mail).select();
    document.execCommand("copy");
    $temp.remove();
    document.getElementById("myAlert").innerHTML = "Vous venez de copier le mail: " + mail;
    document.getElementById("myAlert").style.display = "block"
}