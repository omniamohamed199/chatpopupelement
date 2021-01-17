const concat = require('concat');
const fs = require('fs-extra');
    (async function build() {
        const files = [
            './dist/chatpopupelement/polyfills.js',
            './dist/chatpopupelement/runtime.js',
            './dist/chatpopupelement/main.js',
        ];
        await fs.ensureDir('chat');
        await concat(files, 'chat/Chatpopup.js');
        await fs.copyFile('./dist/chatpopupelement/styles.css', 'chat/chatstyles.css');
    })()