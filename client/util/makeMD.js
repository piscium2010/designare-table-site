const fs = require('fs')
const path = require('path')

function makeMD(dirPath) {
    const files = fs.readdirSync(dirPath)

    for (let i = 0; i < files.length; i++) {
        const filename = files[i]
        const filePath = path.join(dirPath, filename)

        if (fs.statSync(filePath).isFile()) {
            if (filename.indexOf('example') > 0) {
                const content = 'const md = `' + fs.readFileSync(filePath, 'utf8').replace(/`/g,'\\`').replace(/\$/g,'\\$') + '`\nexport default md\n'
                const newfile = filePath.replace('example', 'md').replace('.js','js')
                fs.writeFileSync(newfile, content)
            }
        }
        else {
            makeMD(filePath)
        }
    }
}

makeMD('../src/examples/')