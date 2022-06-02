//setting up variables
//this variable will determine if the dictionary is active or not and therefore whether to run the java code
const dict = document.querySelector(".main"), //getting the input from the user
word_search = dict.querySelector("input"), //the information text which guides the user
text_info = dict.querySelector(".info_text"), //closing the dictionary with the close button
closeDict = dict.querySelector(".search span");
//function to search for the input of the user
function search(word) {
    //using the definition function(below) to return the meaning of the word the user inputs
    definition(word);
    word_search.value = word;
}
//this function tells the code that when the user presses the 'enter' key then it should run the definition function
word_search.addEventListener("keyup", (e)=>{
    let word = e.target.value.replace(/\s+/g, ' ');
    if (e.key == "Enter" && word) definition(word);
});
//get the definition of the word
function definition(word) {
    dict.classList.remove("active");
    //makes the info text white
    text_info.style.color = "#ffffs";
    //info text to show user that the program is searching for their words
    text_info.innerHTML = `Searching the meaning of <span>"${word}"</span>`;
    //using api dictionary to find the word which the user input
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    //fetching the response from that url and getting the definition and assigning them to variables
    fetch(url).then((response)=>response.json()
    ).then((result)=>data(result, word)
    ).catch(()=>{
        text_info.innerHTML = `Try another word`;
    });
}
//returning the word
function data(result, word) {
    if (result.title) text_info.innerHTML = `Type in another word`;
    else {
        //getting definition from api using variables as above
        dict.classList.add("active");
        let definitions = result[0].meanings[0].definitions[0], phontetics = `${result[0].meanings[0].partOfSpeech}  /${result[0].phonetics[0].text}/`;
        //changing the text on the html to the result from the api
        document.querySelector(".word span").innerText = phontetics;
        document.querySelector(".word p").innerText = result[0].word;
        document.querySelector(".meaning span").innerText = definitions.definition;
    }
}
//closing the dictionary
closeDict.addEventListener("click", ()=>{
    word_search.value = "";
    word_search.focus();
    dict.classList.remove("active");
}); //(CodingNepal, 2021)

//# sourceMappingURL=study.129e2507.js.map
