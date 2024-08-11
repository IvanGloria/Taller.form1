import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form1-form',
  templateUrl: './form1-form.component.html',
  styleUrls: ['./form1-form.component.scss'],
})
export class Form1FormComponent implements OnInit {
  form1: FormGroup;

  constructor(private fb: FormBuilder) {
    // Inicialización en el constructor en lugar de ngOnInit
    this.form1 = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      done: [false],
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.form1.valid) {
      console.log(this.form1.value);
      this.form1.reset();
    } else {
      console.error('Form is not valid');
    }
  }
}
