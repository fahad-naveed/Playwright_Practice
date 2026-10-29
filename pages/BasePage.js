class Basepage{
    constructor(page){
        this.page = page;
    }

    async navigate(url)
    {
        await this.page.goto(url);
    }
}
export default Basepage; 