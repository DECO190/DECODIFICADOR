function deco(senha){
    let comb = []
    let alf = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    for ( let i in alf){
        for (let j in alf){
            let res = ''
            let res1 = ''
            res += ''+ alf[i]+''+alf[j]
            res1 += ''+ alf[j]+''+alf[i]
            comb.push(res)
            comb.push(res1)
        }
    }
    let prim = ''
    let quat;
    for ( let jo in comb){
        for (let a in comb){
            prim = ''

            prim += comb[jo]
            prim += comb[a]
            
            if (prim == senha.substring(0,4)){
                quat = prim
                break
            }
        }
    }
    let temp;
    let final;
    for ( let ko in comb){
        temp = ''
        temp += quat+''+comb[ko]
        if ( temp == senha){
            final = temp
            break
        }
    }

    console.log(final)
}

deco('aletpo')