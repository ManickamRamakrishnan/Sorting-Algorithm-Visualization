function equ(a,b)
{
return a+" and "+b+" are equal.So no need of any swap.";
}
function grea(a,b)
{
return a+" is greater than "+b+".So swap between "+a+" and "+b+" is done.";
}
function less(a,b,arr)
{
return a+" is lesser than "+b+".So no need of any swap.";
}
const maxLength = 100; 
function adjustWidth(input){
    if(input.value.length==0){
        input.style.width='initial';
        
    }else if(input.value.length>20 && input.value.length<maxLength){
        input.style.width = (input.value.length*6)+(5*6) + 'px';    
    }
}
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
    console.log(document.getElementById("f2"));

    for(var i=0;i<n;i++)
    {
       var k=document.createElement("div");
       k.setAttribute('id','d'+(i+1));
       document.getElementById("dis").appendChild(k);

      var c=document.createElement("p");
       c.innerText=arr[i];
       c.setAttribute('id','p'+(i+1));
       document.getElementById('d'+(i+1)).appendChild(c);

       var d=document.createElement("i");
       d.setAttribute('id','i'+(i+1));
       document.getElementById('d'+(i+1)).appendChild(d);
       if(i==0)
       {
         var ps=document.getElementById("i"+(i+1));
             ps.innerText="i";
       }
       if(i==1)
       {
          ps=document.getElementById("i"+(i+1));
             ps.innerText="j";
       }
   }
    start1();
}
class Sort
{
    constructor()
    {
       this.l=0;
        this.m=1;
        this.prev=1;
        this.n=Number(document.getElementById("noe").value);
    }
  Nex(sd)
  {
    var k=sd.l;
    var q=sd.m;
    for(var i=k;i<sd.n;i++)
    {
        var a=Number(document.getElementById("p"+(i+1)).textContent);
        if(i==0)
        {
            var ps=document.getElementById("i"+(i+1));
            var sty=document.getElementById("p"+(i+1)).style.backgroundColor="#B5CFED";
            ps.innerText="i";
        }
        else if(i==sd.n-1)
        {
          var ps=document.getElementById("i"+(i+1));
          var r=document.getElementById("i"+(i));
          var sty=document.getElementById("p"+(i+1)).style.backgroundColor="#B5CFED";
         r.innerText="";
        r=document.getElementById("p"+(i)).style.backgroundColor="green";
           ps.innerText="ij";
           ps=document.getElementById("p"+(i+1)).style.backgroundColor="green";
        }
        else
        {
            var ps=document.getElementById("i"+(i+1));
            var r=document.getElementById("i"+(i));
            var sty=document.getElementById("p"+(i+1)).style.backgroundColor="#B5CFED";
            r.innerText="";
            r=document.getElementById("p"+(i)).style.backgroundColor="green";
            ps.innerText="i";
        }
        for(var j=sd.m;j<sd.n;j++)
        {
            if(j==1)
            {
                var psv=document.getElementById("i"+(j+1));
                var psvst=document.getElementById("p"+(j+1)).style.backgroundColor="#B5CFED";
                psv.innerText="j";
                sd.prev=j;
            }
            else
            {
                var psvs=document.getElementById("i"+(sd.prev+1));
                var psvss=document.getElementById("p"+(sd.prev+1));
                psvss.style.backgroundColor="gold";
                psvs.innerText="";
                var psv=document.getElementById("i"+(j+1));
                psvss=document.getElementById("p"+(j+1)).style.backgroundColor="#B5CFED";
                psv.innerText="j";
                sd.prev=j;
            }
            var b=Number(document.getElementById('p'+(j+1)).textContent)
              if(a>b)
              {
                var k=document.getElementById('p'+(i+1)).textContent;
                document.getElementById('p'+(i+1)).innerText=document.getElementById('p'+(j+1)).textContent;
                document.getElementById('p'+(j+1)).innerText=k;
                var prin=document.getElementById("print");
                prin.innerText=grea(a,b);
              }   
              else if(a<b)
              {
                var prin=document.getElementById("print");
                prin.innerText=less(a,b);
              }
              else
              {
                var prin=document.getElementById("print");
                prin.innerText=equ(a,b);
              }
              if(j==sd.n-1){
              i++;
              j=i;
              }
              sd.l=i;
              sd.m=j+1;
              return;
              
        }
    }
  }
}
let s=null;
function start1()
{
 s=new Sort();
}
function start2()
{
   const v=new Sort();
   v.Nex(s);
   var k=document.querySelector("dis");
   console.log(k);
}
