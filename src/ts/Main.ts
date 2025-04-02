import {settings} from "./settings";
import {randomInt} from "./framework25/helpers/random";
import {FallingObstacle} from "./FallingObstacle";
import {Animation} from "./framework25/Animation";
import {isPointInCircle} from "./framework25/helpers/collision";

class Main {
    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private readonly hue: number;
    private readonly fallingObstacles: FallingObstacle[] = [];
    private readonly animation: Animation;

    constructor() {
        this.canvas = document.getElementById(settings.canvasID) as HTMLCanvasElement;
        this.ctx = this.canvas.getContext("2d");
        this.hue = randomInt(1, 360);
        this.addEventListeners();
        this.resizeCanvas();
        this.addFallingObstacles();
        this.animation = new Animation(this.canvas, this.ctx, this.fallingObstacles);
        this.animation.start();
    }

    private resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }


    private addEventListeners() {
        window.addEventListener("resize", () => {
            this.resizeCanvas();
        });

        this.canvas.addEventListener("click", (evt) => {
            for (const fallingObstacle of this.fallingObstacles) {
                if (isPointInCircle({
                    x: evt.clientX,
                    y: evt.clientY
                }, fallingObstacle.position, fallingObstacle.radius)) {
                    fallingObstacle.color = settings.redColor;
                }
            }
        })

    }

    private addFallingObstacles() {
        for (let i = 0; i < settings.maxFallingObstacles; i++) {
            this.fallingObstacles.push(new FallingObstacle(this.ctx, this.canvas, this.hue));
        }
    }
}

new Main();