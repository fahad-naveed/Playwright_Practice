import { test } from '../fixtures/testSetup.js';
import { attachStepScreenshot } from '../utilities/screenshot.js';

class SearchHotelPage 
{
constructor(page) 
{
    this.page = page;
    this.location = page.locator('#location');
    this.hotels = page.locator('#hotels');
    this.room_type = page.locator('#room_type');
    this.room_nos = page.locator('#room_nos');
    this.datepick_in = page.locator('#datepick_in');
    this.datepick_out = page.locator('#datepick_out');
    this.adult_room = page.locator('#adult_room');
    this.child_room = page.locator('#child_room');
    this.submitButton = page.locator('#Submit');
    this.location_error = page.locator('#location_span');
    this.room_nos_error = page.locator('#num_room_span');
    this.checkin_error = page.locator('#checkin_span');
    this.checkout_error = page.locator('#checkout_span');
    this.adult_room_error = page.locator('#adults_room_span');
}

async searchHotel(location, hotels, room_type, room_nos, datepick_in, datepick_out, adult_room, child_room)
{

await test.step('Select Location', async () => {
    await this.location.selectOption(location);
    await attachStepScreenshot(this.page, 'Location Selected');
    });

await test.step('Select Hotel', async () => {
    await this.hotels.selectOption(hotels);
    await attachStepScreenshot(this.page, 'Hotel Selected');
    });

await test.step('Select Room Type', async () => {
    await this.room_type.selectOption(room_type);
    await attachStepScreenshot(this.page, 'Room Type Selected');
    });
    
await test.step('Select no of Rooms', async () => {
    await this.room_nos.selectOption(room_nos);
    await attachStepScreenshot(this.page, 'No. of Rooms');
    });

await test.step('Check in date', async () => {
    await this.datepick_in.fill(datepick_in);
    await attachStepScreenshot(this.page, 'Check in date');
    });   

await test.step('Check out date', async () => {
    await this.datepick_out.fill(datepick_out);
    await attachStepScreenshot(this.page, 'Check out date');
    }); 

await test.step('Adult per Room', async () => {
    await this.adult_room.selectOption(adult_room);
    await attachStepScreenshot(this.page, 'Total no. of Adults');
    });

await test.step('Check per Room', async () => {
    await this.child_room.selectOption(child_room);
    await attachStepScreenshot(this.page, 'Total no. of Children');
    });

await test.step('Click Submit', async () => {
    await this.submitButton.click();
    await attachStepScreenshot(this.page, 'After Clicking Submit');
    });   
    

}
}
export default SearchHotelPage;