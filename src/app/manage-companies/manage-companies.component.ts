import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-companies',
  templateUrl: './manage-companies.component.html',
  styleUrls: ['./manage-companies.component.css']
})
export class ManageCompaniesComponent implements OnInit {
  dsboardLink: any;
  constructor() { }

  ngOnInit() {
    this.dsboardLink = [
      {featureLabel: 'A'},
      {featureLabel: 'B'},
      {featureLabel: 'C'},
      {featureLabel: 'D'},
      {featureLabel: 'E'}
    ];
  }

}
