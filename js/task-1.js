const categoriesItem = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesItem.length}`);

categoriesItem.forEach(category => {
    const title = category.querySelector('h2').textContent;
    const elementsCount = category.querySelectorAll('ul li').length;

    console.log(`Category: ${title}`);
    console.log(`Elements: ${elementsCount}`);
})