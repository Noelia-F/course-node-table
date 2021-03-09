const fs= require('fs');
const colors = require('colors');

const createFile = async(base = 5, list = false, until = 10) => {
  
  // New Promise
  // return new Promise((resolve, reject) => {
  //   console.log('==================');
  //   console.log('Tabla del: ', base);
  //   console.log('==================');

  //   let file = '';
  //   for(let i = 1; i <= 10; i++) {
  //     file += `${base} X ${i} = ${base * i}\n`;
  //   }

  //   console.log(file);

  //   fs.writeFileSync(`table-${base}.txt`, file);

  //   resolve(`table-${base}.txt creado`);
    
  // })

  // Async
  try {
    let file, terminal = '';
    for(let i = 1; i <= until; i++) {
      file += `${base} X ${i} = ${base * i}\n`;
      terminal += `${colors.cyan(base)} X ${i} = ${colors.green(base * i)}\n`;
    }

    if (list) {
      console.log('=================='.cyan);
      console.log('Tabla del: ', colors.cyan(base));
      console.log('=================='.cyan);

      console.log(terminal);
    }

    fs.writeFileSync(`files/table-${base}.txt`, file);

    return `table-${base}.txt creado`;
  } catch(err) {
    throw err;
  }
}

module.exports = {
  createFile,
}