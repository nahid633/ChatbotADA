import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class FeedbackComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<FeedbackComponent>, private _formBuilder: FormBuilder) { }
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  answers = ['Disagree', 'Undecided', 'Agree', 'Strongly Agree'];
  feedback = 'Agree';
  ngOnInit() {
  }

  closePopup() {
    this.dialogRef.close();
  }
}
