import {test, expect} from '../fixtures/testSetup';
import { attachStepScreenshot } from '../utilities/screenshot';

import searchHotelData from '../testdata/searchHotelData.json';
import bookHotelData from '../testdata/bookHotelData.json';
import assertionsData from '../testdata/assertionsData.json';

import SearchHotelPage from '../pages/searchHotelPage';
import SelectHotelPage from '../pages/SelectHotelPage';
import BookHotelPage from '../pages/bookHotelPage';
import BookingConfirmationPage from '../pages/bookingConfirmationPage';
import LoginPage from '../pages/loginPage';
import LogoutPage from '../pages/logoutPage';

test.setTimeout(180000);

test.describe('Booking Confirmation', () => {

    let searchHotel;
    let selectHotel;
    let bookHotel;
    let bookingConfirmation;

    test.beforeEach(async ({ page }) => {

        searchHotel = new SearchHotelPage(page);
        selectHotel = new SelectHotelPage(page);
        bookHotel = new BookHotelPage(page);
        bookingConfirmation = new BookingConfirmationPage(page);

        const search_Hotel = searchHotelData.SearchHotels[0];
        const book_Hotel = bookHotelData.bookHotel[0];
        const assertions = assertionsData.assertions[0];

        await page.goto(process.env.BASE_URL);
        const login = new LoginPage(page);
        await login.login(process.env.USERNAME, process.env.PASSWORD);
        await page.goto(assertions.search_hotel_url);
        await attachStepScreenshot(page, 'Search Hotel Page Loaded');

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
            await expect(page).toHaveURL(
                assertions.select_hotel_url,
                { timeout: 60000 }
            );
        });

        await attachStepScreenshot(page, 'Select Hotel Page Loaded');

        await selectHotel.selectHotel();

        await test.step('Verify Book Hotel page is loaded', async () => {
            await expect(page).toHaveURL(
                assertions.book_hotel_url,
                { timeout: 60000 }
            );
        });

        await attachStepScreenshot(page, 'Book Hotel Page Loaded');

        await bookHotel.bookHotel(
            book_Hotel.first_name,
            book_Hotel.last_name,
            book_Hotel.address,
            book_Hotel.cc_num,
            book_Hotel.cc_type,
            book_Hotel.cc_exp_month,
            book_Hotel.cc_exp_year,
            book_Hotel.cc_cvv
        );

        await test.step('Verify booking confirmation page is loaded', async () => {
            await expect(page).toHaveURL(
                assertions.booking_confirm_url,
                { timeout: 120000 }
            );
        });

        await attachStepScreenshot(page, 'Booking Confirmation Page Loaded');
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

test('Booking Confirmation - Navigate to My Itinerary', async ({ page }) => {

        const assertions = assertionsData.assertions[0];

        await bookingConfirmation.myItineraryButton();

        await test.step('Verify My Itinerary page is loaded', async () => {
            await expect(page).toHaveURL(assertions.my_itinerary_url, { timeout: 120000 });
            await attachStepScreenshot(page, 'My Itinerary Page Loaded');
        });
    });

});
