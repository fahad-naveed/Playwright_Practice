import { test } from '../fixtures/testSetup.js';
import { attachStepScreenshot } from '../utilities/screenshot.js';

class SelectHotelPage 
{
constructor(page) 
{
    this.page = page;
    this.selectHotelButton = page.locator('#radiobutton_0');
    this.continueButton = page.locator('#continue');
}
async selectHotel()
{
    await test.step('Select Hotel', async () => {
        await this.selectHotelButton.click();
        await attachStepScreenshot(this.page, 'Hotel Selected');
        });

     await test.step('Continue to Booking', async () => {
        await this.continueButton.click();
        await attachStepScreenshot(this.page, 'Booking Page');
        });
    
    
}
}
export default SelectHotelPage;