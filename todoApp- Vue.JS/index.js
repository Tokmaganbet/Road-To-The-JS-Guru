"use strict";

var app = new Vue({
    el: '#app',
    data: { 
        search: '',
        todoList: []
    },

    methods: {
        createTask: function(){
            const item = {
                id: this.todoList.length + 1,
                text: this.search,
                done: false,
                selected: false,
            }
            this.todoList.unshift(item)
            this.search = ''
        },
        selectAll: function(){
            for(const task of this.todoList) {
                task.selected = true
            }
        },
        remove: function(task) {
            this.todoList.splice(task, 1)
        },
        done: function(task) {
            task.done = true
        },
        removeSelectedTasks: function() {
            for(const task of this.todoList) {
                if(task.selected) {
                    this.todoList.splice(task, 1)
                }
            }
        },
        doneSelectedTasks: function() {
            for(const task of this.todoList) {
                if(task.selected) {
                    task.done = true
                }
            }
        }
    }

})