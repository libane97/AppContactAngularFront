import { Contact } from './../model/contact';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ConstactService {

  constructor(public http: HttpClient) { }
   private apiService="http://localhost:8081"
  getContact(){
   return this.http.get(this.apiService+"/contact")
  }
  Search(mc:string){
      return this.http.get(this.apiService+"/SearchContact?mc="+mc)
  }
  addContact(contact:Contact){
      return this.http.post(this.apiService + '/contact', contact);
 }
 getContactById(id:number){
   return this.http.get(this.apiService+"/ContactById/"+id);
 }
 updatecontact(contact:Contact)
 {
  return this.http.put(this.apiService+"/UpdateContact/"+contact.id,contact);
 }
 deletecontact(id:number)
 {
  return this.http.delete(this.apiService+"/DeleteContact/"+id);
 }
}
