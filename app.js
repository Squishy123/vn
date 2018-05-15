class Dialogue extends Actor {
    constructor(text) {
        super(document.createElement('div'));
        this.element.className = 'dialogue container-fluid fixed-bottom';

        this.styleElement({ 'background-color': '#aad3f7' })

        this.text = text;
        this.index = 0;
        this.timer = new Timer();
        this.blink = 1;
    }

    render() {
        if (this.index <= this.text.length) {
            if (this.timer.millisecondsElapsed() >= 50) {
                this.timer.mark();
                this.element.innerHTML = `<p class="display-4">${this.text.substring(0, this.index)}</p>`;
                this.index++;
            }
        } else {
            if (this.timer.millisecondsElapsed() >= 500) {
                if(this.blink > 3) this.blink = 1;
                this.timer.mark();
                this.element.innerHTML = `<p class="display-4">${this.text}${('...').substring(0, this.blink)}</p>`
                this.blink++;
                //console.log(this.blink)
            }
        }
    }
}

let stage = new Stage(document.querySelector('#stage'));
stage.start(120, 120);
stage.addActor(new Dialogue("Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows"))