
   //  const Regex = /^dha+nani_+ash*iti_+21+10+2002$/
   //  console.log(Regex.test('dhanani_ashiti_21102202'));
  
//  const Regex = /^bhan+deri_sru+s(h)ti_(19)+(_02)+_2004$/
//  console.log(Regex.test('bhanderi_srushti_19_02_2004'));


// searching the phone number pattern
    const regex1 = /(\d{3})(\d{3})_(\d{2})_(\d{2})/g;
    const result2 = regex1.exec('My phone number is:123123_12_12.');
    console.log(result2);

    const regex2 = /(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/g;
    const result3 = regex2.exec('My phone number is:1212121212.');
    console.log(result3);

    const regex3 = /(\d{4})(\d{4})(\d{2})/g;
    const result4 = regex3.exec('My phone number is:1234123412.');
    console.log(result4);

    const regex4 = /(\d{2})-(\d{2})-(\d{2})-(\d{2})-(\d{2})/g;
    const result5 = regex4.exec('My phone number is:12-12-12-12-12.');
    console.log(result5);

    const regex5 = /(\d{3})-(\d{3})-(\d{2})-(\d{2})/g;
    const result6 = regex5.exec('My phone number is:123-123-12-12.');
    console.log(result6);

    const regex6 = /(\d{4})-(\d{4})-(\d{2})/g;
    const result7 = regex6.exec('My phone number is:1234-1234-12.');
    console.log(result7);
    
    const regex = /[a-zA-Z0-9_\-\.]+[@][a-z]+[\.][a-z]{2,3}/g;
    console.log(regex.test('ashiti@gmail.com'));

    const regex0 = /exa+mple+[@][gm*ail]+[\.][a-z]{2,3}/g;
    console.log(regex0.test('example@gmail.com'));

/* example@gmail.com */
/* 123 123 12 12 */
/* 12 12 12 12 12*/
/* 1234 1234 12*/
/* 12-12-12-12-12 */
/* 123-123-12-12 */
/* 1234-1234-12*/