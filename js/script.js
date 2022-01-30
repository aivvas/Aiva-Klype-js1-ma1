///Question 1
Object.property = {
    name: "cat",
}

complain.property = [
    function complain (){
        console.log("meow!")
    }
]

///Question 2

var h3 = document.querySelector ("h3")

function changeheading (){
    var h3 = document.querySelector ("h3");
    h3.innerHTML = "Updated heading"
}

//Question 3

function changefont (){
    var h3 = document.querySelector ("h3");
    h3.style.fontSize = "2em"
}

//Question 4
document.querySelector ("heading").classList.add("subheading");

//Question 5
document.querySelectorAll ("p")
var p = document.querySelectorAll ("p");


var p = document.querySelectorAll ("p")
for (i= 0; i < p.lenght; i++){
    p.style.backgroundColor = "red"
};


//Question 6
document.querySelector (".results")
var resultsContainer = document.querySelector (".results")
function changeP (){
    resultsContainer.innerHTML = "<p>New paragraph</p>";
    resultsContainer.style.backgroundColor = "yellow"
};


//Question 7
