import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Preduzece } from 'src/app/models/preduzece';
import { Sektor } from 'src/app/models/sektor';
//import { PreduzeceService } from 'src/app/services/preduzece.service';
import { SektorService } from 'src/app/services/sektor.service';
//import { PreduzeceDialogComponent } from '../dialogs/preduzece-dialog/preduzece-dialog.component';
import { SektorDialogComponent } from '../dialogs/sektor-dialog/sektor-dialog.component';

@Component({
  selector: 'app-sektor',
  templateUrl: './sektor.component.html',
  styleUrls: ['./sektor.component.css']
})
export class SektorComponent implements OnInit, OnDestroy{

  displayedColumns = ['id', 'naziv', 'oznaka', 'preduzece', 'actions'];
  dataSource!: MatTableDataSource<Sektor>;
  selektovanSektor!: Sektor;
  subscription!: Subscription;
  @ViewChild(MatSort, {static: false}) sort!: MatSort;
  @ViewChild(MatPaginator, {static:false}) paginator!: MatPaginator;


  constructor( private sektorService: SektorService,
    public dialog: MatDialog) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.loadData();
  }

  public loadData(){
    this.subscription = this.sektorService.getAllSektors().subscribe(
      (data) => {
        this.dataSource = new MatTableDataSource(data);


                //pretraga po nazivu ugnjezdenog objekta
          this.dataSource.filterPredicate = (data: any, filter: string) => {
              const accumulator = (currentTerm: any, key: any) => {
                  return (key === 'preduzece' ? currentTerm + data.preduzece.naziv : currentTerm + data[key]);
              }
              const dataStr = Object.keys(data).reduce(accumulator, '').toLocaleLowerCase();
              const transformedFilter = filter.trim().toLocaleLowerCase();
              return dataStr.indexOf(transformedFilter) !== -1;
          }



        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }),
      (error: Error) => { console.log(error.name + ' ' + error.message) };
  }

  public openDialog(flag: number, id?:number, naziv?:string, oznaka?: string, preduzece?: Preduzece ) {
    const dialogRef = this.dialog.open(SektorDialogComponent, {data:{id, naziv, oznaka, preduzece}});

    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe((result: number) => {
      if(result == 1)
        this.loadData();
    });
  }

  selectRow(row: any) {
   // console.log(row);
   this.selektovanSektor = row;
   console.log(this.selektovanSektor);
  }

  public applyFilter(filterValue: any){
    filterValue = filterValue.target.value
    filterValue = filterValue.trim();
    filterValue = filterValue.toLocaleLowerCase();
    this.dataSource.filter = filterValue;

  }




}
