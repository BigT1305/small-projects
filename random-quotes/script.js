const text = document.getElementById("quote")
const author = document.getElementById("author")

const getNewQuote = async() => {
  // Store the API in a variable named url
  const url = "https://type.fit/api/quotes";
  // Pass in the url variable as an argument to fetch() to get data from the API
  const response = await fetch(url)

  // Convert the response to JSON format and save in the allQuotes array
  const allQuotes = await response.json();

  // Access a single object from the array (use built-in Math methods)
  const index = Math.floor(Math.random() * allQuotes.length);

  // Store the quote and author of the randomly generated index
  const quote = allQuotes[index].text;
  const auth = allQuotes[index].author;

  // If there is no author of the quote, display as anonymous.
  if (auth === null) {
    author = "Anonymous";
  }
  // Will dynamically display the quote and the author
  text.innerHTML = quote;
  author.innerHTML = "~ " + auth;
}

//Call the function to start it after page reloads
getNewQuote();

