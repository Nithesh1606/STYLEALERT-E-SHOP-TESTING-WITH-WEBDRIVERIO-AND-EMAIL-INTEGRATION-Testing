class SearchHeader {

    get searchBar() {
        return $("//input[@type='search']");
    }

    get searchBtn() {
        return $('//div[@class="search-bar-top"]//button[@type="submit"]');
    }

    async search(productName) {
        await this.searchBar.setValue(productName);
        await this.searchBtn.click();
    }
}

module.exports = SearchHeader;