import { test } from '../fixtures/testSetup.js';
import { attachStepScreenshot } from '../utilities/screenshot.js';
class LoginPage {
  constructor(page) {
   this.page = page;
    
this.username = page.locator('#username');
this.password = page.locator('#password');
this.loginButton = page.locator('#login');
this.authError = page.locator('.auth_error');        
this.usernameError = page.locator('#username_span'); 
this.passwordError = page.locator('#password_span'); 
}

async login(username, password) {
  await test.step('After URL open', async () => {
  await attachStepScreenshot(this.page, '01 - After URL open');
});
await test.step('Enter username', async () => {
  await this.username.fill(username);
  await attachStepScreenshot(this.page, '02 - After username');
});
await test.step('Enter password', async () => {
  await this.password.fill(password);
  await attachStepScreenshot(this.page, '03 - After password');
});
await test.step('Click Login', async () => {
  await this.loginButton.click();
  await attachStepScreenshot(this.page, '04 - After login click');
});
}
}
export default LoginPage;




// import { test } from '@playwright/test';
// class LoginPage {
//     constructor(page) {
//      this.page = page;
//      this.username = page.locator('#username');
//      this.password = page.locator('#password');
//      this.loginButton = page.locator('#login');
//      this.error_msg = page.locator('.auth_error');
//     }

//     async attachScreenshot(name)
//     {
//        await test.info().attach(name, {
//         body: await this.page.screenshot(),
//          contentType:'image/png',
//        });

//     }
//     async goto() 
//     {
//      await this.page.goto('https://adactinhotelapp.com/');
//      await this.attachScreenshot('01 - Login page opened');
//     }

//     async login(username, password) 
//     {
//      await this.username.fill(username);
//      await this.attachScreenshot('02 - After entering username');
//      await this.password.fill(password);
//      await this.attachScreenshot('03 - After entering password')
//      await this.loginButton.click();
//      await this.attachScreenshot('04 - After clicking Login');

//     }
// }
// export default LoginPage;