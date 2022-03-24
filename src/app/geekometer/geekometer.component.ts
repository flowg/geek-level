/**
 * Angular imports
 */
import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-geekometer',
  templateUrl: './geekometer.component.html',
  styleUrls: ['./geekometer.component.scss']
} )
export class GeekometerComponent implements OnInit {
  angle: number | undefined;

  private angleOffset = 20;

  ngOnInit(): void {
    this.computePointerAngle();
  }

  private computePointerAngle(variation?: number): void {
    if ( !variation ) {
      this.angle = this.angle ?? this.angleOffset;

      return;
    }

    const amplitude = 360 - 2 * this.angleOffset;
  }
}
