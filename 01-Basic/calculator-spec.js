describe('This a suit for calculator', function() {
    it('This is app add two numbers', function() {
        browser.get('https://juliemr.github.io/protractor-demo/');

        element(by.model('first')).sendKeys('5');
        element(by.model('second')).sendKeys('3');

        element(by.id('gobutton')).click();

        console.log("----------------");

        element(by.css("h2[class='ng-binding']")).getText().then( (text)=>{
            console.log(text);
        });

        expect(element(by.css("h2[class='ng-binding']")).getText()).toEqual("8");
    });

    it('This app will add two numbers2', function() {
        browser.get('https://juliemr.github.io/protractor-demo/');

        element(by.model('first')).sendKeys('5');
        element(by.model('second')).sendKeys('3');

        element(by.id('gobutton')).click();

        console.log("---------------");

        element(by.css("h2[class='ng-binding']")).getText().then( (text)=>{
            console.log(text);
        });
        expect(element(by.css("h2[class='ng-binding']")).getText()).toEqual("9");
    });
});