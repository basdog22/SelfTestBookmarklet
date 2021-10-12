javascript:(function() {
    if(typeof window.setNativeValue == 'undefined'){

        function setNativeValue(element, value) {
            const valueSetter = Object.getOwnPropertyDescriptor(element, 'value').set;
            const prototype = Object.getPrototypeOf(element);
            const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value').set;

            if (valueSetter && valueSetter !== prototypeValueSetter) {
                prototypeValueSetter.call(element, value);
            } else {
                valueSetter.call(element, value);
            }
        }
    }
    var today = new Date();


    var elements_1 = {
        "child_firstname": "John", /*//Kid first name*/
        "child_surname": "Doe", /*//Kid last name*/
        "child_fathername": "Jack", /*//Father first name*/
        "child_mothername": "Mary", /*//Mother first name*/
        "child_birth_date-day": "23", /*// Birth day*/
        "child_birth_date-month": "06",/*// Birth month*/
        "child_birth_date-year": "2014", /*//Birth year*/
    };

    var elements_2 = {
        "amka": "23061400000", /*//Kid amka*/
        "test_date-day": String(today.getDate()).padStart(2, '0'),
        "test_date-month": String(today.getMonth() + 1).padStart(2, '0'),
        "test_date-year": today.getFullYear(),
    };

    var finel;

    if(document.querySelector("[name='child_firstname']")){
        finel = elements_1;
    }else{
        finel = elements_2;
    }

    for (const [key, value] of Object.entries(finel)) {
        var input = document.querySelector("[name='"+key+"']");
        setNativeValue(input, value);
        input.dispatchEvent(new Event('input', { bubbles: true }));
    }
})();