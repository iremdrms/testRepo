import React, { Component } from "react";

const UserContext = React.createContext();
//Provider, Consumer
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => action.payload !== user.id),
      };
    default:
      return state;
  }
};

export class UserProvider extends Component {
  state = {
    users: [
      {
        id: 1,
        name: "İrem Durmuş",
        salary: "5000",
        department: "Bilişim",
      },
      {
        id: 2,
        name: "Zeynep Kaplan",
        salary: "7000",
        department: "Sağlık",
      },
      {
        id: 3,
        name: "Leyla Çalışkan",
        salary: "9000",
        department: "Psikoloji",
      },
      {
        id: 4,
        name: "Vicdan Nur Erdoğan",
        salary: "11000",
        department: "Hukuk",
      },
    ],
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };
  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
const UserConsumer = UserContext.Consumer;

export default UserConsumer;
/*
  
   state = {
    a : 10,
    b : 20,
    c : 30
   }
  
   ...state yaptığında yukarıdakileri yerleştirmiş oluyosun 

   a : 20 yaparsan güncellemiş olucaksın


*/
