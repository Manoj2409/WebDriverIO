//const pageObjects=require('../pageobjects/SauceLabObjects.js')
import SauceLabObjects from '../pageobjects/SauceLabObjects.js'
describe('SauceLabs',async()=>{

    it('Login Page',async()=>{
        await browser.url(SauceLabObjects.URL)
        await browser.maximizeWindow()
        let title=await browser.getTitle()
        console.log(title)
        await browser.pause(1500)
        expect(browser).toHaveTitleContaining("Labs")
        await SauceLabObjects.username.setValue("standard_user")
        await browser.pause(1500)
        await SauceLabObjects.password.setValue("secret_sauce")
        await browser.pause(1500)
        await SauceLabObjects.submit.click()
        await browser.pause(2000)
    })

    it("Sorting high to low price of products",async()=>{
        
        await SauceLabObjects.sortIcon.isClickable()
        await SauceLabObjects.sortIcon.selectByIndex(3)
        await browser.pause(2000)
    })

    it("Adding and checkout",async()=>{
        //adding to cart
        await SauceLabObjects.jacket.isClickable()
        await SauceLabObjects.jacket.click()
        await browser.pause(2000)
        await SauceLabObjects.backpack.isClickable()
        await SauceLabObjects.backpack.click()
        await browser.pause(2000)
        await SauceLabObjects.cart.isClickable()
        await SauceLabObjects.cart.click()
        await browser.pause(2000)
        await SauceLabObjects.checkout.isClickable()
        await SauceLabObjects.checkout.click()
        await browser.pause(2000)
    })
  
    it("Delivery Details and confirmation",async()=>{
        //Delivery
        await SauceLabObjects.firstName.setValue("John")
        await SauceLabObjects.lastName.setValue("Wick")
        await SauceLabObjects.postalCode.setValue("3456789")
        await browser.pause(3000)
        await SauceLabObjects.submitLast.click()
        await browser.pause(3000)
        await SauceLabObjects.finish.click()
        await browser.pause(2000)
    })
})