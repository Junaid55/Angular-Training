import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public dialog:MatDialog){}
  title = 'ProjectNav';
  openCEODialog()
  {
    this.dialog.open(CEOComponent, {
      height: '400px',
      width: '600px',
    });
  }

  openContactDetails()
  {
    this.dialog.open(ContactDetails, {
      height: '400px',
      width: '600px',
    });

  }


}
@Component({
  selector: 'CEOComponent',
  templateUrl: 'CEODialog.html',
})
export class CEOComponent{}

@Component({
  selector: 'ContactDetails',
  templateUrl: 'contactDetails.html',
})
export class ContactDetails{}
