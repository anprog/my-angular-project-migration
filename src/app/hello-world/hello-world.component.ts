import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { trigger, state, style, transition, animate } from '@angular/animations';

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
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule],
  animations: [
    trigger('arrowPosition', [
      state('start', style({ })),
    ])
  ],
})
export class HelloWorldComponent implements AfterViewInit {
  @Input() name: string = '';

  displayedColumns: string[] = ['id', 'nome', 'cognome'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    // Crea 10 utenti
    const users = Array.from({length: 10}, (_, k) => createNewUser(k + 1));
    this.dataSource = new MatTableDataSource(users);
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
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const nome =
    NOMI[Math.round(Math.random() * (NOMI.length - 1))];

  const cognome =
    COGNOMI[Math.round(Math.random() * (COGNOMI.length - 1))];

  return {
    id: id.toString(),
    nome: nome,
    cognome: cognome
  };
}
