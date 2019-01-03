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


### Implementation Timeline

**Day 1 - Wednesday January 2nd**: 
- Project framework setup
- User Model
- User routes
- User authentication setup
- User auth styling


**Day 2 - Thursday January 3rd**:
- Reminders component
  - User sets reminder type
    - AWS setup for SNS and SES
  - User sets reminder frequency
- Nav bar creation and styling
    - Include login/logout
    - Sub-navbar for weekly inputs

**Day 3 - Friday January 4th**:  

- AWS setup for files/attachments
- Form for entries


**Day 4 - Saturday January 5th**: 

- Entries
  - Can be created, edited, retrieved
  - Rankings of importance


**Day 5 - Sunday January 6th**: 

- Reports model
- Roles model
- Goals model

**Day 6 - Monday January 7th**:

- Year End Printout
- Snapshot
- Integrate analytics with statistics and graphs

**Day 7 - Tuesday January 8th**: 

- Debugging functionality
- Polishing user interface
- End-to-End testing

### Schema

## `users`
column name       | data type | details
------------------|-----------|-----------------------
`id`              | integer   | not null, primary key
`first_name`      | string    | not null
`last_name`       | string    | not null
`cell_number`     | integer   | not null
`email`           | string    | not null, unique
`password_digest` | string    | not null
`session_token`   | string    | not null, indexed, unique
`created_at`      | string    | not null
`updated_at`      | string    | not null

---
+ index on: `email, unique: true`
+ index on: `session_token, unique: true`


## `reports`
column name     | data type | details
----------------|-----------|-----------------------
`id`              | integer   | not null, primary key
`user_id`         | integer    | not null, indexed, foreign key
`week_num`         | integer      | not null
`created_at`      | string    | not null
`updated_at`      | string    | not null

---

+ index on `user_id`
+ `user_id` REFERENCES `users`


## `entries`
column name     | data type | details
----------------|-----------|-----------------------
`id`              | integer   | not null, primary key
`description`         | text   | not null
`importance`         | integer   | not null
`goal_id`         | integer   | not null, indexed, foreign key
`role_id`         | integer   | not null, indexed, foreign key
`created_at`      | string    | not null
`updated_at`      | string    | not null

---
+ index on `goal_id`
+ index on `role_id`
+ `goal_id` REFERENCES `goals`
+ `role_id` REFERENCES `roles`

## `goals`
column name     | data type | details
----------------|-----------|-----------------------
`id`            | integer   | not null, primary key
`user_id`       | integer   | not null, indexed, foreign key
`title`         | string    | not null
`description`   | text      | not null
`created_at`    | string    | not null
`updated_at`    | string    | not null

---
+ index on `user_id`
+ `user_id` REFERENCES `users`

## `roles`
column name     | data type | details
----------------|-----------|-----------------------
`id`              | integer   | not null, primary key
`user_id`         | integer   | not null, indexed, foreign key
`title`         | string      | not null
`description`         | text      | not null
`created_at`      | string    | not null
`updated_at`      | string    | not null

+ index on `user_id`
+ `user_id` REFERENCES `users`

### State Shape

```js
{
{
  entities: {
    goals: {
      1: {
        id: 1,
        title: "asxa",
        description: "sacascas"
      },
      2: {...},
      ...
    },
    roles: {
      1: {
        title: "scasc",
        description: "sacsac"
      },
      ...
    },
    entries: {
      1: {
        description: "ascacx',
        importance: 10,
        goal_ids: [
          1,2,3
        ],
        role_id: [
          1,2,
        ],
        attachments: [...]
      },
      ...
    }
    reports: {
      1: {
        week_num: 1,
        entry_ids: [
          1,2,3,4
        ]
      },
      ...
    }
  },
  session: {
    isAuthenticated: true,
    user: {
      id: "12312323123",
      email: "test@test.test",
      fname: "test",
      lname: "test",
      phone: "888-888-8888"
    }
  },
  errors: {
    session: [],
    entry: []
  }
}
```

- User
  - Weekly_report
    - Entry #1
      - Importance
      - Goal	
      - Role
    - Entry #2
      - Importance
      - Goal	
      - Role
  - Goals
    - Goal 1
    - Goal 2
