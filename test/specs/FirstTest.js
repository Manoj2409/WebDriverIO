describe('Open OrangeHRM',async()=>{

xit('Open the Google',async()=>{
    await browser.url("https://www.google.com/")
    let title=await browser.getTitle()
    console.log(title)
})

it('Open the login page',async()=>{
    await browser.url("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    let title=await browser.getTitle()
    console.log(title)

})
it('Enter the login details',async()=>{
    const username=await $("input[name='username']")
    await username.isClickable()
    await username.setValue('Admin')

    const password=await $("input[name='password']")
    await password.isClickable()
    await password.setValue('admin123')

    const submit=await $("button[type='submit']")
    await submit.click()
    let title=await browser.getTitle()
    console.log(title)
    await browser.pause(5000)


})
// [id='app'] div:nth-child(1) div:nth-child(1) aside nav div:nth-child(2) ul li:nth-child(9) a[class='oxd-main-menu-item']

})