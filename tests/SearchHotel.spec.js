import {test, expect} from '../fixtures/testSetup';
import { attachStepScreenshot } from '../utilities/screenshot';

import searchHotelData from '../testdata/searchHotelData.json';
import assertionsData from '../testdata/assertionsData.json';
import SearchHotelPage from '../pages/searchHotelPage';
import LoginPage from '../pages/loginPage';
import LogoutPage from '../pages/logoutPage';

let searchHotel;

test.beforeEach(async ({ page }) => {
    searchHotel = new SearchHotelPage(page);
    await page.goto(process.env.BASE_URL);
    const login = new LoginPage(page);
    await login.login(process.env.USERNAME, process.env.PASSWORD);
    await page.goto(assertionsData.assertions[0].search_hotel_url);
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

test('Search Hotel', async ({ page }) => {
    const data = searchHotelData.SearchHotels[0];

    await searchHotel.searchHotel(
        data.location,
        data.hotels,
        data.room_type,
        data.room_nos,
        data.datepick_in,
        data.datepick_out,
        data.adult_room,
        data.child_room
    );
     
    await test.step('Verify Search Hotel Page URL', async () => {
    await expect(page).toHaveURL(assertionsData.assertions[0].select_hotel_url, {timeout: 60000
    });
    await attachStepScreenshot(page, 'Search Page Loaded Successfully');
});
});

test.describe('Search Hotel - Negative', () => {
 
    test(`No Location Selected`, async ({ page }) => {
        const data = searchHotelData.location[0];
        await searchHotel.searchHotel(
        data.location,
        data.hotels,
        data.room_type,
        data.room_nos,
        data.datepick_in,
        data.datepick_out,
        data.adult_room,
        data.child_room
    );
        await test.step('Verify required location validation', async () => {
            await expect(searchHotel.location_error).toBeVisible();
            await expect(searchHotel.location_error).toHaveText(assertionsData.assertions[0].location_error);
        });
        
    });
 

test(`No Number of Rooms Seleted`, async ({ page }) => {
    const data = searchHotelData.room_nos[0];
    await searchHotel.searchHotel(
        data.location,
        data.hotels,
        data.room_type,
        data.room_nos,
        data.datepick_in,
        data.datepick_out,
        data.adult_room,
        data.child_room
    );
    await test.step('Verify required room-count validation', async () => {
        await expect(searchHotel.room_nos_error).toBeVisible();
        await expect(searchHotel.room_nos_error).toHaveText(assertionsData.assertions[0].room_nos_error);
        await attachStepScreenshot(page, 'Error Message');
    });
});
 
 
test(`No Check In Date`, async ({ page }) => {
    const data = searchHotelData.checkin[0];
    await searchHotel.searchHotel(
        data.location,
        data.hotels,
        data.room_type,
        data.room_nos,
        data.datepick_in,
        data.datepick_out,
        data.adult_room,
        data.child_room
    );
    await test.step('Verify required check-in-date validation', async () => {
        await expect(searchHotel.checkin_error).toBeVisible();
        await expect(searchHotel.checkin_error).toHaveText(assertionsData.assertions[0].checkin_error);
        await attachStepScreenshot(page, 'Error Message');
    });
});
 
test(`No Check Out Date`, async ({ page }) => {
    const data = searchHotelData.checkout[0];
    await searchHotel.searchHotel(
        data.location,
        data.hotels,
        data.room_type,
        data.room_nos,
        data.datepick_in,
        data.datepick_out,
        data.adult_room,
        data.child_room
    );
    await test.step('Verify required check-out-date validation', async () => {
        await expect(searchHotel.checkout_error).toBeVisible();
        await expect(searchHotel.checkout_error).toHaveText(assertionsData.assertions[0].checkout_error);
        await attachStepScreenshot(page, 'Error Message');
    });
});
 
test(`No Adults per Room Selected`, async ({ page }) => {
    const data = searchHotelData.adult_room[0];
    await searchHotel.searchHotel(
        data.location,
        data.hotels,
        data.room_type,
        data.room_nos,
        data.datepick_in,
        data.datepick_out,
        data.adult_room,
        data.child_room
    );
    await test.step('Verify required adults-per-room validation', async () => {
        await expect(searchHotel.adult_room_error).toBeVisible();
        await expect(searchHotel.adult_room_error).toHaveText(assertionsData.assertions[0].adult_room_error);
        await attachStepScreenshot(page, 'Error Message');
    });
});
});
