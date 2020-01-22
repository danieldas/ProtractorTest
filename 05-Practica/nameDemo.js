describe('Name Angular Demo', function () {
    it('Should works with validation name', function () {

        browser.get('https://qaclickacademy.github.io/protocommerce/');

        element(by.name("name")).sendKeys("M").sendKeys(protractor.Key.TAB);

        element(by.xpath("//div[contains(text(),'Name should be at least 2 characters')]")).getText().then((text )=>{
            expect(text).toContain("Name should be at least 2 characters");
        })
    });
});