import { Contact } from './../../model/contact';
import { ConstactService } from './../constact.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editcontact',
  templateUrl: './editcontact.component.html',
  styleUrls: ['./editcontact.component.css']
})
export class EditcontactComponent implements OnInit {
    data:any;
   contact:Contact = new Contact();
   idContact:number;
  constructor(private constactservice:ConstactService, public activatedRoute:ActivatedRoute,public route:Router) {
      this.idContact=activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.constactservice.getContactById(this.idContact)
    .subscribe(
      res => {
        //console.log(res);
        this.data = res;
        this.contact=this.data;
        //console.log(this.contact);

      },
      err => console.log(err)
    );
  }


  updatecontact(){
      this.constactservice.updatecontact(this.contact)
      .subscribe(
        res => {
              console.log(res);
              alert("Mise à jour effectue");
              this.route.navigate(['contact']);
        },
        err => console.log(err)
      );
  }

}
