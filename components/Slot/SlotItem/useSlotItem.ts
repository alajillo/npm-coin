import { useEffect, useRef } from 'react';

type TextObj = {
    position: {
        x: number;
        y: number;
    };
    text: string;
    key: number;
};
class SlotItem {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private textArray: TextObj[] = [];
    private currentKey: number = 0;
    private timer: number = 0;
    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
        setInterval(() => {
            this.draw();
        }, 10);
    }
    public draw() {
        this.ctx.clearRect(0, 0, 200, 200);
        if (this.timer % 10 === 0) {
            this.generateText(
                { x: 50, y: -50 },
                String(Math.floor(Math.random() * 10))
            );
        }
        this.textArray.forEach((text: TextObj) => {
            this.drawRect(text);
            this.moveText(text, 20);
            if (this.isOutOfCanvas(text)) {
                this.removeText(text.key);
            }
        });
        this.timer++;
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
        this.ctx.font = '100px serif';
        this.ctx.fillText(text.text, x, y, 50);
    }
    removeText(key: number) {
        this.textArray = this.textArray.filter((text) => text.key !== key);
    }
    isOutOfCanvas(text: TextObj) {
        return text.position.y > 200;
    }
}

function useSlotItem() {
    const canvas = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (canvas) {
            const element = canvas.current!;
            new SlotItem(element);
        }
    }, [canvas]);

    return canvas;
}

export default useSlotItem;
