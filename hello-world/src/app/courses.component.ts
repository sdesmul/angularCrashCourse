import{Component} from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    //css selector ex. . / # define custom elements
    selector:'courses', 
    template: `
    <!-- 41. Class binding example -->
       <!--  <button class = "btn btn-primary" [class.active]="isActive">Save</button>
       -->

       <!-- 42. Style binding -->
       <!-- <button [style.backgroundColor] = "isActive ? 'blue' : 'white' ">WHATS UP</button> -->
        
       <!-- 43. Event binding --> 
       <!--<button (click)="onSave()"> Save me </button> --> 

       <!-- <button (click)="onSaveEvent($event)">Save event </button> -->  
       
       <!-- 44. Event filtering --> 
       <!-- <input (keyup) = "onKeyUp($event)">--> 

       <!-- how to do above filtering w/angular--> 
       <!-- <input (keyup.enter) = "onKeyUpTwo()">-->

       <!--45. Template variables --> 
       <input #email  (keyup.enter) = "onKeyUpTwo(email.value)">

       <!-- 46. Two-way Binding --> 
        <p>Two-way Binding</p>
        <input [value]="email" (keyup.enter) = "onKeyUpEmail()">


       <!-- 47. Pipes --> 
       <!--48. Custom Pipes --> 

       <!--Section 5--> 

    `   
        
            
})

export class CoursesComponent{
    title = "List of courses"; 
    isActive = false;
    courses;

    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }

    //define method
    getTitle(){
        return this.title;
    }

    //for event binding
    onSave(){
        console.log("button was clicked");
    }

    onSaveEvent($event){
        console.log("Event click");
    }

    // 44. Event filtering 
    onKeyUp($event){
        if($event.keyCode == 13) console.log("Enter was pressed");
    }
    // 45. Template variables
    onKeyUpTwo(email){
        //whatever is typed into the input box will be 
        //logged in the console
        console.log(email);
    }

    // 46. Two-way Binding

    //object oriented way, encapsulates email
    email= "email.com"; 
    onKeyUpEmail(){
        console.log(this.email);
    }
    // 47. Pipes
    // 48. Custom Pipes
    
    //SECTION 5

    
}