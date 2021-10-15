javascript: (function() {
    let details = {
        'child_firstname':        'Little',
        'child_surname':          'Doe',
        'child_fathername':       'John',
        'child_mothername':       'Jane',
        'child_birth_date-day':   '01',
        'child_birth_date-month': '01',
        'child_birth_date-year':  '2010',
        'amka':                   '01011099999'
    };
    if (typeof window.setNativeValue == 'undefined') {
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
    const today = new Date();
    details['test_date-day'] = String(today.getDate()).padStart(2, '0');
    details['test_date-month'] = String(today.getMonth() + 1).padStart(2, '0');
    details['test_date-year'] = today.getFullYear();
    for (const [key, value] of Object.entries(details)) {
        if (document.querySelector("[name='"+key+"']")) {
            var input = document.querySelector("[name='"+key+"']");
            setNativeValue(input, value);
            input.dispatchEvent(new Event('input', {
                bubbles: true
            }));
        }
    }
})();
