# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: SearchHotel.spec.js >> Search Hotel - Negative >> No Adults per Room Selected
- Location: tests\SearchHotel.spec.js:128:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.selectOption: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#location')

```

# Page snapshot

```yaml
- generic [active] [ref=f1e1]:
  - table [ref=f1e2]:
    - rowgroup [ref=f1e3]:
      - row [ref=f1e4]:
        - cell [ref=f1e5]:
          - img "AdactIn Group" [ref=f1e6]
        - cell [ref=f1e7]:
          - 'img "Adactin Group: Hotel Reservation System" [ref=f1e8]'
      - row [ref=f1e9]:
        - cell [ref=f1e10]
  - table [ref=f1e11]:
    - rowgroup [ref=f1e12]:
      - row [ref=f1e13]:
        - cell [ref=f1e14]:
          - paragraph [ref=f1e15]: Adactin Launches The Adactin Hotel App!
          - table [ref=f1e16]:
            - rowgroup [ref=f1e17]:
              - row [ref=f1e18]:
                - cell [ref=f1e19]:
                  - img "Hotel Image 3" [ref=f1e20]
              - row [ref=f1e21]:
                - cell "The best Free learning platform for Software Testing Now available to download for free on IOS and Android." [ref=f1e22]: The best Free learning platform for Software TestingNow available to download for free on IOS and Android.
          - table [ref=f1e23]:
            - rowgroup [ref=f1e24]:
              - row [ref=f1e25]:
                - cell [ref=f1e26]:
                  - link [ref=f1e27] [cursor=pointer]:
                    - /url: https://testflight.apple.com/join/Ai3nVPMD
                - cell [ref=f1e29]:
                  - link [ref=f1e30] [cursor=pointer]:
                    - /url: https://play.google.com/store/apps/details?id=com.adactin.education.hotelbooking
        - cell [ref=f1e32]:
          - table [ref=f1e34]:
            - rowgroup [ref=f1e35]:
              - row [ref=f1e36]:
                - cell "Existing User Login - Build 1" [ref=f1e37]
              - row [ref=f1e38]:
                - cell "Username" [ref=f1e39]
                - cell [ref=f1e40]:
                  - textbox [ref=f1e41]
              - row [ref=f1e42]:
                - cell "Password" [ref=f1e43]
                - cell [ref=f1e44]:
                  - textbox [ref=f1e45]
              - row [ref=f1e46]:
                - cell [ref=f1e47]
                - cell [ref=f1e48]:
                  - link "Forgot Password?" [ref=f1e50] [cursor=pointer]:
                    - /url: ForgotPassword.php
              - row [ref=f1e51]:
                - cell [ref=f1e52]
                - cell [ref=f1e53]
              - row [ref=f1e54]:
                - cell [ref=f1e55]
                - cell [ref=f1e56]:
                  - button "Login" [ref=f1e57]
              - row [ref=f1e58]:
                - cell [ref=f1e59]:
                  - link "New User Register Here" [ref=f1e60] [cursor=pointer]:
                    - /url: Register.php
          - table [ref=f1e61]:
            - rowgroup [ref=f1e62]:
              - row [ref=f1e63]:
                - cell "Important Note:" [ref=f1e64]
              - row [ref=f1e65]:
                - cell [ref=f1e66]:
                  - text: "Hotel Application has 2 builds:"
                  - list [ref=f1e67]:
                    - listitem [ref=f1e68]:
                      - strong [ref=f1e69]: Build 1
                      - text: Has been developed with known defects. Thus, functional test cases and automation scripts will fail on this build.
                    - listitem [ref=f1e70]:
                      - strong [ref=f1e71]: Build 2
                      - text: Known defects have been fixed. Thus, functional test cases and automation test scripts should pass when executed on this build.
                      - link [ref=f1e72] [cursor=pointer]:
                        - /url: ../HotelAppBuild2
                        - strong [ref=f1e73]: Go to Build 2
              - row [ref=f1e74]:
                - cell [ref=f1e75]:
                  - text: "For any queries/issues please email:"
                  - link "info@adactin.com" [ref=f1e76] [cursor=pointer]:
                    - /url: mailto:info@adactin.com
  - table [ref=f1e77]:
    - rowgroup [ref=f1e78]:
      - row [ref=f1e79]:
        - cell [ref=f1e80]
      - row [ref=f1e81]:
        - cell [ref=f1e82]:
          - text: © 2026 -
          - link "Adactin.com" [ref=f1e83] [cursor=pointer]:
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
> 29 |     await this.location.selectOption(location);
     |                         ^ Error: locator.selectOption: Test timeout of 30000ms exceeded.
  30 |     await attachStepScreenshot(this.page, 'Location Selected');
  31 |     });
  32 | 
  33 | await test.step('Select Hotel', async () => {
  34 |     await this.hotels.selectOption(hotels);
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