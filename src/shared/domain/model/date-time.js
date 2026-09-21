export class DateTime {
    #date;
    constructor(value) {
        const date = new Date(value);
        if(isNaN(date.getTime())) {
            throw new Error("Invalid date-time value");
        }
        this.#date = date;
        Object.freeze(this);
    }

    isFuture(){
        return this.#date>new Date();
    }

    format(locale = 'en-US', options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
    }) {
        return this.#date.toLocaleString(locale, options);
    }

    toDate(){
        return this.#date;
    }

    toISOString(){
        return this.#date.toISOString();
    }

    valueOf() {
        return this.#date.valueOf();
    }

    static now() {
        return new DateTime(new Date());
    }
}