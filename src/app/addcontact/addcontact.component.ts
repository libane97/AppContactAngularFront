import { Contact } from './../../model/contact';
import { ConstactService } from './../constact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: []
})
export class AddcontactComponent implements OnInit {

  data:any;
  mode:number=1;
  contact:Contact = new Contact();
  constructor(public constactservice:ConstactService) { }

  ngOnInit(): void {

  }

  savecontact(){
    //this.contact=datas;
   // console.log(this.contact);
    this.constactservice.addContact(this.contact)
    .subscribe(
      res => {
        console.log(res);

      },
      err => console.log(err)
    );
  }

}
