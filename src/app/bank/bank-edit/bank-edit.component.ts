import { Component, OnInit } from '@angular/core';
import { Clients } from '../shared/model/clients';
import { BankService } from '../shared/services/bank.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bank-bank-edit',
  templateUrl: './bank-edit.component.html',
  styleUrls: ['./bank-edit.component.css']
})
export class BankEditComponent implements OnInit {

  clients = new Clients();
  constructor(private service : BankService, private router : Router, private activateroute: ActivatedRoute) { }

  ngOnInit() {
    this.activateroute.params.subscribe(params =>{
      this.service.getClient(params.id).subscribe(result => this.clients = result);
    });
  }

  editClient(client : Clients){
    this.service.putClient(client).subscribe((result)=>{
      this.router.navigate(['/clients']);
    });
  }

  cancel(){
    this.router.navigate(['/clients']);
  }

}
