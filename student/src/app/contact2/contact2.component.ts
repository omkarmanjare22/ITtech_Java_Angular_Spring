import { Component } from '@angular/core';

@Component({
  selector: 'app-contact2',
  templateUrl: './contact2.component.html',
  styleUrl: './contact2.component.css'
})
export class Contact2Component { contactDetails = [
  {
    location: 'Karve Road - Head Office - Pune',
    address: '2nd floor, ITTech Complex , Paud Phata, Karve Road, Pune - 4110 38',
    phone: '7756998019',
    email: 'enquiry@ITTech.com'
  },
  {
    location: 'Chinchwad - Pune',
    address: 'Office No. 35, ITTech Complex, Pune Mumbai Old Highway, Pune- 411019',
    phone: '7756998019',
    email: 'enquiry@ITTech.com'
  },
  {
    location: 'Viman Nagar - Pune',
    address: 'ITTech Complex, Vimannagar, Pune - 411014',
    phone: '9028270129 / 7499837674',
    email: 'enquiry@ITTech.com'
  }
];

}
