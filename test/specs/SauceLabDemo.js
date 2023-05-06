describe('SauceLabs',async()=>{
    it('Login Page',async()=>{
        await browser.url("https://www.saucedemo.com/")
        let title=await browser.getTitle()
        console.log(title)
        await expect(browser).toHaveTitleContaining("Labs")
        await $("//input[@id='user-name']").setValue("standard_user")
        await browser.pause(1500)
        await $("input[id='password']").setValue("secret_sauce")
        await browser.pause(1500)
        await $("input[type='submit']").click()
        await browser.pause(2000)

        let sortIcon=await $("div[id='header_container'] div:nth-child(2) div span select")
        sortIcon.isClickable()
        sortIcon.selectByIndex(3)
        await browser.pause(2000)

        let jacket=await $("button[id='add-to-cart-sauce-labs-fleece-jacket']")
        jacket.isClickable()
        jacket.click()
        await browser.pause(2000)

        let bag=await $("button[id='add-to-cart-sauce-labs-backpack']")
        bag.isClickable()
        bag.click()
        await browser.pause(2000)

        let cart= await $("div[id='shopping_cart_container']")
        cart.isClickable()
        cart.click()
        await browser.pause(2000)

        let checkout=await $("button[id='checkout']")
        checkout.isClickable()
        checkout.click()
        await browser.pause(2000)

        let firstName=await $("input[id='first-name']")
        firstName.setValue("John")
        let lastName=await $("input[id='last-name']")
        lastName.setValue("Wick")
        let postalCode=await $("input[id='postal-code']")
        postalCode.setValue("3456789")
        await browser.pause(3000)

        await $("input[type='submit']").click()
        await browser.pause(3000)
        await $("button[name='finish']").click()
        await browser.pause(2000)


    })
})