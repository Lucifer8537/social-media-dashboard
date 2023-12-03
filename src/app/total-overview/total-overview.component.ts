import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-total-overview',
  templateUrl: './total-overview.component.html',
  styleUrls: ['./total-overview.component.css'],
})
export class TotalOverviewComponent {
  @Input() darkTheme!: boolean;
  @Input() bgColor!: string;
  @Input() imgSrc!: string;
  @Input() id!: string;
  @Input() subCount!: string;
  @Input() subLabel!: string;
  @Input() icon!: string;
  @Input() todaySub!: string;
  @Input() todayLabelColor!: string;
}
