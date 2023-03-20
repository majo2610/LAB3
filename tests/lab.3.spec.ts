import { test, expect } from '@playwright/test';

test('Name', async ({ page }) => {
  await page.goto('https://devexpress.github.io/testcafe/example/');
  