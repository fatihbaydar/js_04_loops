
/* ---------------------------------- */
/*              FOR LOOP              */
/* ---------------------------------- */

// döngüye girerken eşittir vermek yerine >= ya da <= demek daha iyi
// grilemeyen döngü
// for(let i = 1; i == 50; i=i*2)
//     console.log(i);

// sonsuz döngü. çıkmak için vs code lapatılmalı.
// for(let i = 1; i!=50 ; i = i*2)
    // console.log(object);

for(let i = 0; i<= 10; i++) {
    if(i%3) {
        continue;
    }
    if(i === 6){
        break;
    }
    console.log(i);
}