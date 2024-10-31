import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, RadioControlValueAccessor, ReactiveFormsModule } from '@angular/forms';
import { write } from 'node:fs';
import { register } from 'node:module';

type InputTypes = "text" | "email" | "password"
@Component({
  selector: 'app-primary-input',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PrimaryInputComponent),
      multi: true
    }
  ],
  templateUrl: './primary-input.component.html',
  styleUrl: './primary-input.component.scss'
})
export class PrimaryInputComponent implements ControlValueAccessor {
  @Input() type: InputTypes = "text";
  @Input() placeholder: string = " ";
  @Input() label: string = " ";
  @Input() inputName: string = " ";
  
  value: string = ''
  onChange: any = () => {}
  onTouchend: any = () => {}
  
  onInput(event: Event){
    const value = (event.target as HTMLInputElement).value
    this.value = value
  }

  writeValue(value: any): void {
    this.value = value
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouchend = fn  
  }
  setDisabledState?(isDisabled: boolean): void {}

}
