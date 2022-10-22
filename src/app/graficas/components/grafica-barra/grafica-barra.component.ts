import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartType, ChartEvent, ChartConfiguration, ChartData } from 'chart.js';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styleUrls: ['./grafica-barra.component.css']
})
export class GraficaBarraComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @Input() horizontal: boolean = false;
  @Input() barChartData!: ChartData<'bar'>;

  constructor(){}

  ngOnInit(): void {
      if (this.horizontal){
          //Esto muestra la gráfica en sentido horizontal y todos los datos en ese sentido.
          this.barChartOptions!.indexAxis = 'y';
          this.barChartOptions!.scales!["y"]!.min = 0;
      }
  }

  public barChartOptions: ChartConfiguration['options'] = {
      responsive: true,
      scales: {
          x: {},
          y: {
              min: 10
          }
      },
      plugins: {
          legend: {
              display: true,
          },
          datalabels: {
              anchor: 'end',
              align: 'end'
          }
      }
  }

  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
      DataLabelsPlugin
  ];

  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {}

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {}

  public randomize(): void {

      this.barChartData.datasets.forEach( g => {

         let data: number[] = []

         g.data.forEach( (__) => {

          data.push(Math.round(Math.random() * 100))

        })

        g.data = data
    })

      this.chart?.update();
  }

}
