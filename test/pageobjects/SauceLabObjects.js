class SauceLabObjects{
    get URL(){
        return "https://www.saucedemo.com/"
    }
    get username(){
        return $("//input[@id='user-name']")
    }
    get password(){
        return $("input[id='password']")
    }
    get submit(){
        return $("input[type='submit']")
    }
    get sortIcon(){
        return $("div[id='header_container'] div:nth-child(2) div span select")
    }
    get jacket(){
        return $("button[id='add-to-cart-sauce-labs-fleece-jacket']")
    }
    get backpack(){
        return $("button[id='add-to-cart-sauce-labs-backpack']")
    }
    get cart(){
        return $("div[id='shopping_cart_container']")
    }
    get checkout(){
        return $("button[id='checkout']")
    }
    get firstName(){
        return $("input[id='first-name']")
    }
    get lastName(){
        return $("input[id='last-name']")
    }
    get postalCode(){
        return $("input[id='postal-code']")
    }
    get submitLast(){
        return $("input[type='submit']")
    }
    get finish(){
        return $("button[name='finish']")
    }
    
    


}
export default new SauceLabObjects()