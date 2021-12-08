let a;
let count=0;
let hound=0;

const options = [];
options[0]= "rock";
options[1]= "paper";
options[2]= "scissors";
function random_item(options)
{
  
return options[Math.floor(Math.random()*options.length)];
     
}
for( i=0;i<5;i++)
{
a=prompt("enter")
let b=random_item(options);

 
if( a ==options[0] && b==options[1]){
text="paper beats rock , computer wins";
count++;}
else if( a ==options[0] && b==options[2])
{
text="rock beats paper , human wins";
hound++;}

else if(a==options[1] && b==options[2])
{
text="scissor beats paper , comp wins";
count++;}

else if ( a==options[1] && b==options[0])
{
text="paper beats rock, human wins";
hound++;}

else if( a==options[2] && b== options[0])
{
text="rock beats scissors , comp wins";
count++;}

else if (a==options[2] && b==options[1])
{
text="scissor beats rock, human wins ";
hound++;}
}
console.log("computer score vs human score")
console.log(count)
console.log(hound)