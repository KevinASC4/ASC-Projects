
function dnaMaker(dna) {
var res = dna.split("");
var c =[];
while(i=0,i< res.length,i++);{
  if(res[i]=="g"){
     c.push("c");
  }
  if(res[i]=="c"){
  c.push("g");
  }
  if (res[i]=="t"){
  c.push("a");
  }
  if (res[i]=="a"){
  c.push("t");
}
}
return c;
}