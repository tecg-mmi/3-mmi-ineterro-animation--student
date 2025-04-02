import {Circle} from "./framework25/shapes/Circle";
import {Hsl} from "./framework25/colors/Hsl";
import {randomInt} from "./framework25/helpers/random";
import {settings} from "./settings";
import {iAnimatable} from "./framework25/types/iAnimatable";

export class FallingObstacle extends Circle implements iAnimatable {
    private speed: number;
    private readonly canvas: HTMLCanvasElement;
    private readonly hue: number;

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, hue: number) {
        super(ctx, {
            x: 0,
            y: 0
        }, null, 0);
        this.hue = hue;
        this.canvas = canvas;
        this.initValues();
    }

    update() {
        this.position.y += this.speed;
    }

    animate() {
        this.update();
        if (this.position.y >= this.canvas.height + this.radius) {
            this.initValues();
        }
        super.draw();
    }

    private initValues() {
        this.position.y = -this.radius;
        this.position.x = randomInt(this.radius, this.canvas.width - this.radius);
        this.color = new Hsl(this.hue, randomInt(1, 100), randomInt(1, 100),);
        this.radius = randomInt(settings.minRadius, settings.maxRadius);
        this.speed = randomInt(settings.minSpeed, settings.maxSpeed);
    }
}