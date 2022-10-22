import { Component } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-barras-doble',
  templateUrl: './barras-doble.component.html',
  styleUrls: ['./barras-doble.component.css']
})
export class BarrasDobleComponent {

  labelsData: string[] = ['2021', '2022', '2023', '2024', '2025'];

    proveedoresData: ChartData<'bar'> = {
        labels: this.labelsData,
        datasets:[
            { data: [100, 200, 300, 400, 500], label: 'Vendedor A', backgroundColor: '#A6239C', hoverBackgroundColor: '#8A1D82' },
            { data: [50, 250, 30, 450, 200], label: 'Vendedor B', backgroundColor: '#6323A6', hoverBackgroundColor: '#451873' }
        ]
    };

    productoData: ChartData<'bar'> = {
        labels: this.labelsData,
        datasets:[
            { data: [200, 300, 400, 300, 100], label: 'Chohes', backgroundColor: '#9C2155', hoverBackgroundColor: '#7A1A44' }
        ]
    };

}
