
import { test, expect } from '@playwright/test';

test('Fill the input', async ({ page }) => {
  await page.goto('https://devexpress.github.io/testcafe/example/');
  await page.locator('input[type="text"]').fill('majo virgos');
  await expect(page.locator("#developer-name")).toHaveValue('majo virgos')
});

test('Check value', async ({ page }) => {
  await page.goto('https://devexpress.github.io/testcafe/example/');
  await page.locator('#remote-testing').check();
  await page.locator('#reusing-js-code').check();
  await page.locator('#background-parallel-testing').check();
  await page.locator('#continuous-integration-embedding').check();
  await page.locator('#traffic-markup-analysis').check();
  expect(await page.isChecked('#traffic-markup-analysis')).toBeTruthy()
  expect(await page.isChecked('#reusing-js-code')).toBeTruthy();

});

test('Radio value', async ({ page }) => {
  await page.goto('https://devexpress.github.io/testcafe/example/');
  await page.locator('#macos').check();
  await page.locator('#linux').check();
  const valueChecked=page.locator("input[value='Linux']");
  await expect(valueChecked).toBeChecked();
});



test('Select value', async ({ page }) => {
  await page.goto('https://devexpress.github.io/testcafe/example/');
  await page.getByTestId('preferred-interface-select').selectOption('JavaScript API');
  await expect(page.locator("select")).toHaveValue('JavaScript API');
});

test('Check Test Cafe Check Option', async ({ page }) => {
  await page.goto('https://devexpress.github.io/testcafe/example/');
  await page.check("#tried-test-cafe");
  expect(await page.locator('#slider').isVisible()).toBe(true);
});

test('Fill the textarea', async ({ page }) => {
  await page.goto('https://devexpress.github.io/testcafe/example/');
  await page.check("#tried-test-cafe");
  await page.fill("textarea", "Test TextArea");
  await expect(page.locator("#comments")).toHaveValue('Test TextArea')
});

test('Submit page', async ({ page }) => {
  await page.goto('https://devexpress.github.io/testcafe/example/');
  await page.getByTestId('tried-testcafe-checkbox').check();
  await page.getByTestId('name-input').click();
  await page.getByTestId('name-input').fill('majo virgos');
  await page.getByTestId('macos-radio').check();
  await page.getByTestId('parallel-testing-checkbox').check();
  await page.getByTestId('comments-area').click();
  await page.getByTestId('comments-area').fill('lab 3');
  await page.evaluate(()=>{
    const selector = document.querySelector("#submit-button") as HTMLElement;
    selector.removeAttribute('disabled')
});
  await page.getByTestId('submit-button').click();
  await expect(page).toHaveURL("https://devexpress.github.io/testcafe/example/thank-you.html");
});