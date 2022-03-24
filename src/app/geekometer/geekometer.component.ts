/**
 * Angular imports
 */
import { Component, OnInit } from '@angular/core';

/**
 * TypeScript entities and constants
 */
const angleOffset = 20;

@Component( {
  selector: 'app-geekometer',
  templateUrl: './geekometer.component.html',
  styleUrls: ['./geekometer.component.scss']
} )
export class GeekometerComponent implements OnInit {
  angle = angleOffset;

  ngOnInit(): void {
    this.computePointerAngle();
  }

  computePointerAngle( percentageVariation?: number ): void {
    if ( percentageVariation ) {
      const amplitude = 360 - 2 * angleOffset;
      const degreeVariation = ( amplitude * percentageVariation ) / 200;
      const expectedAngle = this.angle + degreeVariation;
      if ( expectedAngle < angleOffset ) {
        this.angle = angleOffset;
      } else if ( expectedAngle > 360 - angleOffset ) {
        this.angle = 360 - angleOffset;
      } else {
        this.angle = expectedAngle;
      }
    }
  }
}
