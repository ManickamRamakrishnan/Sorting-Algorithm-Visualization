function start()
{
    var n=document.getElementById("noe").value;
    n=Number(n);
    if(n>15){
    alert("Enter upto  15 values");
    return;
    }
     
    let st=document.getElementById("e").value;
    let arr=st.split(" ");
    if(arr.length>n)
    {
          alert("Please enter only required number of elements");
          return;
    }
    var s=document.createElement("fieldset"); 
    s.setAttribute('id','f2');
    document.getElementById("balance").appendChild(s);
    s=document.createElement("legend");
    s.innerText="Visualize";
    document.getElementById("f2").appendChild(s);
    s=document.createElement("section");
    s.setAttribute('id','dis');
    document.getElementById('f2').appendChild(s);
    s=document.createElement("textarea");
    s.setAttribute('id','print');
    document.getElementById("f2").appendChild(s);
   s=document.createElement("button");
   s.setAttribute('id','start2');
   s.setAttribute('onclick','start2()');
   s.innerText="Next";
   document.getElementById('f2').appendChild(s);
   s=document.createElement("section");
   s.setAttribute('id','temp');
   document.getElementById('f2').appendChild(s);
   document.getElementById('temp').appendChild(document.getElementById('print'));
   document.getElementById('temp').appendChild(document.getElementById('start2'));

    for(var i=0;i<n;i++)
    {
       var k=document.createElement("div");
       k.setAttribute('id','d'+(i+1));
       document.getElementById("dis").appendChild(k);

      var c=document.createElement("p");
       c.innerText=arr[i];
       c.setAttribute('class','pcla');
       c.setAttribute('id','p'+(i+1));
       document.getElementById('d'+(i+1)).appendChild(c);

    //    var d=document.createElement("p");
    //    d.setAttribute('id','c'+(i+1));
    //    d.setAttribute('class','comcla');
    //    d.innerText="isdfss";
    //    document.getElementById('d'+(i+1)).appendChild(d);
    
     
    //    var d=document.createElement("p");
    //    d.setAttribute('id','r'+(i+1));
    //    d.setAttribute('class','rcla');
    //    d.innerText="kakjgd";
    //    document.getElementById('d'+(i+1)).appendChild(d);
      
    
   }
    start1();
}
function start1()
{
    
}
