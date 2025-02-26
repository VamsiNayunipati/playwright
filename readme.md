## Playwright
Playwright is a powerful and modern open-source framework for automating web browsers, developed by Microsoft. It supports multiple browsers (Chromium, Firefox, and WebKit) and provides a unified API to write reliable and efficient automation tests.

Here are some basic testing commands using Playwright, written in JavaScript/TypeScript.

### 1. Launching a Browser and Navigating to a Page

```javascript
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://example.com'); 
  await browser.close(); 
})();
```

### 2. Interacting with Elements

#### Clicking a Button
```javascript
await page.click('button#submit');
```

#### Filling a Text Input
```javascript
await page.fill('input#username', 'testuser');
```

#### Typing in a Field
```javascript
await page.type('input#password', 'password123');
```

#### Selecting an Option from a Dropdown
```javascript
await page.selectOption('select#country', 'USA');
```

#### Checking a Checkbox
```javascript
await page.check('input#agree');
```

### 3. Assertions

#### Checking Page URL
```javascript
await expect(page).toHaveURL('https://example.com/dashboard');
```

#### Checking Element Visibility
```javascript
await expect(page.locator('h1')).toBeVisible();
```

#### Checking Text Content
```javascript
await expect(page.locator('h1')).toHaveText('Welcome');
```

#### Checking Element Attribute
```javascript
await expect(page.locator('img#logo')).toHaveAttribute('src', '/logo.png'); 
```

### 4. Waiting for Elements

#### Wait for an Element to Be Visible
```javascript
await page.waitForSelector('div#loading', { state: 'hidden' }); 
```

#### Wait for Navigation
```javascript
await Promise.all([
  page.waitForNavigation(),
  page.click('a#next-page') 
]);
```

### 5. Handling Alerts and Dialogs

#### Accepting an Alert
```javascript
page.on('dialog', async dialog => {
  await dialog.accept();
});
await page.click('button#trigger-alert');
```

#### Dismissing a Dialog
```javascript
page.on('dialog', async dialog => {
  await dialog.dismiss();
});
```

### 6. Taking Screenshots
```javascript
await page.screenshot({ path: 'screenshot.png' });
await page.locator('div#header').screenshot({ path: 'header.png' }); 
```

### 7. Handling Frames and Iframes

#### Switching to an Iframe
```javascript
const frame = page.frameLocator('iframe#my-frame');
await frame.locator('button#submit').click();
```

### 8. Keyboard and Mouse Actions

#### Typing a Keyboard Key
```javascript
await page.keyboard.press('Enter');
```

#### Hovering Over an Element
```javascript
await page.locator('button#menu').hover();
```

#### Dragging and Dropping
```javascript
await page.dragAndDrop('div#source', 'div#target');
```

### 9. Handling Multiple Tabs or Windows

#### Opening a New Tab
```javascript
const [newPage] = await Promise.all([
  page.waitForEvent('popup'),
  page.click('a#open-tab')
]);
await newPage.goto('https://example.com/new-tab');
```

### 10. Cleaning Up

#### Closing the Browser
```javascript
await browser.close();