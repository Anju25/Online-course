import { Component, OnInit } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import {InfoService} from '../front/info.service';


@Component({
  selector: 'app-courseinfo',
  templateUrl: './courseinfo.component.html',
  styleUrls: ['./courseinfo.component.css']
})
export class CourseinfoComponent implements OnInit {
  
  data:Array<any>
  msg:string;

  courses:any[];
  index1="Next Session Date";
  index2="Child Subject";
  index3="Provider";
  date:any[];
  subject:any[];
  provider:any[];
  value:any;
  selectedvalue:any;
  
 /* col=["Course Name","Universities","Subject","Next-session-Date","Link"];*/
  index=["Course Name","Universities/Institutions","Child Subject","Next Session Date","Url"];
  constructor(private info:InfoService) {
    this.data=new Array<any>()
   }

  ngOnInit(): void {
     this.info.getdetails().subscribe(
       (data)=>
       {
         this.data=data;
         this.courses=this.data.slice(0,10);

         const date=[...new Map(this.data.map(item=>[item[this.index1],item] )).values()];
         this.date=date;
      
         const sub=[...new Map(this.data.map(item=>[item[this.index2],item])).values()];
         this.subject=sub;

         const provider=[...new Map(this.data.map(item=>[item[this.index3],item])).values()];
         this.provider=provider;

       },
       (error)=>
       {
         console.log(error);
       }
    );
  }
  onclick(event:string)
  {
    if(event=='index1')
    {
      this.selectedvalue=this.index1;
      console.log(this.selectedvalue);
    }
    else if(event=='index2')
    {
      this.selectedvalue=this.index2;
      console.log(this.selectedvalue);
    }
    else
    {
      this.selectedvalue=this.index3;
      console.log(this.selectedvalue);
    }
  }
  selectchangevalue(event:any)
  {
     this.value=event.target.value;
     console.log(this.value);
     this.courses=this.filterdata(this.value,this.selectedvalue);
     console.log(this.courses.length);
     this.msg="THE TOTAL NUMBER OF RECORDS FOUND BASED ON SEARCH IS"+" "+this.courses.length;
    // console.log(this.courses);
  }
  selectchangevalue1(event:any)
  {
     this.value=event.target.value;
     console.log(this.value);
     this.courses=this.filterdata1(this.value);
     console.log(this.courses.length);
     this.msg="THE TOTAL NUMBER OF RECORDS FOUND BASED ON SEARCH IS"+" "+this.courses.length;
    // console.log(this.courses);
  }
  filterdata1(value:any):any[]
  {
    const index="Next Session Date";
    return this.data.filter((data:any)=>data[index]===value);
  }
  filterdata(value:any,val:any):any[]
  {
    const filterBy=value;
    return this.data.filter((sub:any)=>
    sub[val].indexOf(value)!==-1
    );
  }  
  loadmore()
  {
    this.courses=this.data.slice(11,50);
  }
}
