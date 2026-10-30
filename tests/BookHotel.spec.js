import {test, expect} from '../fixtures/testSetup';
import { attachStepScreenshot } from '../utilities/screenshot';

import searchHotelData from '../testdata/searchHotelData.json';
import bookHotelData from '../testdata/bookHotelData.json';
import assertionsData from '../testdata/assertionsData.json';

import SearchHotelPage from '../pages/searchHotelPage';
import SelectHotelPage from '../pages/SelectHotelPage';
import BookHotelPage from '../pages/bookHotelPage';


test.use({ storageState: 'auth.json' });

let bookHotel;
let selectHotel;
let searchHotel;
let logout;
    
test.beforeEach(async ({ page }) => {
        searchHotel = new SearchHotelPage(page);
        selectHotel = new SelectHotelPage(page);
        bookHotel = new BookHotelPage(page);
        logout = new LogoutPage(page);

        const data = searchHotelData.SearchHotels[0];
        const assertions = assertionsData.assertions[0];

        await page.goto(assertionsData.assertions[0].search_hotel_url);
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

        await test.step('Verify Select Hotel page is loaded', async () => {
            await expect(page).toHaveURL(assertions.select_hotel_url, { timeout: 60000 });
        });

        await selectHotel.selectHotel();
        await test.step('Verify Book Hotel page is loaded', async () => {
            await expect(page).toHaveURL(assertions.book_hotel_url, { timeout: 60000 });
        });
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
 
 

test.describe('Book Hotel', () => {
 test('Book Hotel', async ({ page }) => {
        
        const data = bookHotelData.bookHotel[0];

        await bookHotel.bookHotel(
            data.first_name, 
            data.last_name, 
            data.address, 
            data.cc_num, 
            data.cc_type, 
            data.cc_exp_month, 
            data.cc_exp_year, 
            data.cc_cvv
        );

        await test.step('Verify booking is confirmed', async () => {
            await expect(page).toHaveURL(assertionsData.assertions[0]
                .booking_confirm_url, { timeout: 150000 });
            await attachStepScreenshot(page, 'Booking Confirmed');
        });
    });
});

test.describe('Book Hotel - Negative Tests', () => {

    test('Empty First Name', async ({ page }) => {
        const data = bookHotelData.negativeTests[0];

        await bookHotel.bookHotel(
            data.first_name, data.last_name, data.address,
            data.cc_num, data.cc_type, data.cc_exp_month,
            data.cc_exp_year, data.cc_cvv
        );

        await test.step('Verify required first-name validation', async () => {
            await expect(bookHotel.first_name_error)
                .toHaveText(assertionsData.assertions[0].firstname_error);
            await attachStepScreenshot(page, 'Empty First Name Error');
        });
    });

    test('Empty Last Name', async ({ page }) => {
        const data = bookHotelData.negativeTests[1];

        await bookHotel.bookHotel(
            data.first_name, data.last_name, data.address,
            data.cc_num, data.cc_type, data.cc_exp_month,
            data.cc_exp_year, data.cc_cvv
        );

        await test.step('Verify required last-name validation', async () => {
            await expect(bookHotel.last_name_error)
                .toHaveText(assertionsData.assertions[0].lastname_error);
            await attachStepScreenshot(page, 'Empty Last Name Error');
        });
    });

    test('Empty Billing Address', async ({ page }) => {
        const data = bookHotelData.negativeTests[2];

        await bookHotel.bookHotel(
            data.first_name, data.last_name, data.address,
            data.cc_num, data.cc_type, data.cc_exp_month,
            data.cc_exp_year, data.cc_cvv
        );

        await test.step('Verify required billing-address validation', async () => {
            await expect(bookHotel.address_error)
                .toHaveText(assertionsData.assertions[0].address_error);
            await attachStepScreenshot(page, 'Empty Billing Address Error');
        });
    });

    test('Empty Credit Card Number', async ({ page }) => {
        const data = bookHotelData.negativeTests[3];

        await bookHotel.bookHotel(
            data.first_name, data.last_name, data.address,
            data.cc_num, data.cc_type, data.cc_exp_month,
            data.cc_exp_year, data.cc_cvv
        );

        await test.step('Verify required credit-card-number validation', async () => {
            await expect(bookHotel.cc_num_error)
                .toHaveText(assertionsData.assertions[0].cc_num_error);
            await attachStepScreenshot(page, 'Empty Credit Card Number Error');
        });
    });

    test('Credit Card Type Not Selected', async ({ page }) => {
        const data = bookHotelData.negativeTests[4];

        await bookHotel.bookHotel(
            data.first_name, data.last_name, data.address,
            data.cc_num, data.cc_type, data.cc_exp_month,
            data.cc_exp_year, data.cc_cvv
        );

        await test.step('Verify required credit-card-type validation', async () => {
            await expect(bookHotel.cc_type_error)
                .toHaveText(assertionsData.assertions[0].cc_type_error);
            await attachStepScreenshot(page, 'Credit Card Type Error');
        });
    });

    test('Expiry Month Not Selected', async ({ page }) => {
        const data = bookHotelData.negativeTests[5];

        await bookHotel.bookHotel(
            data.first_name, data.last_name, data.address,
            data.cc_num, data.cc_type, data.cc_exp_month,
            data.cc_exp_year, data.cc_cvv
        );

        await test.step('Verify required expiry-month validation', async () => {
            await expect(bookHotel.cc_exp_month_error)
                .toHaveText(assertionsData.assertions[0].cc_exp_month_error);
            await attachStepScreenshot(page, 'Expiry Month Error');
        });
    });

    test('Expiry Year Not Selected', async ({ page }) => {
        const data = bookHotelData.negativeTests[6];

        await bookHotel.bookHotel(
            data.first_name, data.last_name, data.address,
            data.cc_num, data.cc_type, data.cc_exp_month,
            data.cc_exp_year, data.cc_cvv
        );

        await test.step('Verify required expiry-year validation', async () => {
            await expect(bookHotel.cc_exp_year_error)
                .toHaveText(assertionsData.assertions[0].cc_exp_year_error);
            await attachStepScreenshot(page, 'Expiry Year Error');
        });
    });

    test('Empty CVV Number', async ({ page }) => {
        const data = bookHotelData.negativeTests[7];

        await bookHotel.bookHotel(
            data.first_name, data.last_name, data.address,
            data.cc_num, data.cc_type, data.cc_exp_month,
            data.cc_exp_year, data.cc_cvv
        );

        await test.step('Verify required CVV validation', async () => {
            await expect(bookHotel.cc_cvv_error)
                .toHaveText(assertionsData.assertions[0].cc_cvv_error);
            await attachStepScreenshot(page, 'Empty CVV Error');
        });
    });

});