class BookingConfirmationPage 
{
    constructor(page) 
    {
        this.page = page;
        this.iterineraryButton = page.locator('#my_itinerary');
        this.logoutButton = page.locator('#logout');
    }

    async myItineraryButton() 
    {
        await this.iterineraryButton.click();
    }

    async logoutButton() 
    {
        await this.logoutButton.click();
    }

}
export default BookingConfirmationPage;
