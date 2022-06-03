import { useEffect, useRef } from 'react';

type TextObj = {
    position: {
        x: number;
        y: number;
    };
    text: string;
    key: number;
};
const DURATION_CONSTANT = 2;
class SlotItem {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private textArray: TextObj[] = [];
    private currentKey: number = 0;
    private timer: number = 0;
    private isDone: boolean = false;
    private duration: number;
    private targetNumber: number;
    constructor(
        canvas: HTMLCanvasElement,
        targetNumber: number,
        duration = 10
    ) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
        this.duration = duration * DURATION_CONSTANT;
        this.targetNumber = targetNumber;
        this.draw();
    }
    public draw() {
        this.ctx.clearRect(0, 0, 200, 200);
        if (this.timer % 10 === 0) {
            this.generateText(
                { x: 0, y: -50 },
                String(Math.floor(Math.random() * 10))
            );
        }
        this.textArray.forEach((text: TextObj) => {
            this.drawRect(text);
            this.moveText(text, 70);
            if (this.isOutOfCanvas(text)) {
                this.removeText(text.key);
            }
        });
        this.timer++;
        this.checkIsDone();
        if (!this.isDone) {
            requestAnimationFrame(() => {
                this.draw();
            });
        }
    }
    generateText(initialPosition: { x: number; y: number }, text: string) {
        this.textArray.push({
            text,
            position: initialPosition,
            key: this.currentKey++,
        });
    }
    moveText(text: TextObj, speed: number) {
        text.position.y = text.position.y + speed;
    }
    drawRect(text: TextObj) {
        const { x, y } = text.position;
        this.ctx.fillStyle = 'black';
        this.ctx.font = '150px sans-serif';
        this.ctx.fillText(text.text, x, y, 1000);
    }
    removeText(key: number) {
        this.textArray = this.textArray.filter((text) => text.key !== key);
    }
    isOutOfCanvas(text: TextObj) {
        return text.position.y > 200;
    }
    checkIsDone() {
        if (this.timer > this.duration) {
            this.isDone = true;
            this.finishDrawing();
        }
    }
    finishDrawing() {
        this.ctx.clearRect(0, 0, 200, 200);
        this.ctx.fillStyle = 'black';
        this.ctx.font = '150px sans-serif';
        this.ctx.fillText(String(this.targetNumber), 0, 110, 1000);
    }
}

function useSlotItem(duration: number, targetNumber: number) {
    const canvas = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (canvas) {
            const element = canvas.current!;
            new SlotItem(element, targetNumber, duration);
        }
    }, [canvas, targetNumber, duration]);

    return canvas;
}

export default useSlotItem;
