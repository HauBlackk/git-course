import { test } from '@playwright/test';
import { count } from 'console';
test('Ex2', async ({ page }) => {
    await test.step('click', async () => {
        await page.goto("https://material.playwrightvn.com/");
        await page.locator("//a[text()='Bài học 2: Product page']").click();
    })
    await test.step('add category', async () => {
        await page.locator("//button[@data-product-id='1']").dblclick();
        await page.locator("//button[@data-product-id='2']").click({clickCount : 3});
        await page.locator("//button[@data-product-id='3']").click();
    })
})