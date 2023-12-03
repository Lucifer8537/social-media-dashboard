import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-day-overview',
  templateUrl: './day-overview.component.html',
  styleUrls: ['./day-overview.component.css'],
})
export class DayOverviewComponent {
  @Input() darkTheme!: boolean;
  @Input() action!: string;
  @Input() imgSrc!: string;
  @Input() count!: string;
  @Input() icon!: string;
  @Input() perc!: string;
  @Input() percColor!: string;
}
