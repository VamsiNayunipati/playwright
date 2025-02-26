## Step-by-Step Guide to Install and Run Playwright on Windows

### Step 1: Install Prerequisites
Before installing Playwright, ensure you have the following installed on your machine:

#### Node.js
Playwright requires Node.js (version 12 or higher).

Download and install Node.js from the official website: [Node.js](https://nodejs.org).

Verify the installation by running the following commands in Command Prompt or PowerShell:

```
node -v
npm -v
```

This should display the installed versions of Node.js and npm.

#### Visual Studio Code (Optional but Recommended)
Download and install Visual Studio Code (VS Code) from [VS Code](https://code.visualstudio.com).

VS Code is a lightweight and powerful code editor that works well with Playwright.

### Step 2: Install Playwright
Open Command Prompt or PowerShell.

Create a new directory for your Playwright project:

```
mkdir playwright-demo
cd playwright-demo
```

Initialize a new Node.js project:

```
npm init -y
```

This creates a `package.json` file in your project directory.

Install Playwright:

```
npm install playwright
```

This installs Playwright and its dependencies.

### Step 3: Write a Test Script
Open your project directory in VS Code:

```
code .
```

Create a new file in the project directory, e.g., `example.spec.js`.

Add the following Playwright test script to the file:

```
const { test, expect } = require('@playwright/test');

test('Example Test', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle('Example Domain');
  await page.screenshot({ path: 'example.png' });
  console.log('Test completed successfully!');
});
```

### Step 4: Run the Test
In the terminal (Command Prompt or PowerShell), run the test using the following command:

```
npx playwright test
```

This will execute the test script in headless mode (without opening the browser UI).

To run the test in headful mode (with the browser UI visible), use:

```
npx playwright test --headed
```

To run the test in a specific browser (e.g., Chromium), use:

```
npx playwright test --project=chromium
```

After the test runs, you’ll see the results in the terminal. The screenshot (`example.png`) will be saved in your project directory.

### Step 5: View Test Reports
Playwright automatically generates test reports. To view them:

Run the following command:

```
npx playwright show-report
```

This will open an HTML report in your default browser, showing detailed test results, screenshots, and logs.

### Step 6: Install Playwright Browsers (Optional)
Playwright downloads the required browsers (Chromium, Firefox, WebKit) automatically during installation. If you need to reinstall them, run:

```
npx playwright install
```

### Step 7: Configure Playwright (Optional)
You can configure Playwright by creating a `playwright.config.js` file. Run the following command to generate a default configuration file:

```
npx playwright init
```

This file allows you to customize settings like browser options, test directories, and more.
