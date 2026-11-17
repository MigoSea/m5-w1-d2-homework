# Westcliff WEB 403/603 - Week 1 Day 2 Homework: ToDo List v2 (Lifting State Up & jQuery Notes)

This repository contains the updated version 2 of the React ToDo List app.

## Features:
- **Lifting State Up:** `App` converted into a Class component (`class App extends Component`).
- Centralized `this.state` holding all 7 days of todo items with additional properties: `{ id, text, note, done }`.
- Unified functional component `Todos(props)` using `.map()`, dynamically rendering list items with `key={todolist.id}`.
- **Interactive Notes Feature:** Clicking any todo item triggers `handleNote(todolist.note)`, displaying the extra note in a styled box below the list using jQuery (`empty().append()` and `.css("visibility", "visible")`).
- **Dismiss Note:** "Done" button triggers `dismissNote()`, hiding the note box (`visibility: hidden`).
- Default hidden styling for `#notebox` in `styles.css`.
