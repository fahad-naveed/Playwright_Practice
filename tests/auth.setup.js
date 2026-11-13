import {test as setup , expect} from '@playwright/test';
import LoginPage from '../pages/loginPage';
import assertions from '../testdata/assertionsData.json'
import path from 'node:path';

const authFile = path.resolve('auth.json');


setup ('setup', async({page})=>{

    const Login = new LoginPage(page);
    await page.goto(process.env.BASE_URL);
    await Login.login(process.env.APP_USERNAME,process.env.APP_PASSWORD);

    await expect(page).toHaveURL(assertions.assertions[0].search_hotel_url);
    await page.waitForURL(assertions.assertions[0].search_hotel_url);
    await page.context().storageState({ path: authFile });

}
);
