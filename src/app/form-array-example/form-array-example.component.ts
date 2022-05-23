import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-array-example',
  templateUrl: './form-array-example.component.html',
  styleUrls: ['./form-array-example.component.css']
})
export class FormArrayExampleComponent {

  form = this.fb.group({
    title : new FormControl('My Title'),
    level : new FormControl('Level 1'),
    lessons: this.fb.array([])
  });

constructor(private fb:FormBuilder) {}

get lessons() {
  return this.form.controls["lessons"] as FormArray;
}

addLesson() {
  const lessonForm = this.fb.group({
    title: ['', Validators.required],
    level: ['beginner', Validators.required]
  });
  this.lessons.push(lessonForm);
}

deleteLesson(lessonIndex: number) {
  this.lessons.removeAt(lessonIndex);
}
}
