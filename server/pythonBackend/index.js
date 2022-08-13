const { spawn } = require('child_process');

const childPython = spawn('python',['./sentimental.py']);

childPython.stdout.on('data',(data) => {
    console.log(`${data}`);
});

childPython.stderr.on('data',(data) =>{
    console.error(`stderr: ${data}`);
});

childPython.on('closw',(code) =>{
    console.error(`child process exited with code: ${code}`);
});

module.exports = data