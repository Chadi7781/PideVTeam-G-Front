import { HttpErrorResponse } from '@angular/common/http';
import {Component, NgZone, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { CrudServiceVisite } from '../service/service-visite/crud-visite.service';
import moment from 'moment'

@Component({
  selector: 'app-visite',
  templateUrl: './visite.component.html',
  styleUrls: ['./visite.component.css']
})
export class VisiteComponent implements OnInit {
  myDateValue: Date;
  toDate:Date;
  duplicateArray=[]
  visites:any=[];
  lieu:any;
  nomLieu:any
  showForm:boolean;
  showDistance:boolean;
  searchText = "";
  constructor(private crudService: CrudServiceVisite,
    private router: Router,
    private ngZone: NgZone,
    
    ) { }

   
    ngOnInit(): void {
      this.showForm=false;
      this.showDistance=false;
      this.crudService.GetVisite().subscribe(res => {
        console.log(res)
        this.visites =res;

 

       }); 

       this.duplicateArray=this.visites;
       this.myDateValue = new Date("12-08-2019");


  }

  getLieuById (nomLieu:any) :any {
    this.crudService.GetLieuById(nomLieu).subscribe(res => {
     
      this.lieu=res;//get nom of lieu

      return  this.lieu;
    },
    (error: HttpErrorResponse) => {
      console.log(error);
      alert("eee"+error.message);
    }
  );

  }
  



    
    

    show(){
      this.showForm=true;
    }

    showFormDistance(){
      
      this.showDistance=true;
    }

    deleteVisite(id:any, i:any) {
      console.log(id);
      if(window.confirm('Do you want to go ahead?')) {
        this.crudService.deleteVisite(id).subscribe((res) => {
          this.  visites.splice(i, 1);
  
        })
      }
    }

 



    //SEARCH METIER ::
    onDateChange(newDate: Date) {
      console.log(newDate);
    }
  
     reverseAndTimeStamp(dateString:any) {
          const reverse = new Date(dateString.split("-").reverse().join("-"));
          return reverse.getTime();
          }
      filterDate() {
          let fromdate=moment(this.myDateValue).format('DD-MM-YYYY');
      console.log(fromdate)
      let todate=moment(this.toDate).format('DD-MM-YYYY');
      if(this.myDateValue && this.toDate){
      const selectedMembers = this.visites.filter((m: { fromDate: any; }) => {
              return this.reverseAndTimeStamp(m.fromDate) >= this.reverseAndTimeStamp(fromdate) && this.reverseAndTimeStamp(m.fromDate) <= this.reverseAndTimeStamp(todate)
          }
          );
          this.duplicateArray=selectedMembers
      }else{
  this.duplicateArray=this.visites
      }
          
          console.log(this.duplicateArray); // the result objects
      }
  

  }