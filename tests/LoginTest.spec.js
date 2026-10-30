import {test, expect} from '../fixtures/testSetup';
import { attachStepScreenshot } from '../utilities/screenshot';

import loginData from '../testdata/loginData.json';
import assertions from '../testdata/assertionsData.json';
import LoginPage from '../pages/loginPage'; 
import logout from '../pages/logoutPage';

let login;

test.beforeEach(async ({ page }) => {
    await page.goto(process.env.BASE_URL);
    login = new LoginPage(page);
});

test.afterEach(async ({ page }) => {
    await logout(page);
});



test.describe('Valid Users Login', () => {
   loginData.validUser.forEach((data) => {
  
    test(`Login Test for ${data.username}`, async ({ page }) => {
    
      await login.login(data.username, data.password);
      await test.step('Verify successful login reaches Search Hotel', async () => {
        await expect(page).toHaveURL(assertions.assertions[0].search_hotel_url, { timeout: 60000 });
        await attachStepScreenshot(page, 'Search Page Loaded Successfully');
      });
  });
});
});

test.describe('Negative - wrong username', () => {
      test(`Wrong username`, async ({ page }) => {
        const data = loginData.wrongUser[0];
        await login.login(data.username, data.password);
        await test.step('Verify invalid-username error', async () => {
          await expect(login.authError).toContainText(assertions.assertions[0].error_msg);
          await attachStepScreenshot(page, 'Wrong username error shown');
        });
      });
    });
  
 
  test.describe('Negative - wrong password', () => {
      test(`Wrong password`, async ({ page }) => {
        const data = loginData.wrongPassword[0];
        await login.login(data.username, data.password);
        await test.step('Verify invalid-password error', async () => {
          await expect(login.authError).toContainText(assertions.assertions[0].error_msg);
          await attachStepScreenshot(page, 'Error Message Shown');
        });
      });
    });
 
  test.describe('Negative - empty username', () => {
      test(`Empty username`, async ({ page }) => {
        const data = loginData.emptyUsername[0];
        await login.login(data.username, data.password);
        await test.step('Verify required-username validation', async () => {
          await expect(login.usernameError).toHaveText(assertions.assertions[0].username_required_msg);
          await attachStepScreenshot(page, 'Empty username validation shown');
        });
      });
    });
 
  test.describe('Negative - empty password', () => {
      test(`Empty password`, async ({ page }) => {
        const data = loginData.emptyPassword[0];
        await login.login(data.username, data.password);
        await test.step('Verify required-password validation', async () => {
          await expect(login.passwordError).toHaveText(assertions.assertions[0].password_required_msg);
          await attachStepScreenshot(page, 'Empty password validation shown');
        });
      });
    });
 

 