const sample_state = {
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