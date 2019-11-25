(() => {
    const $ = function $ (selector) {
        const elements = document.querySelectorAll(selector)

        var obj = {}

        obj.hidden = () => {
            for (const element of elements) {
                element.style.display = 'none'
            }
            return obj
        }

        obj.show = () => {
            for (const element of elements) {
                element.style.display = ''
            }
            return obj
        }

        obj.width = () => {
            for (const element of elements) {
                const width = getComputedStyle(element).width;
            }
            return obj
        }

        obj.toggle = () => {
            for (const element of elements) {
                if(element.style.display === 'none') {
                    element.style.display = ''
                } else {
                    element.style.display = 'none'
                }
            }
            return obj
        }
         
        obj.addClass = className => {
            for (const element of elements) {
                element.classList.add(className)
            }
            return obj
        }

        obj.removeClass = className => {
            for (const element of elements) {
                element.classList.remove(className)
            }
            return obj
        }

        obj.removeClass = className => {
            for (const element of elements) {
                element.classList.remove(className)
            }
            return obj
        }

        obj.toggleClass = className => {
            // bad code but he's working
            for (const element of elements) {
                var classes = []
                for(classNameTwo of element.classList) {
                    classes.push(classNameTwo)
                }
                if(classes.includes(className)) {
                    element.classList.remove(className)
                } else {
                    element.classList.add(className)
                }
            }
            return obj
        }

        obj.on = (eventName, func) => {
            for (const element of elements) {
                element.addEventListener(eventName, func)
            }
            return obj
        }

        obj.off = (eventName, func) => {
            for (const element of elements) {
                element.removeEventListener(eventName, func)
            }
            return obj
        }

        return obj

    }

    window.$ = $
})()