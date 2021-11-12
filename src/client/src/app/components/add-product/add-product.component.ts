import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  addProduct: FormGroup

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.addProduct = this.fb.group({
      title: ['', Validators.required],
      price: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3)]),
        
      ],
      imageurl: [
        '',
        Validators.compose([Validators.required, Validators.minLength(4)]),
      ],
      description: [
        '',
        Validators.compose([Validators.required, Validators.minLength(5)]),
      ],
    });
  }

  ngOnInit(): void {
  }

}
