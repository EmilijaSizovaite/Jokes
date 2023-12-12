document.querySelector('.joke-not-found').style.display = "none"

//SEARCH
document.querySelector('.header-search').addEventListener("input", (e)=>{
    e.preventDefault();
    find_by_name()
})

//FIND BY NAME
const find_by_name = ()=>{
    let searchQuery = document.querySelector('input').value
    fetch(`https://api.chucknorris.io/jokes/search?query=${searchQuery}`)
    .then((response)=>data=response.json())
    .then((data)=>{
        console.log(data.result)
        document.querySelector('.jokes-list').innerHTML = ""
        if (data.result != null){
            if(data.result[0].lenght != 0){
                document.querySelector('.joke-not-found').style.display = "none"
                create_article(data.result)
                console.log("found")
            }
        }else{
            console.log("nopt found")
            document.querySelector('.joke-not-found').style.display = "block"
        }

    })
}

const create_article = (result)=>{
    for(joke of result){
        console.log(joke.value)
        const article = document.createElement('article')
        article.className = "col-sm-3 col-12 flex-grow-1 rounded-2"
        article.style = `background: ${randomBackground()};`
        article.innerHTML = `<p>${joke.value}</p>`
        document.querySelector('.jokes-list').appendChild(article)
    }
}

const randomBackground = ()=>{
    return `rgb(${colorNumber()},${colorNumber()},${colorNumber()})`
  }

const colorNumber = ()=>{
return Math.floor(Math.random()*255);
}