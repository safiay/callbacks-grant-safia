console.log(1)
$.get("https://async-workshops-api.herokuapp.com/people", function(peopleResponse) {
    console.log(3)
    console.log("People response:", peopleResponse);
    console.log(4)
});
console.log(2)