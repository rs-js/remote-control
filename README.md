# remote-control

Technical requirements
Task can be implemented on Javascript or Typescript
Use 16 LTS version of Node.js
Only ws, robotjs, jimp, cross-env, typescript, ts-node, ts-node-dev, nodemon, dotenv, eslint and its plugins, webpack and its plugins, prettier, @types/\* and testing tools (for example, Jest, Mocha, AVA, Jasmine, Cypress, Storybook, Puppeteer) are allowed
The program is started by npm script start in following way:
npm run start
After starting the program displays websocket parameters
After program work finished the program should end websocket work correctly
After each received command program should display the command and result
All commands should be ended with \0
List of websocket commands and their syntax (<- - cmd from frontend, -> - answer):

Navigation over the x and y axis
Move mouse up
<- mouse_up {y px}
Move mouse down
<- mouse_down {y px}
Move mouse left
<- mouse_left {x px}
Move mouse right
<- mouse_right {x px}
Send mouse coordinates
<- mouse_position
-> mouse_position {x px},{y px}
Drawing
Draw circle with pushed left button:
<- draw_circle {px}
Draw rectangle with pushed left button:
<- draw_rectangle {px} {px}
Draw square with pushed left button:
<- draw_square {px}
Print screen
Make print screen command and send image (a base64 buffer of the 200 px square around the mouse position):
<- prnt_scrn
-> prnt_scrn {base64 string (png buf)}
