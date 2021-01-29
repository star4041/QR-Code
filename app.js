var qrdata = document.getElementById('qr-data');
var text = document.getElementById('qrcode');
//var qrcode = new QRCode(document.getElementById('qrcode'));

var qrcode = new QRCode( text, {
    colorDark : "#f00000",
    colorLight : "#FFD700"

});


function generateQR(){
    var data = qrdata.value;
    qrcode.makeCode(data);
}



function showPreview(event){
    if(event.target.files.length > 0){
        var src = URL.createObjectURL(event.target.files[0]);
        var preview = document.getElementById("file-preview");
        preview.src=src;
    }

}