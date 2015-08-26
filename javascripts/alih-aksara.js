//Variabel Unicode Aksara Jawa----------------------------------------------//
var CARAKAN = new Array();

// Aksara nglegena
CARAKAN['k'] = '\uA930';
CARAKAN['x'] = '\uA930\uA953\uA93C';
CARAKAN['q'] = '\uA930';
CARAKAN['g'] = '\uA931';
CARAKAN['ng'] = '\uA932';
//
CARAKAN['t'] = '\uA933';
CARAKAN['d'] = '\uA934';
CARAKAN['n'] = '\uA935';
//
CARAKAN['p']  = '\uA936';
CARAKAN['f']  = '\uA936';
CARAKAN['v']  = '\uA936';
CARAKAN['b'] = '\uA937';
CARAKAN['m']  = '\uA938';
//
CARAKAN['c']  = '\uA939';
CARAKAN['j']  = '\uA93A';
CARAKAN['z']  = '\uA93A';
CARAKAN['ny']  = '\uA93B';
//
CARAKAN['s'] = '\uA93C';
CARAKAN['r'] = '\uA93D';
CARAKAN['l']  = '\uA93E';
CARAKAN['y']  = '\uA93F';
CARAKAN['w']  = '\uA940';
CARAKAN['h']  = '\uA941';
//
CARAKAN['mb'] = '\uA942';
CARAKAN['ngg'] = '\uA943';
CARAKAN['nd']  = '\uA944';
CARAKAN['nyj']  = '\uA945';
// sandhangan panyigeg wanda
CARAKAN['+ng'] = '\uA94F';
CARAKAN['+n']  = '\uA950';
CARAKAN['+r']  = '\uA951';
CARAKAN['+h']  = '\uA952';
CARAKAN['+O']  = '\uA953';//pangkon
// aksara swara ha, hi, hu
CARAKAN['A']      = '\uA946';//A984';
CARAKAN['I']      = '\uA946\uA947';
CARAKAN['U']      = '\uA946\uA948';
CARAKAN['E']     = '\uA946\uA949';
CARAKAN['AI']      = '\uA946\uA94A';
CARAKAN['O']      = '\uA946\uA94B';
CARAKAN['AU']      = '\uA946\uA94C';
CARAKAN['EU']      = '\uA946\uA94D';
CARAKAN['EA']      = '\uA946\uA94E';
// aksara swara ha, hi, hu
CARAKAN['a']      = '';//A984';
CARAKAN['i']      = '\uA947';
CARAKAN['u']      = '\uA948';
CARAKAN['e']     = '\uA949';
CARAKAN['ai']      = '\uA94A';
CARAKAN['o']      = '\uA94B';
CARAKAN['au']      = '\uA94C';
CARAKAN['eu']      = '\uA94D';
CARAKAN['ea']      = '\uA94E';
// pada (tanda baca)
CARAKAN[',']  = ','; //pada lingsa
CARAKAN['.']  = '.'; //pada lungsi
CARAKAN['\n'] = '\r\n'; 
CARAKAN[' ']  = '';
CARAKAN['\t'] = '';
CARAKAN[':']  = ':';
CARAKAN[';']  = ';';
CARAKAN['\''] = '\'';
CARAKAN['\"'] = '\"';
CARAKAN['(']  = '('; //rerenggan kiwa
CARAKAN[')']  = ')'; //rerenggan tengen

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

    if (aksara == 'h' || aksara == 'r' || aksara == 'ng' || aksara == 'n') {
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

    var strOut = ''
    var r
    var silaba
    var suku
    var polaWanda = PAT_LAIN
    
    var KONS = 'th|dh|mb|ngg|nd|nyj|[b-df-hj-mp-tv-z]|ng|ny|n'
    var VOK  = 'ai|au|eu|ea|[aiuo]|e'
    var REP  = ''
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
				//if ((r[1]+r[3] != 're')&&(r[1]+r[3] != 'le')){
					silaba  = CARAKAN[r[1]]
					silaba += CARAKAN[r[3]]
					silaba += sigeg(r[4])
				//}else{
				//	silaba = CARAKAN[r[1]+r[3]];
				//	silaba += sigeg(r[4])
				//}
            } else if (polaWanda == PAT_KV) {
                suku = r[1] + r[3]
        		//		if ((suku != 're')&&(suku != 'le')){
        					silaba  = CARAKAN[r[1]]
        					silaba += CARAKAN[r[3]]
        		//		}else{
        		//			silaba = CARAKAN[r[1]+r[3]]
        		//		}
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
               /* r = strInp.match(DIGIT)
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
                } else {*/
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
                //}
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


