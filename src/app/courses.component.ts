
// Step 1 - Import Component decorator, Define @Component decorator function
import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `<h2>{{ "Title : " + title }}</h2>
                {{ myObject.title | uppercase }} <br/>
                {{ myObject.likes | number }} <br/>
                {{ myObject.ratings | number:'1.2-2'}} <br />
                {{ myObject.todaysDate | date:'shortDate' }} <br/>
               {{ someText | summary:'25' }}


                `
})

export class CoursesComponent
{
    title = "List of Courses";

    myObject = {
                    title: "Welcome to Angular",
                    likes : 30158,
                    ratings: 4.56214,
                    todaysDate: new Date(2017, 3, 1)
    };

    someText = "Times of India brings the Latest News & Top Breaking headlines on Politics and Current Affairs in India & around the World, Sports, Business, Bollywood News and Entertainment, Science, Technology, Health & Fitness news, Cricket & opinions from leading columnists.";

    // Inject the service into constructor
    constructor(service: CoursesService){

    }
}