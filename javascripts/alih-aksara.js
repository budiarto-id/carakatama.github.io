//Variabel Unicode Aksara Jawa----------------------------------------------//
var CARAKAN = new Array();

// Aksara nglegena
CARAKAN['h'] = '\uA9B2';
CARAKAN['n'] = '\uA9A4';
CARAKAN['c'] = '\uA995';
CARAKAN['r'] = '\uA9AB';
CARAKAN['k'] = '\uA98F';
//
CARAKAN['d'] = '\uA9A2';
CARAKAN['t'] = '\uA9A0';
CARAKAN['s'] = '\uA9B1';
CARAKAN['w'] = '\uA9AE';
CARAKAN['l'] = '\uA9AD';
//
CARAKAN['p']  = '\uA9A5';
CARAKAN['dh'] = '\uA9A3';
CARAKAN['j']  = '\uA997';
CARAKAN['y']  = '\uA9AA';
CARAKAN['ny'] = '\uA99A';
//
CARAKAN['m']  = '\uA9A9';
CARAKAN['g']  = '\uA992';
CARAKAN['b']  = '\uA9A7';
CARAKAN['th'] = '\uA99B';
CARAKAN['ng'] = '\uA994';
//
CARAKAN['re'] = '\uA989';
CARAKAN['le'] = '\uA98A';
CARAKAN['q']  = '\uA990';
CARAKAN['z']  = '\uA997';
CARAKAN['f']  = '\uA9A5';
CARAKAN['v']  = '\uA9A5';
CARAKAN['x']  = '\uA98F\uA9C0\uA9B1';
// panjingan
CARAKAN['+ya'] = '\uA9BE';
CARAKAN['+ra'] = '\uA9BF';
CARAKAN['+la'] = '\uA9C0\uA9AD';
CARAKAN['+re'] = '\uA9BD';
// sandhangan panyigeg wanda
CARAKAN['+ng'] = '\uA981';
CARAKAN['+r']  = '\uA982';
CARAKAN['+h']  = '\uA983';
CARAKAN['+O']  = '\uA9C0';//pangkon
// aksara swara ha, hi, hu
CARAKAN['A']      = '\uA9B2';//A984';
CARAKAN['I']      = '\uA9B2\uA9B6';
CARAKAN['U']      = '\uA9B2\uA9B8';
CARAKAN['\u00C9'] = '\uA9B2\uA9BA';
CARAKAN['E#']     = '\uA9B2\uA9BA';
CARAKAN['O']      = '\uA9B2\uA9BA\uA9B4';
CARAKAN['E']      = '\uA9B2\uA9BC';
// sandhangan swara
CARAKAN['a']      = '';
CARAKAN['i']      = '\uA9B6';
CARAKAN['u']      = '\uA9B8';
CARAKAN['\u00E9'] = '\uA9BA';
CARAKAN['e#']     = '\uA9BA';
CARAKAN['e']      = '\uA9BC';
CARAKAN['o']      = '\uA9BA\uA9B4';
// angka jawa
CARAKAN['0'] = '\uA9D0';
CARAKAN['1'] = '\uA9D1';
CARAKAN['2'] = '\uA9D2';
CARAKAN['3'] = '\uA9D3';
CARAKAN['4'] = '\uA9D4';
CARAKAN['5'] = '\uA9D5';
CARAKAN['6'] = '\uA9D6';
CARAKAN['7'] = '\uA9D7';
CARAKAN['8'] = '\uA9D8';
CARAKAN['9'] = '\uA9D9';
// pada (tanda baca)
CARAKAN[',']  = '\uA9C8'; //pada lingsa
CARAKAN['.']  = '\uA9C9'; //pada lungsi
CARAKAN['\n'] = '\r\n\uA9CB'; 
CARAKAN[' ']  = '';
CARAKAN['\t'] = '';
CARAKAN[':']  = '\uA9C7';
CARAKAN[';']  = '\uA9C7';
CARAKAN['\''] = '\uA9C7';
CARAKAN['\"'] = '\uA9C7';
CARAKAN['(']  = '\uA9CC'; //rerenggan kiwa
CARAKAN[')']  = '\uA9CD'; //rerenggan tengen

//Variabel Pola Suku Kata (Wanda)-------------------------------------------// 
PAT_V      = 0x01	//Vokal
PAT_VK     = 0x02	//Vokal + Konsonan
PAT_KV     = 0x03	//Konsonan + Vokal
PAT_KVK    = 0x04	//Konsonan + Vokal + Konsonan
PAT_KRV    = 0x05	//Konsonan + Panjingan + Vokal
PAT_KRVK   = 0x06	//Konsonan + Panjingan + Vokal + Konsonan
PAT_SILABA = 0x07	//Konsonan
PAT_LAIN   = 0x00	//Sanesipun

//Fungsi Panyigeg Wanda-----------------------------------------------------//
function sigeg (aksara)
{
    var output = ''

    if (aksara == 'h' || aksara == 'r' || aksara == 'ng') {
        output = CARAKAN['+' + aksara]
    } else {
        output = CARAKAN[aksara] + CARAKAN['+O']
    }
    
    return output
} // end sigeg


//Fungsi Aksara Latin -> Aksara Jawa ---------------------------------------//
function Latin2Jawa(strInp)
{    
    var jawaText = ''
    
    strInp = strInp.toLowerCase()

    var inpLength = strInp.length
    var idx = 0
    var jump = 0

    var strOut = '\uA9CB'
    var r
    var silaba
    var suku
    var polaWanda = PAT_LAIN
    
    var KONS = 'th|dh|[b-df-hj-mp-tv-z]|ng|ny|n'
    var VOK  = 'e#|[aiuo]|e|\u00E9'
    var REP  = 're|[yrl]'
    var SILABA = '^'
	  var TANDA = '[,.\n \t;:\'\"()]'
    SILABA += '('+KONS+')?'             // group(1), K
    SILABA += '('+REP+')?'              // group(2), R
    SILABA += '('+VOK+')'               // group(3), V
    SILABA += '('+KONS+')?'             // group(4), K
    SILABA += '('+VOK+'|'+REP+')?'      // group(5), V|R
    KONSONAN = '^('+KONS+')'
	  TANDA_BACA = '^('+TANDA+')'
    var DIGIT = '^([0-9]+)'
    
    while (idx < inpLength) {
        suku = ''
        r = strInp.match(SILABA)
        if (r !== null) {
            if (r[1]) { 
                if (r[4]) { 
                    if (r[2]) { 
                        if (r[5]) {
                            polaWanda = PAT_KRV 
                        } else {
                            polaWanda = PAT_KRVK 
                        }
                    } else {
                        if (r[5]) { 
                            polaWanda = PAT_KV
                        } else {
                            polaWanda = PAT_KVK
                        }
                    }
                } else {
                    if (r[2]) { 
                        polaWanda = PAT_KRV
                    } else {
                        polaWanda = PAT_KV
                    }
                }
            } else {
                if (r[4]) { 
                    if (r[5]) { 
                        polaWanda = PAT_V
                    } else {
                        polaWanda = PAT_VK
                    }
                } else {
                    polaWanda = PAT_V
                }
            }
            
            // bentuk:
            if (polaWanda == PAT_KRVK) {
                suku = r[1] + r[2] + r[3] + r[4]
                silaba  = CARAKAN[r[1]]
				if (r[2]+r[3] != 're'){
					silaba += CARAKAN['+' + r[2] + 'a']
					silaba += CARAKAN[r[3]]
				}else{
					silaba += CARAKAN['+' + r[2] + 'e']
				}
                silaba += sigeg(r[4])
            } else if (polaWanda == PAT_KRV) {
                suku = r[1] + r[2] + r[3]
                silaba  = CARAKAN[r[1]]
				if (r[2]+r[3] != 're'){
					silaba += CARAKAN['+' + r[2] + 'a']
					silaba += CARAKAN[r[3]]
				}else{
					silaba += CARAKAN['+' + r[2] + 'e']
				}
            } else if (polaWanda == PAT_KVK) {
                suku = r[1] + r[3] + r[4]
				if ((r[1]+r[3] != 're')&&(r[1]+r[3] != 'le')){
					silaba  = CARAKAN[r[1]]
					silaba += CARAKAN[r[3]]
					silaba += sigeg(r[4])
				}else{
					silaba = CARAKAN[r[1]+r[3]];
					silaba += sigeg(r[4])
				}
            } else if (polaWanda == PAT_KV) {
                suku = r[1] + r[3]
        				if ((suku != 're')&&(suku != 'le')){
        					silaba  = CARAKAN[r[1]]
        					silaba += CARAKAN[r[3]]
        				}else{
        					silaba = CARAKAN[r[1]+r[3]]
        				}
            } else if (polaWanda == PAT_VK) {
                suku = r[3] + r[4]
                silaba  = CARAKAN[r[3].toUpperCase()]
                silaba += sigeg(r[4])
            } else {
                suku = r[3]
                silaba = CARAKAN[suku.toUpperCase()]
            } // end if
            strOut += silaba 
            polaWanda = PAT_SILABA
        } else {
            r = strInp.match(KONSONAN)
            if (r != null) {
                suku   = r[1]
                if (polaWanda == PAT_SILABA)
                {
                    silaba = sigeg(suku)
                } else {
                    silaba = CARAKAN[suku] + CARAKAN['+O']
                }
                strOut += silaba
            } else {
                r = strInp.match(DIGIT)
                if (r != null) {
                    silaba = '\uA9C7'
                    suku = r[1]
                    l = suku.length
                    i = 0
                    while (i<l) {
                        silaba += CARAKAN[suku.substr(i,1)]
                        i += 1
                    } //end while
                    silaba += '\uA9C7'
                    strOut += silaba
                } else {
                    r = strInp.match(TANDA_BACA)
          					if (r != null){
          						 suku = r[1]
          						 silaba = CARAKAN[suku]
          						 strOut += silaba
          					}else{
          						suku = strInp.substr(0,1)
          						silaba = suku
          						strOut += suku
          					}
                }
                //end if
            } // end if
            polaWanda = PAT_LAIN
        }// end if
        strInp = strInp.substr(suku.length)
        idx += suku.length
    
    }// end while

    return strOut
}

//Fungsi Untuk Mengeksekusi Fungsi Latin2Jawa ------------------------------//
function btLatin2Jawa()
{
	var latinText = document.getElementById('aksaraLatin').value
	var jawaText = Latin2Jawa(latinText);        
	document.getElementById('aksaraJawa').value = jawaText;
}


