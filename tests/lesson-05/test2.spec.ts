import { test } from '@playwright/test'
test('bai2', async ({ page }) => {
    await test.step('click1', async () => {
        await page.goto('https://material.playwrightvn.com/');
    })
    await test.step('click2', async () => {
        await page.locator("//a[text()='Bài học 2: Product page']").click();
    })
    await test.step('click3', async () => {
        await page.locator("//button[@data-product-id='1']").dblclick();
        await page.locator("//button[@data-product-id='2']").click({clickCount: 3});
        await page.locator("//button[@data-product-id='3']").click();




    })

})