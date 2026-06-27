import { test, expect } from '@playwright/test';

test('textElement', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.getByRole('link', { name: 'Elements' }).click();
  await page.getByRole('link', { name: 'Text Box' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Gwyn');
  await page.getByRole('textbox', { name: 'Full Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('gwynds1@fromsoftware.com');
  await page.getByRole('textbox', { name: 'name@example.com' }).press('Tab');
  await page.getByRole('textbox', { name: 'Current Address' }).click();
  await page.getByRole('textbox', { name: 'Current Address' }).fill('Lordran calle del sol 62');
  await page.getByRole('textbox', { name: 'Current Address' }).press('Tab');
  await page.locator('#permanentAddress').fill('Lordran calle del sol 62');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.locator('#name')).toContainText('Name:Gwyn');
  await expect(page.locator('#email')).toContainText('Email:gwynds1@fromsoftware.com');
  await expect(page.locator('#output')).toContainText('Current Address :Lordran calle del sol 62');
  await expect(page.locator('#output')).toContainText('Permananet Address :Lordran calle del sol 62');
});


test('checkBoxElement', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.getByRole('link', { name: 'Elements' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Check Box' }).click();
  await page.getByRole('checkbox', { name: 'Select Home' }).click();
  await expect(page.getByText('You have selected :')).toBeVisible();
  await page.locator('.rc-tree-iconEle').click();
  await page.locator('.rc-tree-switcher').click();
  await page.getByRole('checkbox', { name: 'Select Documents' }).click();
  await page.getByRole('checkbox', { name: 'Select Downloads' }).click();
  await page.getByRole('checkbox', { name: 'Select Documents' }).click();
  await page.getByRole('checkbox', { name: 'Select Downloads' }).click();
  await expect(page.getByText('desktop', { exact: true })).toBeVisible();
  await expect(page.getByText('documents', { exact: true })).toBeVisible();
  await expect(page.getByText('downloads', { exact: true })).toBeVisible();
});


test('formElement', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.getByRole('link', { name: 'Forms' }).click();
  await page.getByRole('link', { name: 'Practice Form' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Artorias');
  await page.getByRole('textbox', { name: 'First Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Abbyss');
  await page.getByRole('textbox', { name: 'Last Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('artoriasds1@fromsoftware.com');
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.getByRole('radio', { name: 'Male', exact: true }).press('Tab');
  await page.getByRole('textbox', { name: 'Mobile Number' }).fill('8715680099');
  await page.locator('#dateOfBirthInput').click();
  await page.getByRole('combobox').nth(1).selectOption('1984');
  await page.getByRole('gridcell', { name: 'Choose Saturday, June 23rd,' }).click();
  await page.getByText('SportsReadingMusic').click();
  await page.getByText('Music').click();
  await page.getByRole('checkbox', { name: 'Sports' }).check();
  await page.getByRole('textbox', { name: 'Current Address' }).click();
  await page.getByRole('textbox', { name: 'Current Address' }).fill('Lordran calle del dolor 1212');
  await page.locator('#state > .css-13cymwt-control > .css-hlgwow > .css-19bb58m').click();
  await page.getByRole('option', { name: 'NCR' }).click();
  await page.locator('#city > .css-13cymwt-control > .css-hlgwow > .css-19bb58m').click();
  await page.getByRole('option', { name: 'Gurgaon' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.locator('div').filter({ hasText: 'LabelValuesStudent' }).nth(3)).toBeVisible();
  await expect(page.getByText('Thanks for submitting the form')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Close' })).toBeVisible();
  await page.getByRole('button', { name: 'Close' }).press('Escape');
  await expect(page.locator('div').filter({ hasText: 'LabelValuesStudent' }).nth(3)).toBeHidden();
});