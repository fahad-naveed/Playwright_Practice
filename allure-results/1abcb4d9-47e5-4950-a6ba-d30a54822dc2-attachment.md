# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: BookHotel.spec.js >> Book Hotel >> Book Hotel
- Location: tests\BookHotel.spec.js:63:6

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://adactinhotelapp.com/BookingConfirm.php"
Received: "https://adactinhotelapp.com/index.php"

Call log:
  - Expect "toHaveURL" with timeout 150000ms
    9 × locator resolved to <html xmlns="http://www.w3.org/1999/xhtml">…</html>
      - unexpected value "https://adactinhotelapp.com/BookHotel.php"
    - waiting for "https://adactinhotelapp.com/BookingConfirm.php" navigation to finish...
    - navigated to "https://adactinhotelapp.com/index.php"
    - locator resolved to <html xmlns="http://www.w3.org/1999/xhtml">…</html>
    - unexpected value "https://adactinhotelapp.com/index.php"
  - 

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
    - 'row "Adactin Launches The Adactin Hotel App! Hotel Image 3 The best Free learning platform for Software Testing Now available to download for free on IOS and Android. Existing User Login - Build 1 Username Password Forgot Password? Login New User Register Here Important Note: Hotel Application has 2 builds: Build 1 Has been developed with known defects. Thus, functional test cases and automation scripts will fail on this build. Build 2 Known defects have been fixed. Thus, functional test cases and automation test scripts should pass when executed on this build. Go to Build 2 For any queries/issues please email: info@adactin.com"':
      - cell "Adactin Launches The Adactin Hotel App! Hotel Image 3 The best Free learning platform for Software Testing Now available to download for free on IOS and Android.":
        - paragraph: Adactin Launches The Adactin Hotel App!
        - table:
          - rowgroup:
            - row "Hotel Image 3":
              - cell "Hotel Image 3":
                - img "Hotel Image 3"
            - row "The best Free learning platform for Software Testing Now available to download for free on IOS and Android.":
              - cell "The best Free learning platform for Software Testing Now available to download for free on IOS and Android."
        - table:
          - rowgroup:
            - row:
              - cell:
                - link:
                  - /url: https://testflight.apple.com/join/Ai3nVPMD
                  - img
              - cell:
                - link:
                  - /url: https://play.google.com/store/apps/details?id=com.adactin.education.hotelbooking
                  - img
      - 'cell "Existing User Login - Build 1 Username Password Forgot Password? Login New User Register Here Important Note: Hotel Application has 2 builds: Build 1 Has been developed with known defects. Thus, functional test cases and automation scripts will fail on this build. Build 2 Known defects have been fixed. Thus, functional test cases and automation test scripts should pass when executed on this build. Go to Build 2 For any queries/issues please email: info@adactin.com"':
        - table:
          - rowgroup:
            - row "Existing User Login - Build 1":
              - cell "Existing User Login - Build 1"
            - row "Username":
              - cell "Username"
              - cell:
                - textbox
            - row "Password":
              - cell "Password"
              - cell:
                - textbox
            - row "Forgot Password?":
              - cell
              - cell "Forgot Password?":
                - link "Forgot Password?":
                  - /url: ForgotPassword.php
            - row:
              - cell
              - cell
            - row "Login":
              - cell
              - cell "Login":
                - button "Login"
            - row "New User Register Here":
              - cell "New User Register Here":
                - link "New User Register Here":
                  - /url: Register.php
        - table:
          - rowgroup:
            - row "Important Note:":
              - cell "Important Note:"
            - 'row "Hotel Application has 2 builds: Build 1 Has been developed with known defects. Thus, functional test cases and automation scripts will fail on this build. Build 2 Known defects have been fixed. Thus, functional test cases and automation test scripts should pass when executed on this build. Go to Build 2"':
              - 'cell "Hotel Application has 2 builds: Build 1 Has been developed with known defects. Thus, functional test cases and automation scripts will fail on this build. Build 2 Known defects have been fixed. Thus, functional test cases and automation test scripts should pass when executed on this build. Go to Build 2"':
                - text: "Hotel Application has 2 builds:"
                - list:
                  - listitem:
                    - strong: Build 1
                    - text: Has been developed with known defects. Thus, functional test cases and automation scripts will fail on this build.
                  - listitem:
                    - strong: Build 2
                    - text: Known defects have been fixed. Thus, functional test cases and automation test scripts should pass when executed on this build.
                    - link "Go to Build 2":
                      - /url: ../HotelAppBuild2
                      - strong: Go to Build 2
            - 'row "For any queries/issues please email: info@adactin.com"':
              - 'cell "For any queries/issues please email: info@adactin.com"':
                - text: "For any queries/issues please email:"
                - link "info@adactin.com":
                  - /url: mailto:info@adactin.com
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
  9   | import SelectHotelPage from '../pages/SelectHotelPage';
  10  | import BookHotelPage from '../pages/bookHotelPage';
  11  | import LogoutPage from '../pages/logoutPage';
  12  | 
  13  | 
  14  | test.use({ storageState: 'auth.json' });
  15  | 
  16  | let bookHotel;
  17  | let selectHotel;
  18  | let searchHotel;
  19  |     
  20  | test.beforeEach(async ({ page }) => {
  21  |         searchHotel = new SearchHotelPage(page);
  22  |         selectHotel = new SelectHotelPage(page);
  23  |         bookHotel = new BookHotelPage(page);
  24  | 
  25  |     const data = searchHotelData.SearchHotels[0];
  26  |         const assertions = assertionsData.assertions[0];
  27  | 
  28  |         await page.goto(assertionsData.assertions[0].search_hotel_url);
  29  |         await searchHotel.searchHotel(
  30  |             data.location, 
  31  |             data.hotels, 
  32  |             data.room_type, 
  33  |             data.room_nos, 
  34  |             data.datepick_in, 
  35  |             data.datepick_out, 
  36  |             data.adult_room, 
  37  |             data.child_room
  38  |         );
  39  | 
  40  |         await test.step('Verify Select Hotel page is loaded', async () => {
  41  |             await expect(page).toHaveURL(assertions.select_hotel_url, { timeout: 60000 });
  42  |         });
  43  | 
  44  |         await selectHotel.selectHotel();
  45  |         await test.step('Verify Book Hotel page is loaded', async () => {
  46  |             await expect(page).toHaveURL(assertions.book_hotel_url, { timeout: 60000 });
  47  |         });
  48  |     });
  49  | 
  50  |     test.afterEach(async ({ page }) => {
  51  |     try {
  52  |       const logout = new LogoutPage(page);
  53  |       if (await logout.logoutLink.isVisible({ timeout: 2000 })) {
  54  |         await logout.gotoLogoutPage();
  55  |       }
  56  |     } catch (error) {
  57  |     }
  58  |   });
  59  |  
  60  |  
  61  | 
  62  | test.describe('Book Hotel', () => {
  63  |  test('Book Hotel', async ({ page }) => {
  64  |         
  65  |         const data = bookHotelData.bookHotel[0];
  66  | 
  67  |         await bookHotel.bookHotel(
  68  |             data.first_name, 
  69  |             data.last_name, 
  70  |             data.address, 
  71  |             data.cc_num, 
  72  |             data.cc_type, 
  73  |             data.cc_exp_month, 
  74  |             data.cc_exp_year, 
  75  |             data.cc_cvv
  76  |         );
  77  | 
  78  |         await test.step('Verify booking is confirmed', async () => {
> 79  |             await expect(page).toHaveURL(assertionsData.assertions[0]
      |                                ^ Error: expect(page).toHaveURL(expected) failed
  80  |                 .booking_confirm_url, { timeout: 150000 });
  81  |             await attachStepScreenshot(page, 'Booking Confirmed');
  82  |         });
  83  |     });
  84  | });
  85  | 
  86  | test.describe('Book Hotel - Negative Tests', () => {
  87  | 
  88  |     test('Empty First Name', async ({ page }) => {
  89  |         const data = bookHotelData.negativeTests[0];
  90  | 
  91  |         await bookHotel.bookHotel(
  92  |             data.first_name, data.last_name, data.address,
  93  |             data.cc_num, data.cc_type, data.cc_exp_month,
  94  |             data.cc_exp_year, data.cc_cvv
  95  |         );
  96  | 
  97  |         await test.step('Verify required first-name validation', async () => {
  98  |             await expect(bookHotel.first_name_error)
  99  |                 .toHaveText(assertionsData.assertions[0].firstname_error);
  100 |             await attachStepScreenshot(page, 'Empty First Name Error');
  101 |         });
  102 |     });
  103 | 
  104 |     test('Empty Last Name', async ({ page }) => {
  105 |         const data = bookHotelData.negativeTests[1];
  106 | 
  107 |         await bookHotel.bookHotel(
  108 |             data.first_name, data.last_name, data.address,
  109 |             data.cc_num, data.cc_type, data.cc_exp_month,
  110 |             data.cc_exp_year, data.cc_cvv
  111 |         );
  112 | 
  113 |         await test.step('Verify required last-name validation', async () => {
  114 |             await expect(bookHotel.last_name_error)
  115 |                 .toHaveText(assertionsData.assertions[0].lastname_error);
  116 |             await attachStepScreenshot(page, 'Empty Last Name Error');
  117 |         });
  118 |     });
  119 | 
  120 |     test('Empty Billing Address', async ({ page }) => {
  121 |         const data = bookHotelData.negativeTests[2];
  122 | 
  123 |         await bookHotel.bookHotel(
  124 |             data.first_name, data.last_name, data.address,
  125 |             data.cc_num, data.cc_type, data.cc_exp_month,
  126 |             data.cc_exp_year, data.cc_cvv
  127 |         );
  128 | 
  129 |         await test.step('Verify required billing-address validation', async () => {
  130 |             await expect(bookHotel.address_error)
  131 |                 .toHaveText(assertionsData.assertions[0].address_error);
  132 |             await attachStepScreenshot(page, 'Empty Billing Address Error');
  133 |         });
  134 |     });
  135 | 
  136 |     test('Empty Credit Card Number', async ({ page }) => {
  137 |         const data = bookHotelData.negativeTests[3];
  138 | 
  139 |         await bookHotel.bookHotel(
  140 |             data.first_name, data.last_name, data.address,
  141 |             data.cc_num, data.cc_type, data.cc_exp_month,
  142 |             data.cc_exp_year, data.cc_cvv
  143 |         );
  144 | 
  145 |         await test.step('Verify required credit-card-number validation', async () => {
  146 |             await expect(bookHotel.cc_num_error)
  147 |                 .toHaveText(assertionsData.assertions[0].cc_num_error);
  148 |             await attachStepScreenshot(page, 'Empty Credit Card Number Error');
  149 |         });
  150 |     });
  151 | 
  152 |     test('Credit Card Type Not Selected', async ({ page }) => {
  153 |         const data = bookHotelData.negativeTests[4];
  154 | 
  155 |         await bookHotel.bookHotel(
  156 |             data.first_name, data.last_name, data.address,
  157 |             data.cc_num, data.cc_type, data.cc_exp_month,
  158 |             data.cc_exp_year, data.cc_cvv
  159 |         );
  160 | 
  161 |         await test.step('Verify required credit-card-type validation', async () => {
  162 |             await expect(bookHotel.cc_type_error)
  163 |                 .toHaveText(assertionsData.assertions[0].cc_type_error);
  164 |             await attachStepScreenshot(page, 'Credit Card Type Error');
  165 |         });
  166 |     });
  167 | 
  168 |     test('Expiry Month Not Selected', async ({ page }) => {
  169 |         const data = bookHotelData.negativeTests[5];
  170 | 
  171 |         await bookHotel.bookHotel(
  172 |             data.first_name, data.last_name, data.address,
  173 |             data.cc_num, data.cc_type, data.cc_exp_month,
  174 |             data.cc_exp_year, data.cc_cvv
  175 |         );
  176 | 
  177 |         await test.step('Verify required expiry-month validation', async () => {
  178 |             await expect(bookHotel.cc_exp_month_error)
  179 |                 .toHaveText(assertionsData.assertions[0].cc_exp_month_error);
```