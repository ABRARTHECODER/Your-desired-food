 var naan,chick,taste;
var count=0;

function preload() {
naan=loadImage("butterchickenandnaan.jpg")
taste=loadImage("naan.jpg")
}
function setup(){
   createCanvas(800,600);
chick=createSprite(300,300,10,10)
chick.addImage(naan)
}


function draw(){
background("gold");
count=World.seconds;
if(count===10){
  chick.addImage(taste)
}
if(count===20){
  chick.addImage(naan)
}
if(count===30){
  chick.addImage(taste)
}
if(count===40){
  chick.addImage(naan)
}
if(count===50){
  chick.addImage(taste)
}
if(count===60){
  chick.addImage(naan)
}
if(count===70){
  chick.addImage(taste)
}
if(count===80){
  chick.addImage(naan)
}
console.log(count)
  drawSprites();
  fill("yellow")
  stroke("red")
  strokeWeight(5)
 textSize(20)
text("THE SECRET RECIPE OF NAAN AND CHICKEN BUTTER",10,20)
text("ingredients",270,60)
text("1-package Fresh Signature Naan,2-tbsp. butter,½-lb. boneless skinless",10,90)
text(" chicken thighs, cubed,1-large onion, diced,2-cloves garlic,2-tsp. minced fresh ",10,120)
text("gingerroot,1-tbsp. curry powder,1-tbsp. paprika,¼-tsp. salt,¼tsp. pepper,1-cup ",10,150)
text("tomato sauce,¾-cup 35% heavy cream,1-tbsp. lemon juice,¼-cup plain Greek yogurt,",10,180)
text("2-tbsp. finely chopped fresh cilantro",10,210)

text("Note:note forget to note down the ingredients",150,240)

text("Step1-Melt butter in large high-sided skillet set over medium heat;cook chicken for 5 to 8 ",10,270)
text("minutes or until starting to brown. Stir in onion,garlic and ginger; cook for 5 to ",10,300)
text("8 minutes or until chicken is very tender. Stir in curry powder, paprika, salt ",10,330)
text("and pepper; cook for 1 to 2 minutes or until fragrant.",10,360)
text("Step2-Stir in tomato sauce and cream; bring to boil. Reduce heat to medium-low;",10,390)
text(" cook for 10 to 15 minutes or until slightly thickened. Stir in lemon juice.",10,420)
text("Step3-Meanwhile, warm naan bread according to package directions.",10,450)
text("Step4-Dollop yogurt over butter chicken; sprinkle with cilantro. Serve with naan ",10,480)
text("bread for dipping.",10,510)
fill("blue")
text("And dont forget to like and give five stars to abrar.And in Abrar's report card ",10,550)
text("give good mark.Try making it and send a photo in whatsapp of the naan you made!!!",10,580)
}