function CalcBattingAvg(h,ab) {
    if (ab === 0) {
        return 0.000;
    }
    else {
        return h / ab;
    }
}

function CalcPA(ab,bb,hbp,sacb,sacf) {
    return ab + bb + hbp + sacb + sacf;
}

function CalcObp(h,bb,hbp,ab,sacf) {
    if (ab+bb+hbp+sacf === 0) {
        return 0.000;
    }
    else {
        return (h+bb+hbp) / (ab+bb+hbp+sacf);
    }
}

function CalcXbh(double,triple,hr) {
    return double + triple + hr;
}

function CalcTb(single,double,triple,hr) {
    return single + (2*double) + (3*triple) + (4*hr);
}

function CalcSlg(tb,ab) {
    if (ab === 0) {
        return 0.000;
    }
    else {
        return tb / ab;
    }
}

function CalcOps(obp,slg) {
    return obp + slg;
}









var AaronNeeck = [
    0, /* ab            0*/
    0, /* h             1*/
    0, /* double        2*/
    0, /* triple        3*/
    0, /* hr            4*/
    0, /* rbi           5*/
    0, /* r             6*/
    0, /* bb            7*/
    0, /* so            8*/
    0, /* sb            9*/
    0, /* cs            10*/
    0, /* ibb           11*/
    0, /* hbp           12*/
    0, /* sacf          13*/
    0, /* sacb          14*/
]

var AaronNeecksingle = AaronNeeck[1] - (CalcXbh(AaronNeeck[2],AaronNeeck[3],AaronNeeck[4]));

document.getElementById("AaronNeeckab").innerHTML = AaronNeeck[0];
document.getElementById("AaronNeeckpa").innerHTML = CalcPA(AaronNeeck[0],AaronNeeck[7],AaronNeeck[12],AaronNeeck[14],AaronNeeck[13]);
document.getElementById("AaronNeeckh").innerHTML = AaronNeeck[1];
document.getElementById("AaronNeeckavg").innerHTML = CalcBattingAvg(AaronNeeck[1], AaronNeeck[0]).toFixed(3);
document.getElementById("AaronNeeckdouble").innerHTML = AaronNeeck[2];
document.getElementById("AaronNeecktriple").innerHTML = AaronNeeck[3];
document.getElementById("AaronNeeckhr").innerHTML = AaronNeeck[4];
document.getElementById("AaronNeeckobp").innerHTML = CalcObp(AaronNeeck[1],AaronNeeck[7],AaronNeeck[12],AaronNeeck[0],AaronNeeck[13]).toFixed(3);
document.getElementById("AaronNeeckrbi").innerHTML = AaronNeeck[5];
document.getElementById("AaronNeeckr").innerHTML = AaronNeeck[6];
document.getElementById("AaronNeeckbb").innerHTML = AaronNeeck[7];
document.getElementById("AaronNeeckso").innerHTML = AaronNeeck[8];
document.getElementById("AaronNeeckslg").innerHTML = CalcSlg(CalcTb(AaronNeecksingle,AaronNeeck[2],AaronNeeck[3],AaronNeeck[4]),AaronNeeck[0]).toFixed(3);
document.getElementById("AaronNeeckops").innerHTML =CalcOps(CalcObp(AaronNeeck[1],AaronNeeck[7],AaronNeeck[12],AaronNeeck[0],AaronNeeck[13]),CalcSlg(CalcTb(AaronNeecksingle,AaronNeeck[2],AaronNeeck[3],AaronNeeck[4]),AaronNeeck[0])).toFixed(3);
document.getElementById("AaronNeecksb").innerHTML = AaronNeeck[9];
document.getElementById("AaronNeeckcs").innerHTML = AaronNeeck[10];
document.getElementById("AaronNeeckibb").innerHTML = AaronNeeck[11];
document.getElementById("AaronNeeckhbp").innerHTML = AaronNeeck[12];
document.getElementById("AaronNeecksacf").innerHTML = AaronNeeck[13];
document.getElementById("AaronNeecksacb").innerHTML = AaronNeeck[14];
document.getElementById("AaronNeecktb").innerHTML = CalcTb(AaronNeecksingle,AaronNeeck[2],AaronNeeck[3],AaronNeeck[4]);
document.getElementById("AaronNeeckxbh").innerHTML = CalcXbh(AaronNeeck[2],AaronNeeck[3],AaronNeeck[4]);










var AlexTorpey = [
    7, /* ab            0*/
    3, /* h             1*/
    1, /* double        2*/
    0, /* triple        3*/
    0, /* hr            4*/
    2, /* rbi           5*/
    2, /* r             6*/
    0, /* bb            7*/
    1, /* so            8*/
    0, /* sb            9*/
    0, /* cs            10*/
    0, /* ibb           11*/
    0, /* hbp           12*/
    0, /* sacf          13*/
    0, /* sacb          14*/
]

var AlexTorpeysingle = AlexTorpey[1] - (CalcXbh(AlexTorpey[2],AlexTorpey[3],AlexTorpey[4]));

document.getElementById("AlexTorpeyab").innerHTML = AlexTorpey[0];
document.getElementById("AlexTorpeypa").innerHTML = CalcPA(AlexTorpey[0],AlexTorpey[7],AlexTorpey[12],AlexTorpey[14],AlexTorpey[13]);
document.getElementById("AlexTorpeyh").innerHTML = AlexTorpey[1];
document.getElementById("AlexTorpeyavg").innerHTML = CalcBattingAvg(AlexTorpey[1], AlexTorpey[0]).toFixed(3);
document.getElementById("AlexTorpeydouble").innerHTML = AlexTorpey[2];
document.getElementById("AlexTorpeytriple").innerHTML = AlexTorpey[3];
document.getElementById("AlexTorpeyhr").innerHTML = AlexTorpey[4];
document.getElementById("AlexTorpeyobp").innerHTML = CalcObp(AlexTorpey[1],AlexTorpey[7],AlexTorpey[12],AlexTorpey[0],AlexTorpey[13]).toFixed(3);
document.getElementById("AlexTorpeyrbi").innerHTML = AlexTorpey[5];
document.getElementById("AlexTorpeyr").innerHTML = AlexTorpey[6];
document.getElementById("AlexTorpeybb").innerHTML = AlexTorpey[7];
document.getElementById("AlexTorpeyso").innerHTML = AlexTorpey[8];
document.getElementById("AlexTorpeyslg").innerHTML = CalcSlg(CalcTb(AlexTorpeysingle,AlexTorpey[2],AlexTorpey[3],AlexTorpey[4]),AlexTorpey[0]).toFixed(3);
document.getElementById("AlexTorpeyops").innerHTML =CalcOps(CalcObp(AlexTorpey[1],AlexTorpey[7],AlexTorpey[12],AlexTorpey[0],AlexTorpey[13]),CalcSlg(CalcTb(AlexTorpeysingle,AlexTorpey[2],AlexTorpey[3],AlexTorpey[4]),AlexTorpey[0])).toFixed(3);
document.getElementById("AlexTorpeysb").innerHTML = AlexTorpey[9];
document.getElementById("AlexTorpeycs").innerHTML = AlexTorpey[10];
document.getElementById("AlexTorpeyibb").innerHTML = AlexTorpey[11];
document.getElementById("AlexTorpeyhbp").innerHTML = AlexTorpey[12];
document.getElementById("AlexTorpeysacf").innerHTML = AlexTorpey[13];
document.getElementById("AlexTorpeysacb").innerHTML = AlexTorpey[14];
document.getElementById("AlexTorpeytb").innerHTML = CalcTb(AlexTorpeysingle,AlexTorpey[2],AlexTorpey[3],AlexTorpey[4]);
document.getElementById("AlexTorpeyxbh").innerHTML = CalcXbh(AlexTorpey[2],AlexTorpey[3],AlexTorpey[4]);










var AndrewGreene = [
    7, /* ab            0*/
    2, /* h             1*/
    0, /* double        2*/
    0, /* triple        3*/
    0, /* hr            4*/
    2, /* rbi           5*/
    0, /* r             6*/
    0, /* bb            7*/
    2, /* so            8*/
    1, /* sb            9*/
    0, /* cs            10*/
    0, /* ibb           11*/
    2, /* hbp           12*/
    0, /* sacf          13*/
    0, /* sacb          14*/
]

var AndrewGreenesingle = AndrewGreene[1] - (CalcXbh(AndrewGreene[2],AndrewGreene[3],AndrewGreene[4]));

document.getElementById("AndrewGreeneab").innerHTML = AndrewGreene[0];
document.getElementById("AndrewGreenepa").innerHTML = CalcPA(AndrewGreene[0],AndrewGreene[7],AndrewGreene[12],AndrewGreene[14],AndrewGreene[13]);
document.getElementById("AndrewGreeneh").innerHTML = AndrewGreene[1];
document.getElementById("AndrewGreeneavg").innerHTML = CalcBattingAvg(AndrewGreene[1], AndrewGreene[0]).toFixed(3);
document.getElementById("AndrewGreenedouble").innerHTML = AndrewGreene[2];
document.getElementById("AndrewGreenetriple").innerHTML = AndrewGreene[3];
document.getElementById("AndrewGreenehr").innerHTML = AndrewGreene[4];
document.getElementById("AndrewGreeneobp").innerHTML = CalcObp(AndrewGreene[1],AndrewGreene[7],AndrewGreene[12],AndrewGreene[0],AndrewGreene[13]).toFixed(3);
document.getElementById("AndrewGreenerbi").innerHTML = AndrewGreene[5];
document.getElementById("AndrewGreener").innerHTML = AndrewGreene[6];
document.getElementById("AndrewGreenebb").innerHTML = AndrewGreene[7];
document.getElementById("AndrewGreeneso").innerHTML = AndrewGreene[8];
document.getElementById("AndrewGreeneslg").innerHTML = CalcSlg(CalcTb(AndrewGreenesingle,AndrewGreene[2],AndrewGreene[3],AndrewGreene[4]),AndrewGreene[0]).toFixed(3);
document.getElementById("AndrewGreeneops").innerHTML =CalcOps(CalcObp(AndrewGreene[1],AndrewGreene[7],AndrewGreene[12],AndrewGreene[0],AndrewGreene[13]),CalcSlg(CalcTb(AndrewGreenesingle,AndrewGreene[2],AndrewGreene[3],AndrewGreene[4]),AndrewGreene[0])).toFixed(3);
document.getElementById("AndrewGreenesb").innerHTML = AndrewGreene[9];
document.getElementById("AndrewGreenecs").innerHTML = AndrewGreene[10];
document.getElementById("AndrewGreeneibb").innerHTML = AndrewGreene[11];
document.getElementById("AndrewGreenehbp").innerHTML = AndrewGreene[12];
document.getElementById("AndrewGreenesacf").innerHTML = AndrewGreene[13];
document.getElementById("AndrewGreenesacb").innerHTML = AndrewGreene[14];
document.getElementById("AndrewGreenetb").innerHTML = CalcTb(AndrewGreenesingle,AndrewGreene[2],AndrewGreene[3],AndrewGreene[4]);
document.getElementById("AndrewGreenexbh").innerHTML = CalcXbh(AndrewGreene[2],AndrewGreene[3],AndrewGreene[4]);










var AnthonyCharles = [
    9, /* ab            0*/
    5, /* h             1*/
    0, /* double        2*/
    1, /* triple        3*/
    0, /* hr            4*/
    3, /* rbi           5*/
    2, /* r             6*/
    0, /* bb            7*/
    0, /* so            8*/
    1, /* sb            9*/
    0, /* cs            10*/
    0, /* ibb           11*/
    3, /* hbp           12*/
    1, /* sacf          13*/
    0, /* sacb          14*/
]

var AnthonyCharlessingle = AnthonyCharles[1] - (CalcXbh(AnthonyCharles[2],AnthonyCharles[3],AnthonyCharles[4]));

document.getElementById("AnthonyCharlesab").innerHTML = AnthonyCharles[0];
document.getElementById("AnthonyCharlespa").innerHTML = CalcPA(AnthonyCharles[0],AnthonyCharles[7],AnthonyCharles[12],AnthonyCharles[14],AnthonyCharles[13]);
document.getElementById("AnthonyCharlesh").innerHTML = AnthonyCharles[1];
document.getElementById("AnthonyCharlesavg").innerHTML = CalcBattingAvg(AnthonyCharles[1], AnthonyCharles[0]).toFixed(3);
document.getElementById("AnthonyCharlesdouble").innerHTML = AnthonyCharles[2];
document.getElementById("AnthonyCharlestriple").innerHTML = AnthonyCharles[3];
document.getElementById("AnthonyCharleshr").innerHTML = AnthonyCharles[4];
document.getElementById("AnthonyCharlesobp").innerHTML = CalcObp(AnthonyCharles[1],AnthonyCharles[7],AnthonyCharles[12],AnthonyCharles[0],AnthonyCharles[13]).toFixed(3);
document.getElementById("AnthonyCharlesrbi").innerHTML = AnthonyCharles[5];
document.getElementById("AnthonyCharlesr").innerHTML = AnthonyCharles[6];
document.getElementById("AnthonyCharlesbb").innerHTML = AnthonyCharles[7];
document.getElementById("AnthonyCharlesso").innerHTML = AnthonyCharles[8];
document.getElementById("AnthonyCharlesslg").innerHTML = CalcSlg(CalcTb(AnthonyCharlessingle,AnthonyCharles[2],AnthonyCharles[3],AnthonyCharles[4]),AnthonyCharles[0]).toFixed(3);
document.getElementById("AnthonyCharlesops").innerHTML =CalcOps(CalcObp(AnthonyCharles[1],AnthonyCharles[7],AnthonyCharles[12],AnthonyCharles[0],AnthonyCharles[13]),CalcSlg(CalcTb(AnthonyCharlessingle,AnthonyCharles[2],AnthonyCharles[3],AnthonyCharles[4]),AnthonyCharles[0])).toFixed(3);
document.getElementById("AnthonyCharlessb").innerHTML = AnthonyCharles[9];
document.getElementById("AnthonyCharlescs").innerHTML = AnthonyCharles[10];
document.getElementById("AnthonyCharlesibb").innerHTML = AnthonyCharles[11];
document.getElementById("AnthonyCharleshbp").innerHTML = AnthonyCharles[12];
document.getElementById("AnthonyCharlessacf").innerHTML = AnthonyCharles[13];
document.getElementById("AnthonyCharlessacb").innerHTML = AnthonyCharles[14];
document.getElementById("AnthonyCharlestb").innerHTML = CalcTb(AnthonyCharlessingle,AnthonyCharles[2],AnthonyCharles[3],AnthonyCharles[4]);
document.getElementById("AnthonyCharlesxbh").innerHTML = CalcXbh(AnthonyCharles[2],AnthonyCharles[3],AnthonyCharles[4]);










var BrandonReyes = [
    15, /* ab            0*/
    6, /* h             1*/
    1, /* double        2*/
    0, /* triple        3*/
    0, /* hr            4*/
    3, /* rbi           5*/
    1, /* r             6*/
    0, /* bb            7*/
    4, /* so            8*/
    0, /* sb            9*/
    0, /* cs            10*/
    0, /* ibb           11*/
    0, /* hbp           12*/
    0, /* sacf          13*/
    0, /* sacb          14*/
]

var BrandonReyessingle = BrandonReyes[1] - (CalcXbh(BrandonReyes[2],BrandonReyes[3],BrandonReyes[4]));

document.getElementById("BrandonReyesab").innerHTML = BrandonReyes[0];
document.getElementById("BrandonReyespa").innerHTML = CalcPA(BrandonReyes[0],BrandonReyes[7],BrandonReyes[12],BrandonReyes[14],BrandonReyes[13]);
document.getElementById("BrandonReyesh").innerHTML = BrandonReyes[1];
document.getElementById("BrandonReyesavg").innerHTML = CalcBattingAvg(BrandonReyes[1], BrandonReyes[0]).toFixed(3);
document.getElementById("BrandonReyesdouble").innerHTML = BrandonReyes[2];
document.getElementById("BrandonReyestriple").innerHTML = BrandonReyes[3];
document.getElementById("BrandonReyeshr").innerHTML = BrandonReyes[4];
document.getElementById("BrandonReyesobp").innerHTML = CalcObp(BrandonReyes[1],BrandonReyes[7],BrandonReyes[12],BrandonReyes[0],BrandonReyes[13]).toFixed(3);
document.getElementById("BrandonReyesrbi").innerHTML = BrandonReyes[5];
document.getElementById("BrandonReyesr").innerHTML = BrandonReyes[6];
document.getElementById("BrandonReyesbb").innerHTML = BrandonReyes[7];
document.getElementById("BrandonReyesso").innerHTML = BrandonReyes[8];
document.getElementById("BrandonReyesslg").innerHTML = CalcSlg(CalcTb(BrandonReyessingle,BrandonReyes[2],BrandonReyes[3],BrandonReyes[4]),BrandonReyes[0]).toFixed(3);
document.getElementById("BrandonReyesops").innerHTML =CalcOps(CalcObp(BrandonReyes[1],BrandonReyes[7],BrandonReyes[12],BrandonReyes[0],BrandonReyes[13]),CalcSlg(CalcTb(BrandonReyessingle,BrandonReyes[2],BrandonReyes[3],BrandonReyes[4]),BrandonReyes[0])).toFixed(3);
document.getElementById("BrandonReyessb").innerHTML = BrandonReyes[9];
document.getElementById("BrandonReyescs").innerHTML = BrandonReyes[10];
document.getElementById("BrandonReyesibb").innerHTML = BrandonReyes[11];
document.getElementById("BrandonReyeshbp").innerHTML = BrandonReyes[12];
document.getElementById("BrandonReyessacf").innerHTML = BrandonReyes[13];
document.getElementById("BrandonReyessacb").innerHTML = BrandonReyes[14];
document.getElementById("BrandonReyestb").innerHTML = CalcTb(BrandonReyessingle,BrandonReyes[2],BrandonReyes[3],BrandonReyes[4]);
document.getElementById("BrandonReyesxbh").innerHTML = CalcXbh(BrandonReyes[2],BrandonReyes[3],BrandonReyes[4]);










var BrettOConnor = [
    2, /* ab            0*/
    1, /* h             1*/
    0, /* double        2*/
    0, /* triple        3*/
    0, /* hr            4*/
    1, /* rbi           5*/
    1, /* r             6*/
    0, /* bb            7*/
    1, /* so            8*/
    0, /* sb            9*/
    0, /* cs            10*/
    0, /* ibb           11*/
    0, /* hbp           12*/
    0, /* sacf          13*/
    0, /* sacb          14*/
]

var BrettOConnorsingle = BrettOConnor[1] - (CalcXbh(BrettOConnor[2],BrettOConnor[3],BrettOConnor[4]));

document.getElementById("BrettOConnorab").innerHTML = BrettOConnor[0];
document.getElementById("BrettOConnorpa").innerHTML = CalcPA(BrettOConnor[0],BrettOConnor[7],BrettOConnor[12],BrettOConnor[14],BrettOConnor[13]);
document.getElementById("BrettOConnorh").innerHTML = BrettOConnor[1];
document.getElementById("BrettOConnoravg").innerHTML = CalcBattingAvg(BrettOConnor[1], BrettOConnor[0]).toFixed(3);
document.getElementById("BrettOConnordouble").innerHTML = BrettOConnor[2];
document.getElementById("BrettOConnortriple").innerHTML = BrettOConnor[3];
document.getElementById("BrettOConnorhr").innerHTML = BrettOConnor[4];
document.getElementById("BrettOConnorobp").innerHTML = CalcObp(BrettOConnor[1],BrettOConnor[7],BrettOConnor[12],BrettOConnor[0],BrettOConnor[13]).toFixed(3);
document.getElementById("BrettOConnorrbi").innerHTML = BrettOConnor[5];
document.getElementById("BrettOConnorr").innerHTML = BrettOConnor[6];
document.getElementById("BrettOConnorbb").innerHTML = BrettOConnor[7];
document.getElementById("BrettOConnorso").innerHTML = BrettOConnor[8];
document.getElementById("BrettOConnorslg").innerHTML = CalcSlg(CalcTb(BrettOConnorsingle,BrettOConnor[2],BrettOConnor[3],BrettOConnor[4]),BrettOConnor[0]).toFixed(3);
document.getElementById("BrettOConnorops").innerHTML =CalcOps(CalcObp(BrettOConnor[1],BrettOConnor[7],BrettOConnor[12],BrettOConnor[0],BrettOConnor[13]),CalcSlg(CalcTb(BrettOConnorsingle,BrettOConnor[2],BrettOConnor[3],BrettOConnor[4]),BrettOConnor[0])).toFixed(3);
document.getElementById("BrettOConnorsb").innerHTML = BrettOConnor[9];
document.getElementById("BrettOConnorcs").innerHTML = BrettOConnor[10];
document.getElementById("BrettOConnoribb").innerHTML = BrettOConnor[11];
document.getElementById("BrettOConnorhbp").innerHTML = BrettOConnor[12];
document.getElementById("BrettOConnorsacf").innerHTML = BrettOConnor[13];
document.getElementById("BrettOConnorsacb").innerHTML = BrettOConnor[14];
document.getElementById("BrettOConnortb").innerHTML = CalcTb(BrettOConnorsingle,BrettOConnor[2],BrettOConnor[3],BrettOConnor[4]);
document.getElementById("BrettOConnorxbh").innerHTML = CalcXbh(BrettOConnor[2],BrettOConnor[3],BrettOConnor[4]);










var ConradMcCarthy = [
    0, /* ab            0*/
    0, /* h             1*/
    0, /* double        2*/
    0, /* triple        3*/
    0, /* hr            4*/
    0, /* rbi           5*/
    0, /* r             6*/
    0, /* bb            7*/
    0, /* so            8*/
    0, /* sb            9*/
    0, /* cs            10*/
    0, /* ibb           11*/
    0, /* hbp           12*/
    0, /* sacf          13*/
    0, /* sacb          14*/
]

var ConradMcCarthysingle = ConradMcCarthy[1] - (CalcXbh(ConradMcCarthy[2],ConradMcCarthy[3],ConradMcCarthy[4]));

document.getElementById("ConradMcCarthyab").innerHTML = ConradMcCarthy[0];
document.getElementById("ConradMcCarthypa").innerHTML = CalcPA(ConradMcCarthy[0],ConradMcCarthy[7],ConradMcCarthy[12],ConradMcCarthy[14],ConradMcCarthy[13]);
document.getElementById("ConradMcCarthyh").innerHTML = ConradMcCarthy[1];
document.getElementById("ConradMcCarthyavg").innerHTML = CalcBattingAvg(ConradMcCarthy[1], ConradMcCarthy[0]).toFixed(3);
document.getElementById("ConradMcCarthydouble").innerHTML = ConradMcCarthy[2];
document.getElementById("ConradMcCarthytriple").innerHTML = ConradMcCarthy[3];
document.getElementById("ConradMcCarthyhr").innerHTML = ConradMcCarthy[4];
document.getElementById("ConradMcCarthyobp").innerHTML = CalcObp(ConradMcCarthy[1],ConradMcCarthy[7],ConradMcCarthy[12],ConradMcCarthy[0],ConradMcCarthy[13]).toFixed(3);
document.getElementById("ConradMcCarthyrbi").innerHTML = ConradMcCarthy[5];
document.getElementById("ConradMcCarthyr").innerHTML = ConradMcCarthy[6];
document.getElementById("ConradMcCarthybb").innerHTML = ConradMcCarthy[7];
document.getElementById("ConradMcCarthyso").innerHTML = ConradMcCarthy[8];
document.getElementById("ConradMcCarthyslg").innerHTML = CalcSlg(CalcTb(ConradMcCarthysingle,ConradMcCarthy[2],ConradMcCarthy[3],ConradMcCarthy[4]),ConradMcCarthy[0]).toFixed(3);
document.getElementById("ConradMcCarthyops").innerHTML =CalcOps(CalcObp(ConradMcCarthy[1],ConradMcCarthy[7],ConradMcCarthy[12],ConradMcCarthy[0],ConradMcCarthy[13]),CalcSlg(CalcTb(ConradMcCarthysingle,ConradMcCarthy[2],ConradMcCarthy[3],ConradMcCarthy[4]),ConradMcCarthy[0])).toFixed(3);
document.getElementById("ConradMcCarthysb").innerHTML = ConradMcCarthy[9];
document.getElementById("ConradMcCarthycs").innerHTML = ConradMcCarthy[10];
document.getElementById("ConradMcCarthyibb").innerHTML = ConradMcCarthy[11];
document.getElementById("ConradMcCarthyhbp").innerHTML = ConradMcCarthy[12];
document.getElementById("ConradMcCarthysacf").innerHTML = ConradMcCarthy[13];
document.getElementById("ConradMcCarthysacb").innerHTML = ConradMcCarthy[14];
document.getElementById("ConradMcCarthytb").innerHTML = CalcTb(ConradMcCarthysingle,ConradMcCarthy[2],ConradMcCarthy[3],ConradMcCarthy[4]);
document.getElementById("ConradMcCarthyxbh").innerHTML = CalcXbh(ConradMcCarthy[2],ConradMcCarthy[3],ConradMcCarthy[4]);










var EricBohrer = [
    8, /* ab            0*/
    2, /* h             1*/
    0, /* double        2*/
    0, /* triple        3*/
    0, /* hr            4*/
    1, /* rbi           5*/
    1, /* r             6*/
    5, /* bb            7*/
    1, /* so            8*/
    1, /* sb            9*/
    0, /* cs            10*/
    0, /* ibb           11*/
    0, /* hbp           12*/
    0, /* sacf          13*/
    1, /* sacb          14*/
]

var EricBohrersingle = EricBohrer[1] - (CalcXbh(EricBohrer[2],EricBohrer[3],EricBohrer[4]));

document.getElementById("EricBohrerab").innerHTML = EricBohrer[0];
document.getElementById("EricBohrerpa").innerHTML = CalcPA(EricBohrer[0],EricBohrer[7],EricBohrer[12],EricBohrer[14],EricBohrer[13]);
document.getElementById("EricBohrerh").innerHTML = EricBohrer[1];
document.getElementById("EricBohreravg").innerHTML = CalcBattingAvg(EricBohrer[1], EricBohrer[0]).toFixed(3);
document.getElementById("EricBohrerdouble").innerHTML = EricBohrer[2];
document.getElementById("EricBohrertriple").innerHTML = EricBohrer[3];
document.getElementById("EricBohrerhr").innerHTML = EricBohrer[4];
document.getElementById("EricBohrerobp").innerHTML = CalcObp(EricBohrer[1],EricBohrer[7],EricBohrer[12],EricBohrer[0],EricBohrer[13]).toFixed(3);
document.getElementById("EricBohrerrbi").innerHTML = EricBohrer[5];
document.getElementById("EricBohrerr").innerHTML = EricBohrer[6];
document.getElementById("EricBohrerbb").innerHTML = EricBohrer[7];
document.getElementById("EricBohrerso").innerHTML = EricBohrer[8];
document.getElementById("EricBohrerslg").innerHTML = CalcSlg(CalcTb(EricBohrersingle,EricBohrer[2],EricBohrer[3],EricBohrer[4]),EricBohrer[0]).toFixed(3);
document.getElementById("EricBohrerops").innerHTML =CalcOps(CalcObp(EricBohrer[1],EricBohrer[7],EricBohrer[12],EricBohrer[0],EricBohrer[13]),CalcSlg(CalcTb(EricBohrersingle,EricBohrer[2],EricBohrer[3],EricBohrer[4]),EricBohrer[0])).toFixed(3);
document.getElementById("EricBohrersb").innerHTML = EricBohrer[9];
document.getElementById("EricBohrercs").innerHTML = EricBohrer[10];
document.getElementById("EricBohreribb").innerHTML = EricBohrer[11];
document.getElementById("EricBohrerhbp").innerHTML = EricBohrer[12];
document.getElementById("EricBohrersacf").innerHTML = EricBohrer[13];
document.getElementById("EricBohrersacb").innerHTML = EricBohrer[14];
document.getElementById("EricBohrertb").innerHTML = CalcTb(EricBohrersingle,EricBohrer[2],EricBohrer[3],EricBohrer[4]);
document.getElementById("EricBohrerxbh").innerHTML = CalcXbh(EricBohrer[2],EricBohrer[3],EricBohrer[4]);










var FernandoGil = [
    6, /* ab            0*/
    1, /* h             1*/
    0, /* double        2*/
    0, /* triple        3*/
    0, /* hr            4*/
    0, /* rbi           5*/
    0, /* r             6*/
    2, /* bb            7*/
    2, /* so            8*/
    1, /* sb            9*/
    0, /* cs            10*/
    0, /* ibb           11*/
    1, /* hbp           12*/
    0, /* sacf          13*/
    0, /* sacb          14*/
]

var FernandoGilsingle = FernandoGil[1] - (CalcXbh(FernandoGil[2],FernandoGil[3],FernandoGil[4]));

document.getElementById("FernandoGilab").innerHTML = FernandoGil[0];
document.getElementById("FernandoGilpa").innerHTML = CalcPA(FernandoGil[0],FernandoGil[7],FernandoGil[12],FernandoGil[14],FernandoGil[13]);
document.getElementById("FernandoGilh").innerHTML = FernandoGil[1];
document.getElementById("FernandoGilavg").innerHTML = CalcBattingAvg(FernandoGil[1], FernandoGil[0]).toFixed(3);
document.getElementById("FernandoGildouble").innerHTML = FernandoGil[2];
document.getElementById("FernandoGiltriple").innerHTML = FernandoGil[3];
document.getElementById("FernandoGilhr").innerHTML = FernandoGil[4];
document.getElementById("FernandoGilobp").innerHTML = CalcObp(FernandoGil[1],FernandoGil[7],FernandoGil[12],FernandoGil[0],FernandoGil[13]).toFixed(3);
document.getElementById("FernandoGilrbi").innerHTML = FernandoGil[5];
document.getElementById("FernandoGilr").innerHTML = FernandoGil[6];
document.getElementById("FernandoGilbb").innerHTML = FernandoGil[7];
document.getElementById("FernandoGilso").innerHTML = FernandoGil[8];
document.getElementById("FernandoGilslg").innerHTML = CalcSlg(CalcTb(FernandoGilsingle,FernandoGil[2],FernandoGil[3],FernandoGil[4]),FernandoGil[0]).toFixed(3);
document.getElementById("FernandoGilops").innerHTML =CalcOps(CalcObp(FernandoGil[1],FernandoGil[7],FernandoGil[12],FernandoGil[0],FernandoGil[13]),CalcSlg(CalcTb(FernandoGilsingle,FernandoGil[2],FernandoGil[3],FernandoGil[4]),FernandoGil[0])).toFixed(3);
document.getElementById("FernandoGilsb").innerHTML = FernandoGil[9];
document.getElementById("FernandoGilcs").innerHTML = FernandoGil[10];
document.getElementById("FernandoGilibb").innerHTML = FernandoGil[11];
document.getElementById("FernandoGilhbp").innerHTML = FernandoGil[12];
document.getElementById("FernandoGilsacf").innerHTML = FernandoGil[13];
document.getElementById("FernandoGilsacb").innerHTML = FernandoGil[14];
document.getElementById("FernandoGiltb").innerHTML = CalcTb(FernandoGilsingle,FernandoGil[2],FernandoGil[3],FernandoGil[4]);
document.getElementById("FernandoGilxbh").innerHTML = CalcXbh(FernandoGil[2],FernandoGil[3],FernandoGil[4]);










var IanFox = [
    6, /* ab            0*/
    1, /* h             1*/
    0, /* double        2*/
    0, /* triple        3*/
    0, /* hr            4*/
    1, /* rbi           5*/
    1, /* r             6*/
    0, /* bb            7*/
    1, /* so            8*/
    1, /* sb            9*/
    0, /* cs            10*/
    0, /* ibb           11*/
    0, /* hbp           12*/
    0, /* sacf          13*/
    0, /* sacb          14*/
]

var IanFoxsingle = IanFox[1] - (CalcXbh(IanFox[2],IanFox[3],IanFox[4]));

document.getElementById("IanFoxab").innerHTML = IanFox[0];
document.getElementById("IanFoxpa").innerHTML = CalcPA(IanFox[0],IanFox[7],IanFox[12],IanFox[14],IanFox[13]);
document.getElementById("IanFoxh").innerHTML = IanFox[1];
document.getElementById("IanFoxavg").innerHTML = CalcBattingAvg(IanFox[1], IanFox[0]).toFixed(3);
document.getElementById("IanFoxdouble").innerHTML = IanFox[2];
document.getElementById("IanFoxtriple").innerHTML = IanFox[3];
document.getElementById("IanFoxhr").innerHTML = IanFox[4];
document.getElementById("IanFoxobp").innerHTML = CalcObp(IanFox[1],IanFox[7],IanFox[12],IanFox[0],IanFox[13]).toFixed(3);
document.getElementById("IanFoxrbi").innerHTML = IanFox[5];
document.getElementById("IanFoxr").innerHTML = IanFox[6];
document.getElementById("IanFoxbb").innerHTML = IanFox[7];
document.getElementById("IanFoxso").innerHTML = IanFox[8];
document.getElementById("IanFoxslg").innerHTML = CalcSlg(CalcTb(IanFoxsingle,IanFox[2],IanFox[3],IanFox[4]),IanFox[0]).toFixed(3);
document.getElementById("IanFoxops").innerHTML =CalcOps(CalcObp(IanFox[1],IanFox[7],IanFox[12],IanFox[0],IanFox[13]),CalcSlg(CalcTb(IanFoxsingle,IanFox[2],IanFox[3],IanFox[4]),IanFox[0])).toFixed(3);
document.getElementById("IanFoxsb").innerHTML = IanFox[9];
document.getElementById("IanFoxcs").innerHTML = IanFox[10];
document.getElementById("IanFoxibb").innerHTML = IanFox[11];
document.getElementById("IanFoxhbp").innerHTML = IanFox[12];
document.getElementById("IanFoxsacf").innerHTML = IanFox[13];
document.getElementById("IanFoxsacb").innerHTML = IanFox[14];
document.getElementById("IanFoxtb").innerHTML = CalcTb(IanFoxsingle,IanFox[2],IanFox[3],IanFox[4]);
document.getElementById("IanFoxxbh").innerHTML = CalcXbh(IanFox[2],IanFox[3],IanFox[4]);










var IlanLindenfeld = [
    4, /* ab            0*/
    2, /* h             1*/
    0, /* double        2*/
    0, /* triple        3*/
    0, /* hr            4*/
    0, /* rbi           5*/
    2, /* r             6*/
    0, /* bb            7*/
    2, /* so            8*/
    0, /* sb            9*/
    0, /* cs            10*/
    0, /* ibb           11*/
    1, /* hbp           12*/
    0, /* sacf          13*/
    0, /* sacb          14*/
]

var IlanLindenfeldsingle = IlanLindenfeld[1] - (CalcXbh(IlanLindenfeld[2],IlanLindenfeld[3],IlanLindenfeld[4]));

document.getElementById("IlanLindenfeldab").innerHTML = IlanLindenfeld[0];
document.getElementById("IlanLindenfeldpa").innerHTML = CalcPA(IlanLindenfeld[0],IlanLindenfeld[7],IlanLindenfeld[12],IlanLindenfeld[14],IlanLindenfeld[13]);
document.getElementById("IlanLindenfeldh").innerHTML = IlanLindenfeld[1];
document.getElementById("IlanLindenfeldavg").innerHTML = CalcBattingAvg(IlanLindenfeld[1], IlanLindenfeld[0]).toFixed(3);
document.getElementById("IlanLindenfelddouble").innerHTML = IlanLindenfeld[2];
document.getElementById("IlanLindenfeldtriple").innerHTML = IlanLindenfeld[3];
document.getElementById("IlanLindenfeldhr").innerHTML = IlanLindenfeld[4];
document.getElementById("IlanLindenfeldobp").innerHTML = CalcObp(IlanLindenfeld[1],IlanLindenfeld[7],IlanLindenfeld[12],IlanLindenfeld[0],IlanLindenfeld[13]).toFixed(3);
document.getElementById("IlanLindenfeldrbi").innerHTML = IlanLindenfeld[5];
document.getElementById("IlanLindenfeldr").innerHTML = IlanLindenfeld[6];
document.getElementById("IlanLindenfeldbb").innerHTML = IlanLindenfeld[7];
document.getElementById("IlanLindenfeldso").innerHTML = IlanLindenfeld[8];
document.getElementById("IlanLindenfeldslg").innerHTML = CalcSlg(CalcTb(IlanLindenfeldsingle,IlanLindenfeld[2],IlanLindenfeld[3],IlanLindenfeld[4]),IlanLindenfeld[0]).toFixed(3);
document.getElementById("IlanLindenfeldops").innerHTML =CalcOps(CalcObp(IlanLindenfeld[1],IlanLindenfeld[7],IlanLindenfeld[12],IlanLindenfeld[0],IlanLindenfeld[13]),CalcSlg(CalcTb(IlanLindenfeldsingle,IlanLindenfeld[2],IlanLindenfeld[3],IlanLindenfeld[4]),IlanLindenfeld[0])).toFixed(3);
document.getElementById("IlanLindenfeldsb").innerHTML = IlanLindenfeld[9];
document.getElementById("IlanLindenfeldcs").innerHTML = IlanLindenfeld[10];
document.getElementById("IlanLindenfeldibb").innerHTML = IlanLindenfeld[11];
document.getElementById("IlanLindenfeldhbp").innerHTML = IlanLindenfeld[12];
document.getElementById("IlanLindenfeldsacf").innerHTML = IlanLindenfeld[13];
document.getElementById("IlanLindenfeldsacb").innerHTML = IlanLindenfeld[14];
document.getElementById("IlanLindenfeldtb").innerHTML = CalcTb(IlanLindenfeldsingle,IlanLindenfeld[2],IlanLindenfeld[3],IlanLindenfeld[4]);
document.getElementById("IlanLindenfeldxbh").innerHTML = CalcXbh(IlanLindenfeld[2],IlanLindenfeld[3],IlanLindenfeld[4]);










var JackBronsky = [
    0, /* ab            0*/
    0, /* h             1*/
    0, /* double        2*/
    0, /* triple        3*/
    0, /* hr            4*/
    0, /* rbi           5*/
    0, /* r             6*/
    0, /* bb            7*/
    0, /* so            8*/
    0, /* sb            9*/
    0, /* cs            10*/
    0, /* ibb           11*/
    0, /* hbp           12*/
    0, /* sacf          13*/
    0, /* sacb          14*/
]

var JackBronskysingle = JackBronsky[1] - (CalcXbh(JackBronsky[2],JackBronsky[3],JackBronsky[4]));

document.getElementById("JackBronskyab").innerHTML = JackBronsky[0];
document.getElementById("JackBronskypa").innerHTML = CalcPA(JackBronsky[0],JackBronsky[7],JackBronsky[12],JackBronsky[14],JackBronsky[13]);
document.getElementById("JackBronskyh").innerHTML = JackBronsky[1];
document.getElementById("JackBronskyavg").innerHTML = CalcBattingAvg(JackBronsky[1], JackBronsky[0]).toFixed(3);
document.getElementById("JackBronskydouble").innerHTML = JackBronsky[2];
document.getElementById("JackBronskytriple").innerHTML = JackBronsky[3];
document.getElementById("JackBronskyhr").innerHTML = JackBronsky[4];
document.getElementById("JackBronskyobp").innerHTML = CalcObp(JackBronsky[1],JackBronsky[7],JackBronsky[12],JackBronsky[0],JackBronsky[13]).toFixed(3);
document.getElementById("JackBronskyrbi").innerHTML = JackBronsky[5];
document.getElementById("JackBronskyr").innerHTML = JackBronsky[6];
document.getElementById("JackBronskybb").innerHTML = JackBronsky[7];
document.getElementById("JackBronskyso").innerHTML = JackBronsky[8];
document.getElementById("JackBronskyslg").innerHTML = CalcSlg(CalcTb(JackBronskysingle,JackBronsky[2],JackBronsky[3],JackBronsky[4]),JackBronsky[0]).toFixed(3);
document.getElementById("JackBronskyops").innerHTML =CalcOps(CalcObp(JackBronsky[1],JackBronsky[7],JackBronsky[12],JackBronsky[0],JackBronsky[13]),CalcSlg(CalcTb(JackBronskysingle,JackBronsky[2],JackBronsky[3],JackBronsky[4]),JackBronsky[0])).toFixed(3);
document.getElementById("JackBronskysb").innerHTML = JackBronsky[9];
document.getElementById("JackBronskycs").innerHTML = JackBronsky[10];
document.getElementById("JackBronskyibb").innerHTML = JackBronsky[11];
document.getElementById("JackBronskyhbp").innerHTML = JackBronsky[12];
document.getElementById("JackBronskysacf").innerHTML = JackBronsky[13];
document.getElementById("JackBronskysacb").innerHTML = JackBronsky[14];
document.getElementById("JackBronskytb").innerHTML = CalcTb(JackBronskysingle,JackBronsky[2],JackBronsky[3],JackBronsky[4]);
document.getElementById("JackBronskyxbh").innerHTML = CalcXbh(JackBronsky[2],JackBronsky[3],JackBronsky[4]);










var JamesKim = [
    9, /* ab            0*/
    1, /* h             1*/
    0, /* double        2*/
    0, /* triple        3*/
    0, /* hr            4*/
    0, /* rbi           5*/
    1, /* r             6*/
    1, /* bb            7*/
    4, /* so            8*/
    1, /* sb            9*/
    0, /* cs            10*/
    0, /* ibb           11*/
    0, /* hbp           12*/
    0, /* sacf          13*/
    0, /* sacb          14*/
]

var JamesKimsingle = JamesKim[1] - (CalcXbh(JamesKim[2],JamesKim[3],JamesKim[4]));

document.getElementById("JamesKimab").innerHTML = JamesKim[0];
document.getElementById("JamesKimpa").innerHTML = CalcPA(JamesKim[0],JamesKim[7],JamesKim[12],JamesKim[14],JamesKim[13]);
document.getElementById("JamesKimh").innerHTML = JamesKim[1];
document.getElementById("JamesKimavg").innerHTML = CalcBattingAvg(JamesKim[1], JamesKim[0]).toFixed(3);
document.getElementById("JamesKimdouble").innerHTML = JamesKim[2];
document.getElementById("JamesKimtriple").innerHTML = JamesKim[3];
document.getElementById("JamesKimhr").innerHTML = JamesKim[4];
document.getElementById("JamesKimobp").innerHTML = CalcObp(JamesKim[1],JamesKim[7],JamesKim[12],JamesKim[0],JamesKim[13]).toFixed(3);
document.getElementById("JamesKimrbi").innerHTML = JamesKim[5];
document.getElementById("JamesKimr").innerHTML = JamesKim[6];
document.getElementById("JamesKimbb").innerHTML = JamesKim[7];
document.getElementById("JamesKimso").innerHTML = JamesKim[8];
document.getElementById("JamesKimslg").innerHTML = CalcSlg(CalcTb(JamesKimsingle,JamesKim[2],JamesKim[3],JamesKim[4]),JamesKim[0]).toFixed(3);
document.getElementById("JamesKimops").innerHTML =CalcOps(CalcObp(JamesKim[1],JamesKim[7],JamesKim[12],JamesKim[0],JamesKim[13]),CalcSlg(CalcTb(JamesKimsingle,JamesKim[2],JamesKim[3],JamesKim[4]),JamesKim[0])).toFixed(3);
document.getElementById("JamesKimsb").innerHTML = JamesKim[9];
document.getElementById("JamesKimcs").innerHTML = JamesKim[10];
document.getElementById("JamesKimibb").innerHTML = JamesKim[11];
document.getElementById("JamesKimhbp").innerHTML = JamesKim[12];
document.getElementById("JamesKimsacf").innerHTML = JamesKim[13];
document.getElementById("JamesKimsacb").innerHTML = JamesKim[14];
document.getElementById("JamesKimtb").innerHTML = CalcTb(JamesKimsingle,JamesKim[2],JamesKim[3],JamesKim[4]);
document.getElementById("JamesKimxbh").innerHTML = CalcXbh(JamesKim[2],JamesKim[3],JamesKim[4]);










var JasonShandler = [
    10, /* ab            0*/
    6, /* h             1*/
    1, /* double        2*/
    0, /* triple        3*/
    0, /* hr            4*/
    0, /* rbi           5*/
    3, /* r             6*/
    0, /* bb            7*/
    0, /* so            8*/
    2, /* sb            9*/
    0, /* cs            10*/
    0, /* ibb           11*/
    0, /* hbp           12*/
    0, /* sacf          13*/
    0, /* sacb          14*/
]

var JasonShandlersingle = JasonShandler[1] - (CalcXbh(JasonShandler[2],JasonShandler[3],JasonShandler[4]));

document.getElementById("JasonShandlerab").innerHTML = JasonShandler[0];
document.getElementById("JasonShandlerpa").innerHTML = CalcPA(JasonShandler[0],JasonShandler[7],JasonShandler[12],JasonShandler[14],JasonShandler[13]);
document.getElementById("JasonShandlerh").innerHTML = JasonShandler[1];
document.getElementById("JasonShandleravg").innerHTML = CalcBattingAvg(JasonShandler[1], JasonShandler[0]).toFixed(3);
document.getElementById("JasonShandlerdouble").innerHTML = JasonShandler[2];
document.getElementById("JasonShandlertriple").innerHTML = JasonShandler[3];
document.getElementById("JasonShandlerhr").innerHTML = JasonShandler[4];
document.getElementById("JasonShandlerobp").innerHTML = CalcObp(JasonShandler[1],JasonShandler[7],JasonShandler[12],JasonShandler[0],JasonShandler[13]).toFixed(3);
document.getElementById("JasonShandlerrbi").innerHTML = JasonShandler[5];
document.getElementById("JasonShandlerr").innerHTML = JasonShandler[6];
document.getElementById("JasonShandlerbb").innerHTML = JasonShandler[7];
document.getElementById("JasonShandlerso").innerHTML = JasonShandler[8];
document.getElementById("JasonShandlerslg").innerHTML = CalcSlg(CalcTb(JasonShandlersingle,JasonShandler[2],JasonShandler[3],JasonShandler[4]),JasonShandler[0]).toFixed(3);
document.getElementById("JasonShandlerops").innerHTML =CalcOps(CalcObp(JasonShandler[1],JasonShandler[7],JasonShandler[12],JasonShandler[0],JasonShandler[13]),CalcSlg(CalcTb(JasonShandlersingle,JasonShandler[2],JasonShandler[3],JasonShandler[4]),JasonShandler[0])).toFixed(3);
document.getElementById("JasonShandlersb").innerHTML = JasonShandler[9];
document.getElementById("JasonShandlercs").innerHTML = JasonShandler[10];
document.getElementById("JasonShandleribb").innerHTML = JasonShandler[11];
document.getElementById("JasonShandlerhbp").innerHTML = JasonShandler[12];
document.getElementById("JasonShandlersacf").innerHTML = JasonShandler[13];
document.getElementById("JasonShandlersacb").innerHTML = JasonShandler[14];
document.getElementById("JasonShandlertb").innerHTML = CalcTb(JasonShandlersingle,JasonShandler[2],JasonShandler[3],JasonShandler[4]);
document.getElementById("JasonShandlerxbh").innerHTML = CalcXbh(JasonShandler[2],JasonShandler[3],JasonShandler[4]);










var JimmyGroark = [
    0, /* ab            0*/
    0, /* h             1*/
    0, /* double        2*/
    0, /* triple        3*/
    0, /* hr            4*/
    0, /* rbi           5*/
    0, /* r             6*/
    0, /* bb            7*/
    0, /* so            8*/
    0, /* sb            9*/
    0, /* cs            10*/
    0, /* ibb           11*/
    0, /* hbp           12*/
    0, /* sacf          13*/
    0, /* sacb          14*/
]

var JimmyGroarksingle = JimmyGroark[1] - (CalcXbh(JimmyGroark[2],JimmyGroark[3],JimmyGroark[4]));

document.getElementById("JimmyGroarkab").innerHTML = JimmyGroark[0];
document.getElementById("JimmyGroarkpa").innerHTML = CalcPA(JimmyGroark[0],JimmyGroark[7],JimmyGroark[12],JimmyGroark[14],JimmyGroark[13]);
document.getElementById("JimmyGroarkh").innerHTML = JimmyGroark[1];
document.getElementById("JimmyGroarkavg").innerHTML = CalcBattingAvg(JimmyGroark[1], JimmyGroark[0]).toFixed(3);
document.getElementById("JimmyGroarkdouble").innerHTML = JimmyGroark[2];
document.getElementById("JimmyGroarktriple").innerHTML = JimmyGroark[3];
document.getElementById("JimmyGroarkhr").innerHTML = JimmyGroark[4];
document.getElementById("JimmyGroarkobp").innerHTML = CalcObp(JimmyGroark[1],JimmyGroark[7],JimmyGroark[12],JimmyGroark[0],JimmyGroark[13]).toFixed(3);
document.getElementById("JimmyGroarkrbi").innerHTML = JimmyGroark[5];
document.getElementById("JimmyGroarkr").innerHTML = JimmyGroark[6];
document.getElementById("JimmyGroarkbb").innerHTML = JimmyGroark[7];
document.getElementById("JimmyGroarkso").innerHTML = JimmyGroark[8];
document.getElementById("JimmyGroarkslg").innerHTML = CalcSlg(CalcTb(JimmyGroarksingle,JimmyGroark[2],JimmyGroark[3],JimmyGroark[4]),JimmyGroark[0]).toFixed(3);
document.getElementById("JimmyGroarkops").innerHTML =CalcOps(CalcObp(JimmyGroark[1],JimmyGroark[7],JimmyGroark[12],JimmyGroark[0],JimmyGroark[13]),CalcSlg(CalcTb(JimmyGroarksingle,JimmyGroark[2],JimmyGroark[3],JimmyGroark[4]),JimmyGroark[0])).toFixed(3);
document.getElementById("JimmyGroarksb").innerHTML = JimmyGroark[9];
document.getElementById("JimmyGroarkcs").innerHTML = JimmyGroark[10];
document.getElementById("JimmyGroarkibb").innerHTML = JimmyGroark[11];
document.getElementById("JimmyGroarkhbp").innerHTML = JimmyGroark[12];
document.getElementById("JimmyGroarksacf").innerHTML = JimmyGroark[13];
document.getElementById("JimmyGroarksacb").innerHTML = JimmyGroark[14];
document.getElementById("JimmyGroarktb").innerHTML = CalcTb(JimmyGroarksingle,JimmyGroark[2],JimmyGroark[3],JimmyGroark[4]);
document.getElementById("JimmyGroarkxbh").innerHTML = CalcXbh(JimmyGroark[2],JimmyGroark[3],JimmyGroark[4]);










var JoeyWelsh = [
    8, /* ab            0*/
    2, /* h             1*/
    1, /* double        2*/
    0, /* triple        3*/
    0, /* hr            4*/
    1, /* rbi           5*/
    4, /* r             6*/
    2, /* bb            7*/
    3, /* so            8*/
    1, /* sb            9*/
    0, /* cs            10*/
    0, /* ibb           11*/
    0, /* hbp           12*/
    0, /* sacf          13*/
    0, /* sacb          14*/
]

var JoeyWelshsingle = JoeyWelsh[1] - (CalcXbh(JoeyWelsh[2],JoeyWelsh[3],JoeyWelsh[4]));

document.getElementById("JoeyWelshab").innerHTML = JoeyWelsh[0];
document.getElementById("JoeyWelshpa").innerHTML = CalcPA(JoeyWelsh[0],JoeyWelsh[7],JoeyWelsh[12],JoeyWelsh[14],JoeyWelsh[13]);
document.getElementById("JoeyWelshh").innerHTML = JoeyWelsh[1];
document.getElementById("JoeyWelshavg").innerHTML = CalcBattingAvg(JoeyWelsh[1], JoeyWelsh[0]).toFixed(3);
document.getElementById("JoeyWelshdouble").innerHTML = JoeyWelsh[2];
document.getElementById("JoeyWelshtriple").innerHTML = JoeyWelsh[3];
document.getElementById("JoeyWelshhr").innerHTML = JoeyWelsh[4];
document.getElementById("JoeyWelshobp").innerHTML = CalcObp(JoeyWelsh[1],JoeyWelsh[7],JoeyWelsh[12],JoeyWelsh[0],JoeyWelsh[13]).toFixed(3);
document.getElementById("JoeyWelshrbi").innerHTML = JoeyWelsh[5];
document.getElementById("JoeyWelshr").innerHTML = JoeyWelsh[6];
document.getElementById("JoeyWelshbb").innerHTML = JoeyWelsh[7];
document.getElementById("JoeyWelshso").innerHTML = JoeyWelsh[8];
document.getElementById("JoeyWelshslg").innerHTML = CalcSlg(CalcTb(JoeyWelshsingle,JoeyWelsh[2],JoeyWelsh[3],JoeyWelsh[4]),JoeyWelsh[0]).toFixed(3);
document.getElementById("JoeyWelshops").innerHTML =CalcOps(CalcObp(JoeyWelsh[1],JoeyWelsh[7],JoeyWelsh[12],JoeyWelsh[0],JoeyWelsh[13]),CalcSlg(CalcTb(JoeyWelshsingle,JoeyWelsh[2],JoeyWelsh[3],JoeyWelsh[4]),JoeyWelsh[0])).toFixed(3);
document.getElementById("JoeyWelshsb").innerHTML = JoeyWelsh[9];
document.getElementById("JoeyWelshcs").innerHTML = JoeyWelsh[10];
document.getElementById("JoeyWelshibb").innerHTML = JoeyWelsh[11];
document.getElementById("JoeyWelshhbp").innerHTML = JoeyWelsh[12];
document.getElementById("JoeyWelshsacf").innerHTML = JoeyWelsh[13];
document.getElementById("JoeyWelshsacb").innerHTML = JoeyWelsh[14];
document.getElementById("JoeyWelshtb").innerHTML = CalcTb(JoeyWelshsingle,JoeyWelsh[2],JoeyWelsh[3],JoeyWelsh[4]);
document.getElementById("JoeyWelshxbh").innerHTML = CalcXbh(JoeyWelsh[2],JoeyWelsh[3],JoeyWelsh[4]);










var JordanGorelick = [
    12, /* ab            0*/
    4, /* h             1*/
    0, /* double        2*/
    0, /* triple        3*/
    0, /* hr            4*/
    1, /* rbi           5*/
    1, /* r             6*/
    1, /* bb            7*/
    2, /* so            8*/
    0, /* sb            9*/
    1, /* cs            10*/
    0, /* ibb           11*/
    0, /* hbp           12*/
    0, /* sacf          13*/
    0, /* sacb          14*/
]

var JordanGorelicksingle = JordanGorelick[1] - (CalcXbh(JordanGorelick[2],JordanGorelick[3],JordanGorelick[4]));

document.getElementById("JordanGorelickab").innerHTML = JordanGorelick[0];
document.getElementById("JordanGorelickpa").innerHTML = CalcPA(JordanGorelick[0],JordanGorelick[7],JordanGorelick[12],JordanGorelick[14],JordanGorelick[13]);
document.getElementById("JordanGorelickh").innerHTML = JordanGorelick[1];
document.getElementById("JordanGorelickavg").innerHTML = CalcBattingAvg(JordanGorelick[1], JordanGorelick[0]).toFixed(3);
document.getElementById("JordanGorelickdouble").innerHTML = JordanGorelick[2];
document.getElementById("JordanGorelicktriple").innerHTML = JordanGorelick[3];
document.getElementById("JordanGorelickhr").innerHTML = JordanGorelick[4];
document.getElementById("JordanGorelickobp").innerHTML = CalcObp(JordanGorelick[1],JordanGorelick[7],JordanGorelick[12],JordanGorelick[0],JordanGorelick[13]).toFixed(3);
document.getElementById("JordanGorelickrbi").innerHTML = JordanGorelick[5];
document.getElementById("JordanGorelickr").innerHTML = JordanGorelick[6];
document.getElementById("JordanGorelickbb").innerHTML = JordanGorelick[7];
document.getElementById("JordanGorelickso").innerHTML = JordanGorelick[8];
document.getElementById("JordanGorelickslg").innerHTML = CalcSlg(CalcTb(JordanGorelicksingle,JordanGorelick[2],JordanGorelick[3],JordanGorelick[4]),JordanGorelick[0]).toFixed(3);
document.getElementById("JordanGorelickops").innerHTML =CalcOps(CalcObp(JordanGorelick[1],JordanGorelick[7],JordanGorelick[12],JordanGorelick[0],JordanGorelick[13]),CalcSlg(CalcTb(JordanGorelicksingle,JordanGorelick[2],JordanGorelick[3],JordanGorelick[4]),JordanGorelick[0])).toFixed(3);
document.getElementById("JordanGorelicksb").innerHTML = JordanGorelick[9];
document.getElementById("JordanGorelickcs").innerHTML = JordanGorelick[10];
document.getElementById("JordanGorelickibb").innerHTML = JordanGorelick[11];
document.getElementById("JordanGorelickhbp").innerHTML = JordanGorelick[12];
document.getElementById("JordanGorelicksacf").innerHTML = JordanGorelick[13];
document.getElementById("JordanGorelicksacb").innerHTML = JordanGorelick[14];
document.getElementById("JordanGorelicktb").innerHTML = CalcTb(JordanGorelicksingle,JordanGorelick[2],JordanGorelick[3],JordanGorelick[4]);
document.getElementById("JordanGorelickxbh").innerHTML = CalcXbh(JordanGorelick[2],JordanGorelick[3],JordanGorelick[4]);










var JoshSayre = [
    9, /* ab            0*/
    2, /* h             1*/
    0, /* double        2*/
    0, /* triple        3*/
    0, /* hr            4*/
    1, /* rbi           5*/
    1, /* r             6*/
    1, /* bb            7*/
    2, /* so            8*/
    1, /* sb            9*/
    0, /* cs            10*/
    0, /* ibb           11*/
    0, /* hbp           12*/
    0, /* sacf          13*/
    0, /* sacb          14*/
]

var JoshSayresingle = JoshSayre[1] - (CalcXbh(JoshSayre[2],JoshSayre[3],JoshSayre[4]));

document.getElementById("JoshSayreab").innerHTML = JoshSayre[0];
document.getElementById("JoshSayrepa").innerHTML = CalcPA(JoshSayre[0],JoshSayre[7],JoshSayre[12],JoshSayre[14],JoshSayre[13]);
document.getElementById("JoshSayreh").innerHTML = JoshSayre[1];
document.getElementById("JoshSayreavg").innerHTML = CalcBattingAvg(JoshSayre[1], JoshSayre[0]).toFixed(3);
document.getElementById("JoshSayredouble").innerHTML = JoshSayre[2];
document.getElementById("JoshSayretriple").innerHTML = JoshSayre[3];
document.getElementById("JoshSayrehr").innerHTML = JoshSayre[4];
document.getElementById("JoshSayreobp").innerHTML = CalcObp(JoshSayre[1],JoshSayre[7],JoshSayre[12],JoshSayre[0],JoshSayre[13]).toFixed(3);
document.getElementById("JoshSayrerbi").innerHTML = JoshSayre[5];
document.getElementById("JoshSayrer").innerHTML = JoshSayre[6];
document.getElementById("JoshSayrebb").innerHTML = JoshSayre[7];
document.getElementById("JoshSayreso").innerHTML = JoshSayre[8];
document.getElementById("JoshSayreslg").innerHTML = CalcSlg(CalcTb(JoshSayresingle,JoshSayre[2],JoshSayre[3],JoshSayre[4]),JoshSayre[0]).toFixed(3);
document.getElementById("JoshSayreops").innerHTML =CalcOps(CalcObp(JoshSayre[1],JoshSayre[7],JoshSayre[12],JoshSayre[0],JoshSayre[13]),CalcSlg(CalcTb(JoshSayresingle,JoshSayre[2],JoshSayre[3],JoshSayre[4]),JoshSayre[0])).toFixed(3);
document.getElementById("JoshSayresb").innerHTML = JoshSayre[9];
document.getElementById("JoshSayrecs").innerHTML = JoshSayre[10];
document.getElementById("JoshSayreibb").innerHTML = JoshSayre[11];
document.getElementById("JoshSayrehbp").innerHTML = JoshSayre[12];
document.getElementById("JoshSayresacf").innerHTML = JoshSayre[13];
document.getElementById("JoshSayresacb").innerHTML = JoshSayre[14];
document.getElementById("JoshSayretb").innerHTML = CalcTb(JoshSayresingle,JoshSayre[2],JoshSayre[3],JoshSayre[4]);
document.getElementById("JoshSayrexbh").innerHTML = CalcXbh(JoshSayre[2],JoshSayre[3],JoshSayre[4]);










var LouisSusser = [
    0, /* ab            0*/
    0, /* h             1*/
    0, /* double        2*/
    0, /* triple        3*/
    0, /* hr            4*/
    0, /* rbi           5*/
    0, /* r             6*/
    0, /* bb            7*/
    0, /* so            8*/
    0, /* sb            9*/
    0, /* cs            10*/
    0, /* ibb           11*/
    0, /* hbp           12*/
    0, /* sacf          13*/
    0, /* sacb          14*/
]

var LouisSussersingle = LouisSusser[1] - (CalcXbh(LouisSusser[2],LouisSusser[3],LouisSusser[4]));

document.getElementById("LouisSusserab").innerHTML = LouisSusser[0];
document.getElementById("LouisSusserpa").innerHTML = CalcPA(LouisSusser[0],LouisSusser[7],LouisSusser[12],LouisSusser[14],LouisSusser[13]);
document.getElementById("LouisSusserh").innerHTML = LouisSusser[1];
document.getElementById("LouisSusseravg").innerHTML = CalcBattingAvg(LouisSusser[1], LouisSusser[0]).toFixed(3);
document.getElementById("LouisSusserdouble").innerHTML = LouisSusser[2];
document.getElementById("LouisSussertriple").innerHTML = LouisSusser[3];
document.getElementById("LouisSusserhr").innerHTML = LouisSusser[4];
document.getElementById("LouisSusserobp").innerHTML = CalcObp(LouisSusser[1],LouisSusser[7],LouisSusser[12],LouisSusser[0],LouisSusser[13]).toFixed(3);
document.getElementById("LouisSusserrbi").innerHTML = LouisSusser[5];
document.getElementById("LouisSusserr").innerHTML = LouisSusser[6];
document.getElementById("LouisSusserbb").innerHTML = LouisSusser[7];
document.getElementById("LouisSusserso").innerHTML = LouisSusser[8];
document.getElementById("LouisSusserslg").innerHTML = CalcSlg(CalcTb(LouisSussersingle,LouisSusser[2],LouisSusser[3],LouisSusser[4]),LouisSusser[0]).toFixed(3);
document.getElementById("LouisSusserops").innerHTML =CalcOps(CalcObp(LouisSusser[1],LouisSusser[7],LouisSusser[12],LouisSusser[0],LouisSusser[13]),CalcSlg(CalcTb(LouisSussersingle,LouisSusser[2],LouisSusser[3],LouisSusser[4]),LouisSusser[0])).toFixed(3);
document.getElementById("LouisSussersb").innerHTML = LouisSusser[9];
document.getElementById("LouisSussercs").innerHTML = LouisSusser[10];
document.getElementById("LouisSusseribb").innerHTML = LouisSusser[11];
document.getElementById("LouisSusserhbp").innerHTML = LouisSusser[12];
document.getElementById("LouisSussersacf").innerHTML = LouisSusser[13];
document.getElementById("LouisSussersacb").innerHTML = LouisSusser[14];
document.getElementById("LouisSussertb").innerHTML = CalcTb(LouisSussersingle,LouisSusser[2],LouisSusser[3],LouisSusser[4]);
document.getElementById("LouisSusserxbh").innerHTML = CalcXbh(LouisSusser[2],LouisSusser[3],LouisSusser[4]);










var MarkJones = [
    4, /* ab            0*/
    1, /* h             1*/
    0, /* double        2*/
    0, /* triple        3*/
    0, /* hr            4*/
    0, /* rbi           5*/
    0, /* r             6*/
    0, /* bb            7*/
    1, /* so            8*/
    0, /* sb            9*/
    0, /* cs            10*/
    0, /* ibb           11*/
    0, /* hbp           12*/
    0, /* sacf          13*/
    0, /* sacb          14*/
]

var MarkJonessingle = MarkJones[1] - (CalcXbh(MarkJones[2],MarkJones[3],MarkJones[4]));

document.getElementById("MarkJonesab").innerHTML = MarkJones[0];
document.getElementById("MarkJonespa").innerHTML = CalcPA(MarkJones[0],MarkJones[7],MarkJones[12],MarkJones[14],MarkJones[13]);
document.getElementById("MarkJonesh").innerHTML = MarkJones[1];
document.getElementById("MarkJonesavg").innerHTML = CalcBattingAvg(MarkJones[1], MarkJones[0]).toFixed(3);
document.getElementById("MarkJonesdouble").innerHTML = MarkJones[2];
document.getElementById("MarkJonestriple").innerHTML = MarkJones[3];
document.getElementById("MarkJoneshr").innerHTML = MarkJones[4];
document.getElementById("MarkJonesobp").innerHTML = CalcObp(MarkJones[1],MarkJones[7],MarkJones[12],MarkJones[0],MarkJones[13]).toFixed(3);
document.getElementById("MarkJonesrbi").innerHTML = MarkJones[5];
document.getElementById("MarkJonesr").innerHTML = MarkJones[6];
document.getElementById("MarkJonesbb").innerHTML = MarkJones[7];
document.getElementById("MarkJonesso").innerHTML = MarkJones[8];
document.getElementById("MarkJonesslg").innerHTML = CalcSlg(CalcTb(MarkJonessingle,MarkJones[2],MarkJones[3],MarkJones[4]),MarkJones[0]).toFixed(3);
document.getElementById("MarkJonesops").innerHTML =CalcOps(CalcObp(MarkJones[1],MarkJones[7],MarkJones[12],MarkJones[0],MarkJones[13]),CalcSlg(CalcTb(MarkJonessingle,MarkJones[2],MarkJones[3],MarkJones[4]),MarkJones[0])).toFixed(3);
document.getElementById("MarkJonessb").innerHTML = MarkJones[9];
document.getElementById("MarkJonescs").innerHTML = MarkJones[10];
document.getElementById("MarkJonesibb").innerHTML = MarkJones[11];
document.getElementById("MarkJoneshbp").innerHTML = MarkJones[12];
document.getElementById("MarkJonessacf").innerHTML = MarkJones[13];
document.getElementById("MarkJonessacb").innerHTML = MarkJones[14];
document.getElementById("MarkJonestb").innerHTML = CalcTb(MarkJonessingle,MarkJones[2],MarkJones[3],MarkJones[4]);
document.getElementById("MarkJonesxbh").innerHTML = CalcXbh(MarkJones[2],MarkJones[3],MarkJones[4]);










var MichaelBehrens = [
    8, /* ab            0*/
    2, /* h             1*/
    2, /* double        2*/
    0, /* triple        3*/
    0, /* hr            4*/
    0, /* rbi           5*/
    3, /* r             6*/
    2, /* bb            7*/
    1, /* so            8*/
    0, /* sb            9*/
    0, /* cs            10*/
    0, /* ibb           11*/
    0, /* hbp           12*/
    0, /* sacf          13*/
    1, /* sacb          14*/
]

var MichaelBehrenssingle = MichaelBehrens[1] - (CalcXbh(MichaelBehrens[2],MichaelBehrens[3],MichaelBehrens[4]));

document.getElementById("MichaelBehrensab").innerHTML = MichaelBehrens[0];
document.getElementById("MichaelBehrenspa").innerHTML = CalcPA(MichaelBehrens[0],MichaelBehrens[7],MichaelBehrens[12],MichaelBehrens[14],MichaelBehrens[13]);
document.getElementById("MichaelBehrensh").innerHTML = MichaelBehrens[1];
document.getElementById("MichaelBehrensavg").innerHTML = CalcBattingAvg(MichaelBehrens[1], MichaelBehrens[0]).toFixed(3);
document.getElementById("MichaelBehrensdouble").innerHTML = MichaelBehrens[2];
document.getElementById("MichaelBehrenstriple").innerHTML = MichaelBehrens[3];
document.getElementById("MichaelBehrenshr").innerHTML = MichaelBehrens[4];
document.getElementById("MichaelBehrensobp").innerHTML = CalcObp(MichaelBehrens[1],MichaelBehrens[7],MichaelBehrens[12],MichaelBehrens[0],MichaelBehrens[13]).toFixed(3);
document.getElementById("MichaelBehrensrbi").innerHTML = MichaelBehrens[5];
document.getElementById("MichaelBehrensr").innerHTML = MichaelBehrens[6];
document.getElementById("MichaelBehrensbb").innerHTML = MichaelBehrens[7];
document.getElementById("MichaelBehrensso").innerHTML = MichaelBehrens[8];
document.getElementById("MichaelBehrensslg").innerHTML = CalcSlg(CalcTb(MichaelBehrenssingle,MichaelBehrens[2],MichaelBehrens[3],MichaelBehrens[4]),MichaelBehrens[0]).toFixed(3);
document.getElementById("MichaelBehrensops").innerHTML =CalcOps(CalcObp(MichaelBehrens[1],MichaelBehrens[7],MichaelBehrens[12],MichaelBehrens[0],MichaelBehrens[13]),CalcSlg(CalcTb(MichaelBehrenssingle,MichaelBehrens[2],MichaelBehrens[3],MichaelBehrens[4]),MichaelBehrens[0])).toFixed(3);
document.getElementById("MichaelBehrenssb").innerHTML = MichaelBehrens[9];
document.getElementById("MichaelBehrenscs").innerHTML = MichaelBehrens[10];
document.getElementById("MichaelBehrensibb").innerHTML = MichaelBehrens[11];
document.getElementById("MichaelBehrenshbp").innerHTML = MichaelBehrens[12];
document.getElementById("MichaelBehrenssacf").innerHTML = MichaelBehrens[13];
document.getElementById("MichaelBehrenssacb").innerHTML = MichaelBehrens[14];
document.getElementById("MichaelBehrenstb").innerHTML = CalcTb(MichaelBehrenssingle,MichaelBehrens[2],MichaelBehrens[3],MichaelBehrens[4]);
document.getElementById("MichaelBehrensxbh").innerHTML = CalcXbh(MichaelBehrens[2],MichaelBehrens[3],MichaelBehrens[4]);










var MikeFarias = [
    4, /* ab            0*/
    1, /* h             1*/
    1, /* double        2*/
    0, /* triple        3*/
    0, /* hr            4*/
    2, /* rbi           5*/
    0, /* r             6*/
    0, /* bb            7*/
    0, /* so            8*/
    0, /* sb            9*/
    0, /* cs            10*/
    0, /* ibb           11*/
    0, /* hbp           12*/
    0, /* sacf          13*/
    0, /* sacb          14*/
]

var MikeFariassingle = MikeFarias[1] - (CalcXbh(MikeFarias[2],MikeFarias[3],MikeFarias[4]));

document.getElementById("MikeFariasab").innerHTML = MikeFarias[0];
document.getElementById("MikeFariaspa").innerHTML = CalcPA(MikeFarias[0],MikeFarias[7],MikeFarias[12],MikeFarias[14],MikeFarias[13]);
document.getElementById("MikeFariash").innerHTML = MikeFarias[1];
document.getElementById("MikeFariasavg").innerHTML = CalcBattingAvg(MikeFarias[1], MikeFarias[0]).toFixed(3);
document.getElementById("MikeFariasdouble").innerHTML = MikeFarias[2];
document.getElementById("MikeFariastriple").innerHTML = MikeFarias[3];
document.getElementById("MikeFariashr").innerHTML = MikeFarias[4];
document.getElementById("MikeFariasobp").innerHTML = CalcObp(MikeFarias[1],MikeFarias[7],MikeFarias[12],MikeFarias[0],MikeFarias[13]).toFixed(3);
document.getElementById("MikeFariasrbi").innerHTML = MikeFarias[5];
document.getElementById("MikeFariasr").innerHTML = MikeFarias[6];
document.getElementById("MikeFariasbb").innerHTML = MikeFarias[7];
document.getElementById("MikeFariasso").innerHTML = MikeFarias[8];
document.getElementById("MikeFariasslg").innerHTML = CalcSlg(CalcTb(MikeFariassingle,MikeFarias[2],MikeFarias[3],MikeFarias[4]),MikeFarias[0]).toFixed(3);
document.getElementById("MikeFariasops").innerHTML =CalcOps(CalcObp(MikeFarias[1],MikeFarias[7],MikeFarias[12],MikeFarias[0],MikeFarias[13]),CalcSlg(CalcTb(MikeFariassingle,MikeFarias[2],MikeFarias[3],MikeFarias[4]),MikeFarias[0])).toFixed(3);
document.getElementById("MikeFariassb").innerHTML = MikeFarias[9];
document.getElementById("MikeFariascs").innerHTML = MikeFarias[10];
document.getElementById("MikeFariasibb").innerHTML = MikeFarias[11];
document.getElementById("MikeFariashbp").innerHTML = MikeFarias[12];
document.getElementById("MikeFariassacf").innerHTML = MikeFarias[13];
document.getElementById("MikeFariassacb").innerHTML = MikeFarias[14];
document.getElementById("MikeFariastb").innerHTML = CalcTb(MikeFariassingle,MikeFarias[2],MikeFarias[3],MikeFarias[4]);
document.getElementById("MikeFariasxbh").innerHTML = CalcXbh(MikeFarias[2],MikeFarias[3],MikeFarias[4]);










var MikeMaola = [
    8, /* ab            0*/
    1, /* h             1*/
    1, /* double        2*/
    0, /* triple        3*/
    0, /* hr            4*/
    0, /* rbi           5*/
    0, /* r             6*/
    1, /* bb            7*/
    2, /* so            8*/
    0, /* sb            9*/
    0, /* cs            10*/
    0, /* ibb           11*/
    0, /* hbp           12*/
    0, /* sacf          13*/
    0, /* sacb          14*/
]

var MikeMaolasingle = MikeMaola[1] - (CalcXbh(MikeMaola[2],MikeMaola[3],MikeMaola[4]));

document.getElementById("MikeMaolaab").innerHTML = MikeMaola[0];
document.getElementById("MikeMaolapa").innerHTML = CalcPA(MikeMaola[0],MikeMaola[7],MikeMaola[12],MikeMaola[14],MikeMaola[13]);
document.getElementById("MikeMaolah").innerHTML = MikeMaola[1];
document.getElementById("MikeMaolaavg").innerHTML = CalcBattingAvg(MikeMaola[1], MikeMaola[0]).toFixed(3);
document.getElementById("MikeMaoladouble").innerHTML = MikeMaola[2];
document.getElementById("MikeMaolatriple").innerHTML = MikeMaola[3];
document.getElementById("MikeMaolahr").innerHTML = MikeMaola[4];
document.getElementById("MikeMaolaobp").innerHTML = CalcObp(MikeMaola[1],MikeMaola[7],MikeMaola[12],MikeMaola[0],MikeMaola[13]).toFixed(3);
document.getElementById("MikeMaolarbi").innerHTML = MikeMaola[5];
document.getElementById("MikeMaolar").innerHTML = MikeMaola[6];
document.getElementById("MikeMaolabb").innerHTML = MikeMaola[7];
document.getElementById("MikeMaolaso").innerHTML = MikeMaola[8];
document.getElementById("MikeMaolaslg").innerHTML = CalcSlg(CalcTb(MikeMaolasingle,MikeMaola[2],MikeMaola[3],MikeMaola[4]),MikeMaola[0]).toFixed(3);
document.getElementById("MikeMaolaops").innerHTML =CalcOps(CalcObp(MikeMaola[1],MikeMaola[7],MikeMaola[12],MikeMaola[0],MikeMaola[13]),CalcSlg(CalcTb(MikeMaolasingle,MikeMaola[2],MikeMaola[3],MikeMaola[4]),MikeMaola[0])).toFixed(3);
document.getElementById("MikeMaolasb").innerHTML = MikeMaola[9];
document.getElementById("MikeMaolacs").innerHTML = MikeMaola[10];
document.getElementById("MikeMaolaibb").innerHTML = MikeMaola[11];
document.getElementById("MikeMaolahbp").innerHTML = MikeMaola[12];
document.getElementById("MikeMaolasacf").innerHTML = MikeMaola[13];
document.getElementById("MikeMaolasacb").innerHTML = MikeMaola[14];
document.getElementById("MikeMaolatb").innerHTML = CalcTb(MikeMaolasingle,MikeMaola[2],MikeMaola[3],MikeMaola[4]);
document.getElementById("MikeMaolaxbh").innerHTML = CalcXbh(MikeMaola[2],MikeMaola[3],MikeMaola[4]);










var NateBuchwald = [
    14, /* ab            0*/
    3, /* h             1*/
    1, /* double        2*/
    1, /* triple        3*/
    0, /* hr            4*/
    2, /* rbi           5*/
    4, /* r             6*/
    1, /* bb            7*/
    7, /* so            8*/
    0, /* sb            9*/
    0, /* cs            10*/
    0, /* ibb           11*/
    1, /* hbp           12*/
    0, /* sacf          13*/
    0, /* sacb          14*/
]

var NateBuchwaldsingle = NateBuchwald[1] - (CalcXbh(NateBuchwald[2],NateBuchwald[3],NateBuchwald[4]));

document.getElementById("NateBuchwaldab").innerHTML = NateBuchwald[0];
document.getElementById("NateBuchwaldpa").innerHTML = CalcPA(NateBuchwald[0],NateBuchwald[7],NateBuchwald[12],NateBuchwald[14],NateBuchwald[13]);
document.getElementById("NateBuchwaldh").innerHTML = NateBuchwald[1];
document.getElementById("NateBuchwaldavg").innerHTML = CalcBattingAvg(NateBuchwald[1], NateBuchwald[0]).toFixed(3);
document.getElementById("NateBuchwalddouble").innerHTML = NateBuchwald[2];
document.getElementById("NateBuchwaldtriple").innerHTML = NateBuchwald[3];
document.getElementById("NateBuchwaldhr").innerHTML = NateBuchwald[4];
document.getElementById("NateBuchwaldobp").innerHTML = CalcObp(NateBuchwald[1],NateBuchwald[7],NateBuchwald[12],NateBuchwald[0],NateBuchwald[13]).toFixed(3);
document.getElementById("NateBuchwaldrbi").innerHTML = NateBuchwald[5];
document.getElementById("NateBuchwaldr").innerHTML = NateBuchwald[6];
document.getElementById("NateBuchwaldbb").innerHTML = NateBuchwald[7];
document.getElementById("NateBuchwaldso").innerHTML = NateBuchwald[8];
document.getElementById("NateBuchwaldslg").innerHTML = CalcSlg(CalcTb(NateBuchwaldsingle,NateBuchwald[2],NateBuchwald[3],NateBuchwald[4]),NateBuchwald[0]).toFixed(3);
document.getElementById("NateBuchwaldops").innerHTML =CalcOps(CalcObp(NateBuchwald[1],NateBuchwald[7],NateBuchwald[12],NateBuchwald[0],NateBuchwald[13]),CalcSlg(CalcTb(NateBuchwaldsingle,NateBuchwald[2],NateBuchwald[3],NateBuchwald[4]),NateBuchwald[0])).toFixed(3);
document.getElementById("NateBuchwaldsb").innerHTML = NateBuchwald[9];
document.getElementById("NateBuchwaldcs").innerHTML = NateBuchwald[10];
document.getElementById("NateBuchwaldibb").innerHTML = NateBuchwald[11];
document.getElementById("NateBuchwaldhbp").innerHTML = NateBuchwald[12];
document.getElementById("NateBuchwaldsacf").innerHTML = NateBuchwald[13];
document.getElementById("NateBuchwaldsacb").innerHTML = NateBuchwald[14];
document.getElementById("NateBuchwaldtb").innerHTML = CalcTb(NateBuchwaldsingle,NateBuchwald[2],NateBuchwald[3],NateBuchwald[4]);
document.getElementById("NateBuchwaldxbh").innerHTML = CalcXbh(NateBuchwald[2],NateBuchwald[3],NateBuchwald[4]);










var NickVota = [
    3, /* ab            0*/
    0, /* h             1*/
    0, /* double        2*/
    0, /* triple        3*/
    0, /* hr            4*/
    0, /* rbi           5*/
    0, /* r             6*/
    0, /* bb            7*/
    3, /* so            8*/
    0, /* sb            9*/
    0, /* cs            10*/
    0, /* ibb           11*/
    0, /* hbp           12*/
    0, /* sacf          13*/
    0, /* sacb          14*/
]

var NickVotasingle = NickVota[1] - (CalcXbh(NickVota[2],NickVota[3],NickVota[4]));

document.getElementById("NickVotaab").innerHTML = NickVota[0];
document.getElementById("NickVotapa").innerHTML = CalcPA(NickVota[0],NickVota[7],NickVota[12],NickVota[14],NickVota[13]);
document.getElementById("NickVotah").innerHTML = NickVota[1];
document.getElementById("NickVotaavg").innerHTML = CalcBattingAvg(NickVota[1], NickVota[0]).toFixed(3);
document.getElementById("NickVotadouble").innerHTML = NickVota[2];
document.getElementById("NickVotatriple").innerHTML = NickVota[3];
document.getElementById("NickVotahr").innerHTML = NickVota[4];
document.getElementById("NickVotaobp").innerHTML = CalcObp(NickVota[1],NickVota[7],NickVota[12],NickVota[0],NickVota[13]).toFixed(3);
document.getElementById("NickVotarbi").innerHTML = NickVota[5];
document.getElementById("NickVotar").innerHTML = NickVota[6];
document.getElementById("NickVotabb").innerHTML = NickVota[7];
document.getElementById("NickVotaso").innerHTML = NickVota[8];
document.getElementById("NickVotaslg").innerHTML = CalcSlg(CalcTb(NickVotasingle,NickVota[2],NickVota[3],NickVota[4]),NickVota[0]).toFixed(3);
document.getElementById("NickVotaops").innerHTML =CalcOps(CalcObp(NickVota[1],NickVota[7],NickVota[12],NickVota[0],NickVota[13]),CalcSlg(CalcTb(NickVotasingle,NickVota[2],NickVota[3],NickVota[4]),NickVota[0])).toFixed(3);
document.getElementById("NickVotasb").innerHTML = NickVota[9];
document.getElementById("NickVotacs").innerHTML = NickVota[10];
document.getElementById("NickVotaibb").innerHTML = NickVota[11];
document.getElementById("NickVotahbp").innerHTML = NickVota[12];
document.getElementById("NickVotasacf").innerHTML = NickVota[13];
document.getElementById("NickVotasacb").innerHTML = NickVota[14];
document.getElementById("NickVotatb").innerHTML = CalcTb(NickVotasingle,NickVota[2],NickVota[3],NickVota[4]);
document.getElementById("NickVotaxbh").innerHTML = CalcXbh(NickVota[2],NickVota[3],NickVota[4]);










var SamRodriguez = [
    11, /* ab            0*/
    5, /* h             1*/
    1, /* double        2*/
    0, /* triple        3*/
    0, /* hr            4*/
    6, /* rbi           5*/
    3, /* r             6*/
    0, /* bb            7*/
    1, /* so            8*/
    3, /* sb            9*/
    0, /* cs            10*/
    0, /* ibb           11*/
    0, /* hbp           12*/
    1, /* sacf          13*/
    0, /* sacb          14*/
]

var SamRodriguezsingle = SamRodriguez[1] - (CalcXbh(SamRodriguez[2],SamRodriguez[3],SamRodriguez[4]));

document.getElementById("SamRodriguezab").innerHTML = SamRodriguez[0];
document.getElementById("SamRodriguezpa").innerHTML = CalcPA(SamRodriguez[0],SamRodriguez[7],SamRodriguez[12],SamRodriguez[14],SamRodriguez[13]);
document.getElementById("SamRodriguezh").innerHTML = SamRodriguez[1];
document.getElementById("SamRodriguezavg").innerHTML = CalcBattingAvg(SamRodriguez[1], SamRodriguez[0]).toFixed(3);
document.getElementById("SamRodriguezdouble").innerHTML = SamRodriguez[2];
document.getElementById("SamRodrigueztriple").innerHTML = SamRodriguez[3];
document.getElementById("SamRodriguezhr").innerHTML = SamRodriguez[4];
document.getElementById("SamRodriguezobp").innerHTML = CalcObp(SamRodriguez[1],SamRodriguez[7],SamRodriguez[12],SamRodriguez[0],SamRodriguez[13]).toFixed(3);
document.getElementById("SamRodriguezrbi").innerHTML = SamRodriguez[5];
document.getElementById("SamRodriguezr").innerHTML = SamRodriguez[6];
document.getElementById("SamRodriguezbb").innerHTML = SamRodriguez[7];
document.getElementById("SamRodriguezso").innerHTML = SamRodriguez[8];
document.getElementById("SamRodriguezslg").innerHTML = CalcSlg(CalcTb(SamRodriguezsingle,SamRodriguez[2],SamRodriguez[3],SamRodriguez[4]),SamRodriguez[0]).toFixed(3);
document.getElementById("SamRodriguezops").innerHTML =CalcOps(CalcObp(SamRodriguez[1],SamRodriguez[7],SamRodriguez[12],SamRodriguez[0],SamRodriguez[13]),CalcSlg(CalcTb(SamRodriguezsingle,SamRodriguez[2],SamRodriguez[3],SamRodriguez[4]),SamRodriguez[0])).toFixed(3);
document.getElementById("SamRodriguezsb").innerHTML = SamRodriguez[9];
document.getElementById("SamRodriguezcs").innerHTML = SamRodriguez[10];
document.getElementById("SamRodriguezibb").innerHTML = SamRodriguez[11];
document.getElementById("SamRodriguezhbp").innerHTML = SamRodriguez[12];
document.getElementById("SamRodriguezsacf").innerHTML = SamRodriguez[13];
document.getElementById("SamRodriguezsacb").innerHTML = SamRodriguez[14];
document.getElementById("SamRodrigueztb").innerHTML = CalcTb(SamRodriguezsingle,SamRodriguez[2],SamRodriguez[3],SamRodriguez[4]);
document.getElementById("SamRodriguezxbh").innerHTML = CalcXbh(SamRodriguez[2],SamRodriguez[3],SamRodriguez[4]);










var ShailenDoshi = [
    0, /* ab            0*/
    0, /* h             1*/
    0, /* double        2*/
    0, /* triple        3*/
    0, /* hr            4*/
    0, /* rbi           5*/
    0, /* r             6*/
    0, /* bb            7*/
    0, /* so            8*/
    0, /* sb            9*/
    0, /* cs            10*/
    0, /* ibb           11*/
    0, /* hbp           12*/
    0, /* sacf          13*/
    0, /* sacb          14*/
]

var ShailenDoshisingle = ShailenDoshi[1] - (CalcXbh(ShailenDoshi[2],ShailenDoshi[3],ShailenDoshi[4]));

document.getElementById("ShailenDoshiab").innerHTML = ShailenDoshi[0];
document.getElementById("ShailenDoshipa").innerHTML = CalcPA(ShailenDoshi[0],ShailenDoshi[7],ShailenDoshi[12],ShailenDoshi[14],ShailenDoshi[13]);
document.getElementById("ShailenDoshih").innerHTML = ShailenDoshi[1];
document.getElementById("ShailenDoshiavg").innerHTML = CalcBattingAvg(ShailenDoshi[1], ShailenDoshi[0]).toFixed(3);
document.getElementById("ShailenDoshidouble").innerHTML = ShailenDoshi[2];
document.getElementById("ShailenDoshitriple").innerHTML = ShailenDoshi[3];
document.getElementById("ShailenDoshihr").innerHTML = ShailenDoshi[4];
document.getElementById("ShailenDoshiobp").innerHTML = CalcObp(ShailenDoshi[1],ShailenDoshi[7],ShailenDoshi[12],ShailenDoshi[0],ShailenDoshi[13]).toFixed(3);
document.getElementById("ShailenDoshirbi").innerHTML = ShailenDoshi[5];
document.getElementById("ShailenDoshir").innerHTML = ShailenDoshi[6];
document.getElementById("ShailenDoshibb").innerHTML = ShailenDoshi[7];
document.getElementById("ShailenDoshiso").innerHTML = ShailenDoshi[8];
document.getElementById("ShailenDoshislg").innerHTML = CalcSlg(CalcTb(ShailenDoshisingle,ShailenDoshi[2],ShailenDoshi[3],ShailenDoshi[4]),ShailenDoshi[0]).toFixed(3);
document.getElementById("ShailenDoshiops").innerHTML =CalcOps(CalcObp(ShailenDoshi[1],ShailenDoshi[7],ShailenDoshi[12],ShailenDoshi[0],ShailenDoshi[13]),CalcSlg(CalcTb(ShailenDoshisingle,ShailenDoshi[2],ShailenDoshi[3],ShailenDoshi[4]),ShailenDoshi[0])).toFixed(3);
document.getElementById("ShailenDoshisb").innerHTML = ShailenDoshi[9];
document.getElementById("ShailenDoshics").innerHTML = ShailenDoshi[10];
document.getElementById("ShailenDoshiibb").innerHTML = ShailenDoshi[11];
document.getElementById("ShailenDoshihbp").innerHTML = ShailenDoshi[12];
document.getElementById("ShailenDoshisacf").innerHTML = ShailenDoshi[13];
document.getElementById("ShailenDoshisacb").innerHTML = ShailenDoshi[14];
document.getElementById("ShailenDoshitb").innerHTML = CalcTb(ShailenDoshisingle,ShailenDoshi[2],ShailenDoshi[3],ShailenDoshi[4]);
document.getElementById("ShailenDoshixbh").innerHTML = CalcXbh(ShailenDoshi[2],ShailenDoshi[3],ShailenDoshi[4]);










var ShanDhaliwal = [
    6, /* ab            0*/
    1, /* h             1*/
    1, /* double        2*/
    0, /* triple        3*/
    0, /* hr            4*/
    1, /* rbi           5*/
    2, /* r             6*/
    0, /* bb            7*/
    3, /* so            8*/
    0, /* sb            9*/
    0, /* cs            10*/
    0, /* ibb           11*/
    0, /* hbp           12*/
    0, /* sacf          13*/
    0, /* sacb          14*/
]

var ShanDhaliwalsingle = ShanDhaliwal[1] - (CalcXbh(ShanDhaliwal[2],ShanDhaliwal[3],ShanDhaliwal[4]));

document.getElementById("ShanDhaliwalab").innerHTML = ShanDhaliwal[0];
document.getElementById("ShanDhaliwalpa").innerHTML = CalcPA(ShanDhaliwal[0],ShanDhaliwal[7],ShanDhaliwal[12],ShanDhaliwal[14],ShanDhaliwal[13]);
document.getElementById("ShanDhaliwalh").innerHTML = ShanDhaliwal[1];
document.getElementById("ShanDhaliwalavg").innerHTML = CalcBattingAvg(ShanDhaliwal[1], ShanDhaliwal[0]).toFixed(3);
document.getElementById("ShanDhaliwaldouble").innerHTML = ShanDhaliwal[2];
document.getElementById("ShanDhaliwaltriple").innerHTML = ShanDhaliwal[3];
document.getElementById("ShanDhaliwalhr").innerHTML = ShanDhaliwal[4];
document.getElementById("ShanDhaliwalobp").innerHTML = CalcObp(ShanDhaliwal[1],ShanDhaliwal[7],ShanDhaliwal[12],ShanDhaliwal[0],ShanDhaliwal[13]).toFixed(3);
document.getElementById("ShanDhaliwalrbi").innerHTML = ShanDhaliwal[5];
document.getElementById("ShanDhaliwalr").innerHTML = ShanDhaliwal[6];
document.getElementById("ShanDhaliwalbb").innerHTML = ShanDhaliwal[7];
document.getElementById("ShanDhaliwalso").innerHTML = ShanDhaliwal[8];
document.getElementById("ShanDhaliwalslg").innerHTML = CalcSlg(CalcTb(ShanDhaliwalsingle,ShanDhaliwal[2],ShanDhaliwal[3],ShanDhaliwal[4]),ShanDhaliwal[0]).toFixed(3);
document.getElementById("ShanDhaliwalops").innerHTML =CalcOps(CalcObp(ShanDhaliwal[1],ShanDhaliwal[7],ShanDhaliwal[12],ShanDhaliwal[0],ShanDhaliwal[13]),CalcSlg(CalcTb(ShanDhaliwalsingle,ShanDhaliwal[2],ShanDhaliwal[3],ShanDhaliwal[4]),ShanDhaliwal[0])).toFixed(3);
document.getElementById("ShanDhaliwalsb").innerHTML = ShanDhaliwal[9];
document.getElementById("ShanDhaliwalcs").innerHTML = ShanDhaliwal[10];
document.getElementById("ShanDhaliwalibb").innerHTML = ShanDhaliwal[11];
document.getElementById("ShanDhaliwalhbp").innerHTML = ShanDhaliwal[12];
document.getElementById("ShanDhaliwalsacf").innerHTML = ShanDhaliwal[13];
document.getElementById("ShanDhaliwalsacb").innerHTML = ShanDhaliwal[14];
document.getElementById("ShanDhaliwaltb").innerHTML = CalcTb(ShanDhaliwalsingle,ShanDhaliwal[2],ShanDhaliwal[3],ShanDhaliwal[4]);
document.getElementById("ShanDhaliwalxbh").innerHTML = CalcXbh(ShanDhaliwal[2],ShanDhaliwal[3],ShanDhaliwal[4]);










var StefanoPriante = [
    7, /* ab            0*/
    1, /* h             1*/
    0, /* double        2*/
    0, /* triple        3*/
    0, /* hr            4*/
    3, /* rbi           5*/
    0, /* r             6*/
    2, /* bb            7*/
    2, /* so            8*/
    0, /* sb            9*/
    0, /* cs            10*/
    0, /* ibb           11*/
    1, /* hbp           12*/
    1, /* sacf          13*/
    0, /* sacb          14*/
]

var StefanoPriantesingle = StefanoPriante[1] - (CalcXbh(StefanoPriante[2],StefanoPriante[3],StefanoPriante[4]));

document.getElementById("StefanoPrianteab").innerHTML = StefanoPriante[0];
document.getElementById("StefanoPriantepa").innerHTML = CalcPA(StefanoPriante[0],StefanoPriante[7],StefanoPriante[12],StefanoPriante[14],StefanoPriante[13]);
document.getElementById("StefanoPrianteh").innerHTML = StefanoPriante[1];
document.getElementById("StefanoPrianteavg").innerHTML = CalcBattingAvg(StefanoPriante[1], StefanoPriante[0]).toFixed(3);
document.getElementById("StefanoPriantedouble").innerHTML = StefanoPriante[2];
document.getElementById("StefanoPriantetriple").innerHTML = StefanoPriante[3];
document.getElementById("StefanoPriantehr").innerHTML = StefanoPriante[4];
document.getElementById("StefanoPrianteobp").innerHTML = CalcObp(StefanoPriante[1],StefanoPriante[7],StefanoPriante[12],StefanoPriante[0],StefanoPriante[13]).toFixed(3);
document.getElementById("StefanoPrianterbi").innerHTML = StefanoPriante[5];
document.getElementById("StefanoPrianter").innerHTML = StefanoPriante[6];
document.getElementById("StefanoPriantebb").innerHTML = StefanoPriante[7];
document.getElementById("StefanoPrianteso").innerHTML = StefanoPriante[8];
document.getElementById("StefanoPrianteslg").innerHTML = CalcSlg(CalcTb(StefanoPriantesingle,StefanoPriante[2],StefanoPriante[3],StefanoPriante[4]),StefanoPriante[0]).toFixed(3);
document.getElementById("StefanoPrianteops").innerHTML =CalcOps(CalcObp(StefanoPriante[1],StefanoPriante[7],StefanoPriante[12],StefanoPriante[0],StefanoPriante[13]),CalcSlg(CalcTb(StefanoPriantesingle,StefanoPriante[2],StefanoPriante[3],StefanoPriante[4]),StefanoPriante[0])).toFixed(3);
document.getElementById("StefanoPriantesb").innerHTML = StefanoPriante[9];
document.getElementById("StefanoPriantecs").innerHTML = StefanoPriante[10];
document.getElementById("StefanoPrianteibb").innerHTML = StefanoPriante[11];
document.getElementById("StefanoPriantehbp").innerHTML = StefanoPriante[12];
document.getElementById("StefanoPriantesacf").innerHTML = StefanoPriante[13];
document.getElementById("StefanoPriantesacb").innerHTML = StefanoPriante[14];
document.getElementById("StefanoPriantetb").innerHTML = CalcTb(StefanoPriantesingle,StefanoPriante[2],StefanoPriante[3],StefanoPriante[4]);
document.getElementById("StefanoPriantexbh").innerHTML = CalcXbh(StefanoPriante[2],StefanoPriante[3],StefanoPriante[4]);










var TomKessler = [
    7, /* ab            0*/
    3, /* h             1*/
    1, /* double        2*/
    1, /* triple        3*/
    0, /* hr            4*/
    1, /* rbi           5*/
    3, /* r             6*/
    0, /* bb            7*/
    0, /* so            8*/
    0, /* sb            9*/
    0, /* cs            10*/
    0, /* ibb           11*/
    1, /* hbp           12*/
    0, /* sacf          13*/
    0, /* sacb          14*/
]

var TomKesslersingle = TomKessler[1] - (CalcXbh(TomKessler[2],TomKessler[3],TomKessler[4]));

document.getElementById("TomKesslerab").innerHTML = TomKessler[0];
document.getElementById("TomKesslerpa").innerHTML = CalcPA(TomKessler[0],TomKessler[7],TomKessler[12],TomKessler[14],TomKessler[13]);
document.getElementById("TomKesslerh").innerHTML = TomKessler[1];
document.getElementById("TomKessleravg").innerHTML = CalcBattingAvg(TomKessler[1], TomKessler[0]).toFixed(3);
document.getElementById("TomKesslerdouble").innerHTML = TomKessler[2];
document.getElementById("TomKesslertriple").innerHTML = TomKessler[3];
document.getElementById("TomKesslerhr").innerHTML = TomKessler[4];
document.getElementById("TomKesslerobp").innerHTML = CalcObp(TomKessler[1],TomKessler[7],TomKessler[12],TomKessler[0],TomKessler[13]).toFixed(3);
document.getElementById("TomKesslerrbi").innerHTML = TomKessler[5];
document.getElementById("TomKesslerr").innerHTML = TomKessler[6];
document.getElementById("TomKesslerbb").innerHTML = TomKessler[7];
document.getElementById("TomKesslerso").innerHTML = TomKessler[8];
document.getElementById("TomKesslerslg").innerHTML = CalcSlg(CalcTb(TomKesslersingle,TomKessler[2],TomKessler[3],TomKessler[4]),TomKessler[0]).toFixed(3);
document.getElementById("TomKesslerops").innerHTML =CalcOps(CalcObp(TomKessler[1],TomKessler[7],TomKessler[12],TomKessler[0],TomKessler[13]),CalcSlg(CalcTb(TomKesslersingle,TomKessler[2],TomKessler[3],TomKessler[4]),TomKessler[0])).toFixed(3);
document.getElementById("TomKesslersb").innerHTML = TomKessler[9];
document.getElementById("TomKesslercs").innerHTML = TomKessler[10];
document.getElementById("TomKessleribb").innerHTML = TomKessler[11];
document.getElementById("TomKesslerhbp").innerHTML = TomKessler[12];
document.getElementById("TomKesslersacf").innerHTML = TomKessler[13];
document.getElementById("TomKesslersacb").innerHTML = TomKessler[14];
document.getElementById("TomKesslertb").innerHTML = CalcTb(TomKesslersingle,TomKessler[2],TomKessler[3],TomKessler[4]);
document.getElementById("TomKesslerxbh").innerHTML = CalcXbh(TomKessler[2],TomKessler[3],TomKessler[4]);










var TylerDugan = [
    2, /* ab            0*/
    1, /* h             1*/
    0, /* double        2*/
    0, /* triple        3*/
    0, /* hr            4*/
    0, /* rbi           5*/
    0, /* r             6*/
    1, /* bb            7*/
    1, /* so            8*/
    0, /* sb            9*/
    0, /* cs            10*/
    0, /* ibb           11*/
    0, /* hbp           12*/
    0, /* sacf          13*/
    0, /* sacb          14*/
]

var TylerDugansingle = TylerDugan[1] - (CalcXbh(TylerDugan[2],TylerDugan[3],TylerDugan[4]));

document.getElementById("TylerDuganab").innerHTML = TylerDugan[0];
document.getElementById("TylerDuganpa").innerHTML = CalcPA(TylerDugan[0],TylerDugan[7],TylerDugan[12],TylerDugan[14],TylerDugan[13]);
document.getElementById("TylerDuganh").innerHTML = TylerDugan[1];
document.getElementById("TylerDuganavg").innerHTML = CalcBattingAvg(TylerDugan[1], TylerDugan[0]).toFixed(3);
document.getElementById("TylerDugandouble").innerHTML = TylerDugan[2];
document.getElementById("TylerDugantriple").innerHTML = TylerDugan[3];
document.getElementById("TylerDuganhr").innerHTML = TylerDugan[4];
document.getElementById("TylerDuganobp").innerHTML = CalcObp(TylerDugan[1],TylerDugan[7],TylerDugan[12],TylerDugan[0],TylerDugan[13]).toFixed(3);
document.getElementById("TylerDuganrbi").innerHTML = TylerDugan[5];
document.getElementById("TylerDuganr").innerHTML = TylerDugan[6];
document.getElementById("TylerDuganbb").innerHTML = TylerDugan[7];
document.getElementById("TylerDuganso").innerHTML = TylerDugan[8];
document.getElementById("TylerDuganslg").innerHTML = CalcSlg(CalcTb(TylerDugansingle,TylerDugan[2],TylerDugan[3],TylerDugan[4]),TylerDugan[0]).toFixed(3);
document.getElementById("TylerDuganops").innerHTML =CalcOps(CalcObp(TylerDugan[1],TylerDugan[7],TylerDugan[12],TylerDugan[0],TylerDugan[13]),CalcSlg(CalcTb(TylerDugansingle,TylerDugan[2],TylerDugan[3],TylerDugan[4]),TylerDugan[0])).toFixed(3);
document.getElementById("TylerDugansb").innerHTML = TylerDugan[9];
document.getElementById("TylerDugancs").innerHTML = TylerDugan[10];
document.getElementById("TylerDuganibb").innerHTML = TylerDugan[11];
document.getElementById("TylerDuganhbp").innerHTML = TylerDugan[12];
document.getElementById("TylerDugansacf").innerHTML = TylerDugan[13];
document.getElementById("TylerDugansacb").innerHTML = TylerDugan[14];
document.getElementById("TylerDugantb").innerHTML = CalcTb(TylerDugansingle,TylerDugan[2],TylerDugan[3],TylerDugan[4]);
document.getElementById("TylerDuganxbh").innerHTML = CalcXbh(TylerDugan[2],TylerDugan[3],TylerDugan[4]);










var WillDurkin = [
    0, /* ab            0*/
    0, /* h             1*/
    0, /* double        2*/
    0, /* triple        3*/
    0, /* hr            4*/
    0, /* rbi           5*/
    0, /* r             6*/
    0, /* bb            7*/
    0, /* so            8*/
    0, /* sb            9*/
    0, /* cs            10*/
    0, /* ibb           11*/
    0, /* hbp           12*/
    0, /* sacf          13*/
    0, /* sacb          14*/
]

var WillDurkinsingle = WillDurkin[1] - (CalcXbh(WillDurkin[2],WillDurkin[3],WillDurkin[4]));

document.getElementById("WillDurkinab").innerHTML = WillDurkin[0];
document.getElementById("WillDurkinpa").innerHTML = CalcPA(WillDurkin[0],WillDurkin[7],WillDurkin[12],WillDurkin[14],WillDurkin[13]);
document.getElementById("WillDurkinh").innerHTML = WillDurkin[1];
document.getElementById("WillDurkinavg").innerHTML = CalcBattingAvg(WillDurkin[1], WillDurkin[0]).toFixed(3);
document.getElementById("WillDurkindouble").innerHTML = WillDurkin[2];
document.getElementById("WillDurkintriple").innerHTML = WillDurkin[3];
document.getElementById("WillDurkinhr").innerHTML = WillDurkin[4];
document.getElementById("WillDurkinobp").innerHTML = CalcObp(WillDurkin[1],WillDurkin[7],WillDurkin[12],WillDurkin[0],WillDurkin[13]).toFixed(3);
document.getElementById("WillDurkinrbi").innerHTML = WillDurkin[5];
document.getElementById("WillDurkinr").innerHTML = WillDurkin[6];
document.getElementById("WillDurkinbb").innerHTML = WillDurkin[7];
document.getElementById("WillDurkinso").innerHTML = WillDurkin[8];
document.getElementById("WillDurkinslg").innerHTML = CalcSlg(CalcTb(WillDurkinsingle,WillDurkin[2],WillDurkin[3],WillDurkin[4]),WillDurkin[0]).toFixed(3);
document.getElementById("WillDurkinops").innerHTML =CalcOps(CalcObp(WillDurkin[1],WillDurkin[7],WillDurkin[12],WillDurkin[0],WillDurkin[13]),CalcSlg(CalcTb(WillDurkinsingle,WillDurkin[2],WillDurkin[3],WillDurkin[4]),WillDurkin[0])).toFixed(3);
document.getElementById("WillDurkinsb").innerHTML = WillDurkin[9];
document.getElementById("WillDurkincs").innerHTML = WillDurkin[10];
document.getElementById("WillDurkinibb").innerHTML = WillDurkin[11];
document.getElementById("WillDurkinhbp").innerHTML = WillDurkin[12];
document.getElementById("WillDurkinsacf").innerHTML = WillDurkin[13];
document.getElementById("WillDurkinsacb").innerHTML = WillDurkin[14];
document.getElementById("WillDurkintb").innerHTML = CalcTb(WillDurkinsingle,WillDurkin[2],WillDurkin[3],WillDurkin[4]);
document.getElementById("WillDurkinxbh").innerHTML = CalcXbh(WillDurkin[2],WillDurkin[3],WillDurkin[4]);