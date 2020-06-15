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
       <!-- <input (keyup) = "onKeyUp($event)"/>--> 

       <!-- how to do above filtering w/angular--> 
       <!-- <input (keyup.enter) = "onKeyUpTwo()"/>-->

<!--45. Template variables --> 
      <!-- <input #email  (keyup.enter) = "onKeyUpTwo(email.value)"/> -->

<!-- 46. Two-way Binding --> 
        <p>Two-way Binding</p>
        <input [value]="email" (keyup.enter)= "email = $event.target.value; onKeyUpEmail()"/>

        <!--syntax sugar, easier way to do two way binding
        directives used to manipulate the DOM
        ngModel is a directive that implements two way 
        binding while maintaining encapsulation.
        MUST explicitly import this module
        
        <input [(ngModel)]="email" (keyup.enter)="onKeyUpEmail()"/>
        -->


<!-- 47. Pipes --> 
    <p>Pipes</p>
        {{course.title | uppercase}} <br/>
        {{course.students}} <br/>

        <!--number pipe = decimal pipe
        implement min and max values for rating 
        first number is number of integer didgets, then after decimal goes
        how many dec numbers after point
       
        {{course.rating | number:'1.2-2'}} <br/>

        {{course.price | currency: "AUD":true:'3.2-2'}} <br/>

        <!-- Date pipe -->
        {{course.releaseDate | date:'shortDate'}} 

        <!-- Angular.io has more pipe information -->

        --> 
        
<!--48. Custom Pipes --> 
    <p>Custom Pipes</p>
    <!--
    Create file summary.pipe.ts within apps folder to create pipe
    -->


    {{text | summary: 10}}
    

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
    //how to use forms to display form data
    course = {
        title: "English 101",
        rating: 4,
        students: 20,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    }

// 48. Custom Pipes
    text = "this is just some random text";
    
//SECTION 5

    
}