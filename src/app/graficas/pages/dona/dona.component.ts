import { Component } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent {

  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ], backgroundColor: [ '#9C2155', '#A6239C', '#6323A6'] },
    ],


  };
  public doughnutChartType: ChartType = 'doughnut';


  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {

  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {

  }

}
