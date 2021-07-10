let newsAccordion = document.getElementById('newsAccordion');
let url = 'https://saurav.tech/NewsAPI/sources.json';
var req = new Request(url);
function getData(){
    fetch(url).then(function(response) {
        return response.json();
    }).then(data =>{
         console.log(data);
        let articles = data.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            // console.log(element, index)
             let news = 
                        `<div class="card">
                            <a href="${element['url']}" target="_blank" > <img class="card-img-top" src="${element['urlToImage']}" alt="Card image cap"></a>
                            <div class="card-body">
                                <h5 class="card-title">"${element['title']}"</h5>
                                <p class="card-text">${element['description']}</p>
                            </div>
                        </div>`
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    })
}
getData();
// 72af05367ee9498ca8bdd42c4a9672e7
// var url = 'https://newsapi.org/v2/top-headlines?' +
//           'country=us&' +
//           'apiKey=72af05367ee9498ca8bdd42c4a9672e7';