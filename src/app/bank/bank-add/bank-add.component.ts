import { Component, OnInit } from '@angular/core';
import { Clients } from '../shared/model/clients';
import { BankService } from '../shared/services/bank.service';
import { Router } from '@angular/router';
import { Locations } from '../shared/model/locations';
import { Names } from '../shared/model/names';
import { Pictures } from '../shared/model/pictures';

@Component({
  selector: 'bank-bank-add',
  templateUrl: './bank-add.component.html',
  styleUrls: ['./bank-add.component.css']
})
export class BankAddComponent implements OnInit {

  clients = new Clients();
  constructor(private service : BankService, private router : Router) { 
  }

  ngOnInit() {
  }

  postClient(client: Clients){
    this.service.postClient(client).subscribe();
  }
  cancel(){
    this.router.navigate(['/clients']);
  }

}
