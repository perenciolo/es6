class Message {
    constructor(text = '', created = Date.now()) {
        this.text = text;
        this._created = created;
    }

    get created() {
        return this._created;
    }

    set created(created) {
        this._created = created;
    }

    toString() {
        return `Message ${this.text} created at ${this.created}`;
    }
}

var emptyMessage = new Message();
var notEmptyMessage = new Message('Yesterday message', Date.now() - 86400);
console.log(emptyMessage + '');
console.log(notEmptyMessage.toString());

