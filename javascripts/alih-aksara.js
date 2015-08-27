//Variabel Pola Suku Kata (Wanda)-------------------------------------------// 
PAT_V      = 0x01	//Vokal
PAT_VK     = 0x02	//Vokal + Konsonan
PAT_KV     = 0x03	//Konsonan + Vokal
PAT_KVK    = 0x04	//Konsonan + Vokal + Konsonan
PAT_KRV    = 0x05	//Konsonan + Panjingan + Vokal
PAT_KRVK   = 0x06	//Konsonan + Panjingan + Vokal + Konsonan
PAT_SILABA = 0x07	//Konsonan
PAT_LAIN   = 0x00	//Sanesipun

//Variabel jenis Aksara Lokal -------------------------------------------// 
AK_REJANG     = 0x00
AK_MAKASSAR   = 0x01
AK_BUGIS      = 0x02
AK_TOBA       = 0x03
AK_KARO       = 0x04
AK_SIMALUNGUN = 0x05
AK_MANDAILING = 0x06
AK_DAIRI      = 0x07
AK_LAIN       = 0xff

//============================LONTARA VARIABLE============================//
var LONTARA = new Array();

// 
LONTARA['k']   = '\u1A00';
LONTARA['g']   = '\u1A01';
LONTARA['ng']  = '\u1A02';
LONTARA['ngk'] = '\u1A03';
//
LONTARA['p']   = '\u1A04';
LONTARA['b']   = '\u1A05';
LONTARA['m']   = '\u1A06';
LONTARA['mp']  = '\u1A07';
//
LONTARA['t']   = '\u1A08';
LONTARA['d']   = '\u1A09';
LONTARA['n']   = '\u1A0A';
LONTARA['nr']  = '\u1A0B';
//
LONTARA['c']   = '\u1A0C';
LONTARA['j']   = '\u1A0D';
LONTARA['ny']  = '\u1A0E';
LONTARA['nyc'] = '\u1A0F';
LONTARA['nc']  = '\u1A0F';
//
LONTARA['y']   = '\u1A10';
LONTARA['r']   = '\u1A11';
LONTARA['l']   = '\u1A12';
LONTARA['w']   = '\u1A13';
LONTARA['s']   = '\u1A14';
LONTARA['h']   = '\u1A16';
//
LONTARA['A']   = '\u1A15';//A984';
LONTARA['I']   = '\u1A15\u1A17';
LONTARA['U']   = '\u1A15\u1A18';
LONTARA['E']   = '\u1A15\u1A19';
LONTARA['O']   = '\u1A15\u1A1A';
LONTARA['AE']  = '\u1A15\u1A1B';
//
LONTARA['a']   = '';//A984';
LONTARA['i']   = '\u1A17';
LONTARA['u']   = '\u1A18';
LONTARA['e']   = '\u1A19';
LONTARA['o']   = '\u1A1A';
LONTARA['ae']  = '\u1A1B';
// pada (tanda baca)
LONTARA['\n']  = '\r\n'; 
LONTARA[' ']   = '';
LONTARA['\t']  = '';


//============================REJANG VARIABLE============================//
var REJANG = new Array();

REJANG['k']    = '\uA930';
REJANG['q']    = '\uA930';
REJANG['x']    = '\uA930\uA953\uA93C';
REJANG['g']    = '\uA931';
REJANG['ng']   = '\uA932';
//
REJANG['t']    = '\uA933';
REJANG['d']    = '\uA934';
REJANG['n']    = '\uA935';
//
REJANG['p']    = '\uA936';
REJANG['f']    = '\uA936';
REJANG['v']    = '\uA936';
REJANG['b']    = '\uA937';
REJANG['m']    = '\uA938';
//
REJANG['c']    = '\uA939';
REJANG['j']    = '\uA93A';
REJANG['z']    = '\uA93A';
REJANG['ny']   = '\uA93B';
//
REJANG['s']    = '\uA93C';
REJANG['r']    = '\uA93D';
REJANG['l']    = '\uA93E';
REJANG['y']    = '\uA93F';
REJANG['w']    = '\uA940';
REJANG['h']    = '\uA941';
//
REJANG['mb']   = '\uA942';
REJANG['ngg']  = '\uA943';
REJANG['nd']   = '\uA944';
REJANG['nyj']  = '\uA945';
REJANG['nj']  = '\uA945';
// sandhangan panyigeg wanda
REJANG['+ng'] = '\uA94F';
REJANG['+n']  = '\uA950';
REJANG['+r']  = '\uA951';
REJANG['+h']  = '\uA952';
REJANG['+O']  = '\uA953';//pangkon
// aksara swara ha, hi, hu
REJANG['A']  = '\uA946';//A984';
REJANG['I']  = '\uA946\uA947';
REJANG['U']  = '\uA946\uA948';
REJANG['E']  = '\uA946\uA949';
REJANG['AI'] = '\uA946\uA94A';
REJANG['O']  = '\uA946\uA94B';
REJANG['AU'] = '\uA946\uA94C';
REJANG['EU'] = '\uA946\uA94D';
REJANG['EA'] = '\uA946\uA94E';
// aksara swara ha, hi, hu
REJANG['a']  = '';//A984';
REJANG['i']  = '\uA947';
REJANG['u']  = '\uA948';
REJANG['e']  = '\uA949';
REJANG['ai'] = '\uA94A';
REJANG['o']  = '\uA94B';
REJANG['au'] = '\uA94C';
REJANG['eu'] = '\uA94D';
REJANG['ea'] = '\uA94E';
// pada (tanda baca)
REJANG['\n'] = '\r\n'; 
REJANG[' ']  = '';
REJANG['\t'] = '';

//Fungsi Panyigeg Wanda Rejang-------------------------------------------------//
function sigegRejang(aksara)
{
    var output = ''

    if (aksara == 'h' || aksara == 'r' || aksara == 'ng' || aksara == 'n') {
        output = REJANG['+' + aksara]
    } else {
        output = REJANG[aksara] + REJANG['+O']
    }
    
    return output
} // end sigegRejang

//Fungsi Aksara Latin -> Aksara Lontara Makassar -----------------------------//
function latin2Makassar(strInp)
{    
    var strMakassar = ''
    
    strInp = strInp.toLowerCase()

    var inpLength = strInp.length
    var idx = 0
    var jump = 0

    var strOut = ''
    var r
    var silaba
    var suku
    var polaWanda = PAT_LAIN
    
    var KONS = 'ngk|ng|nyc|nc|ny|nr|mp|[bcdghjklmnprstwy]'
    var VOK  = 'ae|[aeiuo]'
    var SILABA = '^'
	var TANDA = '[\n \t]'
    SILABA += '('+KONS+')?'             // group(1), K
    SILABA += '('+VOK+')'               // group(2)V
    KONSONAN = '^('+KONS+')'
	TANDA_BACA = '^('+TANDA+')'
    //var DIGIT = '^([0-9]+)'
    
    while (idx < inpLength) {
        suku = ''
        r = strInp.match(SILABA)
		//return r;
        if (r !== null) {
            if (r[1]){
				polaWanda = PAT_KV
			}else{
				polaWanda = PAT_V
			}
            
            // bentuk:
            if (polaWanda == PAT_KV) {
                suku = r[1] + r[2]
				silaba  = LONTARA[r[1]]
				silaba += LONTARA[r[2]]
            }else {
                suku = r[2]
                silaba = LONTARA[suku.toUpperCase()]
            } // end if
            strOut += silaba 
            polaWanda = PAT_SILABA
        } else {
            r = strInp.match(KONSONAN)
            if (r != null) {
                suku   = r[1]
				silaba = ''
                strOut += silaba
            } else {
				r = strInp.match(TANDA_BACA)
				if (r != null){
					 suku = r[1]
					 silaba = LONTARA[suku]
					 strOut += silaba
				}else{
					suku = strInp.substr(0,1)
					silaba = suku
					strOut += suku
				}
            } // end if
            polaWanda = PAT_LAIN
        }// end if
        strInp = strInp.substr(suku.length)
        idx += suku.length
    
    }// end while

    return strOut
}

//Fungsi Aksara Latin -> Aksara Rejang ---------------------------------------//
function latin2Rejang(strInp)
{    
    var strRejang = ''
    
    strInp = strInp.toLowerCase()

    var inpLength = strInp.length
    var idx = 0
    var jump = 0

    var strOut = ''
    var r
    var silaba
    var suku
    var polaWanda = PAT_LAIN
    
    var KONS = 'th|dh|mb|ngg|nd|nyj|nj|[b-df-hj-mp-tv-z]|ng|ny|n'
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
		//return r;
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
                silaba  = REJANG[r[1]]
				if (r[2]+r[3] != 're'){
					silaba += REJANG['+' + r[2] + 'a']
					silaba += REJANG[r[3]]
				}else{
					silaba += REJANG['+' + r[2] + 'e']
				}
                silaba += sigegRejang(r[4])
            } else if (polaWanda == PAT_KRV) {
                suku = r[1] + r[2] + r[3]
                silaba  = REJANG[r[1]]
				if (r[2]+r[3] != 're'){
					silaba += REJANG['+' + r[2] + 'a']
					silaba += REJANG[r[3]]
				}else{
					silaba += REJANG['+' + r[2] + 'e']
				}
            } else if (polaWanda == PAT_KVK) {
                suku = r[1] + r[3] + r[4]
				//if ((r[1]+r[3] != 're')&&(r[1]+r[3] != 'le')){
					silaba  = REJANG[r[1]]
					silaba += REJANG[r[3]]
					silaba += sigegRejang(r[4])
				//}else{
				//	silaba = REJANG[r[1]+r[3]];
				//	silaba += sigeg(r[4])
				//}
            } else if (polaWanda == PAT_KV) {
                suku = r[1] + r[3]
        		//		if ((suku != 're')&&(suku != 'le')){
        					silaba  = REJANG[r[1]]
        					silaba += REJANG[r[3]]
        		//		}else{
        		//			silaba = REJANG[r[1]+r[3]]
        		//		}
            } else if (polaWanda == PAT_VK) {
                suku = r[3] + r[4]
                silaba  = REJANG[r[3].toUpperCase()]
                silaba += sigegRejang(r[4])
            } else {
                suku = r[3]
                silaba = REJANG[suku.toUpperCase()]
            } // end if
            strOut += silaba 
            polaWanda = PAT_SILABA
        } else {
            r = strInp.match(KONSONAN)
            if (r != null) {
                suku   = r[1]
                if (polaWanda == PAT_SILABA)
                {
                    silaba = sigegRejang(suku)
                } else {
                    silaba = REJANG[suku] + REJANG['+O']
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
                        silaba += REJANG[suku.substr(i,1)]
                        i += 1
                    } //end while
                    silaba += '\uA9C7'
                    strOut += silaba
                } else {*/
                    r = strInp.match(TANDA_BACA)
          					if (r != null){
          						 suku = r[1]
          						 silaba = REJANG[suku]
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
}//end latin2Rejang

//Fungsi Untuk Mengeksekusi Fungsi Latin2Jawa ------------------------------//
function btLatin2Aksara()
{
	var latinText = document.getElementById('aksaraLatin').value
	var strAksara =''
	var jenisAksara = document.getElementById("jenisAksara").selectedIndex;
	if (jenisAksara == AK_REJANG){
		strAksara = latin2Rejang(latinText);   
	}else if (jenisAksara == AK_MAKASSAR){
		strAksara = latin2Makassar(latinText);   
	}
	document.getElementById('aksaraLokal').value = strAksara;
}


