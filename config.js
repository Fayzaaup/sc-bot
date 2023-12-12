global.owner = ['6281295169487']  
global.mods = ['6281295169487'] 
global.prems = ['6281295169487']
global.nameowner = 'FayyD66x.'
global.numberowner = '6281295169487' 
global.mail = 'rajafaiz628@gmail.com ' 
global.gc = 'https://market.fayzaafx.tech'
global.instagram = 'https://instagram.com/abcdefayza1'
global.wm = '© FayyD66x'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made With'
global.author = 'Bot WhatsApp FayyD66x'
global.maxwarn = '2' // Peringatan maksimum

//INI WAJIB DI ISI!//

global.btc = 'daftar dulu' 

//Daftar terlebih dahulu https://api.botcahx.live

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//

global.lann = 'daftar'


//Daftar https://api.betabotz.org 

global.APIs = {   

  btc: 'https://api.botcahx.live'


}

global.APIKeys = { 

  'https://api.botcahx.live': 'daftar dulu' 

}

//


let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
