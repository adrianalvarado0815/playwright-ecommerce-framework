import { test, expect } from '@playwright/test';

test('about us', async ({ page }) => {
  await page.goto('https://www.fromsoftware.jp/ww/');
  await page.locator('#nav_switch').click();
  await page.getByRole('link').filter({ hasText: /^$/ }).nth(5).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'DARK SOULS Ⅲ', exact: true }).click();
  const page1 = await page1Promise;
  await page1.locator('.menu_icon_r').click();
  await page1.getByRole('listitem').filter({ hasText: 'About History Access' }).locator('svg').click();
  await page1.getByRole('listitem').filter({ hasText: /^About$/ }).click();
  await page1.getByRole('link', { name: '>>About' }).click();
  await page1.getByRole('link', { name: 'History' }).click();
  await page1.getByRole('link', { name: 'Access', exact: true }).click();
  await page1.getByText('About About History Access Tokyo Head Office Map AddressShinjuku Front Tower.').click();
  await page1.locator('#contents_wrapper iframe').contentFrame().locator('.gm-style > div > div:nth-child(2)').first().click();
  await page1.getByRole('link', { name: 'About' }).click();
  await page1.getByText('FromSoftware, Inc.', { exact: true }).click();
  await expect(page1.locator('#contents_wrapper')).toContainText('FromSoftware, Inc.');
  await expect(page1.getByText('November 1,')).toBeVisible();
  await expect(page1.locator('#contents_wrapper')).toContainText('November 1, 1986');
});