let pics=[];
let names=[];
let dates=[];
let locations=[];
let pages=[];
let pic;
let paper;
let index=0;
function setup() {
  cancvas=createCanvas(windowWidth, windowHeight);
  cancvas.parent("sketch-container");
  fetch("newspaper.json").then(function(response) {
    return response.json();
  }).then(function(data) {    
    //console.log(data);
    paper = data.newspaper;
    for (let i=0; i<paper.length; i++){
    pic = createImg(paper[i].image);
    nam =paper[i].name;
    da =paper[i].date;
    loc =paper[i].location;
    pa =paper[i].page;
    pic.hide();
      pics.push(pic);
      names.push(nam);
      dates.push(da);
      locations.push(loc);
      pages.push(pa);
    }
      addGUI();

  });
}

function draw() {

  // for(let i=0; i<pics.length;i++) {
    translate(index*40,index*40);
    image(pics[index], 0,0, pics[index].width, pics[index].height); 
    textSize(15);
  

}

function addGUI() {
  button = createButton(names[0]); 
  button.addClass("button");
  button.parent("gui-container");
  button.addClass("hover");  

  button.mousePressed(handleButtonPress); 
}

function handleButtonPress() {
      button.addClass("inactive");
      index=index+1;
      button.html(names[index]);
      
}