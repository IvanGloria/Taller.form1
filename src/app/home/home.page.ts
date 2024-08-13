import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  form1: FormGroup;
  savedItems: Array<{ title: string; description: string; done: boolean }> = [];

  constructor(private fb: FormBuilder) {
    this.form1 = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      done: [false],
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.form1.valid) {
      this.savedItems.push(this.form1.value); // Guarda los datos del formulario en la lista
      this.form1.reset(); // Resetea el formulario
    } else {
      console.error('Form is not valid');
    }
  }
}
