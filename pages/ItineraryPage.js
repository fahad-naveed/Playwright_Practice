class ItineraryPage 
{
    constructor(page) 
    {
        this.page = page;
        this.logout = page.getByRole('link', { name: 'Logout', exact: true });
    }

    async logoutButton() 
    {
        await this.logout.click();
    }
}
export default ItineraryPage;