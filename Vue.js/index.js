"use strict";






// Vue.component('my-item', {
//     props: ['elem'],
//     template: '<p>{{ elem }}</p>'
// })

// var newDiv = new Vue({
//     el: '#div',
//     data: {
//         message: 'Lorem Ipsum',
//         message2: 'Ipsum Lorem',
//         list: [
//             1, 3, 5
//         ]
//     }
// })

var a = 'www'

var app = new Vue({
    el: '#app',
    data: {
        a: 123
    },
    created: function() {
        this.a = 13 // a = 123
    }
    // created: () => {
    //     this.a = 13 // a = www
    // }
})
