
window.test = function (name, info2, info3, photo, preventDefault) {

    var headstr = '<html><head> <title>Print To YbIT</title> <style type="text/css" media="print"> @page  { size: auto; margin: 0mm; padding: 15px; font-size: 14px; line-height: 18px; }  body  { background-color:#FFFFFF;  border: solid 1px black ; margin: 0px; } </style> </head><body>';
    var footstr = "</body>";
    var newstr = '<p><img class="card-img-top img-fluid" style="border:1px;color:gray;width:150px;height=150px;float:right;" src="data:image;base64,' 
        + photo + '" alt="" /><p/><h1>Document à Imprimer</h1></br></br><p>Name : ' + name + '</p><p>Info2 : ' + info2 + '</p><p>Info3 : ' + info3 + '</p>'
    var oldstr = document.body.innerHTML;
    document.body.innerHTML = headstr + newstr + footstr;
    window.print();
    document.body.innerHTML = oldstr;
    window.location.reload();
};

window.printInvoke = function (name, info2, info3, photo) {

    var a = window.open('', '', 'height=800, width=600');
    a.document.write('<html>');
    a.document.write('<body><h1>Document a imprimer</h1><br>');
    a.document.write('<head> <title>Print To YbIT</title> <style type="text/css" media="print"> @page  { size: auto;   /* auto is the main current active printer page size */ margin: 0mm;  /* this small affects the margin in the printer IMP settings */ }  body  { background-color:#FFFFFF;  border: solid 1px black ; margin: 0px;  /* the margin style on the data content before printing */ } </style> </head>');
    a.document.write('<p>');
    a.document.write('<img class="card-img-top img-fluid" style="border:1px;color:gray;width:150px;height=150px;float:right;" src="data:image;base64,');
    a.document.write(photo);
    a.document.write('" alt="" />');
    a.document.write('</p>')
    a.document.write('<p>');
    a.document.write(name);
    a.document.write('</p>');
    a.document.write('<p>');
    a.document.write(info2);
    a.document.write('</p>');
    a.document.write('<p>');
    a.document.write(info3);
    a.document.write('</p>');
    a.document.write('</body></html>');

    a.document.close();
    a.focus();
    a.print();
    setTimeout(function () {
        a.close();
    }, 1);
};
