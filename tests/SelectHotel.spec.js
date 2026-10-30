import {test, expect} from '../fixtures/testSetup';
import { attachStepScreenshot } from '../utilities/screenshot';

import searchHotelData from '../testdata/searchHotelData.json';
import assertionsData from '../testdata/assertionsData.json';

import SearchHotelPage from '../pages/searchHotelPage';
import SelectHotelPage from '../pages/SelectHotelPage';
import LoginPage from '../pages/loginPage';
import LogoutPage from '../pages/logoutPage';

test.setTimeout(60000);

test.describe('Select Hotel', () => {

    let searchHotel;
    let selectHotel;

    test.beforeEach(async ({ page }) => {

        searchHotel = new SearchHotelPage(page);
        selectHotel = new SelectHotelPage(page);
        const search_Hotel = searchHotelData.SearchHotels[0];
        const assertions = assertionsData.assertions[0];

        await page.goto(process.env.BASE_URL);
        const login = new LoginPage(page);
        await login.login(process.env.USERNAME, process.env.PASSWORD);
        await page.goto(assertions.search_hotel_url);

        await searchHotel.searchHotel(
            search_Hotel.location,
            search_Hotel.hotels,
            search_Hotel.room_type,
            search_Hotel.room_nos,
            search_Hotel.datepick_in,
            search_Hotel.datepick_out,
            search_Hotel.adult_room,
            search_Hotel.child_room
        );

        await test.step('Verify Select Hotel page is loaded', async () => {
            await expect(page).toHaveURL(assertions.select_hotel_url, { timeout: 60000 });
        });
        await attachStepScreenshot(page, 'Select Hotel Page Loaded');
    });

test.afterEach(async ({ page }) => {
    try {
      const logout = new LogoutPage(page);
      if (await logout.logoutLink.isVisible({ timeout: 2000 })) {
        await logout.gotoLogoutPage();
      }
    } catch (error) {
    }
  });

    test('Select Hotel', async ({ page }) => {

        const assertions = assertionsData.assertions[0];

        await selectHotel.selectHotel();

        await test.step('Verify Book Hotel page is loaded', async () => {
            await expect(page).toHaveURL(assertions.book_hotel_url, { timeout: 60000 });
            await attachStepScreenshot(page, 'Book Hotel Page Loaded');
        });
    });
});
