import {Component, OnInit} from '@angular/core';
import CustomerDTO from './dto/CustomerDTO';
import {CustomerService} from './service/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'newTask';
  customers: CustomerDTO [] = [];


  constructor(private customerService: CustomerService) {
    this.customerService.getAllCustomers().subscribe(resp => {
        this.customers = resp;
      // console.log(resp);

    });
  }
  ngOnInit(): void {
  }



}
