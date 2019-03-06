var _ = [
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

var _single = _[1] - (CalcXbh(_[2],_[3],_[4]));

document.getElementById("_ab").innerHTML = _[0];
document.getElementById("_pa").innerHTML = CalcPA(_[0],_[7],_[12],_[14],_[13]);
document.getElementById("_h").innerHTML = _[1];
document.getElementById("_avg").innerHTML = CalcBattingAvg(_[1], _[0]).toFixed(3);
document.getElementById("_double").innerHTML = _[2];
document.getElementById("_triple").innerHTML = _[3];
document.getElementById("_hr").innerHTML = _[4];
document.getElementById("_obp").innerHTML = CalcObp(_[1],_[7],_[12],_[0],_[13]).toFixed(3);
document.getElementById("_rbi").innerHTML = _[5];
document.getElementById("_r").innerHTML = _[6];
document.getElementById("_bb").innerHTML = _[7];
document.getElementById("_so").innerHTML = _[8];
document.getElementById("_slg").innerHTML = CalcSlg(CalcTb(_single,_[2],_[3],_[4]),_[0]).toFixed(3);
document.getElementById("_ops").innerHTML =CalcOps(CalcObp(_[1],_[7],_[12],_[0],_[13]),CalcSlg(CalcTb(_single,_[2],_[3],_[4]),_[0])).toFixed(3);
document.getElementById("_sb").innerHTML = _[9];
document.getElementById("_cs").innerHTML = _[10];
document.getElementById("_ibb").innerHTML = _[11];
document.getElementById("_hbp").innerHTML = _[12];
document.getElementById("_sacf").innerHTML = _[13];
document.getElementById("_sacb").innerHTML = _[14];
document.getElementById("_tb").innerHTML = CalcTb(_single,_[2],_[3],_[4]);
document.getElementById("_xbh").innerHTML = CalcXbh(_[2],_[3],_[4]);







var _p = [
    0, /* W                 0*/
    0, /* L                 1*/
    0, /* G                 2*/
    0, /* GS                3*/
    0, /* CG                4*/
    0, /* SV                5*/
    0, /* SVO               6*/
    0, /* IP decimal  7*/
    0, /* IP clean        8*/
    0, /* H                 9*/
    0, /* R                 10*/
    0, /* ER                11*/
    0, /* HR                12*/
    0, /* BB                13*/
    0, /* SO                14*/
    0, /* SHO               15*/
    0, /* HBP               16*/
    0, /* IBB               17*/
    0, /* WP                18*/
]

document.getElementById("_w").innerHTML = _p[0];
document.getElementById("_l").innerHTML = _p[1];
document.getElementById("_g").innerHTML = _p[2];
document.getElementById("_gs").innerHTML = _p[3];
document.getElementById("_cg").innerHTML = _p[4];
document.getElementById("_sv").innerHTML = _p[5];
document.getElementById("_svo").innerHTML = _p[6];
document.getElementById("_ip").innerHTML = _p[8];
document.getElementById("_ph").innerHTML = _p[9];
document.getElementById("_pr").innerHTML = _p[10];
document.getElementById("_er").innerHTML = _p[11];
document.getElementById("_phr").innerHTML = _p[12];
document.getElementById("_pbb").innerHTML = _p[13];
document.getElementById("_pso").innerHTML = _p[14];
document.getElementById("_sho").innerHTML = _p[15];
document.getElementById("_phbp").innerHTML = _p[16];
document.getElementById("_pibb").innerHTML = _p[17];
document.getElementById("_wp").innerHTML = _p[18];
document.getElementById("_era").innerHTML = CalcEra(_p[11],_p[7]);
document.getElementById("_whip").innerHTML = CalcWhip(_p[9],_p[13],_p[7]);
document.getElementById("_winpercent").innerHTML = CalcWinpercent(_p[0], _p[1]);
document.getElementById("_kper9").innerHTML = CalcKper9(_p[14], _p[7]);
document.getElementById("_kperbb").innerHTML = CalcKperBB(_p[14],_p[13]);