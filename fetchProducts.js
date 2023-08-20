const url = 'https://greenswap-api.sreenath.org';
const cardTemplate = `
<div class="card">
    <div class="img" style="--img-path: url('{{img}}');"></div>
    <div class="product-heading">{{title}}</div>
    <div class="about-product">
        <p>{{about}}</p>
    </div>
    <div class="product-link">
        <a href="{{link}}" class="buy">Buy it here</a>
    </div>
</div>
`

const home = document.querySelector('#home')

const addCard = (card) => {
    const [id, title, about, link] = card;
    const img = `${url}/img?id=${id}`;
    const html = cardTemplate
    .replace("{{img}}", img)
    .replace("{{title}}",title)
    .replace("{{about}}", about)
    .replace("{{link}}", link);
    home.innerHTML += html;
}

fetch(url).then(res => {
    res.json().then(data => {
        for (let i of data) {
            addCard(i);
        }
    })
})

const context = document.querySelector('#home');
const instance = new Mark(context);
const searchInput = document.querySelector('.search-input');
const mainContent = document.querySelector('#home');

searchInput.addEventListener('input', (e)=> {
    const searchWord = e.target.value.toLowerCase();
    let blocks = Array.from(mainContent.children);
    let results = 0;
    for (let i of blocks) {
        let show = i.innerText.toLowerCase().includes(searchWord)
        if (!show) {
            i.style.display = 'none';
        }
        else {
            i.style.display = 'block';
            results++;
        }
    }
    if (results === 0) {
        document.querySelector('.search').style.setProperty('--error-display','block');
    }
    else {
        document.querySelector('.search').style.setProperty('--error-display','none');
    }
    instance.unmark();
    instance.markRegExp(new RegExp(searchWord, 'gi'));
})