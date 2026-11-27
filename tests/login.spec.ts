import { test, expect } from '@playwright/test';

test('Login happy test', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'login' }).click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('Login with wrong password', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('clave_incorrecta');
    await page.getByRole('button', { name: 'login' }).click();
    await expect(page.getByText('password do not match')).toBeVisible();
});