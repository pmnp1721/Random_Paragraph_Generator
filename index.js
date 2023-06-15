const input= document.getElementById("numOfWords");
const container=document.querySelector(".container");

const genrateWords=(n)=>{
let text="";
const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 for(i=0;i<n;++i){
    text+=letters[(Math.random()*25).toFixed(0)].toLowerCase();
 }
 return text;
};





let numOfWords;
const genratePara=()=>{
numOfWords=(Number(input.value));
let data="";
for(let i=0;i<numOfWords;++i){
data+=(genrateWords((Math.random()*15).toFixed(0)));
data+=" ";
}
console.log(data);
const para=document.createElement("p");
para.innerText=data;
para.setAttribute("class","paras");
container.append(para);
};
