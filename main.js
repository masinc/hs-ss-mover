const path = require('path')

const dir_home = process.env[process.platform == "win32" ? "USERPROFILE" : "HOME"];
const dir_desktop = path.join(dir_home, "Desktop\\");
//console.log(dir_desktop)
const fs = require('fs-extra')
const glob = require('glob')


//スクリーンショットのディレクトリ
const ss_dir = 'e:/data/hs/screenshot'

glob(dir_desktop + 'Hearthstone Screenshot*.png', (err, matches) => {
    if (err){
        console.log(err)
        process.exit(1)
    }
    
    for (const old_path of matches){
        new_path = path.join(ss_dir, path.basename(old_path))
        console.log(`${old_path} -> ${new_path}`)
        fs.move(old_path, new_path, (e) =>{
            if (e){
                console.log(e)
                process.exit(1)    
            }            
        })
    }
})