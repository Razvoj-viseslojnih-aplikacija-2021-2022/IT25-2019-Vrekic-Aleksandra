import {  Component, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Obrazovanje } from 'src/app/models/obrazovanje';
import { Radnik } from 'src/app/models/radnik';
import { Sektor } from 'src/app/models/sektor';
import { RadnikService } from 'src/app/services/radnik.service';
import { RadnikDialogComponent } from '../dialogs/radnik-dialog/radnik-dialog.component';


@Component({
  selector: 'app-radnik',
  templateUrl: './radnik.component.html',
  styleUrls: ['./radnik.component.css']
})
export class RadnikComponent implements OnInit, OnChanges {

  displayedColumns = ['id', 'brojLk', 'ime', 'prezime', 'obrazovanje', 'sektor', 'actions'];
  dataSource!: MatTableDataSource<Radnik>;
  @ViewChild(MatSort, {static: false}) sort!: MatSort;
  @ViewChild(MatPaginator, {static:false}) paginator!: MatPaginator;


  @Input()
  selektovanSektor!: Sektor;



  constructor(private RadnikService: RadnikService,
    public dialog: MatDialog) { }


  ngOnInit(): void {
    //console.log(this.selektovanSektor);
    //this.loadData();
  }

  ngOnChanges(): void {
    if(this.selektovanSektor.id){
      this.loadData();
    }

  }

  public loadData() {
    this.RadnikService.getRadniciZaSektor(this.selektovanSektor.id)
    .subscribe(data => {
      this.dataSource= new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }),
    (error: Error) => { console.log(error.name + ' ' + error.message) };
  }

  public openDialog(flag: number, id?:number, brojLk?:number, ime?: string, prezime?: string, obrazovanje?: Obrazovanje, sektor?: Sektor ){
    const dialogRef = this.dialog.open(RadnikDialogComponent, {data: {id, brojLk, ime, prezime, obrazovanje, sektor}});

    dialogRef.componentInstance.flag=flag;
    if(flag===1)
    {
      dialogRef.componentInstance.data.sektor=this.selektovanSektor;
    }

    dialogRef.afterClosed().subscribe(res => {
      this.loadData()
    })
  }

  public applyFilter(filterValue: any){
    filterValue = filterValue.target.value
    filterValue = filterValue.trim();
    filterValue = filterValue.toLocaleLowerCase();
    this.dataSource.filter = filterValue;

  }

}
