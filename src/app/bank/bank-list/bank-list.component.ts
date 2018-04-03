import { Component, OnInit } from '@angular/core';
import { BankService } from '../shared/services/bank.service';
import { Clients } from '../shared/model/clients';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bank-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.css']
})
export class BankListComponent implements OnInit {

  clients : Clients[];
  constructor(private service : BankService, private router : Router) { }

  ngOnInit() {
    this.getclients();
  }

  getclients(){
    this.service.getClients().subscribe((result : Clients[])=>{
      this.clients = result;
    })
  }
  

  editClient(client : Clients){
    this.router.navigate(['/edit',client.id]);
  }
  deleteClient(client: Clients){
    if(confirm('Estas seguro que quieres eliminar al cliente: '+client.name.first)){
      this.clients = this.clients.filter(f => f !== client);
      this.service.deleteClient(client.id).subscribe()
    }
  }
  goAddPage(){
    this.router.navigate(['/add']);
  }

}
