const collection = document.querySelectorAll("li");
const projects = document.querySelectorAll(".project");
const meets = document.querySelectorAll(".meet");
const messages = document.querySelectorAll(".message");
const greet = document.querySelector(".greet-time");
const btn = document.querySelectorAll("button")

menuHover();
menuRemove();
projectHover();
projectRemove();
meetHover();
meetRemove();
messageHover();
messageRemove();
btnHover();
btnRemove();



function addPinkBrown(event){
    event.addEventListener("mouseover", (e) =>
    event.classList.add("pink-text", "brown-border"))
}

function removePinkBrown(event){
    event.addEventListener("mouseout", (e) =>
    event.classList.remove("pink-text", "brown-border"))
}

function projectHover(){
    projects.forEach(project => addPinkBrown(project))}

function projectRemove(){
    projects.forEach(project => removePinkBrown(project))}

function meetHover(){
    meets.forEach(meet => addPinkBrown(meet))};

function meetRemove(){
    meets.forEach(meet => removePinkBrown(meet));
}

function messageHover(){
    messages.forEach(message => addPinkBrown(message))};
    
function messageRemove(){
    messages.forEach(message => removePinkBrown(message))};

function btnHover(){
    btn.forEach(btns =>  addPinkBrown(btns));
}

function btnRemove(){
    btn.forEach(btns =>  removePinkBrown(btns));
}

function menuHover(){
    collection.forEach(collect => 
    {collect.addEventListener("mouseover", (event) => {
    collect.classList.add("black");
})})}

function menuRemove(){
    collection.forEach(collect => 
    {collect.addEventListener("mouseout", (event) => {
    collect.classList.remove("black");
})})}

greet.textContent = new Date().getHours() >= 12 ? 'Good Afternoon' : 'Good Morning';
