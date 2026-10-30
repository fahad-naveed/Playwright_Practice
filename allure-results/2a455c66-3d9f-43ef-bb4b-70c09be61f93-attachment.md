# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Smoke.spec.js >> Adactin Hotel App
- Location: tests\Smoke.spec.js:42:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://adactinhotelapp.com/BookedItinerary.php"
Received: ""

```

# Page snapshot

```yaml
- generic [ref=f10e1]:
  - table [ref=f10e2]:
    - rowgroup [ref=f10e3]:
      - row [ref=f10e4]:
        - cell [ref=f10e5]:
          - img "AdactIn Group" [ref=f10e6]
        - cell [ref=f10e7]:
          - 'img "Adactin Group: Hotel Reservation System" [ref=f10e8]'
      - row [ref=f10e9]:
        - cell [ref=f10e10]
  - table [ref=f10e11]:
    - rowgroup [ref=f10e12]:
      - row [ref=f10e13]:
        - cell "Welcome to Adactin Group of Hotels" [ref=f10e14]
        - cell [ref=f10e15]:
          - textbox [ref=f10e16]: Hello fahad123123!
          - link "Search Hotel" [ref=f10e17] [cursor=pointer]:
            - /url: SearchHotel.php
          - text: "|"
          - link "Booked Itinerary" [ref=f10e18] [cursor=pointer]:
            - /url: BookedItinerary.php
          - text: "|"
          - link "Change Password" [ref=f10e19] [cursor=pointer]:
            - /url: ChangePassword.php
          - text: "|"
          - link "Logout" [ref=f10e20] [cursor=pointer]:
            - /url: Logout.php
        - cell [ref=f10e21]:
          - table [ref=f10e22]:
            - rowgroup [ref=f10e23]:
              - row [ref=f10e24]:
                - cell [ref=f10e25]:
                  - heading "Adactin Hotel Mobile App" [level=4] [ref=f10e26]
                  - link "DOWNLOAD" [ref=f10e27] [cursor=pointer]:
                    - /url: https://adactinhotelapp.com/resources/AdactinHotelApp_SetupGuide.pdf
                  - text: the Hotel Mobile App and extend your experience. Click to know more about how to get the app on Android or IOS.
              - row [ref=f10e28]:
                - cell [ref=f10e29]:
                  - heading "HotelApp Web Services" [level=4] [ref=f10e30]
                  - text: Access Hotel App SOAP and Rest Services to learn web services testing.
                  - link "Click" [ref=f10e31] [cursor=pointer]:
                    - /url: https://adactinhotelapp.com/HotelAdactinWebServices/
                  - text: to know more.
              - row [ref=f10e32]:
                - cell [ref=f10e33]:
                  - heading "Sample TestCases" [level=4] [ref=f10e34]
                  - link "DOWNLOAD" [ref=f10e35] [cursor=pointer]:
                    - /url: http://adactinhotelapp.com/resources/Sample-TestCases_HotelApplication.pdf
                  - text: a complete set of readymade sample TEST CASES for this application. Enjoy automation!
              - row [ref=f10e36]:
                - cell [ref=f10e37]:
                  - heading "Known Defects" [level=4] [ref=f10e38]
                  - link "DOWNLOAD" [ref=f10e39] [cursor=pointer]:
                    - /url: http://adactinhotelapp.com/resources/KnownDefects_HotelApp.pdf
                  - text: list of known defects for this application.
              - row [ref=f10e40]:
                - cell [ref=f10e41]:
                  - heading "Book on Automation" [level=4] [ref=f10e42]
                  - iframe [ref=f10e43]
              - row [ref=f10e44]:
                - cell [ref=f10e45]:
                  - heading "About Adactin" [level=4] [ref=f10e46]
                  - text: Get solutions for all your testing needs. Visit
                  - link "www.adactin.com" [ref=f10e47] [cursor=pointer]:
                    - /url: http://www.adactin.com
                  - text: today!
      - row [ref=f10e48]:
        - cell [ref=f10e49]:
          - table [ref=f10e51]:
            - rowgroup [ref=f10e52]:
              - row [ref=f10e53]:
                - cell "Booking Confirmation" [ref=f10e54]
              - row [ref=f10e55]:
                - cell "Hotel Name" [ref=f10e56]
                - cell [ref=f10e57]:
                  - textbox [disabled] [ref=f10e58]: Hotel Creek
              - row [ref=f10e59]:
                - cell "Location" [ref=f10e60]
                - cell [ref=f10e61]:
                  - textbox [disabled] [ref=f10e62]: Sydney
              - row [ref=f10e63]:
                - cell "Room Type" [ref=f10e64]
                - cell [ref=f10e65]:
                  - textbox [disabled] [ref=f10e66]: Deluxe
              - row [ref=f10e67]:
                - cell "Arrival Date" [ref=f10e68]
                - cell [ref=f10e69]:
                  - textbox [disabled] [ref=f10e70]: 10/10/2023
              - row
              - row [ref=f10e71]:
                - cell "Departure Date" [ref=f10e72]
                - cell [ref=f10e73]:
                  - textbox [disabled] [ref=f10e74]: 12/10/2023
              - row [ref=f10e75]:
                - cell "Total Rooms" [ref=f10e76]
                - cell [ref=f10e77]:
                  - textbox [disabled] [ref=f10e78]: 1 Room(s)
              - row [ref=f10e79]:
                - cell "Adults Per Room" [ref=f10e80]
                - cell [ref=f10e81]:
                  - textbox [disabled] [ref=f10e82]: 2 Adult(s)
              - row [ref=f10e83]:
                - cell "Children per Room" [ref=f10e84]
                - cell [ref=f10e85]:
                  - textbox [disabled] [ref=f10e86]: 0 Children
              - row [ref=f10e87]:
                - cell "Price per Night" [ref=f10e88]
                - cell [ref=f10e89]:
                  - textbox [disabled] [ref=f10e90]: AUD $ 125
              - row [ref=f10e91]:
                - cell "Total Price" [ref=f10e92]
                - cell [ref=f10e93]:
                  - textbox [disabled] [ref=f10e94]: AUD $ 260
              - row [ref=f10e95]:
                - cell "GST" [ref=f10e96]
                - cell [ref=f10e97]:
                  - textbox [disabled] [ref=f10e98]: AUD $ 26
              - row [ref=f10e99]:
                - cell "Final Billed Price" [ref=f10e100]
                - cell [ref=f10e101]:
                  - textbox [disabled] [ref=f10e102]: AUD $ 286
              - row [ref=f10e103]:
                - cell "First Name" [ref=f10e104]
                - cell [ref=f10e105]:
                  - textbox [disabled] [ref=f10e106]: Fahad
              - row [ref=f10e107]:
                - cell "Last Name" [ref=f10e108]
                - cell [ref=f10e109]:
                  - textbox [disabled] [ref=f10e110]
              - row [ref=f10e111]:
                - cell "Billing Address" [ref=f10e112]
                - cell [ref=f10e113]:
                  - textbox [disabled] [ref=f10e114]: 123 Main St, Lahore, Pakistan
              - row [ref=f10e115]:
                - cell "Order No." [ref=f10e116]
                - cell [ref=f10e117]:
                  - textbox [disabled] [ref=f10e118]: 24QMQ23N8B
              - row [ref=f10e119]:
                - cell [ref=f10e120]
                - cell [ref=f10e121]:
                  - button "Search Hotel" [ref=f10e122]
                  - button "My Itinerary" [active] [ref=f10e123]
                  - button "Logout" [ref=f10e124]
  - table [ref=f10e125]:
    - rowgroup [ref=f10e126]:
      - row [ref=f10e127]:
        - cell [ref=f10e128]
      - row [ref=f10e129]:
        - cell [ref=f10e130]:
          - text: © 2026 -
          - link "Adactin.com" [ref=f10e131] [cursor=pointer]:
            - /url: http://www.adactin.com
          - text: . All Rights Reserved. Adactin Group Pty. Ltd.
```

# Test source

```ts
  1   | import {test, expect} from '../fixtures/testSetup.js';
  2   | import { attachStepScreenshot } from '../utilities/screenshot';
  3   | 
  4   | import loginData from '../testdata/loginData.json';
  5   | import searchHotelData from '../testdata/searchHotelData.json';
  6   | import bookHotelData from '../testdata/bookHotelData.json';
  7   | import assertionsData from '../testdata/assertionsData.json';
  8   | 
  9   | import LoginPage from '../pages/loginPage'; 
  10  | import SearchHotelPage from '../pages/searchHotelPage';
  11  | import SelectHotelPage from '../pages/SelectHotelPage';
  12  | import BookHotelPage from '../pages/bookHotelPage';
  13  | import BookingConfirmationPage from '../pages/bookingConfirmationPage';
  14  | import ItineraryPage from '../pages/ItineraryPage';
  15  | 
  16  | test.use({ storageState: { cookies: [], origins: [] } });
  17  | 
  18  | let login;
  19  | let searchHotel;
  20  | let selectHotel;
  21  | let bookHotel;
  22  | let bookingConfirmation;
  23  | let myItinerary;
  24  | let search_Hotel;
  25  | let book_Hotel;
  26  | let assertions;
  27  | 
  28  | 
  29  | test.beforeEach(async ({ page }) => {
  30  | login = new LoginPage(page);
  31  | searchHotel = new SearchHotelPage(page);
  32  | selectHotel = new SelectHotelPage(page);
  33  | bookHotel = new BookHotelPage(page);
  34  | bookingConfirmation = new BookingConfirmationPage(page);
  35  | myItinerary = new ItineraryPage(page);
  36  | 
  37  | search_Hotel = searchHotelData.SearchHotels[0];
  38  | book_Hotel = bookHotelData.bookHotel[0];
  39  | assertions = assertionsData.assertions[0];
  40  | });
  41  | 
  42  | test('Adactin Hotel App', async ({ page }) => {
  43  | 
  44  | //LOGIN
  45  | await page.goto(process.env.BASE_URL);  
  46  | await login.login(process.env.USERNAME, process.env.PASSWORD);
  47  | await test.step('Verify login reaches Search Hotel', async () => {
  48  | await expect(page).toHaveURL(assertions.search_hotel_url, { timeout: 60000 });
  49  | await attachStepScreenshot(page, 'Search Page Loaded Successfully');
  50  | });
  51  | 
  52  | 
  53  | //SEARCH HOTEL
  54  | await page.goto(assertions.search_hotel_url);
  55  | await searchHotel.searchHotel(
  56  |     search_Hotel.location, 
  57  |     search_Hotel.hotels, 
  58  |     search_Hotel.room_type, 
  59  |     search_Hotel.room_nos, 
  60  |     search_Hotel.datepick_in, 
  61  |     search_Hotel.datepick_out, 
  62  |     search_Hotel.adult_room, 
  63  |     search_Hotel.child_room);
  64  | 
  65  | await test.step('Verify Search Hotel leads to Select Hotel', async () => {
  66  | await expect(page).toHaveURL(assertions.select_hotel_url, { timeout: 60000 });
  67  | await attachStepScreenshot(page, 'Select Hotel Page Loaded');
  68  | });
  69  | 
  70  | //SELECT HOTEL
  71  | await selectHotel.selectHotel();
  72  | await test.step('Verify Select Hotel leads to Book Hotel', async () => {
  73  | await expect(page).toHaveURL(assertions.book_hotel_url, { timeout: 60000 });
  74  | await attachStepScreenshot(page, 'Book Page Loaded');
  75  | });
  76  | 
  77  | await bookHotel.bookHotel(
  78  |     book_Hotel.first_name, 
  79  |     book_Hotel.last_name, 
  80  |     book_Hotel.address, 
  81  |     book_Hotel.cc_num, 
  82  |     book_Hotel.cc_type, 
  83  |     book_Hotel.cc_exp_month, 
  84  |     book_Hotel.cc_exp_year, 
  85  |     book_Hotel.cc_cvv);
  86  | 
  87  | await test.step('Verify booking confirmation', async () => {
  88  | await expect(page).toHaveURL(assertions.booking_confirm_url, { timeout: 120000 });
  89  | await attachStepScreenshot(page, 'Booking Confirmation Page Loaded');
  90  | });
  91  | 
  92  | await bookingConfirmation.myItineraryButton();
  93  | await test.step('Verify My Itinerary page is loaded', async () => {
> 94  | await expect(page).toHaveURL(assertions.my_itinerary_url, { timeout: 500000 });
      |                    ^ Error: expect(page).toHaveURL(expected) failed
  95  | await attachStepScreenshot(page, 'Itinerary Page Loaded');
  96  | });
  97  | 
  98  | await myItinerary.logoutButton();
  99  | await test.step('Verify logout completes', async () => {
  100 | await expect(page).toHaveURL(assertions.logout_url, { timeout: 60000 });
  101 | await attachStepScreenshot(page, 'Smoke Completed Successfully');
  102 | });
  103 | });
```