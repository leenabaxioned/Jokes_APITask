/* Author: */
var jokes = document.querySelector(".jokes");
var btn = document.querySelector("#get");

var generateJokes = async () => {
  try {
    var setHeader = {
      headers: {
        Accept: "application/json",
      },
    };
    // fetching Api with async await
    var url = "https://icanhazdadjoke.com";
    var res = await fetch(url, setHeader);
    var data = await res.json();
    console.log(data);
    jokes.innerHTML = data.joke;
  } catch (error) {
    console.log(`The error is ${error}`);
  }
};
// calling a function
btn.addEventListener("click", generateJokes);
//generateJokes();
