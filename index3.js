console.log(1)
let getReturnValue = $.get("https://async-workshops-api.herokuapp.com/people", function(peopleResponse) {
      console.log(3)
      return peopleResponse;
      console.log(4)
});
console.log(2)





