const dict = document.querySelector(".main"),
word_search = dict.querySelector("input"),
text_info = dict.querySelector(".info_text"),
synonyms = dict.querySelector(".synonyms .list"),
closeDict = dict.querySelector(".search span");

function search(word){
    definition(word);
    word_search.value = word;
}

word_search.addEventListener("keyup", e =>{
    let word = e.target.value.replace(/\s+/g, ' ');
    if(e.key == "Enter" && word){
        definition(word);
    }
});

function definition(word){
    dict.classList.remove("active");
    text_info.style.color = "#ffffs";
    text_info.innerHTML = `Searching the meaning of <span>"${word}"</span>`;
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    fetch(url).then(response => response.json()).then(result => data(result, word)).catch(() =>{
        text_info.innerHTML = `Try another word`;
    });
}

closeDict.addEventListener("click", ()=>{
    word_search.value = "";
    word_search.focus();
    dict.classList.remove("active");
});


function data(result, word){
    if(result.title){
        text_info.innerHTML = `Type in another word`;
    }else{
        dict.classList.add("active");
        let definitions = result[0].meanings[0].definitions[0],
        phontetics = `${result[0].meanings[0].partOfSpeech}  /${result[0].phonetics[0].text}/`;
        document.querySelector(".word p").innerText = result[0].word;
        document.querySelector(".word span").innerText = phontetics;
        document.querySelector(".meaning span").innerText = definitions.definition;
        document.querySelector(".example span").innerText = definitions.example;
        audio = new Audio("https:" + result[0].phonetics[0].audio);
        if(definitions.synonyms[0] == undefined){
            synonyms.parentElement.style.display = "none";
        }else{
            synonyms.parentElement.style.display = "block";
            synonyms.innerHTML = "";
            for (let i = 0; i < 5; i++) {
                let tag = `<span onclick="search('${definitions.synonyms[i]}')">${definitions.synonyms[i]},</span>`;
                tag = i == 4 ? tag = `<span onclick="search('${definitions.synonyms[i]}')">${definitions.synonyms[4]}</span>` : tag;
                synonyms.insertAdjacentHTML("beforeend", tag);
            }
        }
    }
}


