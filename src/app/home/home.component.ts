import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  @ViewChild("canvas", { static: true })
  public canvas: ElementRef<HTMLCanvasElement>;

  public ctx: CanvasRenderingContext2D;

  public width = 500;
  public height = 300;

  constructor() {}

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext("2d");

    requestAnimationFrame(() =>this.draw());
  }

  public draw() {
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(0, 0, this.width, this.height);

  }
}
