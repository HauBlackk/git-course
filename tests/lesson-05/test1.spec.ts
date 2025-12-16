import { test } from '@playwright/test';
test('click link', async ({ page }) => {
    await test.step("Click link", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Click Bai1", async () => {
        await page.locator("//a[text()='Bài học 1: Register Page (có đủ các element)']").click();
    });

    await test.step("input name", async () => {
        await page.locator("//input[@id='username']").fill('Son GoKu');
        await page.locator("//input[@id='email']").fill('vivanvu1499@gmail.com');
        await page.locator("//input[@id='male']").check();
        await page.locator("//input[@id='reading']").check();
        await page.locator("//select[@id='interests']").selectOption("Art");
        await page.locator("//select[@id='country']").selectOption("United Kingdom");
        await page.locator("//input[@id='dob']").fill("2000-11-13");
        await page.locator("//input[@id='profile' ]").setInputFiles('tests/data-test/data-demo.txt')
        await page.locator("//textarea[@id='bio']").fill("tết đến nơi rồi");
        await page.locator("//input[@id='rating']").fill("7");
        await page.locator("//input[@id='favcolor']").fill("#77991a");
        await page.locator("//div[@class='tooltip']").hover();
        await page.locator("//span[@class='slider round']").check();
    });

    await test.step('Click button', async () => {
        await page.locator("//button[text()='Register']").click();
    })






});