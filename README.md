## Rise - Your Career is Calling

The app to keep your career on track! 

[Link to Live Site](https://time-to-rise.herokuapp.com/#/)
 
### Background and Overview

At the end of a work review period it is difficult to recall all the great things an employee has accomplished, especially when things get a little crazy throughout the year. This application will allow users to track their work achievements throughout the year and aggregate that data/documents to highlight their accomplishments. Having easy access to this information will help an employee show their employer through various examples why they deserve that big raise or help ace an interview for a new position.



### Functionality & MVP  

- Pages
  - Splash
    - login / signup / demo buttons
    - Simple intro page with a graphic that shows someone excelling at work with a brief description of what the website does
  - Sign Up
    - Fields required:
      - First name
      - Last name
      - Email address
      - Password
      - Cell phone number
  - Sign In 
    - Fields required:
      - Email address
      - Password
  - Reminders
    - User sets reminder interval for accomplishment inputs into their app
      - Minimum interval is weekly
    - Select reminder method
      - Email
      - SMS
      - Or both
  - Goals / Project
    - Section to enter goals/projects agreed upon during review session with supervisor. This will allow a user add examples for the following review period to show how they accomplished the items
    - Add current goal/project - Title and description
    - Edit existing goal/project
    - Archive old goal/projects
      - Do not delete old goals because reports will always require a reference to them even if the goal has been achieved
  - Roles
    - Add current roles - title and description
    - Edit existing roles
    - Archive old roles
      - Do not delete old roles because reports will always require a reference to them even if the role no longer exists
  - Weekly input page
    - Input activity
    - Assign activity an importance between 1 and 10
    - Drop down to assign each input to a goal or project
    - Input for date completed, default current date
    - File attachments (images, pps, word)
    - Option to add more activities
  - SnapShot	
    - Filter by importance
    - Filter on project
    - Filter on time period
    - Filter on role
    - The ability to remove an item from that summary page


### Wireframes

![Image description](https://s3-us-west-1.amazonaws.com/instapx-dev/Picture1.png)

![Image description](https://s3-us-west-1.amazonaws.com/instapx-dev/Picture2.png)

![Image description](https://s3-us-west-1.amazonaws.com/instapx-dev/Picture3.png)

![Image description](https://s3-us-west-1.amazonaws.com/instapx-dev/Picture4.png)


### Architecture and Technologies

- MongoDB: a cross-platform document-oriented database program
- Express & NodeJS
- Redux
- React
- Amazon Web Services
  - S3
  - SNS
  - SES
