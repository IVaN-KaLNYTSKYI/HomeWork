/*                                     CALLBACK        */
/*
function goUp(up, cb) {
    console.log('Будильник пі-пі')
    setTimeout(() => {
        if (up) {
            console.log('Вставаййййййй!!!!!');
            cb(null,"встав вже");
        } else {
            cb('Пофіг дальше спати');
        }
    }, 600)
}

function bath(norm, cb) {
    console.log("Cходити в душ");
    setTimeout(() => {
        if (norm==="yes") {
            cb(null, "в душ сходив");
        } else {
            cb('не вийшов з душу')
        }
    }, 2000)
}

function eats(norm,cb){
    console.log("Треба поїсти");
    setTimeout(()=>{
        if(norm==="yes"){
            cb(null,"поїв")
        }else {
            cb("нe поїв")
        }
    },1500)
}

function maska(activ,cb){
    console.log("Вийшов з хати");
    setTimeout(()=>{
        if(activ==="yes"){
            cb(null,`маску взяв? ${activ}-можна йти на ТРОЙКУ`);
        }else {
            cb("забув маску");
        }
    },500)
}

function wait(pr,cb){
    console.log("Чикаю на ТРОЙКУ");
    setTimeout(()=>{
        if (pr){
            console.log("Тройка вже приїхала");
            cb(null,"бос я скоро буду вже на роботі");
        }else {
            cb("бос нервується коли я буду а мене не буде бо ТРОЙКИ НЕ МА");
        }
    },1000)
}

function work(works,cb){
    console.log("я вже на роботі");
    setTimeout(()=>{
        if (works){
            console.log("робота йде повним ходом")
            cb(null,"бос довольний збільшує зп на 100$");
        }else {
            cb("на роботі завал");
        }
    },3000)

}

function home(eats,cb){
    console.log("я вже в дома")
    setTimeout(()=>{
        if(eats){
            console.log("потрібно поїсти")
            cb(null,"поїв тепер можна і поспати");
        }
        else {
            cb("не поїв спати ніяк");
        }
    },3000)
}
goUp(true, (err, standUp) => {
    if (!err) {
        console.log(standUp);
        bath("yes", (err, data) => {
            if (!err) {
                console.log(data);
                eats("yes",(err,dobro)=>{
                    if(!err){
                        console.log(dobro);
                        maska("yes",(err,act)=>{
                            if(!err){
                                console.log(act);
                                wait(true,(err,bos)=>{
                                    if (!err){
                                        console.log(bos);
                                        work(true,(err,cla)=>{
                                            if (!err){
                                                console.log(cla);
                                                home(true,(err,sleep)=>{
                                                    if (!err){
                                                        console.log(sleep);
                                                    }else {
                                                        console.warn(err)
                                                    }
                                                })
                                            }else {
                                                console.warn(err);
                                            }
                                        })
                                    }else {
                                        console.warn(err);
                                    }
                                })
                            }else {
                                console.warn(err)
                            }
                        })
                    }else {
                        console.warn(err);
                    }
                })
            } else {
                console.warn(err)
            }
        })
    } else {
        console.error(err)
    }
});
*/



/*                                     promise       */
/*
function goUp(up) {
   return new  Promise((resolve, reject)=>{
       console.log('Будильник пі-пі')
       setTimeout(() => {
           if (up) {
               console.log('Вставаййййййй!!!!!');
               resolve("встав вже");
           } else {
               reject('Пофіг дальше спати');
           }
       }, 2500)
   })
}

function bath(norm) {
    return new Promise((resolve, reject)=>{
        console.log("Cходити в душ");
        setTimeout(() => {
            if (norm==="yes") {
                resolve("в душ сходив");
            } else {
                reject('не вийшов з душу')
            }
        }, 3000)
    })
}

function eats(norm){
  return new Promise((resolve, reject)=>{
      console.log("Треба поїсти")
      setTimeout(()=>{
          if(norm==="yes"){
              resolve("поїв")
          }else {
              reject("нe поїв")
          }
      },1500)
  })
}

function maska(activ){
   return new Promise((resolve, reject)=>{
       console.log("Вийшов з хати");
       setTimeout(()=>{
           if(activ==="yes"){
               resolve(`маску взяв? ${activ}-можна йти на ТРОЙКУ`);
           }else {
               reject("забув маску");
           }
       },500)
   })
}

function wait(pr){
    return new Promise((resolve, reject)=>{
        console.log("Чикаю на ТРОЙКУ");
        setTimeout(()=>{
            if (pr){
                console.log("Тройка вже приїхала");
                resolve("бос я скоро буду вже на роботі");
            }else {
                reject("бос нервується коли я буду а мене не буде бо ТРОЙКИ НЕ МА");
            }
        },1000)
    })

}

function work(works){
   return new Promise((resolve, reject)=>{
       console.log("я вже на роботі");
       setTimeout(()=>{
           if (works){
               console.log("робота йде повним ходом")
               resolve("бос довольний збільшує зп на 100$");
           }else {
               reject("на роботі завал");
           }
       },3000)
   })
}

function home(eats){
    return new Promise((resolve, reject)=>{
        console.log("я вже в дома")
        setTimeout(()=>{
            if(eats){
                console.log("потрібно поїсти")
                resolve("поїв тепер можна і поспати");
            }
            else {
                reject("не поїв спати ніяк");
            }
        },3000)
    })
}

goUp(true)
  .then(value => {
    console.log(value);
    return bath("yes");
  })
  .then(value => {
    console.log(value);
    return eats("yes");
  })
    .then(value => {
        console.log(value);
        return maska("yes");
    })
    .then(value => {
        console.log(value);
        return wait(false);
    })
    .then(value => {
        console.log(value);
        return work(true);
    })
    .then(value => {
        console.log(value);
        return home(true);
    })
    .then(value => {
        console.log(value);
    })
  .catch(rerer => {
    console.warn(rerer);
  })*/

/*                                     async  await      */
/*
function goUp(up) {
    return new  Promise((resolve, reject)=>{
        console.log('Будильник пі-пі')
        setTimeout(() => {
            if (up) {
                console.log('Вставаййййййй!!!!!');
                resolve("встав вже");
            } else {
                reject('Пофіг дальше спати');
            }
        }, 2500)
    })
}

function bath(norm) {
    return new Promise((resolve, reject)=>{
        console.log("Cходити в душ");
        setTimeout(() => {
            if (norm==="yes") {
                resolve("в душ сходив");
            } else {
                reject('не вийшов з душу')
            }
        }, 3000)
    })
}

function eats(norm){
    return new Promise((resolve, reject)=>{
        console.log("Треба поїсти")
        setTimeout(()=>{
            if(norm==="yes"){
                resolve("поїв")
            }else {
                reject("нe поїв")
            }
        },1500)
    })
}

function maska(activ){
    return new Promise((resolve, reject)=>{
        console.log("Вийшов з хати");
        setTimeout(()=>{
            if(activ==="yes"){
                resolve(`маску взяв? ${activ}-можна йти на ТРОЙКУ`);
            }else {
                reject("забув маску");
            }
        },500)
    })
}

function wait(pr){
    return new Promise((resolve, reject)=>{
        console.log("Чикаю на ТРОЙКУ");
        setTimeout(()=>{
            if (pr){
                console.log("Тройка вже приїхала");
                resolve("бос я скоро буду вже на роботі");
            }else {
                reject("бос нервується коли я буду а мене не буде бо ТРОЙКИ НЕ МА");
            }
        },1000)
    })

}

ewreref
function work(works){
    return new Promise((resolve, reject)=>{
        console.log("я вже на роботі");
        setTimeout(()=>{
            if (works){
                console.log("робота йде повним ходом")
                resolve("бос довольний збільшує зп на 100$");
            }else {
                reject("на роботі завал");
            }
        },3000)
    })
}

function home(eats){
    return new Promise((resolve, reject)=>{
        console.log("я вже в дома")
        setTimeout(()=>{
            if(eats){
                console.log("потрібно поїсти")
                resolve("поїв тепер можна і поспати");
            }
            else {
                reject("не поїв спати ніяк");
            }
        },3000)
    })
}
dsd
async function day(){
    try {
        console.log(await goUp(true));
        console.log(await bath("yes"));
        console.log(await eats("yes"));
        console.log(await maska("ye"));
        console.log(await wait(true));
        console.log(await work(true));
        console.log(await home(true));
    }catch (err){
        console.warn(err);
    }
}
day();*/
