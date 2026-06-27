import { test, expect } from '@playwright/test';

test('agents abilities', async ({ page }) => {
  await page.goto('https://playvalorant.com/es-mx/');
  await page.getByTestId('riotbar:desktopNav:link-internal-game-info').click();
  await page.getByTestId('riotbar:desktopNav:link-AGENTES').click();
  await page.getByRole('button', { name: 'Cypher' }).click();
  await page.getByTestId('icon-tab-tab-1').click();
  await page.getByText('CÁMARA ESPÍA', { exact: true }).dblclick();
  await page.getByTestId('icon-tab-tab-2').click();
  await page.getByTestId('icon-tab-tab-3').click();
  await page.goto('https://playvalorant.com/es-mx/agents/');
  await page.getByRole('button', { name: 'Deadlock' }).click();
  await page.getByTestId('icon-tab-tab-1').click();
  await page.getByTestId('icon-tab-tab-2').click();
  await page.getByTestId('icon-tab-tab-3').click();
});