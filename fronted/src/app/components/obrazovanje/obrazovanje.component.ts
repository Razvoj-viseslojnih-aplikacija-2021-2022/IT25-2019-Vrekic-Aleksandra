import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Obrazovanje } from 'src/app/models/obrazovanje';
import { MatTableDataSource, MatTableDataSourcePaginator } from '@angular/material/table';
import { ObrazovanjeService } from 'src/app/services/obrazovanje.service';
import { Subscription } from 'rxjs';
import { ObrazovanjeDialogComponent } from '../dialogs/obrazovanje-dialog/obrazovanje-dialog.component';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-obrazovanje',
  templateUrl: './obrazovanje.component.html',
  styleUrls: ['./obrazovanje.component.css']
})
export class ObrazovanjeComponent implements OnInit, OnDestroy {

  displayedColumns = ['id', 'naziv', 'opis', 'stepenStrucneSpreme', 'actions'];
  dataSource!: MatTableDataSource<Obrazovanje>;
  subscription!: Subscription;
  @ViewChild(MatSort, {static: false}) sort!: MatSort;
  @ViewChild(MatPaginator, {static:false}) paginator!: MatPaginator;

  constructor( private obrazovanjeService: ObrazovanjeService,
    public dialog: MatDialog) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.loadData();
  }

  public loadData(){
    this.subscription = this.obrazovanjeService.getAllObrazovanja().subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }),
      (error: Error) => { console.log(error.name + ' ' + error.message) };
  }

  public openDialog(flag: number, id?:number, naziv?:string, opis?: string, stepenStrucneSpreme?: string) {
    const dialogRef = this.dialog.open(ObrazovanjeDialogComponent, {data:{id,naziv,opis, stepenStrucneSpreme}});

    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe((result: number) => {
      if(result == 1)
        this.loadData();
    });
  }

  public applyFilter(filterValue: any){
    filterValue = filterValue.target.value
    filterValue = filterValue.trim();
    filterValue = filterValue.toLocaleLowerCase();
    this.dataSource.filter = filterValue;

  }

}
