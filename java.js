function clo()
{
var x=document.getElementById('form1')
  if (x.style.display == "block") {
    x.style.display = "none";
  } 
  else {
    x.style.display = "block";
  }
}
 function go(){
  alert("Google Is Unavilable Now,Come Back later")
 }

 function index(){
  window.location.href="index.html"
 }

 function co() {
 var code1=document.forms["red"]["code1"].value;
 var code2=document.forms["red"]["code2"].value;
 var code3=document.forms["red"]["code3"].value;
 var y=document.getElementById("claim");
 var z=document.getElementById("claim1");

 if(code1=="OWNER" && code2=="DETAILS" && code3=="PLEASE"){
  alert("wvignesh9838@gmail.com");
  z.style.display="none";
  return false;
 }

 if (code1=="FFIC" && code2=="WGIP" && code3=="LASW") {
      y.style.display="block";
      return false;
   }
 else {
      z.style.display="block";
      return false;
 }
 if(code1==null || code1==""){
      z.style.display="block";
      return false;
 }
  if(code3==null || code3==""){
      z.style.display="block";
      return false;
 }
  if(code3==null || code3==""){
      z.style.display="block";
      return false;
 }

 }
 
 function clos() {
    var z=document.getElementById("claim")
    var q=document.getElementById("claim1")
    if(z.style.display="block"){
      z.style.display="none"
    }
    if(q.style.display="block"){
      q.style.display="none"
    }

 }

function log(){
  var phone=document.forms["form"]["phone"].value;
  var pass=document.forms["form"]["pass"].value;

     if(phone==null || phone==""){
   document.getElementById("alert").innerHTML=
      "All Fields Required"; 
        return false;
  }

  if(pass==null || pass==""){
    document.getElementById("alert").innerHTML=
    "All Fields Required";
    return false;
  }
  if(pass!=null && phone!=null){
    window.location.href="read.html"
    return false;
  }

  

}