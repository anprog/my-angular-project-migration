import {AfterViewInit, Component, Inject, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {state, style, trigger} from '@angular/animations';
import {MatButton} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {RowDetailsModalComponent} from '../row-details-modal/row-details-modal.component';

export interface UserData {
  id: string;
  nome: string;
  cognome: string;
}

const NOMI: string[] = [
  'Maia',
  'Asher',
  'Olivia',
];

const COGNOMI: string[] = [
  'ROSSI',
  'GIALLO',
  'VERDE',
];

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.css',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatButton, NgIf, MatDialogModule],
  animations: [
    trigger('arrowPosition', [
      state('start', style({ })),
    ])
  ],
})
export class HelloWorldComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'nome', 'cognome'];
  dataSource: MatTableDataSource<UserData>;

  selectedRow: any | null = null; // Riga selezionata

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(@Inject('ajsDataService') private dataService: any, private  dialog: MatDialog) {

    console.log("dati da angularjs:", JSON.stringify(dataService.getData()));
    this.dataSource = new MatTableDataSource(dataService.getData());
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  openDetails(row: any): void {
    this.dialog.open(RowDetailsModalComponent, {
      width: '400px',
      data: row, // Passa i dati della riga alla modale
    });
  }

}
