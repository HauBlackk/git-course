import { test } from '@playwright/test';
test('Ex3', async ({ page }) => {
    
    const addTodo = page.locator("//button[@id='add-task']");
    await test.step('click', async () => {
        await page.goto('https://material.playwrightvn.com/');
        await page.click("//a[text()='Bài học 3: Todo page']");

    });

    await test.step('addTodo', async () => {
        for (let i = 1; i <= 100; i++) {
            await page.locator("//input[@id='new-task']").fill(`Todo ${i}`)
            await addTodo.click();

        }

    })

    await test.step("2. Xóa các todo có số lẻ", async () => {

        page.on('dialog', async dialog => dialog.accept());

        for (let i = 1; i <= 100; i++) {
            if (i % 2 !== 0) {
                await page.locator(`//button[@id="todo-${i}-delete"]`).click();
            }
        }
    });
});