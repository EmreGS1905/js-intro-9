

const userName = prompt("Please enter your name:");


if (userName) {
  alert( userName );
} else {
    alert('you did not provide your name.Bye')
}
if (confirm("Do you want to continue?")) {
    
    console.log("You have chosen to continue.");
  } else {
    
    console.log("You cancelled the action.");
  }
  console.log("Width:", window.innerWidth, "Height:", window.innerHeight);
  
  setTimeout(function() {
    window.location.reload();
  }, 10000);