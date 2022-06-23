import { useEffect, useRef } from 'react';

type TextObj = {
    position: {
        x: number;
        y: number;
    };
    text: string;
    key: number;
};
const DURATION_CONSTANT = 5;
class SlotItem {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private textArray: TextObj[] = [];
    private currentKey: number = 0;
    private timer: number = 0;
    private isDone: boolean = false;
    private duration: number;
    private targetNumber: number;
    private textColor: string;
    constructor(
        canvas: HTMLCanvasElement,
        targetNumber: number,
        duration = 1,
        textColor = 'black'
    ) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
        this.duration = duration * DURATION_CONSTANT;
        this.textColor = textColor;
        this.targetNumber = targetNumber;
        this.ctx.fillStyle = this.textColor;
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.font = `${this.canvas.height}px sans-serif`;
        this.draw();
    }
    public draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        if (this.timer % 10 === 0) {
            this.generateText(
                { x: this.canvas.width / 2, y: (this.canvas.height / 2) * -1 },
                String(Math.floor(Math.random() * 10))
            );
        }
        this.textArray.forEach((text: TextObj) => {
            this.drawRect(text);
            this.moveText(text, this.canvas.height / 4);
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
        this.ctx.fillText(text.text, x, y);
    }
    removeText(key: number) {
        this.textArray = this.textArray.filter((text) => text.key !== key);
    }
    isOutOfCanvas(text: TextObj) {
        return text.position.y > this.canvas.height;
    }
    checkIsDone() {
        if (this.timer > this.duration) {
            this.isDone = true;
            this.finishDrawing();
        }
    }
    finishDrawing() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillText(
            String(this.targetNumber),
            this.canvas.width / 2,
            this.canvas.height / 2
        );
    }
}

function useSlotItem(
    duration: number,
    targetNumber: number,
    textColor: string
) {
    const canvas = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvas) return;
        const element = canvas.current!;
        new SlotItem(element, targetNumber, duration, textColor);
    }, [canvas, targetNumber, duration, textColor]);

    return canvas;
}

export default useSlotItem;
