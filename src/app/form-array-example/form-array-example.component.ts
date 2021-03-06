import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-array-example',
  templateUrl: './form-array-example.component.html',
  styleUrls: ['./form-array-example.component.css']
})
export class FormArrayExampleComponent {

  lessonData = [{'title':'First Title','level':'advanced'},
    {'title':'Second Title','level':'intermediate'}];

  form = this.fb.group({
    title : new FormControl('My Title'),
    level : new FormControl('Level 1'),
    lessons: this.fb.array([])
  });

  constructor(private fb:FormBuilder) {}

  ngOnInit(){
    this.lessonData.forEach(ld => {
      const lform = this.fb.group({
        title: new FormControl(ld.title),
        level : new FormControl(ld.level),
      });
      this.lessons.push(lform);
    });
  }

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
