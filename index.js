document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.item');
    const totalPriceElement = document.getElementById('totalPrice');

    items.forEach(item => {
        const incrementBtn = item.querySelector('.increment');
        const decrementBtn = item.querySelector('.decrement');
        const deleteBtn = item.querySelector('.delete');
        const likeBtn = item.querySelector('.heart');

        incrementBtn.addEventListener('click', function() {
            const quantityElem = item.querySelector('.quantity');
            let quantity = parseInt(quantityElem.textContent);
            quantity++;
            quantityElem.textContent = quantity;
            updateTotal();
        });

        decrementBtn.addEventListener('click', function() {
            const quantityElem = item.querySelector('.quantity');
            let quantity = parseInt(quantityElem.textContent);
            if (quantity > 1) {
                quantity--;
                quantityElem.textContent = quantity;
                updateTotal();
            }
        });

        deleteBtn.addEventListener('click', function() {
            item.remove();
            updateTotal();
        });

        likeBtn.addEventListener('click', function() {
            likeBtn.classList.toggle('red');
        });
    });

    function updateTotal() {
        let totalPrice = 0;
        items.forEach(item => {
            const quantity = parseInt(item.querySelector('.quantity').textContent);
            const priceStr = item.querySelector('.price').textContent;
            const price = parseFloat(priceStr.replace('$', ''));
            totalPrice += quantity * price;
        });
        totalPriceElement.textContent = totalPrice.toFixed(2);
    }
});

