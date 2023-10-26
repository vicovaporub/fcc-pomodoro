# Pomodoro Timer (25 + 5 Clock)

## Using React, this project is a Pomodoro Timer (25 + 5 Clock) required for the [freeCodeCamp](https://www.freecodecamp.org)'s Front End Development Libraries certification.

## In this app you can see:
1- Session Length: Starting with 25 minutes, you can increase up to 60, and decrease down to 1.
2- Break Length: Starting with 5 minutes, you can increase up to 60, and decrease down to 1.
3- Session Time: A countdown display for the Session and Break lengths, it will change automatically when hits 00:00 and play a sound to sinalize it changed.
4- Start/Stop and Reset buttons: Will pause/resume the countdow, and will reset to default settings respectively

**The tasks were:**
- The app must have an element with `id="break-label"` that contains a string
- The app must have an element with `id="session-label` that contains a string
- The app must have two clickable elements with corresponding IDs: `id="break-increment"` and `id="break-decrement"`
- The app must have two clickable elements with corresponding IDs: `id="session-increment"` and `id="session-decrement"`
- The app must have an element with a corresponding `id="break-length`, which by default (on load) displays a value of 5
- The app must have an element with a corresponding `id="session-length`, which by default (on load) displays a value of 25
- The app must have an element with a corresponding `id="time-left"`. NOTE: Paused or running, the value in this field should always be displayed in: `mm:ss` format
- The app must have a clickable element with a corresponding `id="start_stop"`
- The app must have a clickable element with a corresponding `id="reset"`
- When the element with id of `reset` is clicked, any running timer should be stopped, the value within `id="break-length` should return to 5, the value within `id="session-time"` should return to 25, and the element with `id="time-left` should be reset to its default state
- When the element with the id of `break-decrement` is clicked, the value within `id="break-length` decrements by a value of 1
- When the element with the id of `break-increment` is clicked, the value within `id="break-length` increments by a value of 1
- When the element with the id of `session-decrement` is clicked, the value within `id="session-length` decrements by a value of 1
- When the element with the id of `session-increment` is clicked, the value within `id="session-length` increments by a value of 1
- The app should not accept a Break or Session length <= 0
- The app should not accept a Break or Session length > 60
- 
