import { ConstactService } from './../constact.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: [  ]
})
export class ContactComponent implements OnInit {
   data:any;
   motCle:string;
   currentPage = 1;
   itemsPerPage = 4;
   pageSize: number;
  constructor(public contactservice:ConstactService,
    public route:Router
    ) { }

  ngOnInit(): void {
  //  this.search();
    this.getContact();

  }

  getContact(){
    this.contactservice.getContact()
    .subscribe(rest => {
    //  console.log(rest);
      this.data=rest
    },
      err => console.log(err)
    )
  }
  search()
  {
    this.contactservice.Search(this.motCle)
    .subscribe(rest => {
        console.log(rest);
        this.data=rest

      },
        err => console.log(err)
      )
  }
  public onPageChange(pageNum: number): void {
    this.pageSize = this.itemsPerPage*(pageNum - 1);
  }

  public changePagesize(num: number): void {
    this.itemsPerPage = this.pageSize + num;
  }

  onedite(id:number)
  {
    this.route.navigate(['editeContact',id])
  }
  ondelete(id:number)
  {
    this.contactservice.deletecontact(id)
    .subscribe(
      res => {
            console.log(res);
            alert("Supprime effectue");
            this.route.navigate(['contact']);
      },
      err => console.log(err)
    );
  }
}
