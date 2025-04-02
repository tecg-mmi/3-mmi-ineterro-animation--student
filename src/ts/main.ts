import {settings} from "./settings";
import {randomInt} from "./framework25/helpers/random";
import {FallingObstacle} from "./FallingObstacle";
import {Animation} from "./framework25/Animation";
import {isPointInCircle} from "./framework25/helpers/collision";

export class Main {
    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private readonly hue: number = randomInt(1, 360);
    private readonly fallingObstacles: FallingObstacle[] = [];
    private readonly animation: Animation;

    constructor() {
        this.canvas = document.getElementById(settings.canvasID) as HTMLCanvasElement;
        this.ctx = this.canvas.getContext("2d");
        this.animation = new Animation(this.ctx, this.canvas, this.fallingObstacles)
        this.resizeCanvas();
        this.addEventListeners();
        this.addFallingObstacles();
        this.animation.start();
    }

    resizeCanvas() {
        this.canvas.width = innerWidth;
        this.canvas.height = innerHeight;
    }

    private addEventListeners() {
        window.addEventListener("resize", () => {
            this.resizeCanvas();
        });

        this.canvas.addEventListener("click", (event) => {
            for (const fallingObstacle of this.fallingObstacles) {
                if (isPointInCircle(fallingObstacle.position, {
                    x: event.clientX,
                    y: event.clientY
                }, fallingObstacle.radius)) {
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