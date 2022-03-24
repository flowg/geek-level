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
  level = 0;
  variationStep = 5;

  ngOnInit(): void {
    this.computePointerAngle();
  }

  computePointerAngle( percentageVariation?: number ): void {
    console.log(percentageVariation)
    if ( percentageVariation ) {
      const amplitude = 360 - 2 * angleOffset;
      const degreeVariation = ( amplitude * percentageVariation ) / 200;
      const expectedAngle = this.angle + degreeVariation;
      if ( expectedAngle < angleOffset ) {
        this.angle = angleOffset;
        this.level = 0;
      } else if ( expectedAngle > 360 - angleOffset ) {
        this.angle = 360 - angleOffset;
        this.level = 200;
      } else {
        this.angle = expectedAngle;
        this.level += percentageVariation;
      }
    }
  }
}
