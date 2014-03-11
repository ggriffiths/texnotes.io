var myApp = angular.module("myApp", []);


MathJax.Hub.Config({
    skipStartupTypeset: true,
    messageStyle: "none",
    "HTML-CSS": {
        showMathMenu: false
    },
    inlineMath: [ ['$','$'], ["\\(","\\)"] ],
    processEscapes: true
});
MathJax.Hub.Configured();

var generateSvg = function(){
  var divData = document.getElementById("previewBox").innerHTML;
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var data = "<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='200'>" +
               "<foreignObject width='100%' height='100%'>" +
                 "<div xmlns='http://www.w3.org/1999/xhtml' style='font-size:12px'>" +
                   divData +
                 "</div>" +
               "</foreignObject>" +
             "</svg>";
  var DOMURL = self.URL || self.webkitURL || self;
  var img = new Image();
  var svg = new Blob([data], {type: "image/svg+xml;charset=utf-8"});
  var url = DOMURL.createObjectURL(svg);
  img.onload = function() {
    canvas.width = canvas.width;
    ctx.drawImage(img, 0, 0);
  };
  img.src = url;
  var aId = document.getElementById("dlLink");
  aId.href=url;
};

 /*(function(){
   var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
   po.src = 'https://apis.google.com/js/client:plusone.js';
   var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
 })();
 function signinCallback(authResult) {
  if (authResult['status']['signed_in']) {
    // Update the app to reflect a signed in user
    // Hide the sign-in button now that the user is authorized, for example:
    document.getElementById('signinButton').setAttribute('style', 'display: none');
  } else {
    // Update the app to reflect a signed out user
    // Possible error values:
    //   "user_signed_out" - User is signed-out
    //   "access_denied" - User denied access to your app
    //   "immediate_failed" - Could not automatically log in the user
    console.log('Sign-in state: ' + authResult['error']);
  }
}*/


generateSvg();