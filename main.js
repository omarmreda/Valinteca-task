const products = [
    {
        product_name: 'Gold Coin',
        product_price: '112.55',
        product_image: './assets/gold-coin.png',
        added_to_cart: false
    },
    {
        product_name: 'Silver Coin',
        product_price: '75.99',
        product_image: './assets/silver-coin.png',
        added_to_cart: false
    },
    {
        product_name: 'Diamond Ring',
        product_price: '350.00',
        product_image: './assets/diamond-ring.png',
        added_to_cart: false
    },
    {
        product_name: 'Platinum Necklace',
        product_price: '800.00',
        product_image: './assets/platinum-necklace.png',
        added_to_cart: false
    },
    {
        product_name: 'Ruby Earrings',
        product_price: '250.00',
        product_image: './assets/ruby-earrings.png',
        added_to_cart: false
    },
    {
        product_name: 'Sapphire Bracelet',
        product_price: '450.00',
        product_image: './assets/sapphire-bracelet.png',
        added_to_cart: false
    }
]
function renderItems() {
    const container = document.querySelector('.items-container')
    console.log(container)
    products.forEach((item) => {
        const itemContainer = document.createElement('div')
        itemContainer.classList.add('itemContainer')

        const itemName = document.createElement('h4')
        itemName.innerText = item.product_name
        itemContainer.appendChild(itemName)
        container.appendChild(itemContainer)

        const productImage = document.createElement('img')
        const imageContainer = document.createElement('div')
        imageContainer.appendChild(productImage)
        productImage.src = item.product_image
        productImage.alt = item.product_name
        productImage.classList.add('image')
        itemContainer.appendChild(imageContainer)
        imageContainer.classList.add('imageContainer')

        const ItemPrice = document.createElement('div')
        ItemPrice.classList.add('price')
        ItemPrice.innerText = item.product_price + 'EGP'
        itemContainer.appendChild(ItemPrice)

        const addButton = document.createElement('button')
        addButton.classList.add('item-button')

        addButton.innerText = item.added_to_cart
            ? 'Remove from Cart'
            : 'Add to cart'
        itemContainer.append(addButton)
        addButton.addEventListener('click', function () {})
    })
}
renderItems()
