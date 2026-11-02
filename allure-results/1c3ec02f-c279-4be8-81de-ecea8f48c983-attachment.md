# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: BookHotel.spec.js >> Book Hotel >> Book Hotel
- Location: tests\BookHotel.spec.js:65:6

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://adactinhotelapp.com/BookingConfirm.php"
Received: "https://adactinhotelapp.com/Logout.php"

Call log:
  - Expect "toHaveURL" with timeout 150000ms
    7 × locator resolved to <html xmlns="http://www.w3.org/1999/xhtml">…</html>
      - unexpected value "https://adactinhotelapp.com/BookHotel.php"
    - waiting for "https://adactinhotelapp.com/Logout.php" navigation to finish...
    - navigated to "https://adactinhotelapp.com/Logout.php"
    - locator resolved to <html xmlns="http://www.w3.org/1999/xhtml">…</html>
    - unexpected value "https://adactinhotelapp.com/Logout.php"
  - Test timeout of 30000ms exceeded.

```

```yaml
- table:
  - rowgroup:
    - 'row "AdactIn Group Adactin Group: Hotel Reservation System"':
      - cell "AdactIn Group":
        - img "AdactIn Group"
      - 'cell "Adactin Group: Hotel Reservation System"':
        - 'img "Adactin Group: Hotel Reservation System"'
    - row:
      - cell
- table:
  - rowgroup:
    - row "You have successfully logged out. Click here to login again Adactin Hotel Mobile App DOWNLOAD the Hotel Mobile App and extend your experience. Click to know more about how to get the app on Android or IOS. HotelApp Web Services Access Hotel App SOAP and Rest Services to learn web services testing. Click to know more. Sample TestCases DOWNLOAD a complete set of readymade sample TEST CASES for this application. Enjoy automation! Known Defects DOWNLOAD list of known defects for this application. Book on Automation About Adactin Get solutions for all your testing needs. Visit www.adactin.com today!":
      - cell "You have successfully logged out. Click here to login again":
        - table:
          - rowgroup:
            - row "You have successfully logged out. Click here to login again":
              - cell "You have successfully logged out. Click here to login again":
                - text: You have successfully logged out.
                - link "Click here to login again":
                  - /url: index.php
      - cell "Adactin Hotel Mobile App DOWNLOAD the Hotel Mobile App and extend your experience. Click to know more about how to get the app on Android or IOS. HotelApp Web Services Access Hotel App SOAP and Rest Services to learn web services testing. Click to know more. Sample TestCases DOWNLOAD a complete set of readymade sample TEST CASES for this application. Enjoy automation! Known Defects DOWNLOAD list of known defects for this application. Book on Automation About Adactin Get solutions for all your testing needs. Visit www.adactin.com today!":
        - table:
          - rowgroup:
            - row "Adactin Hotel Mobile App DOWNLOAD the Hotel Mobile App and extend your experience. Click to know more about how to get the app on Android or IOS.":
              - cell "Adactin Hotel Mobile App DOWNLOAD the Hotel Mobile App and extend your experience. Click to know more about how to get the app on Android or IOS.":
                - heading "Adactin Hotel Mobile App" [level=4]
                - link "DOWNLOAD":
                  - /url: https://adactinhotelapp.com/resources/AdactinHotelApp_SetupGuide.pdf
                - text: the Hotel Mobile App and extend your experience. Click to know more about how to get the app on Android or IOS.
            - row "HotelApp Web Services Access Hotel App SOAP and Rest Services to learn web services testing. Click to know more.":
              - cell "HotelApp Web Services Access Hotel App SOAP and Rest Services to learn web services testing. Click to know more.":
                - heading "HotelApp Web Services" [level=4]
                - text: Access Hotel App SOAP and Rest Services to learn web services testing.
                - link "Click":
                  - /url: https://adactinhotelapp.com/HotelAdactinWebServices/
                - text: to know more.
            - row "Sample TestCases DOWNLOAD a complete set of readymade sample TEST CASES for this application. Enjoy automation!":
              - cell "Sample TestCases DOWNLOAD a complete set of readymade sample TEST CASES for this application. Enjoy automation!":
                - heading "Sample TestCases" [level=4]
                - link "DOWNLOAD":
                  - /url: http://adactinhotelapp.com/resources/Sample-TestCases_HotelApplication.pdf
                - text: a complete set of readymade sample TEST CASES for this application. Enjoy automation!
            - row "Known Defects DOWNLOAD list of known defects for this application.":
              - cell "Known Defects DOWNLOAD list of known defects for this application.":
                - heading "Known Defects" [level=4]
                - link "DOWNLOAD":
                  - /url: http://adactinhotelapp.com/resources/KnownDefects_HotelApp.pdf
                - text: list of known defects for this application.
            - row "Book on Automation":
              - cell "Book on Automation":
                - heading "Book on Automation" [level=4]
                - iframe
            - row "About Adactin Get solutions for all your testing needs. Visit www.adactin.com today!":
              - cell "About Adactin Get solutions for all your testing needs. Visit www.adactin.com today!":
                - heading "About Adactin" [level=4]
                - text: Get solutions for all your testing needs. Visit
                - link "www.adactin.com":
                  - /url: http://www.adactin.com
                - text: today!
- table:
  - rowgroup:
    - row:
      - cell
    - row "© 2026 - Adactin.com. All Rights Reserved. Adactin Group Pty. Ltd.":
      - cell "© 2026 - Adactin.com. All Rights Reserved. Adactin Group Pty. Ltd.":
        - text: © 2026 -
        - link "Adactin.com":
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
  18  | test.beforeEach(async ({ page }) => {
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
> 81  |             await expect(page).toHaveURL(assertionsData.assertions[0]
      |                                ^ Error: expect(page).toHaveURL(expected) failed
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
  119 |         });
  120 |     });
  121 | 
  122 |     test('Empty Billing Address', async ({ page }) => {
  123 |         const data = bookHotelData.negativeTests[2];
  124 | 
  125 |         await bookHotel.bookHotel(
  126 |             data.first_name, data.last_name, data.address,
  127 |             data.cc_num, data.cc_type, data.cc_exp_month,
  128 |             data.cc_exp_year, data.cc_cvv
  129 |         );
  130 | 
  131 |         await test.step('Verify required billing-address validation', async () => {
  132 |             await expect(bookHotel.address_error)
  133 |                 .toHaveText(assertionsData.assertions[0].address_error);
  134 |             await attachStepScreenshot(page, 'Empty Billing Address Error');
  135 |         });
  136 |     });
  137 | 
  138 |     test('Empty Credit Card Number', async ({ page }) => {
  139 |         const data = bookHotelData.negativeTests[3];
  140 | 
  141 |         await bookHotel.bookHotel(
  142 |             data.first_name, data.last_name, data.address,
  143 |             data.cc_num, data.cc_type, data.cc_exp_month,
  144 |             data.cc_exp_year, data.cc_cvv
  145 |         );
  146 | 
  147 |         await test.step('Verify required credit-card-number validation', async () => {
  148 |             await expect(bookHotel.cc_num_error)
  149 |                 .toHaveText(assertionsData.assertions[0].cc_num_error);
  150 |             await attachStepScreenshot(page, 'Empty Credit Card Number Error');
  151 |         });
  152 |     });
  153 | 
  154 |     test('Credit Card Type Not Selected', async ({ page }) => {
  155 |         const data = bookHotelData.negativeTests[4];
  156 | 
  157 |         await bookHotel.bookHotel(
  158 |             data.first_name, data.last_name, data.address,
  159 |             data.cc_num, data.cc_type, data.cc_exp_month,
  160 |             data.cc_exp_year, data.cc_cvv
  161 |         );
  162 | 
  163 |         await test.step('Verify required credit-card-type validation', async () => {
  164 |             await expect(bookHotel.cc_type_error)
  165 |                 .toHaveText(assertionsData.assertions[0].cc_type_error);
  166 |             await attachStepScreenshot(page, 'Credit Card Type Error');
  167 |         });
  168 |     });
  169 | 
  170 |     test('Expiry Month Not Selected', async ({ page }) => {
  171 |         const data = bookHotelData.negativeTests[5];
  172 | 
  173 |         await bookHotel.bookHotel(
  174 |             data.first_name, data.last_name, data.address,
  175 |             data.cc_num, data.cc_type, data.cc_exp_month,
  176 |             data.cc_exp_year, data.cc_cvv
  177 |         );
  178 | 
  179 |         await test.step('Verify required expiry-month validation', async () => {
  180 |             await expect(bookHotel.cc_exp_month_error)
  181 |                 .toHaveText(assertionsData.assertions[0].cc_exp_month_error);
```