var app = (function() {

    var _throttle = function (callback, interval) {
        var wait = false;
        return function () {
            if (!wait) {
                callback.call();
                wait = true;
                setTimeout(function () {
                    wait = false;
                }, interval);
            }
        };
    };
    var _debounce = function (func, wait, immediate) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    var _hasClass = function(element, cls) {
        return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
    }

    var toggleLnbMenu = function() {
        document.querySelector('.btn-menu').addEventListener('click', function(e) {
            e.preventDefault();
            
            if (_hasClass(this, 'on')) {
                this.className = 'btn-menu';
                var lnb = document.querySelector('.lnb');
                lnb.className = 'lnb';
            } else {
                this.className = 'btn-menu on';
                var lnb = document.querySelector('.lnb');
                lnb.className = 'lnb on';
            }
        });

        window.addEventListener('resize', _throttle(function() {
            if(window.innerWidth > 1080) {
                document.querySelector('.btn-menu').className = 'btn-menu';
                var lnb = document.querySelector('.lnb');
                lnb.className = 'lnb';
            }
            console.log(window.innerWidth);
        }, 200));
    };

    

    return {
        toggleLnbMenu: toggleLnbMenu
    };

}());