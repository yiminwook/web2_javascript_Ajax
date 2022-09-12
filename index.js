function fetchPage(file){
  fetch(file).then(res => {   
    res.text().then(text => {     
      document.querySelector('article').innerHTML = text;   
    })
  });
}

fetch('list.html').then(res => {   
  res.text().then(text => {     
    const content = text.split(",");
    const list = content.map((el) => {
      return `<li><a href='#!${el}' onclick="fetchPage('${el}.html')">${el}</a></li>`;
    })
    document.querySelector('#nav').innerHTML = list.join("");
  })
});

if(location.hash){
  fetchPage(location.hash.substring(2) + ".html");
} else {
  fetchPage("welcome.html");
}