document.addEventListener("DOMContentLoaded", init, false);

function init() {
    document.getElementById("firstname").focus();
    
//show/hide other address type
    //function hide element
    function noDisplay(value1) {
        var x = document.getElementById(value1);
        x.style.display = "none";
    }
    //function to display element
    function displayValue(value1) {
        var x = document.getElementById(value1);
        x.style.display = "block";
    }
    function displayValueInline(value1) {
        var x = document.getElementById(value1);
        x.style.display = "Inline";
    }
    //function to show otheraddresstype
    function displayOtherAddress(value2, value3) {
        var sel = document.getElementById(value2);
        if (sel.options[sel.selectedIndex].value === "7") {
            displayValue(value3);
        } else {
            noDisplay(value3);
        }
    }

    //Hide otheraddresstypes
    noDisplay("otheraddresstype");
    noDisplay("otheraddresstype2");
    noDisplay("billing");
    noDisplay("btnsubmit");
    
    //Show otheraddresstypes
    document.getElementById("addresstype").addEventListener("change", function () {displayOtherAddress("addresstype", "otheraddresstype"); }, false);
    document.getElementById("addresstype2").addEventListener("change", function () {displayOtherAddress("addresstype2", "otheraddresstype2"); }, false);

//validating address forms
    function validateContactForm() {
        //delivery address variables
        var firstname = document.getElementById("firstname"),
            lastname = document.getElementById("lastname"),
            addressstreet = document.getElementById("addressstreet"),
            addresscity = document.getElementById("addresscity"),
            addressstate = document.getElementById("addressstate"),
            addresszip = document.getElementById("addresszip"),
            phone = document.getElementById("phone"),
            email = document.getElementById("email"),
            //billing address variables
            bilfirstname = document.getElementById("bilfirstname"),
            billastname = document.getElementById("billastname"),
            biladdressstreet = document.getElementById("biladdressstreet"),
            biladdresscity = document.getElementById("biladdresscity"),
            biladdressstate = document.getElementById("biladdressstate"),
            biladdresszip = document.getElementById("biladdresszip"),
            //regular expressions
            regltrs = /[A-Za-z ]$/,
            regltrsnum = /[A-Za-z0-9 ]$/,
            regaddressstate = /^([a-zA-Z]){2}$/,
            regaddresszip = /^\d{5}$/,
            regphone = /^\d{3}-?\d{3}-?\d{4}$/g,
            regemail = /^\w.+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        //event listeners for delivery addresses
        firstname.addEventListener("blur", function () {
            if (firstname.value.match(regltrs)) {
                document.getElementById("text1").innerHTML = "";
                lastname.focus();
            } else {
                document.getElementById("text1").innerHTML = "Please enter your first name.";
                return false;
            }
        }, false);
        lastname.addEventListener("blur", function () {
            if (lastname.value.match(regltrs)) {
                document.getElementById("text2").innerHTML = "";
                addressstreet.focus();
            } else {
                document.getElementById("text2").innerHTML = "Please enter your last name.";
                return false;
            }
        }, false);
        addressstreet.addEventListener("blur", function () {
            if (addressstreet.value.match(regltrsnum)) {
                document.getElementById("text3").innerHTML = "";
                addresscity.focus();
            } else {
                document.getElementById("text3").innerHTML = "Please enter your address.";
                return false;
            }
        }, false);
        addresscity.addEventListener("blur", function () {
            if (addresscity.value.match(regltrs)) {
                document.getElementById("text4").innerHTML = "";
                addressstate.focus();
            } else {
                document.getElementById("text4").innerHTML = "Please enter a city.";
                return false;
            }
        }, false);
        addressstate.addEventListener("blur", function () {
            if (addressstate.value.match(regaddressstate)) {
                document.getElementById("text5").innerHTML = "";
                addresszip.focus();
            } else {
                document.getElementById("text5").innerHTML = "Please enter a valid state.";
                return false;
            }
        }, false);
        addresszip.addEventListener("blur", function () {
            if (addresszip.value.match(regaddresszip)) {
                document.getElementById("text6").innerHTML = "";
                phone.focus();
            } else {
                document.getElementById("text6").innerHTML = "Please enter a valid zip code.";
                return false;
            }
        }, false);
        phone.addEventListener("blur", function () {
            if (phone.value.match(regphone)) {
                document.getElementById("text7").innerHTML = "";
                email.focus();
            } else {
                document.getElementById("text7").innerHTML = "Please enter a valid phone number.";
                return false;
            }
        }, false);
        email.addEventListener("blur", function () {
            if (email.value.match(regemail)) {
                document.getElementById("text8").innerHTML = "";
            } else {
                document.getElementById("text8").innerHTML = "Please enter a valid e-mail address.";
                return false;
            }
        }, false);
        
        //event listeners for billing address
        bilfirstname.addEventListener("blur", function () {
            if (bilfirstname.value.match(regltrs)) {
                document.getElementById("text9").innerHTML = "";
                billastname.focus();
            } else {
                document.getElementById("text9").innerHTML = "Please enter your first name.";
                return false;
            }
        }, false);
        billastname.addEventListener("blur", function () {
            if (billastname.value.match(regltrs)) {
                document.getElementById("text10").innerHTML = "";
                biladdressstreet.focus();
            } else {
                document.getElementById("text10").innerHTML = "Please enter your last name.";
                return false;
            }
        }, false);
        biladdressstreet.addEventListener("blur", function () {
            if (biladdressstreet.value.match(regltrsnum)) {
                document.getElementById("text11").innerHTML = "";
                biladdresscity.focus();
            } else {
                document.getElementById("text11").innerHTML = "Please enter your address.";
                return false;
            }
        }, false);
        biladdresscity.addEventListener("blur", function () {
            if (biladdresscity.value.match(regltrs)) {
                document.getElementById("text12").innerHTML = "";
                biladdressstate.focus();
            } else {
                document.getElementById("text12").innerHTML = "Please enter a city.";
                return false;
            }
        }, false);
        biladdressstate.addEventListener("blur", function () {
            if (biladdressstate.value.match(regaddressstate)) {
                document.getElementById("text13").innerHTML = "";
                biladdresszip.focus();
            } else {
                document.getElementById("text13").innerHTML = "Please enter a valid state.";
                return false;
            }
        }, false);
        biladdresszip.addEventListener("blur", function () {
            if (biladdresszip.value.match(regaddresszip)) {
                document.getElementById("text14").innerHTML = "";
            } else {
                document.getElementById("text14").innerHTML = "Please enter a valid zip code.";
                return false;
            }
        }, false);

        return true;
    }
    validateContactForm();

//show/hide dough sizing
    var handtossedsize = {
        select: "Please select size",
        handtossedS: "Small ($9.99)",
        handtossedM: "Medium ($12.99)",
        handtossedL: "Large ($14.99)"
    },
        thincrustsize = {
            select: "Please select size",
            thincrustM: "Medium ($11.99)",
            thincrustL: "Large ($13.99)"
        },
        newyorksize = {
            select: "Please select size",
            newyorkL: "Large ($16.99)",
            newyorkXL: "Extra Large ($19.99)"
        },
        glutenfreesize = {
            select: "Please select size",
            glutenfreeS: "Small ($10.99)"
        },
        pizzaSize = document.getElementById("pizzasize");
    function removeOpt() {
        pizzaSize.options.length = 0;
    }
    function addSize(size) {
        this.size = size;
        var index;
        for (index in size) {
            pizzaSize.options[pizzaSize.options.length] = new Option(size[index], index);
        }
    }
    document.getElementById("handtossed").addEventListener("click", function () {removeOpt(); addSize(handtossedsize); }, false);
    document.getElementById("thincrust").addEventListener("click", function () {removeOpt(); addSize(thincrustsize); }, false);
    document.getElementById("newyork").addEventListener("click", function () {removeOpt(); addSize(newyorksize); }, false);
    document.getElementById("glutenfree").addEventListener("click", function () {removeOpt(); addSize(glutenfreesize); }, false);
    
//disabling elements 
    function disable(value1) {
        document.getElementById(value1).disabled = true;
    }
    function disableClass(value1) {
        var elems = document.getElementsByClassName(value1), i;
        for (i in elems) {
            elems[i].disabled = true;
        }
    }
    disable("cheese");
    disable("sauce");
    disableClass("toppings");
    
//enabling elements
    function enable(value1) {
        document.getElementById(value1).disabled = false;
    }
    function enableClass(value1) {
        var elems = document.getElementsByClassName(value1), i;
        for (i in elems) {
            elems[i].disabled = false;
        }
    }
    document.getElementById("pizzasize").addEventListener("change", function () {enable("cheese"); }, false);
    document.getElementById("cheese").addEventListener("click", function () {enable("sauce"); }, false);
    document.getElementById("sauce").addEventListener("click", function () {enableClass("toppings"); }, false);
    
    var sizePrices = {
        select: 0,
        handtossedS: 9.99,
        handtossedM: 12.99,
        handtossedL: 14.99,
        thincrustM: 11.99,
        thincrustL: 13.99,
        newyorkL: 16.99,
        newyorkXL: 19.99,
        glutenfreeS: 10.99
    },
        cheesePrices = {
            normal: 0,
            light: 0,
            extra: 2.99,
            double: 3.99
        },
        saucePrices = {
            regular: 0,
            hearty: 0.99,
            bbq: 1.99
        },
        toppingPrices = {
            pepperoni: 0.99,
            sausage: 0.99,
            ham: 0.99,
            bacon: 0.99,
            salami: 0.99,
            peppers: 0.99,
            olives: 0.99,
            jalapenos: 0.99,
            mushrooms: 0.99,
            pineapple: 0.99,
            onion: 0.99
        };

    function getSizePrice() {
        var sizePrice = 0,
            theForm = document.getElementById("pizzasize");
        sizePrice = sizePrices[theForm.value];
        return sizePrice;
    }
    function getCheesePrice() {
        var cheesePrice = 0,
            theForm = document.getElementById("cheese");
        cheesePrice = cheesePrices[theForm.value];
        return cheesePrice;
    }
    function getSaucePrice() {
        var saucePrice = 0,
            theForm = document.getElementById("sauce");
        saucePrice = saucePrices[theForm.value];
        return saucePrice;
    }
    function getToppingsPrice() {
        var toppingsPrice = 0,
            selectedToppings = document.getElementsByClassName("toppings"),
            i;
        for (i in selectedToppings) {
            if (selectedToppings[i].checked === true) {
                toppingsPrice += toppingPrices[selectedToppings[i].value];
            }
        }
        return toppingsPrice;
    }
    function addTotal(val) {
        var totAmtText = document.getElementById("totAmt"),
            totAmt = getSizePrice() + getCheesePrice() + getSaucePrice() + getToppingsPrice(),
            totAmtCurrency = totAmt.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
        totAmtText.innerHTML = totAmtCurrency;
    }
    
    document.getElementById("pizzasize").addEventListener("change", function () {addTotal(); }, false);
    document.getElementById("cheese").addEventListener("change", function () {addTotal(); }, false);
    document.getElementById("sauce").addEventListener("change", function () {addTotal(); }, false);
    document.getElementById("toppings").addEventListener("click", function () {addTotal(); }, false);
    
    
//Finished Pizza Building button
    document.getElementById("btnfinished").addEventListener("click", function (event) {
        event.preventDefault();
        var answer = window.confirm("Are you sure you are done?");
        if (answer === true) {
            displayValue("billing");
            noDisplay("btnfinished");
            displayValue("btnsubmit");
        }
    }, false);
    
//same as delivery address checked
    function checkedBox(delvalue, bilvalue) {
        var bilvalue2 = document.getElementById(bilvalue),
            delvalue2 = document.getElementById(delvalue);
        bilvalue2.value = delvalue2.value;
    }
    document.getElementById("delAddress").addEventListener("click", function () {
        checkedBox("firstname", "bilfirstname");
        checkedBox("lastname", "billastname");
        checkedBox("addresstype", "addresstype2");
        checkedBox("deladdtype", "biladdtype");
        checkedBox("addressstreet", "biladdressstreet");
        checkedBox("aptnumber", "bilaptnumber");
        checkedBox("addresscity", "biladdresscity");
        checkedBox("addressstate", "biladdressstate");
        checkedBox("addresszip", "biladdresszip");
        var addresstype2 = document.getElementById("addresstype2");
        if (addresstype2.options[addresstype2.selectedIndex].value === "7") {
            displayValue("otheraddresstype2");
        }
        
    }, false);

//validating CC forms
    function validateCCForm() {
        //CC form variables
        var ccnumber = document.getElementById("ccnumber"),
            cvccode = document.getElementById("cvccode"),
            ccmonth = document.getElementById("ccmonth"),
            ccyear = document.getElementById("ccyear"),
            today,
            someday,
            //regular expressions
            regltrs = /[A-Za-z ]$/,
            regcvccode = /^\d{3}$/,
            regvisabeg = /^[1-5]$/,
            regemail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        //event listeners for CVC code
        cvccode.addEventListener("blur", function () {
            if (cvccode.value.match(regcvccode)) {
                document.getElementById("cctext2").innerHTML = "";
                ccmonth.focus();
            } else {
                document.getElementById("cctext2").innerHTML = "Please enter a valid CC Code.";
                cvccode.focus();
                return false;
            }
        }, false);
        //validating for exp data
        function checkDate() {
            today = new Date();
            someday = new Date();
            someday.setFullYear(ccyear.value, ccmonth.value, 1);
            if (someday < today) {
                document.getElementById("yearText").innerHTML = "The expiry date is before today's date. Please select a valid expiry date";
                return false;
            } else {
                document.getElementById("yearText").innerHTML = "";
            }
        }
        ccmonth.addEventListener("change", checkDate, false);
        ccyear.addEventListener("change", checkDate, false);
        //hiding/displaying CC logos
        noDisplay("mastercard");
        noDisplay("visa");
        noDisplay("amex");
        ccnumber.addEventListener("input", function () {
            if (ccnumber.value.charAt(0) === "4") {
                displayValueInline("visa");
            } else if (ccnumber.value.charAt(0) === "5" && ccnumber.value.charAt(1) <= "5" && ccnumber.value.charAt(1) >= "1") {
                displayValueInline("mastercard");
            } else if (ccnumber.value.charAt(0) === "3" && ccnumber.value.charAt(1) === "7") {
                displayValueInline("amex");
            } else {
                noDisplay("mastercard");
                noDisplay("visa");
                noDisplay("amex");
            }
        }, false);
   
        //Luhn function
        function luhnFor() {
            var nCheck = 0,
                bEven = false,
                i,
                ccvalue = ccnumber.value.replace(/\D/g, "");
            for (i = ccvalue.length - 1; i >= 0; i--) {
                var cDigit = ccvalue.charAt(i),
                    nDigit = parseInt(cDigit, 10);
                if (bEven) {
                    if ((nDigit *= 2) > 9) {nDigit -= 9; }
                }
                    
                nCheck += nDigit;
                bEven = !bEven;
            }
            return (nCheck % 10) === 0;
        }
        
        ccnumber.addEventListener("input", function () {
            if (ccnumber.value.match(regltrs) || luhnFor() === false) {
                document.getElementById("cctext1").innerHTML = "Please enter a valid credit card number.";
                ccnumber.focus();
            } else {
                document.getElementById("cctext1").innerHTML = "";
            }
        }, false);
    }
    validateCCForm();

//Submit button
    document.getElementById("btnsubmit").addEventListener("click", function (event) {
        event.preventDefault();
        window.alert("Thank you for your order!");
    }, false);
}