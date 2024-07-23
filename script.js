function check(){
    const val=document.getElementById("input");
    const text=val.value;

    if(text=="What is typeof operator?" || text=="What is equality in JavaScript ?" || text=="What is the object type?" || text=="Explain is Scope in JavaScript?" || text=="Explain arrays in JavaScript")
    {
        alert("Submission Successful!");
    }
    else
    alert("Invalid Question")
}

function decline() {
    document.getElementById("input").value = "";
}