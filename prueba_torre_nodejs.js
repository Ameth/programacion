// const api = axios.create();
const data = {
  data:
    'key=IAfpK, age=58, key=WNVdi, age=64, key=jp9zt, age=47, key=0Sr4C, age=68, key=CGEqo, age=76, key=IxKVQ, age=79, key=eD221, age=29, key=XZbHV, age=32, key=k1SN5, age=88, key=4SCsU, age=65, key=q3kG6, age=33, key=MGQpf, age=13, key=Kj6xW, age=14, key=tg2VM, age=30, key=WSnCU, age=24, key=f1Vvz, age=46, key=dOS7A, age=72, key=tDojg, age=82, key=nZyJA, age=48, key=R8JTk, age=29, key=005Ot, age=66, key=HHROm, age=12, key=5yzG8, age=51, key=xMJ5D, age=38, key=TXtVu, age=82, key=Hz38B, age=84, key=WfObU, age=27, key=mmqYB, age=14, key=4Z3Ay, age=62, key=x3B0i, age=55, key=QCiQB, age=72, key=zGtmR, age=66, key=nlIN9, age=8, key=hKalB, age=50, key=Na33O, age=17, key=jMeXm, age=15, key=OO2Mc, age=32, key=hhowx, age=34, key=gLMJf, age=60, key=PblX6, age=66, key=8Vm5W, age=22, key=oZKd6, age=88, key=RXNfQ, age=25, key=3yy0p, age=64, key=FrQbL, age=80, key=vlUkk, age=55, key=DP8po, age=80, key=EroX6, age=84, key=3bsll, age=86, key=QhZjA, age=85, key=wm6uc, age=74, key=MC1FM, age=75'
}

// const axios = require('axios');
// const fs = require('fs');
// const crypto = require('crypto');

// //let datos='';

const getData = async () => {
  const { data } = await axios.get(
    'https://coderbyte.com/api/challenges/json/age-counting'
  )
  let datos = data.data
  //console.log(datos);
  const regex = /,/g
  datos = datos.replace(regex, '')

  const ar = datos.split(' ')
  let result = ''

  //console.log(datos);
  ar.forEach((item, index, arrayAct) => {
    let nw = item.split('=')
    if (!isNaN(nw[1])) {
      if (nw[1] == 32) {
        let newKey = arrayAct[index - 1].split('=')
        //console.log(newKey[1]);
        fs.appendFile(
          'output.txt',
          `${newKey[1]}\n`,
          { encoding: 'utf8', flag: 'a' },
          error => {
            if (error) throw error
            //console.log('Nueva linea añadida correctamente');
          }
        )
        //result += " " + newKey[1];
      }
    }
  })

  fs.readFile('output.txt', 'utf-8', (error, data) => {
    if (error) {
      console.log('mi Error:', error)
    } else {
      //console.log(data)
      const hash = crypto
        .createHash('sha1')
        .update(data)
        .digest('hex')
      //hash = new Buffer(hash, 'latin1')
      console.log(hash)
    }
  })

  //let archivo = fs.readFileSync("output.txt");

  //console.log(archivo);
}

getData()

//console.log(archivo)
// XZbHV OO2Mc uumoL cUS5f A5gR0 GIDFA
