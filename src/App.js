import "./styles.css";
import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TodoList1: [
        {
          id: 1,
          text: "Eat Breakfast",
          note: "Make Eggs and Pancakes",
          done: false
        },
        {
          id: 2,
          text: "Walk Dog",
          note: "Bring doggie bag",
          done: false
        },
        {
          id: 3,
          text: "Take Shower",
          note: "Shower no later than 10am!",
          done: false
        }
      ],
      TodoList2: [
        {
          id: 1,
          text: "Get Lunch",
          note: "Lunch at Sandbox",
          done: false
        },
        {
          id: 2,
          text: "Run a Mile",
          note: "Stop by mom at end of run",
          done: false
        },
        {
          id: 3,
          text: "Take Bath",
          note: "Prep half hour before. Replenish bath oil.",
          done: false
        }
      ],
      TodoList3: [
        {
          id: 1,
          text: "Buy Groceries",
          note: "Pick up fresh vegetables & milk",
          done: false
        },
        {
          id: 2,
          text: "Clean Room",
          note: "Organize desk and vacuum floor",
          done: false
        },
        {
          id: 3,
          text: "Study React",
          note: "Review State and Props lifecycle",
          done: false
        }
      ],
      TodoList4: [
        {
          id: 1,
          text: "Attend Lecture",
          note: "Join class Zoom at 6:00 PM",
          done: false
        },
        {
          id: 2,
          text: "Work on Assignment",
          note: "Complete coding exercises",
          done: false
        },
        {
          id: 3,
          text: "Read Tech Articles",
          note: "Read about React 18 updates",
          done: false
        }
      ],
      TodoList5: [
        {
          id: 1,
          text: "Gym Workout",
          note: "Leg day + 20 mins cardio",
          done: false
        },
        {
          id: 2,
          text: "Finish Homework",
          note: "Submit on GAP portal before 10:30 PM",
          done: false
        },
        {
          id: 3,
          text: "Movie Night",
          note: "Watch sci-fi thriller",
          done: false
        }
      ],
      TodoList6: [
        {
          id: 1,
          text: "Morning Jog",
          note: "5k around the neighborhood park",
          done: false
        },
        {
          id: 2,
          text: "Call Family",
          note: "Catch up with parents",
          done: false
        },
        {
          id: 3,
          text: "Outdoor Walk",
          note: "Evening walk with friends",
          done: false
        }
      ],
      TodoList7: [
        {
          id: 1,
          text: "Meal Prep",
          note: "Prepare lunches for the work week",
          done: false
        },
        {
          id: 2,
          text: "Plan the Week",
          note: "Update calendar and task list",
          done: false
        },
        {
          id: 3,
          text: "Relax & Recharge",
          note: "Get at least 8 hours of sleep",
          done: false
        }
      ]
    };
  }

  render() {
    let d = new Date();
    let day = new Array(7);
    day[0] = "Sunday";
    day[1] = "Monday";
    day[2] = "Tuesday";
    day[3] = "Wednesday";
    day[4] = "Thursday";
    day[5] = "Friday";
    day[6] = "Saturday";

    let n = day[d.getDay()];
    let todo;

    if (n === "Monday") {
      todo = <Todos todolists={this.state.TodoList1} />;
    } else if (n === "Tuesday") {
      todo = <Todos todolists={this.state.TodoList2} />;
    } else if (n === "Wednesday") {
      todo = <Todos todolists={this.state.TodoList3} />;
    } else if (n === "Thursday") {
      todo = <Todos todolists={this.state.TodoList4} />;
    } else if (n === "Friday") {
      todo = <Todos todolists={this.state.TodoList5} />;
    } else if (n === "Saturday") {
      todo = <Todos todolists={this.state.TodoList6} />;
    } else if (n === "Sunday") {
      todo = <Todos todolists={this.state.TodoList7} />;
    }

    return (
      <div className="App">
        {/* Output final view */}
        <h1>
          <span className="d-flex justify-content-center text-warning">
            {n}'s
          </span>
          Todo List
        </h1>
        {todo}
      </div>
    );
  }
}

function Todos(props) {
  const handleNote = (getNote) => {
    $("#note").empty().append(getNote);
    $("#notebox").css("visibility", "visible");
  };

  const dismissNote = () => {
    $("#note").empty();
    $("#notebox").css("visibility", "hidden");
  };

  return (
    <ListGroup>
      {props.todolists.map((todolist) => (
        <ListGroupItem
          key={todolist.id}
          tag="button"
          onClick={() => handleNote(todolist.note)}
          className="align-self-center py-2 w-50 bg-info text-white"
        >
          {todolist.text}
        </ListGroupItem>
      ))}

      <ListGroupItem
        id="notebox"
        className="border border-dark rounded m-5"
      >
        <div id="note" className="mt-1 font-weight-bold text-dark"></div>
        <button
          id="btn"
          className="w-25 mt-2 align-self-center bg-warning border-0"
          onClick={() => dismissNote()}
        >
          Done
        </button>
      </ListGroupItem>
    </ListGroup>
  );
}

export default App;
