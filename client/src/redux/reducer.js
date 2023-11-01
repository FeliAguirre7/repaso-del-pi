const initialState = {
  users: [
    {
      id: "1243ab40-5d05-4d1a-a591-32929a553f5a",
      name: "belen",
      email: "beleaeh@gmail.com",
      phone: "34134135",
      created: true,
    },
    {
      id: "a6865433-0f21-4265-b691-525396dd0c4a",
      name: "jose",
      email: null,
      phone: "43843943",
      created: true,
    },
    {
      id: "33301c2a-7d42-4650-a068-ac1467a118d1",
      name: "jose",
      email: null,
      phone: "43843943",
      created: true,
    },
    {
      id: "7e13ceed-c828-4b91-b1e2-e2c021713c65",
      name: "jose",
      email: "jose@gmail.com",
      phone: "43843943",
      created: true,
    },
    {
      id: 1,
      name: "Leanne Graham",
      email: "Sincere@april.biz",
      phone: "1-770-736-8031 x56442",
      created: false,
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "Shanna@melissa.tv",
      phone: "010-692-6593 x09125",
      created: false,
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "Nathan@yesenia.net",
      phone: "1-463-123-4447",
      created: false,
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "Julianne.OConner@kory.org",
      phone: "493-170-9623 x156",
      created: false,
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      email: "Lucio_Hettinger@annie.ca",
      phone: "(254)954-1289",
      created: false,
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      email: "Karley_Dach@jasper.info",
      phone: "1-477-935-8478 x6430",
      created: false,
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      email: "Telly.Hoeger@billy.biz",
      phone: "210.067.6132",
      created: false,
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      email: "Sherwood@rosamond.me",
      phone: "586.493.6943 x140",
      created: false,
    },
    {
      id: 9,
      name: "Glenna Reichert",
      email: "Chaim_McDermott@dana.io",
      phone: "(775)976-6794 x41206",
      created: false,
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      email: "Rey.Padberg@karina.biz",
      phone: "024-648-3804",
      created: false,
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default rootReducer;
