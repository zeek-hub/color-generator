import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ColorConverter} from '../../models/ColorConverter.util';
import {ColorModel} from '../../models/ColorModel.model';

@Component({
  selector: 'app-generator-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './generator-form.html',
  styleUrl: './generator-form.css',
})
export class GeneratorForm implements OnInit {
  @Output() color = new EventEmitter<ColorModel>();
  public colorForm!: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.colorForm = this.fb.group({
      r: [100, [Validators.required, Validators.min(0), Validators.max(255)]],
      g: [100, [Validators.required, Validators.min(0), Validators.max(255)]],
      b: [100, [Validators.required, Validators.min(0), Validators.max(255)]],
      a: [255, [Validators.required, Validators.min(0), Validators.max(255)]],
    })
  }
  generateColor(){
    this.colorForm.patchValue({
      r: Math.floor(Math.random() * 255),
      g: Math.floor(Math.random() * 255),
      b: Math.floor(Math.random() * 255),
      a: Math.floor(Math.random() * 255)
    });
  }
  onSubmit(){
    this.sendColor();
  }
  protected sendColor(){
    this.color.emit(this.getColor());
  }
  getColor(){
    const r = this.colorForm.get('r')?.value;
    const g = this.colorForm.get('g')?.value;
    const b = this.colorForm.get('b')?.value;
    const a = this.colorForm.get('a')?.value;
    const color: ColorModel = {
      RGBA: {
        r: r,
        g: g,
        b: b,
        a: a,
        fullColor: `rgb(${r},${g},${b},${a})`
      },
      HEX: ColorConverter.RGBAToHex(r, g, b, a)
    };
    return color;
  }
}
