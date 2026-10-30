# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: BookHotel.spec.js >> Book Hotel - Negative Tests >> Empty First Name
- Location: tests\BookHotel.spec.js:88:9

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
Error: locator.selectOption: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#hotels')
    - locator resolved to <select id="hotels" name="hotels" class="search_combobox">…</select>
  - attempting select option action
    - waiting for "https://adactinhotelapp.com/Logout.php" navigation to finish...
    - navigated to "https://adactinhotelapp.com/Logout.php"
    - waiting for element to be visible and enabled
  - element was detached from the DOM, retrying

```

# Page snapshot

```yaml
- generic [active] [ref=f6e1]:
  - table [ref=f6e2]:
    - rowgroup [ref=f6e3]:
      - row [ref=f6e4]:
        - cell [ref=f6e5]:
          - img "AdactIn Group" [ref=f6e6]
        - cell [ref=f6e7]:
          - 'img "Adactin Group: Hotel Reservation System" [ref=f6e8]'
      - row [ref=f6e9]:
        - cell [ref=f6e10]
  - table [ref=f6e11]:
    - rowgroup [ref=f6e12]:
      - row [ref=f6e13]:
        - cell [ref=f6e14]:
          - table [ref=f6e15]:
            - rowgroup [ref=f6e16]:
              - row [ref=f6e17]:
                - cell [ref=f6e18]:
                  - text: You have successfully logged out.
                  - link "Click here to login again" [ref=f6e19] [cursor=pointer]:
                    - /url: index.php
        - cell [ref=f6e20]:
          - table [ref=f6e21]:
            - rowgroup [ref=f6e22]:
              - row [ref=f6e23]:
                - cell [ref=f6e24]:
                  - heading "Adactin Hotel Mobile App" [level=4] [ref=f6e25]
                  - link "DOWNLOAD" [ref=f6e26] [cursor=pointer]:
                    - /url: https://adactinhotelapp.com/resources/AdactinHotelApp_SetupGuide.pdf
                  - text: the Hotel Mobile App and extend your experience. Click to know more about how to get the app on Android or IOS.
              - row [ref=f6e27]:
                - cell [ref=f6e28]:
                  - heading "HotelApp Web Services" [level=4] [ref=f6e29]
                  - text: Access Hotel App SOAP and Rest Services to learn web services testing.
                  - link "Click" [ref=f6e30] [cursor=pointer]:
                    - /url: https://adactinhotelapp.com/HotelAdactinWebServices/
                  - text: to know more.
              - row [ref=f6e31]:
                - cell [ref=f6e32]:
                  - heading "Sample TestCases" [level=4] [ref=f6e33]
                  - link "DOWNLOAD" [ref=f6e34] [cursor=pointer]:
                    - /url: http://adactinhotelapp.com/resources/Sample-TestCases_HotelApplication.pdf
                  - text: a complete set of readymade sample TEST CASES for this application. Enjoy automation!
              - row [ref=f6e35]:
                - cell [ref=f6e36]:
                  - heading "Known Defects" [level=4] [ref=f6e37]
                  - link "DOWNLOAD" [ref=f6e38] [cursor=pointer]:
                    - /url: http://adactinhotelapp.com/resources/KnownDefects_HotelApp.pdf
                  - text: list of known defects for this application.
              - row [ref=f6e39]:
                - cell [ref=f6e40]:
                  - heading "Book on Automation" [level=4] [ref=f6e41]
                  - iframe [ref=f6e42]
              - row [ref=f6e43]:
                - cell [ref=f6e44]:
                  - heading "About Adactin" [level=4] [ref=f6e45]
                  - text: Get solutions for all your testing needs. Visit
                  - link "www.adactin.com" [ref=f6e46] [cursor=pointer]:
                    - /url: http://www.adactin.com
                  - text: today!
  - table [ref=f6e47]:
    - rowgroup [ref=f6e48]:
      - row [ref=f6e49]:
        - cell [ref=f6e50]
      - row [ref=f6e51]:
        - cell [ref=f6e52]:
          - text: © 2026 -
          - link "Adactin.com" [ref=f6e53] [cursor=pointer]:
            - /url: http://www.adactin.com
          - text: . All Rights Reserved. Adactin Group Pty. Ltd.
```

# Test source

```ts
  1  | import { test } from '../fixtures/testSetup.js';
  2  | import { attachStepScreenshot } from '../utilities/screenshot.js';
  3  | 
  4  | class SearchHotelPage 
  5  | {
  6  | constructor(page) 
  7  | {
  8  |     this.page = page;
  9  |     this.location = page.locator('#location');
  10 |     this.hotels = page.locator('#hotels');
  11 |     this.room_type = page.locator('#room_type');
  12 |     this.room_nos = page.locator('#room_nos');
  13 |     this.datepick_in = page.locator('#datepick_in');
  14 |     this.datepick_out = page.locator('#datepick_out');
  15 |     this.adult_room = page.locator('#adult_room');
  16 |     this.child_room = page.locator('#child_room');
  17 |     this.submitButton = page.locator('#Submit');
  18 |     this.location_error = page.locator('#location_span');
  19 |     this.room_nos_error = page.locator('#num_room_span');
  20 |     this.checkin_error = page.locator('#checkin_span');
  21 |     this.checkout_error = page.locator('#checkout_span');
  22 |     this.adult_room_error = page.locator('#adults_room_span');
  23 | }
  24 | 
  25 | async searchHotel(location, hotels, room_type, room_nos, datepick_in, datepick_out, adult_room, child_room)
  26 | {
  27 | 
  28 | await test.step('Select Location', async () => {
  29 |     await this.location.selectOption(location);
  30 |     await attachStepScreenshot(this.page, 'Location Selected');
  31 |     });
  32 | 
  33 | await test.step('Select Hotel', async () => {
> 34 |     await this.hotels.selectOption(hotels);
     |                       ^ Error: locator.selectOption: Test timeout of 30000ms exceeded.
  35 |     await attachStepScreenshot(this.page, 'Hotel Selected');
  36 |     });
  37 | 
  38 | await test.step('Select Room Type', async () => {
  39 |     await this.room_type.selectOption(room_type);
  40 |     await attachStepScreenshot(this.page, 'Room Type Selected');
  41 |     });
  42 |     
  43 | await test.step('Select no of Rooms', async () => {
  44 |     await this.room_nos.selectOption(room_nos);
  45 |     await attachStepScreenshot(this.page, 'No. of Rooms');
  46 |     });
  47 | 
  48 | await test.step('Check in date', async () => {
  49 |     await this.datepick_in.fill(datepick_in);
  50 |     await attachStepScreenshot(this.page, 'Check in date');
  51 |     });   
  52 | 
  53 | await test.step('Check out date', async () => {
  54 |     await this.datepick_out.fill(datepick_out);
  55 |     await attachStepScreenshot(this.page, 'Check out date');
  56 |     }); 
  57 | 
  58 | await test.step('Adult per Room', async () => {
  59 |     await this.adult_room.selectOption(adult_room);
  60 |     await attachStepScreenshot(this.page, 'Total no. of Adults');
  61 |     });
  62 | 
  63 | await test.step('Check per Room', async () => {
  64 |     await this.child_room.selectOption(child_room);
  65 |     await attachStepScreenshot(this.page, 'Total no. of Children');
  66 |     });
  67 | 
  68 | await test.step('Click Submit', async () => {
  69 |     await this.submitButton.click();
  70 |     await attachStepScreenshot(this.page, 'After Clicking Submit');
  71 |     });   
  72 |     
  73 | 
  74 | }
  75 | }
  76 | export default SearchHotelPage;
```