const searchForm = document.querySelector("#book-search");
const keywordField = document.querySelector("#book-keyword");
const resultsStatus = document.querySelector("#book-search-status");
const books = [...document.querySelectorAll("#books .pics li")];

function filterBooks(keyword) {
    const query = keyword.trim().toLowerCase();
    let visibleCount = 0;

    for (const book of books) {
        const title = book.querySelector("p").textContent.toLowerCase();
        book.hidden = !title.includes(query);
        if (!book.hidden) {
            visibleCount++;
        }
    }

    resultsStatus.textContent = query
        ? (visibleCount ? `找到 ${visibleCount} 本图书` : "没有找到匹配的图书")
        : "";
    document.querySelector("#books").scrollIntoView();
}

searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    filterBooks(keywordField.value);
});

document.querySelector("#show-all-books").addEventListener("click", () => {
    keywordField.value = "";
    filterBooks("");
});
