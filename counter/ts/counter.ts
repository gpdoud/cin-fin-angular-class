class Counter {
    nbr: number;
    ctrl: any;

    inc(): void { this.nbr++; this.display(); }
    dec(): void { this.nbr--; this.display(); }

    display(): void {
        this.ctrl.value = this.nbr;
        this.ctrl.style.color = this.nbr % 2 == 0 ? "red": "black";
        this.ctrl.style.fontWeight = this.nbr % 3 == 0 ? "bold": "normal";
        this.ctrl.style.fontStyle = this.nbr % 7 == 0 ? "italic": "normal";
    }
    getCtrl(id: string) {
        this.ctrl = document.getElementById(id);
    }

    constructor() {
        this.nbr = 0;
        this.getCtrl("nbr");
    }
}
let counter = new Counter();
counter.display();
