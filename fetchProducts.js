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