## Playwright
Playwright is a powerful and modern open-source framework for automating web browsers, developed by Microsoft. It supports multiple browsers (Chromium, Firefox, and WebKit) and provides a unified API to write reliable and efficient automation tests.

Here are some basic testing commands using Playwright, written in  /TypeScript.

### 1. Launching a Browser and Navigating to a Page

``` 
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
``` 
await page.click('button#submit');
```

#### Filling a Text Input
``` 
await page.fill('input#username', 'testuser');
```

#### Typing in a Field
``` 
await page.type('input#password', 'password123');
```

#### Selecting an Option from a Dropdown
``` 
await page.selectOption('select#country', 'USA');
```

#### Checking a Checkbox
``` 
await page.check('input#agree');
```

### 3. Assertions

#### Checking Page URL
``` 
await expect(page).toHaveURL('https://example.com/dashboard');
```

#### Checking Element Visibility
``` 
await expect(page.locator('h1')).toBeVisible();
```

#### Checking Text Content
``` 
await expect(page.locator('h1')).toHaveText('Welcome');
```

#### Checking Element Attribute
``` 
await expect(page.locator('img#logo')).toHaveAttribute('src', '/logo.png'); 
```

### 4. Waiting for Elements

#### Wait for an Element to Be Visible
``` 
await page.waitForSelector('div#loading', { state: 'hidden' }); 
```

#### Wait for Navigation
``` 
await Promise.all([
  page.waitForNavigation(),
  page.click('a#next-page') 
]);
```

### 5. Handling Alerts and Dialogs

#### Accepting an Alert
``` 
page.on('dialog', async dialog => {
  await dialog.accept();
});
await page.click('button#trigger-alert');
```

#### Dismissing a Dialog
``` 
page.on('dialog', async dialog => {
  await dialog.dismiss();
});
```

### 6. Taking Screenshots
``` 
await page.screenshot({ path: 'screenshot.png' });
await page.locator('div#header').screenshot({ path: 'header.png' }); 
```

### 7. Handling Frames and Iframes

#### Switching to an Iframe
``` 
const frame = page.frameLocator('iframe#my-frame');
await frame.locator('button#submit').click();
```

### 8. Keyboard and Mouse Actions

#### Typing a Keyboard Key
``` 
await page.keyboard.press('Enter');
```

#### Hovering Over an Element
``` 
await page.locator('button#menu').hover();
```

#### Dragging and Dropping
``` 
await page.dragAndDrop('div#source', 'div#target');
```

### 9. Handling Multiple Tabs or Windows

#### Opening a New Tab
``` 
const [newPage] = await Promise.all([
  page.waitForEvent('popup'),
  page.click('a#open-tab')
]);
await newPage.goto('https://example.com/new-tab');
```

### 10. Cleaning Up

#### Closing the Browser
``` 
await browser.close();