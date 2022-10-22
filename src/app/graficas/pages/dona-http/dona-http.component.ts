import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.css']
})
export class DonaHttpComponent implements OnInit {

  constructor(

    private GraficasService:GraficasService

    ) { }

  ngOnInit(): void {
    this.GraficasService.getUsuariosRedesSociales().subscribe( resp => {
        const labels = Object.keys( resp )

        const values = Object.values( resp )

        this.doughnutChartData={
          labels,
          datasets:[{data:values, backgroundColor: [ '#1877f2', '#FF0000', '#25D366', '#00B2FF', '#D43089' ]}]
        }
      }
    )
  }

  public doughnutChartLabels: string[] =  []/* [ 'Dascargas', 'Ventas en tienda', 'Venta online' ] */;
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: []
      },
    ]
  };

  public doughnutChartType: ChartType = 'doughnut';

}
