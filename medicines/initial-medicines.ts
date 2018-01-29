export class Init {
  load() {
    if (localStorage.getItem('medicines') === null || localStorage.getItem('medicines') == undefined) {
      console.log("Creating the initial set of employees ...");
      var medicines = [
        {
          id: 1,
          name: "Ram",
          location: "Bangalore",
          email: "ram@mail.com",
          mobile: "9867512345"
        },
        {
          id: 2,
          name: "Raj",
          location: "Chennai",
          email: "raj@mail.com",
          mobile: "7867534521"
        },
        {
          id: 3,
          name: "Vinay",
          location: "Pune",
          email: "vinay@mail.com",
          mobile: "9975287450"
        }
      ];
      localStorage.setItem('medicines', JSON.stringify(medicines));
    }
    else {
      console.log("Loaded the employees from local storage ...");
    }
  }
}
