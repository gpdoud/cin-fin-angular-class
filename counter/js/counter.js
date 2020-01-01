"use strict";
var Counter = /** @class */ (function () {
    function Counter() {
        this.nbr = 0;
        this.getCtrl("nbr");
    }
    Counter.prototype.inc = function () { this.nbr++; this.display(); };
    Counter.prototype.dec = function () { this.nbr--; this.display(); };
    Counter.prototype.display = function () {
        this.ctrl.value = this.nbr;
        this.ctrl.style.color = this.nbr % 2 == 0 ? "red" : "black";
        this.ctrl.style.fontWeight = this.nbr % 3 == 0 ? "bold" : "normal";
        this.ctrl.style.fontStyle = this.nbr % 7 == 0 ? "italic" : "normal";
    };
    Counter.prototype.getCtrl = function (id) {
        this.ctrl = document.getElementById(id);
    };
    return Counter;
}());
var counter = new Counter();
counter.display();
