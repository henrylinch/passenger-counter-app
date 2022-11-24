let welcomeMessage = document.getElementById("welcome")
let greeting = "Welcome "
let myName = prompt("What is your name: ")
if (myName == null) {
    myName = "User"
}
else if (myName == "") {
    myName = "User"
}
let myGreeting = greeting + myName + '👋'
welcomeMessage.textContent = myGreeting


let count = 0
document.getElementById("people").textContent += 0
       
function increment() {
    //This function when clicked increases the value by 1
    count += 1
    document.getElementById("count-people").textContent = count
}

function decrement() {
    //This function when clicked decreases the value by 1
    count -= 1
    if (count <= 0){count = 0}
    document.getElementById("count-people").textContent = count
}
        
function save() {
    //This function saves the number of people, current count value.
    //initializing the previousEntry variable to a fixed value
    previousEntry = " " + count + " +"
    document.getElementById("entries").textContent += previousEntry
            
    totalPeople = 0
    totalPeople += count
    document.getElementById("people").textContent = totalPeople

    count = 0
    document.getElementById("count-people").textContent = count
    //I want to modify it so that the "total people today" value isn't  
    //updated but just incremented by the new value when the user clicks save
}


function clearData() {
    document.getElementById("people").textContent = 0
    //Also, i want to change the value of previous entries to 0 when
    //the user clicks clear.
}
        

        