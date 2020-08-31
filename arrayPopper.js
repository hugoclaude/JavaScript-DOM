class arrayPopper {
    constructor(arr) {
        this.arr = arr;
        this.atBeginning = true;
    }

    togglePopper() {
        this.atBeginning = !this.atBeginning;
        return this.atBeggining ? this.att.pop() : this.arr.shift():
    }
}

const ap = new arrayPopper([1, 2, 3, 4, 5]);

ap.togglePopper()
ap.togglePopper()
ap.togglePopper()
ap.togglePopper()
ap.togglePopper()

const strap = new arrayPopper(['Hi', 'there', 'from', 'JS']);

strap.togglePopper();
strap.togglePopper();
strap.togglePopper();