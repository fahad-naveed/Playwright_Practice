# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: BookHotel.spec.js >> Book Hotel - Negative Tests >> Empty CVV Number
- Location: tests\BookHotel.spec.js:202:9

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

# Page snapshot

```yaml
- generic [active] [ref=f10e1]:
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
        - cell [ref=f10e14]:
          - table [ref=f10e15]:
            - rowgroup [ref=f10e16]:
              - row [ref=f10e17]:
                - cell [ref=f10e18]:
                  - text: You have successfully logged out.
                  - link "Click here to login again" [ref=f10e19] [cursor=pointer]:
                    - /url: index.php
        - cell [ref=f10e20]:
          - table [ref=f10e21]:
            - rowgroup [ref=f10e22]:
              - row [ref=f10e23]:
                - cell [ref=f10e24]:
                  - heading "Adactin Hotel Mobile App" [level=4] [ref=f10e25]
                  - link "DOWNLOAD" [ref=f10e26] [cursor=pointer]:
                    - /url: https://adactinhotelapp.com/resources/AdactinHotelApp_SetupGuide.pdf
                  - text: the Hotel Mobile App and extend your experience. Click to know more about how to get the app on Android or IOS.
              - row [ref=f10e27]:
                - cell [ref=f10e28]:
                  - heading "HotelApp Web Services" [level=4] [ref=f10e29]
                  - text: Access Hotel App SOAP and Rest Services to learn web services testing.
                  - link "Click" [ref=f10e30] [cursor=pointer]:
                    - /url: https://adactinhotelapp.com/HotelAdactinWebServices/
                  - text: to know more.
              - row [ref=f10e31]:
                - cell [ref=f10e32]:
                  - heading "Sample TestCases" [level=4] [ref=f10e33]
                  - link "DOWNLOAD" [ref=f10e34] [cursor=pointer]:
                    - /url: http://adactinhotelapp.com/resources/Sample-TestCases_HotelApplication.pdf
                  - text: a complete set of readymade sample TEST CASES for this application. Enjoy automation!
              - row [ref=f10e35]:
                - cell [ref=f10e36]:
                  - heading "Known Defects" [level=4] [ref=f10e37]
                  - link "DOWNLOAD" [ref=f10e38] [cursor=pointer]:
                    - /url: http://adactinhotelapp.com/resources/KnownDefects_HotelApp.pdf
                  - text: list of known defects for this application.
              - row [ref=f10e39]:
                - cell [ref=f10e40]:
                  - heading "Book on Automation" [level=4] [ref=f10e41]
                  - iframe [ref=f10e42]
              - row [ref=f10e43]:
                - cell [ref=f10e44]:
                  - heading "About Adactin" [level=4] [ref=f10e45]
                  - text: Get solutions for all your testing needs. Visit
                  - link "www.adactin.com" [ref=f10e46] [cursor=pointer]:
                    - /url: http://www.adactin.com
                  - text: today!
  - table [ref=f10e47]:
    - rowgroup [ref=f10e48]:
      - row [ref=f10e49]:
        - cell [ref=f10e50]
      - row [ref=f10e51]:
        - cell [ref=f10e52]:
          - text: © 2026 -
          - link "Adactin.com" [ref=f10e53] [cursor=pointer]:
            - /url: http://www.adactin.com
          - text: . All Rights Reserved. Adactin Group Pty. Ltd.
```

# Test source

```ts
  1   | import {test, expect} from '../fixtures/testSetup';
  2   | import { attachStepScreenshot } from '../utilities/screenshot';
  3   | 
  4   | import searchHotelData from '../testdata/searchHotelData.json';
  5   | import bookHotelData from '../testdata/bookHotelData.json';
  6   | import assertionsData from '../testdata/assertionsData.json';
  7   | 
  8   | import SearchHotelPage from '../pages/searchHotelPage';
  9   | import SelectHotelPage from '../pages/selectHotelPage';import BookHotelPage from '../pages/bookHotelPage';
  10  | import LoginPage from '../pages/loginPage';
  11  | import LogoutPage from '../pages/logoutPage';
  12  | 
  13  | let login;
  14  | let bookHotel;
  15  | let selectHotel;
  16  | let searchHotel;
  17  |     
> 18  | test.beforeEach(async ({ page }) => {
      |      ^ Test timeout of 30000ms exceeded while running "beforeEach" hook.
  19  |         login = new LoginPage(page);
  20  |         searchHotel = new SearchHotelPage(page);
  21  |         selectHotel = new SelectHotelPage(page);
  22  |         bookHotel = new BookHotelPage(page);
  23  | 
  24  |     const data = searchHotelData.SearchHotels[0];
  25  |         const assertions = assertionsData.assertions[0];
  26  | 
  27  |     await page.goto(process.env.BASE_URL);
  28  |     
  29  |     await login.login(process.env.USERNAME, process.env.PASSWORD);
  30  |     await page.goto(assertions.search_hotel_url);
  31  |     await searchHotel.searchHotel(
  32  |             data.location, 
  33  |             data.hotels, 
  34  |             data.room_type, 
  35  |             data.room_nos, 
  36  |             data.datepick_in, 
  37  |             data.datepick_out, 
  38  |             data.adult_room, 
  39  |             data.child_room
  40  |         );
  41  | 
  42  |         await test.step('Verify Select Hotel page is loaded', async () => {
  43  |             await expect(page).toHaveURL(assertions.select_hotel_url, { timeout: 60000 });
  44  |         });
  45  | 
  46  |         await selectHotel.selectHotel();
  47  |         await test.step('Verify Book Hotel page is loaded', async () => {
  48  |             await expect(page).toHaveURL(assertions.book_hotel_url, { timeout: 60000 });
  49  |         });
  50  |     });
  51  | 
  52  |     test.afterEach(async ({ page }) => {
  53  |     try {
  54  |       const logout = new LogoutPage(page);
  55  |       if (await logout.logoutLink.isVisible({ timeout: 2000 })) {
  56  |         await logout.gotoLogoutPage();
  57  |       }
  58  |     } catch (error) {
  59  |     }
  60  |   });
  61  |  
  62  |  
  63  | 
  64  | test.describe('Book Hotel', () => {
  65  |  test('Book Hotel', async ({ page }) => {
  66  |         
  67  |         const data = bookHotelData.bookHotel[0];
  68  | 
  69  |         await bookHotel.bookHotel(
  70  |             data.first_name, 
  71  |             data.last_name, 
  72  |             data.address, 
  73  |             data.cc_num, 
  74  |             data.cc_type, 
  75  |             data.cc_exp_month, 
  76  |             data.cc_exp_year, 
  77  |             data.cc_cvv
  78  |         );
  79  | 
  80  |         await test.step('Verify booking is confirmed', async () => {
  81  |             await expect(page).toHaveURL(assertionsData.assertions[0]
  82  |                 .booking_confirm_url, { timeout: 150000 });
  83  |             await attachStepScreenshot(page, 'Booking Confirmed');
  84  |         });
  85  |     });
  86  | });
  87  | 
  88  | test.describe('Book Hotel - Negative Tests', () => {
  89  | 
  90  |     test('Empty First Name', async ({ page }) => {
  91  |         const data = bookHotelData.negativeTests[0];
  92  | 
  93  |         await bookHotel.bookHotel(
  94  |             data.first_name, data.last_name, data.address,
  95  |             data.cc_num, data.cc_type, data.cc_exp_month,
  96  |             data.cc_exp_year, data.cc_cvv
  97  |         );
  98  | 
  99  |         await test.step('Verify required first-name validation', async () => {
  100 |             await expect(bookHotel.first_name_error)
  101 |                 .toHaveText(assertionsData.assertions[0].firstname_error);
  102 |             await attachStepScreenshot(page, 'Empty First Name Error');
  103 |         });
  104 |     });
  105 | 
  106 |     test('Empty Last Name', async ({ page }) => {
  107 |         const data = bookHotelData.negativeTests[1];
  108 | 
  109 |         await bookHotel.bookHotel(
  110 |             data.first_name, data.last_name, data.address,
  111 |             data.cc_num, data.cc_type, data.cc_exp_month,
  112 |             data.cc_exp_year, data.cc_cvv
  113 |         );
  114 | 
  115 |         await test.step('Verify required last-name validation', async () => {
  116 |             await expect(bookHotel.last_name_error)
  117 |                 .toHaveText(assertionsData.assertions[0].lastname_error);
  118 |             await attachStepScreenshot(page, 'Empty Last Name Error');
```