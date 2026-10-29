import { test } from '../fixtures/testSetup.js';
import { attachStepScreenshot } from '../utilities/screenshot.js';
class BookHotelPage 
{
constructor(page) 
{
    this.page = page;
    this.first_name = page.locator('#first_name');
    this.last_name = page.locator('#last_name');
    this.address = page.locator('#address');
    this.cc_num = page.locator('#cc_num');
    this.cc_type = page.locator('#cc_type');
    this.cc_exp_month = page.locator('#cc_exp_month');
    this.cc_exp_year = page.locator('#cc_exp_year');
    this.cc_cvv = page.locator('#cc_cvv');
    this.book_nowButton = page.locator('#book_now');

    this.first_name_error = page.locator('#first_name_span');
    this.last_name_error = page.locator('#last_name_span');
    this.address_error = page.locator('#address_span');
    this.cc_num_error = page.locator('#cc_num_span');
    this.cc_type_error = page.locator('#cc_type_span');
    this.cc_exp_month_error = page.getByText('Please Select your Credit Card Expiry Month', { exact: true });
    this.cc_exp_year_error = page.getByText('Please Select your Credit Card Expiry Year', { exact: true });
    this.cc_cvv_error = page.locator('#cc_cvv_span');
}

async bookHotel(first_name, last_name, address, cc_num, cc_type, cc_exp_month, cc_exp_year, cc_cvv)
{
    await test.step('Enter First Name', async () => {
    await this.first_name.fill(first_name);
    await attachStepScreenshot(this.page, 'First Name');
    });
    
    await test.step('Enter Last Name', async () => {
    await this.last_name.fill(last_name);
    await attachStepScreenshot(this.page, 'Last Name');
    });
    await test.step('Enter Billing Address', async () => {
    await this.address.fill(address);
    await attachStepScreenshot(this.page, 'Billing Address');
    });
    await test.step('Enyte Card No.', async () => {
    await this.cc_num.fill(cc_num);
    await attachStepScreenshot(this.page, 'Card Number');
    });
    await test.step('Enetr Card Type', async () => {
    await this.cc_type.selectOption(cc_type);
    await attachStepScreenshot(this.page, 'Type Entered');
    });
    await test.step('Enter Card Exp_Month', async () => {
    await this.cc_exp_month.selectOption(cc_exp_month);
    await attachStepScreenshot(this.page, 'Month Entered');
    });
    await test.step('Enter Card Exp_Year', async () => {
    await this.cc_exp_year.selectOption(cc_exp_year);
    await attachStepScreenshot(this.page, 'Year Entered');
    });
    await test.step('Enter cvv code', async () => {
    await this.cc_cvv.fill(cc_cvv);
    await attachStepScreenshot(this.page, 'cvv code entered');
    });
    await test.step('Click Booknow Button', async () => {
    await this.book_nowButton.click();
    await attachStepScreenshot(this.page, 'Booknow Button Clicked');
    });
    
}
}
export default BookHotelPage;