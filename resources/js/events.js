var events = {
    events: {},
    on: function(eventName, fun) {
        this.events[eventName] = this.events[eventName] || []
        this.events[eventName].push(fun);
    },
    off: function(eventName, fn) {

        if (this.events[eventName]) {
            for (var i = 0; i < this.events[eventName].length; i++) {
                console.log()
                if (this.events[eventName][i] == fn) {

                    this.events[eventName].splice(i, 1);
                }

            }
        }
    },
    emit: function(eventname, data) {
        if (this.events[eventname]) {
            this.events[eventname].forEach(function(fn) {

                fn(data);

            });
        }
    },
    emit3: function(eventname, data, temp, el) {
        if (this.events[eventname]) {
            this.events[eventname].forEach(function(fn) {

                fn(data, temp, el);

            });
        }
    }
}