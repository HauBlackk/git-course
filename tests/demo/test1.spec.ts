import { test } from '@playwright/test'
test('Ex1', async ({ page }) => {
    await test.step('Click web', async () => {
        await page.goto('https://material.playwrightvn.com/');
        await page.locator("//a[text()='Bài học 1: Register Page (có đủ các element)']").click();
    })
    await test.step('Input', async () => {
        await page.locator("//input[@id='username']").fill('GoHan là tao');
        await page.locator("//input[@id='email']").fill('gohan@gmail.com');
        await page.locator("//input[@id='male']").check();
        await page.locator("//input[@id='traveling']").check();
        await page.locator("//select[@id='interests']").selectOption('Music');
        await page.locator("//select[@id='country']").selectOption('United Kingdom');
        await page.locator("//input[@id='dob']").fill("2000-12-01");
        await page.locator("//input[@id='profile']").setInputFiles('tests/data-test/data-demo.txt');
        await page.locator("//textarea[@id='bio']").fill("I'm the King");
        await page.locator("//input[@id='rating']").fill("8");
        await page.locator("//input[@id='favcolor']").fill("#2b00ff");
        await page.locator("//span[@class='slider round']").check();

    })
    await test.step('Button', async () => {
        await page.locator("//button[@type='submit']").click()
    })
})