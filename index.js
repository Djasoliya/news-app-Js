console.log("this is project 3");
//initialize the news api parameers
let sources='bbc-news';
let apiKey = 'ea337184301e4e11b39602280f3fe20d';
//grab the news vcontainer
let newsAccordion = document.getElementById('newsAccordion');

//ceate a get request
const xhr = new XMLHttpRequest();
// post request
    // xhr.open('GET',`https://newsapi.org/v2/top-headlines?sources=${sources}&apiKey=${apiKey}`, true);
    // xhr.open('GET',`https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=ea337184301e4e11b39602280f3fe20d`, true);
    xhr.open('GET',`https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=ea337184301e4e11b39602280f3fe20d`, true);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index){
            // console.log(element, index);
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h5 class="mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                        aria-expanded="true" aria-controls="#collapse${index}">
                                        <b>Breakinh News ${index+1}</b> ${element["title"]}
                                    </button>
                                </h5>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
                                data-parent="#newsAccordion">
                                <div class="card-body">${element["content"]} <a href = "${element['url']}" target = "_blank" > Read more here </a>
                                </div>
                            </div>
                        </div>`;
            // console.log(news);
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("some error accored");
    }
}
xhr.send()  

