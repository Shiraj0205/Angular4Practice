import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-array-demo',
  templateUrl: './form-array-demo.component.html',
  styleUrls: ['./form-array-demo.component.css']
})
export class FormArrayDemoComponent {

  form = new FormGroup({ 
    topics : new FormArray([])
   });

   get topics(){
     return this.form.get('topics') as FormArray
   }

   addTopic(topic : HTMLInputElement){
     this.topics.push(new FormControl(topic.value));
     topic.value = '';
   }

   removeTopic(topic: FormControl){
     let index = this.topics.controls.indexOf(topic);
     this.topics.removeAt(index);
   }

}
