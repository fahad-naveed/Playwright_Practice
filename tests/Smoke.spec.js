import {test, expect} from '../fixtures/testSetup.js';
import { attachStepScreenshot } from '../utilities/screenshot';

import loginData from '../testdata/loginData.json';
import searchHotelData from '../testdata/searchHotelData.json';
import bookHotelData from '../testdata/bookHotelData.json';
import assertionsData from '../testdata/assertionsData.json';

import LoginPage from '../pages/loginPage'; 
import SearchHotelPage from '../pages/searchHotelPage';
import SelectHotelPage from '../pages/selectHotelPage';import BookHotelPage from '../pages/bookHotelPage';
import BookingConfirmationPage from '../pages/bookingConfirmationPage';
import ItineraryPage from '../pages/ItineraryPage';

test.use({ storageState: { cookies: [], origins: [] } });

let login;
let searchHotel;
let selectHotel;
let bookHotel;
let bookingConfirmation;
let myItinerary;
let search_Hotel;
let book_Hotel;
let assertions;


test.beforeEach(async ({ page }) => {
login = new LoginPage(page);
searchHotel = new SearchHotelPage(page);
selectHotel = new SelectHotelPage(page);
bookHotel = new BookHotelPage(page);
bookingConfirmation = new BookingConfirmationPage(page);
myItinerary = new ItineraryPage(page);

search_Hotel = searchHotelData.SearchHotels[0];
book_Hotel = bookHotelData.bookHotel[0];
assertions = assertionsData.assertions[0];
});

test('Adactin Hotel App', async ({ page }) => {

//LOGIN
await page.goto(process.env.BASE_URL);  
await login.login(process.env.USERNAME, process.env.PASSWORD);
await test.step('Verify login reaches Search Hotel', async () => {
await expect(page).toHaveURL(assertions.search_hotel_url, { timeout: 60000 });
await attachStepScreenshot(page, 'Search Page Loaded Successfully');
});


//SEARCH HOTEL
await page.goto(assertions.search_hotel_url);
await searchHotel.searchHotel(
    search_Hotel.location, 
    search_Hotel.hotels, 
    search_Hotel.room_type, 
    search_Hotel.room_nos, 
    search_Hotel.datepick_in, 
    search_Hotel.datepick_out, 
    search_Hotel.adult_room, 
    search_Hotel.child_room);

await test.step('Verify Search Hotel leads to Select Hotel', async () => {
await expect(page).toHaveURL(assertions.select_hotel_url, { timeout: 60000 });
await attachStepScreenshot(page, 'Select Hotel Page Loaded');
});

//SELECT HOTEL
await selectHotel.selectHotel();
await test.step('Verify Select Hotel leads to Book Hotel', async () => {
await expect(page).toHaveURL(assertions.book_hotel_url, { timeout: 60000 });
await attachStepScreenshot(page, 'Book Page Loaded');
});

await bookHotel.bookHotel(
    book_Hotel.first_name, 
    book_Hotel.last_name, 
    book_Hotel.address, 
    book_Hotel.cc_num, 
    book_Hotel.cc_type, 
    book_Hotel.cc_exp_month, 
    book_Hotel.cc_exp_year, 
    book_Hotel.cc_cvv);

await test.step('Verify booking confirmation', async () => {
await expect(page).toHaveURL(assertions.booking_confirm_url, { timeout: 120000 });
await attachStepScreenshot(page, 'Booking Confirmation Page Loaded');
});

await bookingConfirmation.myItineraryButton();
await test.step('Verify My Itinerary page is loaded', async () => {
await expect(page).toHaveURL(assertions.my_itinerary_url, { timeout: 500000 });
await attachStepScreenshot(page, 'Itinerary Page Loaded');
});

await myItinerary.logoutButton();
await test.step('Verify logout completes', async () => {
await expect(page).toHaveURL(assertions.logout_url, { timeout: 60000 });
await attachStepScreenshot(page, 'Smoke Completed Successfully');
});
});