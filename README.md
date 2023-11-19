# Pomodoro Timer (25 + 5 Clock)

## Using React, this project is a Pomodoro Timer (25 + 5 Clock) required for the [freeCodeCamp](https://www.freecodecamp.org)'s Front End Development Libraries certification.

## You can see this app running at this [CodePen Link](https://codepen.io/mowchicy-the-decoder/details/zYyYeBb)

## In this app you can see:
1. Session Length: Starting with 25 minutes, you can increase up to 60, and decrease down to 1.
2. Break Length: Starting with 5 minutes, you can increase up to 60, and decrease down to 1.
3. Session Time: A countdown display for the Session and Break lengths, it will change automatically when hits 00:00 and play a sound to sinalize it changed.
4. Start/Stop and Reset buttons: Will pause/resume the countdow, and will reset to default settings respectively

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
- When the element with `id="start_stop"` is first clicked, the timer should begin running from the value currently displayed in `id="session-length"`, even if the value has been incremented or decremented from the original value of 25
- If the timer is running, the element with the id of `time-left` should display the remaining time in `mm:ss` format (decrementing by a value of 1 and updating the display every 1000ms)
- If the timer is running and the element with `id="start_stop"` is clicked, the countdown should pause
- If the timer is paused and the element with `id="start_stop"` is clicked, the countdown should resume running from the point at which it was paused
- When a Session countdown reaches zero (timer MUST reach 00:00), and a new countdown begins, the element with the id of `time-label` should display a string indicating a break has begun
- When a Session countdown reaches zero (timer MUST reach 00:00), a new Break countdown should begin, counting down from the value currently displayed in the `id="break-length"` element
- When a Break countdown reaches zero (timer MUST reach 00:00), and a new countdown begins, the element with the id of `timer-label` should display a string indication a Session has begun
- When a Break countdown reaches zero (timer MUST reach 00:00), a new Session countdown should begin, counting down from the value currently displayed in the `id="session-length` element
- When ANY countdown reaches zero (timer MUST reach 00:00), a sound indicating that time is up should play. This should utilize an HTML5 `audio` tag and have a corresponding `id="beep"`
- The audio element with `id="beep"` must be 1 second or longer
- The audio element with `id="beep"` must stop playing and be rewound to the beginning when the element with the id of `reset` is clicked
