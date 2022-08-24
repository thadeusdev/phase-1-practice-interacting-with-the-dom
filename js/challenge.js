// Select increment and decrement buttons & pause
const incrementCount = document.getElementById("plus");
const decrementCount = document.getElementById("minus");

// Select total count
const totalCount = document.getElementById("counter");

// Variable to track count
var count = 0;

// Display initial count value
totalCount.innerHTML = count;

// Counting
function counter(){
    count++;
    let display = document.getElementById('counter');
    display.innerHTML = count;
}

function begin(){
    counter();
    setTimeout(begin, 1000, window)
}

document.addEventListener('DOMContentLoaded', function(){
    begin();
})

// Function to increment count
const handleIncrement = () => {
  count++;
  totalCount.innerHTML = count;
};

// Function to decrement count
const handleDecrement = () => {
  count--;
  totalCount.innerHTML = count;
};

// Add click event to buttons
incrementCount.addEventListener("click", handleIncrement);
decrementCount.addEventListener("click", handleDecrement);