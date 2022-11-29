import { Effect } from "@donkeyclip/motorcortex";

export default class LineEffect extends Effect {
  onGetContext() {
    if (!this) {
      return;
    }
    this.canvasContext = this.element.getContext("2d");
    this.lines = [];
    this.w = this.canvasContext.canvas.width;
    this.h = this.canvasContext.canvas.height;
    const closeAngle = 29;
    this.angle = (-closeAngle * Math.PI) / 180;
    this.conf = {
      hue: this.attrs.hue || 90,
      shadow: this.attrs.shadow || false,
      width: this.attrs.width || 1,
      length: this.attrs.length || 1,
      emitNum: this.attrs.lineNumber || 50,
      speed: 1,
      opacity: this.attrs.opacity || 0.6,
    };

    this.bgDots = [
      {
        rad: (this.w + this.h) / 2,
        x: this.w / 2,
        y: 0,
        hue: 0,
      },
      {
        rad: (this.w + this.h) / 2,
        x: 0,
        y: this.h,
        hue: -45,
      },
      {
        rad: (this.w + this.h) / 2,
        x: this.w,
        y: this.h,
        hue: -90,
      },
    ];

    this.emitLine();
  }

  emitLine() {
    for (let i = 0; i < this.conf.emitNum; i++) {
      const rx = Math.random() * this.w + 100;
      const ry = Math.random() * this.h - 100;
      this.lines.push({
        x1: rx,
        y1: ry,
        x2: rx,
        y2: ry,
        length: (Math.random() * (260 - 80) + 80) * this.conf.length,
        width: (Math.random() * (15 - 5) + 5) * this.conf.width,
        v1: (Math.random() * (4 - 2) + 2) * this.conf.speed,
        v2: (Math.random() * (1 - 0.5) + 0.5) * this.conf.speed,
        hue: Math.random() * 50,
        test: Math.tan(this.angle) * (-length - rx) + ry,
      });
    }
  }

  drawLines(fr) {
    this.canvasContext.globalCompositeOperation = "lighter";
    for (let i = 0; i < this.lines.length; i++) {
      this.canvasContext.lineWidth = this.lines[i].width;
      this.canvasContext.beginPath();

      if (fr < 0.5) {
        this.lines[i].x1 =
          this.lines[i].x2 - this.lines[i].test * fr * this.lines[i].v2;
        this.lines[i].y1 =
          this.lines[i].y2 + this.lines[i].test * fr * this.lines[i].v2;

        this.canvasContext.moveTo(this.lines[i].x2, this.lines[i].y2);
        this.canvasContext.lineTo(this.lines[i].x1, this.lines[i].y1);
      } else {
        this.canvasContext.moveTo(
          this.lines[i].x2 - this.lines[i].test * (fr - 0.5) * this.lines[i].v1,
          this.lines[i].y2 + this.lines[i].test * (fr - 0.5) * this.lines[i].v1
        );
        if (
          this.lines[i].x2 -
            this.lines[i].test * (fr - 0.5) * this.lines[i].v1 >=
          this.lines[i].x1
        ) {
          this.canvasContext.lineTo(this.lines[i].x1, this.lines[i].y1);
        } else {
          this.canvasContext.lineTo(undefined, undefined);
        }
      }
      this.canvasContext.strokeStyle =
        "hsla(" +
        (this.conf.hue - this.lines[i].hue) +
        ", 100%, 50%, " +
        this.conf.opacity +
        ")";
      this.canvasContext.lineCap = "round";
      this.canvasContext.stroke();
      this.canvasContext.closePath();
    }
  }

  drawBackground() {
    this.canvasContext.globalCompositeOperation = "lighter";
    for (let i = 0; i < this.bgDots.length; i++) {
      const grd = this.canvasContext.createRadialGradient(
        this.bgDots[i].x,
        this.bgDots[i].y,
        0,
        this.bgDots[i].x,
        this.bgDots[i].y,
        this.bgDots[i].rad
      );
      grd.addColorStop(
        0,
        "hsla(" + (this.conf.hue + this.bgDots[i].hue) + ", 100%, 60%, 0.3)"
      );
      grd.addColorStop(
        1,
        "hsla(" + (this.conf.hue + this.bgDots[i].hue) + ", 100%, 50%, 0)"
      );
      this.canvasContext.beginPath();
      this.canvasContext.arc(
        this.bgDots[i].x,
        this.bgDots[i].y,
        this.bgDots[i].rad,
        0,
        Math.PI * 2
      );
      this.canvasContext.fillStyle = grd;
      this.canvasContext.fill();
      this.canvasContext.closePath();
    }
  }

  clear() {
    this.canvasContext.globalCompositeOperation = "source-over";
    this.canvasContext.beginPath();
    this.canvasContext.fillStyle = "#000";
    this.canvasContext.fillRect(0, 0, this.w, this.h);
    this.canvasContext.closePath();
  }

  onProgress(ms) {
    this.clear();
    this.drawBackground();
    this.drawLines(this.getFraction(ms));
  }
}
