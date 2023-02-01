import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { PersonalDataSource, PersonalItem } from './personal-datasource';
// import { PersonalService } from './../../personal.service';
import { Router } from '@angular/router';
import { Personal } from 'src/personal';


@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements AfterViewInit,OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<PersonalItem>;
  dataSource: PersonalDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];
  submitted: boolean = false;
  


  constructor( private router: Router) {
    this.dataSource = new PersonalDataSource();
    
  
  }
  ngOnInit(): void {
   
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}


