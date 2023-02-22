// Checking if the input is Integers
function txtValidate(txtid) {
    var ok=0;
    var a=document.getElementById(txtid).value;
    
    for(var i=0;i<=a.length-1;i++) {
    var j=a.charCodeAt(i);
        for(var k=48;k<=57;k++) {
            ok=0;
            if(k==j) {
                ok=1;
                break ;
            }
        }
    }

    if(ok==0) {
        alert("Only Numeric Values Allowed");
        document.getElementById(txtid).value="";
        for(var i=0;i<a.length-1;i++) {
            var j=a.charCodeAt(i);
            for(var k=48;k<=57;k++) {
                ok=0;
                if(k==j) {
                    document.getElementById(txtid).value+=a.charAt(i);
                }
            } 
        }
    }
}

// Checking integer input between 1 and 10
function Validate() {    
    var text_value = document.getElementById("points").value;
    alert(text_value);
    
    if (!text_value.match(/^([5-9]|10)$/) && document.getElementById(called_id).value !="")
    {
        document.getElementById("points").value="";
        //  document.getElementById("points").focus(); 
        alert("Please Enter only between 5 and 10 ");
    }
    
} 