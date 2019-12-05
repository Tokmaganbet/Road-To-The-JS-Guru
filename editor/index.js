"use strict";

new Vue({
    el: '#app',

    data: {
        show_redactor: false,
        content: 'Правь меня.'
    },

    methods: {
        toggleRedactor: function(){
            this.show_redactor = !this.show_redactor;
        }
    }
})



// new Vue ({
//     el: '#app',
//     data: {
//         someArray: [1,-2,-100, 0, 34, 515]
//     },
//     methods: {
//         aboveZero: function(array) {
//             return array.filter(function(number) {
//                 return number > 0
//             })
//         }
//     }
// })