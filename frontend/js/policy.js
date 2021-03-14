cookieAgree = $(".cookJs");

var cook = document.cookie.split(';');
console.log(getCurrentIp());

if (cook[0] == "policy=accept:" + getCurrentIp()) {
    cookieAgree.css('display', 'none');
} else {
    cookieAgree.css('display', 'block');
}


$("#spaceBtnPrivacy").click(function() {
    document.cookie = "policy=accept:" + getCurrentIp();
    console.log("policy=accept:" + getCurrentIp());
    cookieAgree.css('display', 'none');
});

function getCurrentIp() {
    let myIp = "";
    $.getJSON("https://api.ipify.org/?format=json", function(ip) {
        myIp = ip.ip
    });
    return myIp

}