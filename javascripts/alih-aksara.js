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
AK_BUGIS      = 0xf2
AK_MANDAILING = 0x02
AK_SIMALUNGUN = 0x03
AK_TOBA       = 0x04
AK_PAKPAK     = 0x05
AK_KARO       = 0x07
AK_LAIN       = 0xff

//============================LONTARA VARIABLE============================//
var LONTARA = new Array();

// 
LONTARA['k']   = '\u1A00';
LONTARA['q']   = '\u1A00';
LONTARA['g']   = '\u1A01';
LONTARA['ng']  = '\u1A02';
LONTARA['ngk'] = '\u1A03';
//
LONTARA['p']   = '\u1A04';
LONTARA['f']   = '\u1A04';
LONTARA['v']   = '\u1A04';
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
LONTARA['z']   = '\u1A0D';
LONTARA['ny']  = '\u1A0E';
LONTARA['nyc'] = '\u1A0F';
LONTARA['nc']  = '\u1A0F';
//
LONTARA['y']   = '\u1A10';
LONTARA['r']   = '\u1A11';
LONTARA['l']   = '\u1A12';
LONTARA['w']   = '\u1A13';
LONTARA['s']   = '\u1A14';
LONTARA['x']   = '\u1A14';
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
LONTARA[' ']   = ' ';
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


//============================MANDAILING VARIABLE============================//
var MANDAILING = new Array();
MANDAILING['h'] = '\u1BC4';
MANDAILING['k'] = '\u1BC4\u1BE6';
MANDAILING['b'] = '\u1BC5';
MANDAILING['p'] = '\u1BC7';
MANDAILING['n'] = '\u1BC9';
MANDAILING['w'] = '\u1BCB';
MANDAILING['g'] = '\u1BCE';
MANDAILING['j'] = '\u1BD0';
MANDAILING['d'] = '\u1BD1';
MANDAILING['r'] = '\u1BD2';
MANDAILING['m'] = '\u1BD4';
MANDAILING['t'] = '\u1BD6';
MANDAILING['s'] = '\u1BDA';
MANDAILING['y'] = '\u1BDB';
MANDAILING['ng'] = '\u1BDD';
MANDAILING['l'] = '\u1BDE';
MANDAILING['ny'] = '\u1BE0';
MANDAILING['c'] = '\u1BDA\u1BE6';

MANDAILING['a'] = '';
MANDAILING['e'] = '\u1BE9';
MANDAILING['ae'] = '\u1BE9';
MANDAILING['i'] = '\u1BEA';
MANDAILING['o'] = '\u1BEC';
MANDAILING['u'] = '\u1BEE';

MANDAILING['A'] = '\u1BC0';
MANDAILING['E'] = '\u1BC0\u1BE9';
MANDAILING['AE'] = '\u1BC0\u1BE9';
MANDAILING['I'] = '\u1BE4';
MANDAILING['O'] = '\u1BC0\u1BEC';
MANDAILING['U'] = '\u1BE5';

MANDAILING['+ng'] = '\u1BF0';
MANDAILING['+O'] = '\u1BF2';
// pada (tanda baca)
MANDAILING['\n'] = '\r\n'; 
MANDAILING[' ']  = '';
MANDAILING['\t'] = '';

//============================SIMALUNGUN VARIABLE============================//
var SIMALUNGUN = new Array();
SIMALUNGUN['h'] = '\u1BC3';
SIMALUNGUN['k'] = '\u1BC3';
SIMALUNGUN['b'] = '\u1BC5';
SIMALUNGUN['p'] = '\u1BC8';
SIMALUNGUN['n'] = '\u1BC9';
SIMALUNGUN['w'] = '\u1BCC';
SIMALUNGUN['g'] = '\u1BCF';
SIMALUNGUN['j'] = '\u1BD0';
SIMALUNGUN['d'] = '\u1BD1';
SIMALUNGUN['r'] = '\u1BD3';
SIMALUNGUN['m'] = '\u1BD5';
SIMALUNGUN['t'] = '\u1BD6';
SIMALUNGUN['s'] = '\u1BD9';
SIMALUNGUN['y'] = '\u1BDC';
SIMALUNGUN['ng'] = '\u1BDD';
SIMALUNGUN['l'] = '\u1BDF';
SIMALUNGUN['ny'] = '\u1BE0';

SIMALUNGUN['a'] = '';
SIMALUNGUN['e'] = '\u1BE9';
SIMALUNGUN['ae'] = '\u1BE9';
SIMALUNGUN['i'] = '\u1BEB';
SIMALUNGUN['o'] = '\u1BEC';
SIMALUNGUN['u'] = '\u1BEE';
SIMALUNGUN['su'] = '\u1BE9';

SIMALUNGUN['A'] = '\u1BC1';
SIMALUNGUN['E'] = '\u1BC1\u1BE9';
SIMALUNGUN['AE'] = '\u1BC1\u1BE9';
SIMALUNGUN['I'] = '\u1BE4';
SIMALUNGUN['O'] = '\u1BC1\u1BEC';
SIMALUNGUN['U'] = '\u1BE5';

SIMALUNGUN['+ng'] = '\u1BF0';
SIMALUNGUN['+h'] = '\u1BF1';
SIMALUNGUN['+O'] = '\u1BF3';
// pada (tanda baca)
SIMALUNGUN['\n'] = '\r\n'; 
SIMALUNGUN[' ']  = '';
SIMALUNGUN['\t'] = '';

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
//Fungsi Panyigeg Wanda Rejang-------------------------------------------------//
function sigegMandailing(aksara)
{
    var output = ''

    if (aksara == 'ng') {
        output = MANDAILING['+' + aksara]
    } else {
        output = MANDAILING[aksara] + MANDAILING['+O']
    }
    
    return output
} // end sigegRejang

//Fungsi Panyigeg Wanda Simalungun-------------------------------------------------//
function sigegSimalungun(aksara)
{
    var output = ''

    if (aksara == 'h' || aksara == 'ng') {
        output = SIMALUNGUN['+' + aksara]
    } else {
        output = SIMALUNGUN[aksara] + SIMALUNGUN['+O']
    }
    
    return output
} // end sigegSimalungun

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
    
    var KONS = 'ngk|ng|nyc|nc|ny|nr|mp|[bcdfghjklmnpqrstvwxyz]'
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

//Fungsi Aksara Latin -> Aksara Lontara Bugis -----------------------------//
function latin2Bugis(strInp)
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
    
    var KONS = 'mb|ngg|nd|nyj|nj|[b-df-hj-mp-tv-z]|ng|ny|n'
    var VOK  = 'ai|au|eu|ea|[aiuo]|e'
    var REP  = ''
    var SILABA = '^'
    var TANDA = '[\n \t]'
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

//Fungsi Aksara Latin -> Aksara Mandailing ---------------------------------------//
function latin2Mandailing(strInp)
{    
    var strMandailing = ''
    
    strInp = strInp.toLowerCase()

    var inpLength = strInp.length
    var idx = 0
    var jump = 0

    var strOut = ''
    var r
    var silaba
    var suku
    var polaWanda = PAT_LAIN
    
    var KONS = 'ng|ny|[bcdghjklmnprstwy]'
    var VOK  = 'ae|[aiuo]|e'
    var REP  = ''
    var SILABA = '^'
    var TANDA = '[\n \t]'
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
                silaba  = MANDAILING[r[1]]
				if (r[2]+r[3] != 're'){
					silaba += MANDAILING['+' + r[2] + 'a']
					silaba += MANDAILING[r[3]]
				}else{
					silaba += MANDAILING['+' + r[2] + 'e']
				}
                silaba += sigegMandailing(r[4])
            } else if (polaWanda == PAT_KRV) {
                suku = r[1] + r[2] + r[3]
                silaba  = MANDAILING[r[1]]
				if (r[2]+r[3] != 're'){
					silaba += MANDAILING['+' + r[2] + 'a']
					silaba += MANDAILING[r[3]]
				}else{
					silaba += MANDAILING['+' + r[2] + 'e']
				}
            } else if (polaWanda == PAT_KVK) {
                suku = r[1] + r[3] + r[4]
				//if ((r[1]+r[3] != 're')&&(r[1]+r[3] != 'le')){
					silaba  = MANDAILING[r[1]]
					silaba += MANDAILING[r[3]]
					silaba += sigegMandailing(r[4])
				//}else{
				//	silaba = REJANG[r[1]+r[3]];
				//	silaba += sigeg(r[4])
				//}
            } else if (polaWanda == PAT_KV) {
                suku = r[1] + r[3]
        		//		if ((suku != 're')&&(suku != 'le')){
        					silaba  = MANDAILING[r[1]]
        					silaba += MANDAILING[r[3]]
        		//		}else{
        		//			silaba = REJANG[r[1]+r[3]]
        		//		}
            } else if (polaWanda == PAT_VK) {
                suku = r[3] + r[4]
                silaba  = MANDAILING[r[3].toUpperCase()]
                silaba += sigegMandailing(r[4])
            } else {
                suku = r[3]
                silaba = MANDAILING[suku.toUpperCase()]
            } // end if
            strOut += silaba 
            polaWanda = PAT_SILABA
        } else {
            r = strInp.match(KONSONAN)
            if (r != null) {
                suku   = r[1]
                if (polaWanda == PAT_SILABA)
                {
                    silaba = sigegMandailing(suku)
                } else {
                    silaba = MANDAILING[suku] + MANDAILING['+O']
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
          						 silaba = MANDAILING[suku]
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
}//end latin2Mandailing

//Fungsi Aksara Latin -> Aksara Simalungun ---------------------------------------//
function latin2Simalungun(strInp)
{    
    var strSimalungun = ''
    
    strInp = strInp.toLowerCase()

    var inpLength = strInp.length
    var idx = 0
    var jump = 0

    var strOut = ''
    var r
    var silaba
    var suku
    var polaWanda = PAT_LAIN
    
    var KONS = 'ng|ny|[bdghjklmnprstwy]'
    var VOK  = 'ae|[aiuo]|e'
    var REP  = ''
    var SILABA = '^'
    var TANDA = '[\n \t]'
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
                silaba  = SIMALUNGUN[r[1]]
				if (r[2]+r[3] != 're'){
					silaba += SIMALUNGUN['+' + r[2] + 'a']
					silaba += SIMALUNGUN[r[3]]
				}else{
					silaba += SIMALUNGUN['+' + r[2] + 'e']
				}
                silaba += sigegSimalungun(r[4])
            } else if (polaWanda == PAT_KRV) {
                suku = r[1] + r[2] + r[3]
                silaba  = SIMALUNGUN[r[1]]
				if (r[2]+r[3] != 're'){
					silaba += SIMALUNGUN['+' + r[2] + 'a']
					silaba += SIMALUNGUN[r[3]]
				}else{
					silaba += SIMALUNGUN['+' + r[2] + 'e']
				}
            } else if (polaWanda == PAT_KVK) {
                suku = r[1] + r[3] + r[4]
				//if ((r[1]+r[3] != 're')&&(r[1]+r[3] != 'le')){
				silaba  = SIMALUNGUN[r[1]]
				if((r[1]=='s')&&(r[3]=='u')){
					silaba += SIMALUNGUN['su']
				}else{
					silaba += SIMALUNGUN[r[3]]
				}
				silaba += sigegSimalungun(r[4])
				//}else{
				//	silaba = REJANG[r[1]+r[3]];
				//	silaba += sigeg(r[4])
				//}
            } else if (polaWanda == PAT_KV) {
                suku = r[1] + r[3]
				silaba  = SIMALUNGUN[r[1]]
				if((r[1]=='s')&&(r[3]=='u')){
					silaba += SIMALUNGUN['su']
				}else{
					silaba += SIMALUNGUN[r[3]]
				}
            } else if (polaWanda == PAT_VK) {
                suku = r[3] + r[4]
                silaba  = SIMALUNGUN[r[3].toUpperCase()]
                silaba += sigegSimalungun(r[4])
            } else {
                suku = r[3]
                silaba = SIMALUNGUN[suku.toUpperCase()]
            } // end if
            strOut += silaba 
            polaWanda = PAT_SILABA
        } else {
            r = strInp.match(KONSONAN)
            if (r != null) {
                suku   = r[1]
                if (polaWanda == PAT_SILABA)
                {
                    silaba = sigegSimalungun(suku)
                } else {
                    silaba = SIMALUNGUN[suku] + SIMALUNGUN['+O']
                }
                strOut += silaba
            } else {
                    r = strInp.match(TANDA_BACA)
          					if (r != null){
          						 suku = r[1]
          						 silaba = SIMALUNGUN[suku]
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
}//end latin2Simalungun

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
	}else if (jenisAksara == AK_MANDAILING){
		strAksara = latin2Mandailing(latinText);   
	}else if (jenisAksara == AK_SIMALUNGUN){
		strAksara = latin2Simalungun(latinText);   
	}
	document.getElementById('aksaraLokal').value = strAksara;
}


