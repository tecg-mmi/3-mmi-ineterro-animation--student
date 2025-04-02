import {FallingObstacle} from "../FallingObstacle";

export class Animation {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private fallingObstacles: FallingObstacle[];

    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, fallingObstacles: FallingObstacle[] = []) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.fallingObstacles = fallingObstacles;
    }

    start() {
        this.animate();
    }


    registerFallingObstacle(obstacle: FallingObstacle) {
        this.fallingObstacles.push(obstacle);
    }

    private animate() {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (const fallingObstacle of this.fallingObstacles) {
            fallingObstacle.animate()
        }

        requestAnimationFrame(this.animate.bind(this));
    }

}