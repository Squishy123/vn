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
                if (this.blink > 3) this.blink = 1;
                this.timer.mark();
                this.element.innerHTML = `<p class="display-4">${this.text}${('...').substring(0, this.blink)}</p>`
                this.blink++;
                //console.log(this.blink)
            }
        }
    }
}

class Cube extends Actor {
    constructor() {
        super(document.createElement('div'));
        this.setBounds({ width: 400, height: 400 });
        this.styleElement(
            {
                'position': 'fixed',
                'background-color': 'yellow'
            }
        );

        let obj = this;
        //setup mouse listener
        window.onmousemove = function logMouse(event) {
            let e = event || window.event;
            obj.mx = e.clientX;
            obj.my = e.clientY;
        }

        //setup vector stuff
        this.vx = 0;
        this.vy = 0; 


    }

    render() {
        console.log(this.mx)
        /*
        if(this.mx > 800) this.mx = 800;
        if(this.mx < 300) this.mx = 300;
*/
        this.styleElement({
            "-webkit-transform": `rotateY(${this.mx}deg) rotateX(${this.my}deg)`,
            transform: `rotateY(${this.mx}deg) rotateX(${this.my}deg)`
        })
    }
}

let stage = new Stage(document.querySelector('#stage'));
stage.start(120, 120);
stage.addActor(new Dialogue("Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows"))
stage.addActor(new Cube(), { x: window.innerWidth / 2 - 200, y: 50})