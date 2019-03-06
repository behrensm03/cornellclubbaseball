function CalcEra(er,ip) {
    if (ip === 0) {
        return 0.00.toFixed(2);
    }
    else {
        return (er/ip*9).toFixed(2);
    }
}

function CalcWhip(h,bb,ip) {
    if (ip === 0) {
        return 0.00.toFixed(2);
    }
    else {
        return ((h+bb)/ip).toFixed(2);
    }
}

function CalcWinpercent(w,l) {
    if (w+l === 0) {
        return 0.000.toFixed(3);
    }
    else {
        return (w/(w+l)).toFixed(3);
    }
}

function CalcKper9(k,ip) {
    if (ip === 0) {
        return 0.00.toFixed(2)
    }
    else {
        return (k/ip*9).toFixed(2);
    }
}

function CalcKperBB(k,bb) {
    if (bb === 0) {
        return "Inf";
    }
    else {
        return (k/bb).toFixed(2);
    }
}

var AlexTorpeyp = [
    0, /* W                 0*/
    1, /* L                 1*/
    1, /* G                 2*/
    0, /* GS                3*/
    0, /* CG                4*/
    0, /* SV                5*/
    0, /* SVO               6*/
    1 + 1/3, /* IP decimal  7*/
    1.1, /* IP clean        8*/
    1, /* H                 9*/
    1, /* R                 10*/
    0, /* ER                11*/
    0, /* HR                12*/
    1, /* BB                13*/
    0, /* SO                14*/
    0, /* SHO               15*/
    0, /* HBP               16*/
    0, /* IBB               17*/
    0, /* WP                18*/
]

document.getElementById("AlexTorpeyw").innerHTML = AlexTorpeyp[0];
document.getElementById("AlexTorpeyl").innerHTML = AlexTorpeyp[1];
document.getElementById("AlexTorpeyg").innerHTML = AlexTorpeyp[2];
document.getElementById("AlexTorpeygs").innerHTML = AlexTorpeyp[3];
document.getElementById("AlexTorpeycg").innerHTML = AlexTorpeyp[4];
document.getElementById("AlexTorpeysv").innerHTML = AlexTorpeyp[5];
document.getElementById("AlexTorpeysvo").innerHTML = AlexTorpeyp[6];
document.getElementById("AlexTorpeyip").innerHTML = AlexTorpeyp[8];
document.getElementById("AlexTorpeyph").innerHTML = AlexTorpeyp[9];
document.getElementById("AlexTorpeypr").innerHTML = AlexTorpeyp[10];
document.getElementById("AlexTorpeyer").innerHTML = AlexTorpeyp[11];
document.getElementById("AlexTorpeyphr").innerHTML = AlexTorpeyp[12];
document.getElementById("AlexTorpeypbb").innerHTML = AlexTorpeyp[13];
document.getElementById("AlexTorpeypso").innerHTML = AlexTorpeyp[14];
document.getElementById("AlexTorpeysho").innerHTML = AlexTorpeyp[15];
document.getElementById("AlexTorpeyphbp").innerHTML = AlexTorpeyp[16];
document.getElementById("AlexTorpeypibb").innerHTML = AlexTorpeyp[17];
document.getElementById("AlexTorpeywp").innerHTML = AlexTorpeyp[18];
document.getElementById("AlexTorpeyera").innerHTML = CalcEra(AlexTorpeyp[11],AlexTorpey[7]);
document.getElementById("AlexTorpeywhip").innerHTML = CalcWhip(AlexTorpeyp[9],AlexTorpeyp[13],AlexTorpeyp[7]);
document.getElementById("AlexTorpeywinpercent").innerHTML = CalcWinpercent(AlexTorpeyp[0], AlexTorpey[1]);
document.getElementById("AlexTorpeykper9").innerHTML = CalcKper9(AlexTorpeyp[14], AlexTorpeyp[7]);
document.getElementById("AlexTorpeykperbb").innerHTML = CalcKperBB(AlexTorpeyp[14],AlexTorpeyp[13]);










var BrettOConnorp = [
    0, /* W                 0*/
    2, /* L                 1*/
    3, /* G                 2*/
    3, /* GS                3*/
    1, /* CG                4*/
    0, /* SV                5*/
    0, /* SVO               6*/
    15, /* IP decimal  7*/
    15, /* IP clean        8*/
    18, /* H                 9*/
    18, /* R                 10*/
    11, /* ER                11*/
    0, /* HR                12*/
    12, /* BB                13*/
    12, /* SO                14*/
    0, /* SHO               15*/
    0, /* HBP               16*/
    0, /* IBB               17*/
    0, /* WP                18*/
]

document.getElementById("BrettOConnorw").innerHTML = BrettOConnorp[0];
document.getElementById("BrettOConnorl").innerHTML = BrettOConnorp[1];
document.getElementById("BrettOConnorg").innerHTML = BrettOConnorp[2];
document.getElementById("BrettOConnorgs").innerHTML = BrettOConnorp[3];
document.getElementById("BrettOConnorcg").innerHTML = BrettOConnorp[4];
document.getElementById("BrettOConnorsv").innerHTML = BrettOConnorp[5];
document.getElementById("BrettOConnorsvo").innerHTML = BrettOConnorp[6];
document.getElementById("BrettOConnorip").innerHTML = BrettOConnorp[8];
document.getElementById("BrettOConnorph").innerHTML = BrettOConnorp[9];
document.getElementById("BrettOConnorpr").innerHTML = BrettOConnorp[10];
document.getElementById("BrettOConnorer").innerHTML = BrettOConnorp[11];
document.getElementById("BrettOConnorphr").innerHTML = BrettOConnorp[12];
document.getElementById("BrettOConnorpbb").innerHTML = BrettOConnorp[13];
document.getElementById("BrettOConnorpso").innerHTML = BrettOConnorp[14];
document.getElementById("BrettOConnorsho").innerHTML = BrettOConnorp[15];
document.getElementById("BrettOConnorphbp").innerHTML = BrettOConnorp[16];
document.getElementById("BrettOConnorpibb").innerHTML = BrettOConnorp[17];
document.getElementById("BrettOConnorwp").innerHTML = BrettOConnorp[18];
document.getElementById("BrettOConnorera").innerHTML = CalcEra(BrettOConnorp[11],BrettOConnorp[7]);
document.getElementById("BrettOConnorwhip").innerHTML = CalcWhip(BrettOConnorp[9],BrettOConnorp[13],BrettOConnorp[7]);
document.getElementById("BrettOConnorwinpercent").innerHTML = CalcWinpercent(BrettOConnorp[0], BrettOConnorp[1]);
document.getElementById("BrettOConnorkper9").innerHTML = CalcKper9(BrettOConnorp[14], BrettOConnorp[7]);
document.getElementById("BrettOConnorkperbb").innerHTML = CalcKperBB(BrettOConnorp[14],BrettOConnorp[13]);










var EricBohrerp = [
    1, /* W                 0*/
    0, /* L                 1*/
    2, /* G                 2*/
    0, /* GS                3*/
    0, /* CG                4*/
    0, /* SV                5*/
    0, /* SVO               6*/
    3, /* IP decimal        7*/
    3, /* IP clean          8*/
    2, /* H                 9*/
    2, /* R                 10*/
    2, /* ER                11*/
    0, /* HR                12*/
    2, /* BB                13*/
    2, /* SO                14*/
    0, /* SHO               15*/
    1, /* HBP               16*/
    0, /* IBB               17*/
    0, /* WP                18*/
]

document.getElementById("EricBohrerw").innerHTML = EricBohrerp[0];
document.getElementById("EricBohrerl").innerHTML = EricBohrerp[1];
document.getElementById("EricBohrerg").innerHTML = EricBohrerp[2];
document.getElementById("EricBohrergs").innerHTML = EricBohrerp[3];
document.getElementById("EricBohrercg").innerHTML = EricBohrerp[4];
document.getElementById("EricBohrersv").innerHTML = EricBohrerp[5];
document.getElementById("EricBohrersvo").innerHTML = EricBohrerp[6];
document.getElementById("EricBohrerip").innerHTML = EricBohrerp[8];
document.getElementById("EricBohrerph").innerHTML = EricBohrerp[9];
document.getElementById("EricBohrerpr").innerHTML = EricBohrerp[10];
document.getElementById("EricBohrerer").innerHTML = EricBohrerp[11];
document.getElementById("EricBohrerphr").innerHTML = EricBohrerp[12];
document.getElementById("EricBohrerpbb").innerHTML = EricBohrerp[13];
document.getElementById("EricBohrerpso").innerHTML = EricBohrerp[14];
document.getElementById("EricBohrersho").innerHTML = EricBohrerp[15];
document.getElementById("EricBohrerphbp").innerHTML = EricBohrerp[16];
document.getElementById("EricBohrerpibb").innerHTML = EricBohrerp[17];
document.getElementById("EricBohrerwp").innerHTML = EricBohrerp[18];
document.getElementById("EricBohrerera").innerHTML = CalcEra(EricBohrerp[11],EricBohrerp[7]);
document.getElementById("EricBohrerwhip").innerHTML = CalcWhip(EricBohrerp[9],EricBohrerp[13],EricBohrerp[7]);
document.getElementById("EricBohrerwinpercent").innerHTML = CalcWinpercent(EricBohrerp[0], EricBohrerp[1]);
document.getElementById("EricBohrerkper9").innerHTML = CalcKper9(EricBohrerp[14], EricBohrerp[7]);
document.getElementById("EricBohrerkperbb").innerHTML = CalcKperBB(EricBohrerp[14],EricBohrerp[13]);










var IanFoxp = [
    0, /* W                 0*/
    0, /* L                 1*/
    1, /* G                 2*/
    0, /* GS                3*/
    0, /* CG                4*/
    0, /* SV                5*/
    0, /* SVO               6*/
    1, /* IP decimal  7*/
    1, /* IP clean        8*/
    1, /* H                 9*/
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

document.getElementById("IanFoxw").innerHTML = IanFoxp[0];
document.getElementById("IanFoxl").innerHTML = IanFoxp[1];
document.getElementById("IanFoxg").innerHTML = IanFoxp[2];
document.getElementById("IanFoxgs").innerHTML = IanFoxp[3];
document.getElementById("IanFoxcg").innerHTML = IanFoxp[4];
document.getElementById("IanFoxsv").innerHTML = IanFoxp[5];
document.getElementById("IanFoxsvo").innerHTML = IanFoxp[6];
document.getElementById("IanFoxip").innerHTML = IanFoxp[8];
document.getElementById("IanFoxph").innerHTML = IanFoxp[9];
document.getElementById("IanFoxpr").innerHTML = IanFoxp[10];
document.getElementById("IanFoxer").innerHTML = IanFoxp[11];
document.getElementById("IanFoxphr").innerHTML = IanFoxp[12];
document.getElementById("IanFoxpbb").innerHTML = IanFoxp[13];
document.getElementById("IanFoxpso").innerHTML = IanFoxp[14];
document.getElementById("IanFoxsho").innerHTML = IanFoxp[15];
document.getElementById("IanFoxphbp").innerHTML = IanFoxp[16];
document.getElementById("IanFoxpibb").innerHTML = IanFoxp[17];
document.getElementById("IanFoxwp").innerHTML = IanFoxp[18];
document.getElementById("IanFoxera").innerHTML = CalcEra(IanFoxp[11],IanFoxp[7]);
document.getElementById("IanFoxwhip").innerHTML = CalcWhip(IanFoxp[9],IanFoxp[13],IanFoxp[7]);
document.getElementById("IanFoxwinpercent").innerHTML = CalcWinpercent(IanFoxp[0], IanFoxp[1]);
document.getElementById("IanFoxkper9").innerHTML = CalcKper9(IanFoxp[14], IanFoxp[7]);
document.getElementById("IanFoxkperbb").innerHTML = CalcKperBB(IanFoxp[14],IanFoxp[13]);










var IlanLindenfeldp = [
    0, /* W                 0*/
    0, /* L                 1*/
    1, /* G                 2*/
    0, /* GS                3*/
    0, /* CG                4*/
    0, /* SV                5*/
    0, /* SVO               6*/
    1, /* IP decimal  7*/
    1, /* IP clean        8*/
    2, /* H                 9*/
    3, /* R                 10*/
    3, /* ER                11*/
    0, /* HR                12*/
    3, /* BB                13*/
    0, /* SO                14*/
    0, /* SHO               15*/
    0, /* HBP               16*/
    0, /* IBB               17*/
    0, /* WP                18*/
]

document.getElementById("IlanLindenfeldw").innerHTML = IlanLindenfeldp[0];
document.getElementById("IlanLindenfeldl").innerHTML = IlanLindenfeldp[1];
document.getElementById("IlanLindenfeldg").innerHTML = IlanLindenfeldp[2];
document.getElementById("IlanLindenfeldgs").innerHTML = IlanLindenfeldp[3];
document.getElementById("IlanLindenfeldcg").innerHTML = IlanLindenfeldp[4];
document.getElementById("IlanLindenfeldsv").innerHTML = IlanLindenfeldp[5];
document.getElementById("IlanLindenfeldsvo").innerHTML = IlanLindenfeldp[6];
document.getElementById("IlanLindenfeldip").innerHTML = IlanLindenfeldp[8];
document.getElementById("IlanLindenfeldph").innerHTML = IlanLindenfeldp[9];
document.getElementById("IlanLindenfeldpr").innerHTML = IlanLindenfeldp[10];
document.getElementById("IlanLindenfelder").innerHTML = IlanLindenfeldp[11];
document.getElementById("IlanLindenfeldphr").innerHTML = IlanLindenfeldp[12];
document.getElementById("IlanLindenfeldpbb").innerHTML = IlanLindenfeldp[13];
document.getElementById("IlanLindenfeldpso").innerHTML = IlanLindenfeldp[14];
document.getElementById("IlanLindenfeldsho").innerHTML = IlanLindenfeldp[15];
document.getElementById("IlanLindenfeldphbp").innerHTML = IlanLindenfeldp[16];
document.getElementById("IlanLindenfeldpibb").innerHTML = IlanLindenfeldp[17];
document.getElementById("IlanLindenfeldwp").innerHTML = IlanLindenfeldp[18];
document.getElementById("IlanLindenfeldera").innerHTML = CalcEra(IlanLindenfeldp[11],IlanLindenfeldp[7]);
document.getElementById("IlanLindenfeldwhip").innerHTML = CalcWhip(IlanLindenfeldp[9],IlanLindenfeldp[13],IlanLindenfeldp[7]);
document.getElementById("IlanLindenfeldwinpercent").innerHTML = CalcWinpercent(IlanLindenfeldp[0], IlanLindenfeldp[1]);
document.getElementById("IlanLindenfeldkper9").innerHTML = CalcKper9(IlanLindenfeldp[14], IlanLindenfeldp[7]);
document.getElementById("IlanLindenfeldkperbb").innerHTML = CalcKperBB(IlanLindenfeldp[14],IlanLindenfeldp[13]);










var JasonShandlerp = [
    0, /* W                 0*/
    0, /* L                 1*/
    2, /* G                 2*/
    0, /* GS                3*/
    0, /* CG                4*/
    0, /* SV                5*/
    0, /* SVO               6*/
    3 + 1/3, /* IP decimal  7*/
    3.1, /* IP clean        8*/
    6, /* H                 9*/
    8, /* R                 10*/
    2, /* ER                11*/
    0, /* HR                12*/
    2, /* BB                13*/
    6, /* SO                14*/
    0, /* SHO               15*/
    2, /* HBP               16*/
    0, /* IBB               17*/
    0, /* WP                18*/
]

document.getElementById("JasonShandlerw").innerHTML = JasonShandlerp[0];
document.getElementById("JasonShandlerl").innerHTML = JasonShandlerp[1];
document.getElementById("JasonShandlerg").innerHTML = JasonShandlerp[2];
document.getElementById("JasonShandlergs").innerHTML = JasonShandlerp[3];
document.getElementById("JasonShandlercg").innerHTML = JasonShandlerp[4];
document.getElementById("JasonShandlersv").innerHTML = JasonShandlerp[5];
document.getElementById("JasonShandlersvo").innerHTML = JasonShandlerp[6];
document.getElementById("JasonShandlerip").innerHTML = JasonShandlerp[8];
document.getElementById("JasonShandlerph").innerHTML = JasonShandlerp[9];
document.getElementById("JasonShandlerpr").innerHTML = JasonShandlerp[10];
document.getElementById("JasonShandlerer").innerHTML = JasonShandlerp[11];
document.getElementById("JasonShandlerphr").innerHTML = JasonShandlerp[12];
document.getElementById("JasonShandlerpbb").innerHTML = JasonShandlerp[13];
document.getElementById("JasonShandlerpso").innerHTML = JasonShandlerp[14];
document.getElementById("JasonShandlersho").innerHTML = JasonShandlerp[15];
document.getElementById("JasonShandlerphbp").innerHTML = JasonShandlerp[16];
document.getElementById("JasonShandlerpibb").innerHTML = JasonShandlerp[17];
document.getElementById("JasonShandlerwp").innerHTML = JasonShandlerp[18];
document.getElementById("JasonShandlerera").innerHTML = CalcEra(JasonShandlerp[11],JasonShandlerp[7]);
document.getElementById("JasonShandlerwhip").innerHTML = CalcWhip(JasonShandlerp[9],JasonShandlerp[13],JasonShandlerp[7]);
document.getElementById("JasonShandlerwinpercent").innerHTML = CalcWinpercent(JasonShandlerp[0], JasonShandlerp[1]);
document.getElementById("JasonShandlerkper9").innerHTML = CalcKper9(JasonShandlerp[14], JasonShandlerp[7]);
document.getElementById("JasonShandlerkperbb").innerHTML = CalcKperBB(JasonShandlerp[14],JasonShandlerp[13]);










var MarkJonesp = [
    1, /* W                 0*/
    2, /* L                 1*/
    3, /* G                 2*/
    3, /* GS                3*/
    1, /* CG                4*/
    0, /* SV                5*/
    0, /* SVO               6*/
    11, /* IP decimal  7*/
    11, /* IP clean        8*/
    28, /* H                 9*/
    18, /* R                 10*/
    15, /* ER                11*/
    1, /* HR                12*/
    2, /* BB                13*/
    17, /* SO                14*/
    0, /* SHO               15*/
    0, /* HBP               16*/
    0, /* IBB               17*/
    0, /* WP                18*/
]

document.getElementById("MarkJonesw").innerHTML = MarkJonesp[0];
document.getElementById("MarkJonesl").innerHTML = MarkJonesp[1];
document.getElementById("MarkJonesg").innerHTML = MarkJonesp[2];
document.getElementById("MarkJonesgs").innerHTML = MarkJonesp[3];
document.getElementById("MarkJonescg").innerHTML = MarkJonesp[4];
document.getElementById("MarkJonessv").innerHTML = MarkJonesp[5];
document.getElementById("MarkJonessvo").innerHTML = MarkJonesp[6];
document.getElementById("MarkJonesip").innerHTML = MarkJonesp[8];
document.getElementById("MarkJonesph").innerHTML = MarkJonesp[9];
document.getElementById("MarkJonespr").innerHTML = MarkJonesp[10];
document.getElementById("MarkJoneser").innerHTML = MarkJonesp[11];
document.getElementById("MarkJonesphr").innerHTML = MarkJonesp[12];
document.getElementById("MarkJonespbb").innerHTML = MarkJonesp[13];
document.getElementById("MarkJonespso").innerHTML = MarkJonesp[14];
document.getElementById("MarkJonessho").innerHTML = MarkJonesp[15];
document.getElementById("MarkJonesphbp").innerHTML = MarkJonesp[16];
document.getElementById("MarkJonespibb").innerHTML = MarkJonesp[17];
document.getElementById("MarkJoneswp").innerHTML = MarkJonesp[18];
document.getElementById("MarkJonesera").innerHTML = CalcEra(MarkJonesp[11],MarkJonesp[7]);
document.getElementById("MarkJoneswhip").innerHTML = CalcWhip(MarkJonesp[9],MarkJonesp[13],MarkJonesp[7]);
document.getElementById("MarkJoneswinpercent").innerHTML = CalcWinpercent(MarkJonesp[0], MarkJonesp[1]);
document.getElementById("MarkJoneskper9").innerHTML = CalcKper9(MarkJonesp[14], MarkJonesp[7]);
document.getElementById("MarkJoneskperbb").innerHTML = CalcKperBB(MarkJonesp[14],MarkJonesp[13]);










var MikeMaolap = [
    0, /* W                 0*/
    1, /* L                 1*/
    2, /* G                 2*/
    1, /* GS                3*/
    0, /* CG                4*/
    0, /* SV                5*/
    0, /* SVO               6*/
    6 + 1/3, /* IP decimal  7*/
    6.1, /* IP clean        8*/
    5, /* H                 9*/
    5, /* R                 10*/
    1, /* ER                11*/
    0, /* HR                12*/
    3, /* BB                13*/
    6, /* SO                14*/
    0, /* SHO               15*/
    0, /* HBP               16*/
    0, /* IBB               17*/
    0, /* WP                18*/
]

document.getElementById("MikeMaolaw").innerHTML = MikeMaolap[0];
document.getElementById("MikeMaolal").innerHTML = MikeMaolap[1];
document.getElementById("MikeMaolag").innerHTML = MikeMaolap[2];
document.getElementById("MikeMaolags").innerHTML = MikeMaolap[3];
document.getElementById("MikeMaolacg").innerHTML = MikeMaolap[4];
document.getElementById("MikeMaolasv").innerHTML = MikeMaolap[5];
document.getElementById("MikeMaolasvo").innerHTML = MikeMaolap[6];
document.getElementById("MikeMaolaip").innerHTML = MikeMaolap[8];
document.getElementById("MikeMaolaph").innerHTML = MikeMaolap[9];
document.getElementById("MikeMaolapr").innerHTML = MikeMaolap[10];
document.getElementById("MikeMaolaer").innerHTML = MikeMaolap[11];
document.getElementById("MikeMaolaphr").innerHTML = MikeMaolap[12];
document.getElementById("MikeMaolapbb").innerHTML = MikeMaolap[13];
document.getElementById("MikeMaolapso").innerHTML = MikeMaolap[14];
document.getElementById("MikeMaolasho").innerHTML = MikeMaolap[15];
document.getElementById("MikeMaolaphbp").innerHTML = MikeMaolap[16];
document.getElementById("MikeMaolapibb").innerHTML = MikeMaolap[17];
document.getElementById("MikeMaolawp").innerHTML = MikeMaolap[18];
document.getElementById("MikeMaolaera").innerHTML = CalcEra(MikeMaolap[11],MikeMaolap[7]);
document.getElementById("MikeMaolawhip").innerHTML = CalcWhip(MikeMaolap[9],MikeMaolap[13],MikeMaolap[7]);
document.getElementById("MikeMaolawinpercent").innerHTML = CalcWinpercent(MikeMaolap[0], MikeMaolap[1]);
document.getElementById("MikeMaolakper9").innerHTML = CalcKper9(MikeMaolap[14], MikeMaolap[7]);
document.getElementById("MikeMaolakperbb").innerHTML = CalcKperBB(MikeMaolap[14],MikeMaolap[13]);










var NickVotap = [
    0, /* W                 0*/
    0, /* L                 1*/
    4, /* G                 2*/
    0, /* GS                3*/
    0, /* CG                4*/
    0, /* SV                5*/
    0, /* SVO               6*/
    5 + 2/3, /* IP decimal  7*/
    5.2, /* IP clean        8*/
    8, /* H                 9*/
    7, /* R                 10*/
    6, /* ER                11*/
    0, /* HR                12*/
    3, /* BB                13*/
    4, /* SO                14*/
    0, /* SHO               15*/
    0, /* HBP               16*/
    0, /* IBB               17*/
    0, /* WP                18*/
]

document.getElementById("NickVotaw").innerHTML = NickVotap[0];
document.getElementById("NickVotal").innerHTML = NickVotap[1];
document.getElementById("NickVotag").innerHTML = NickVotap[2];
document.getElementById("NickVotags").innerHTML = NickVotap[3];
document.getElementById("NickVotacg").innerHTML = NickVotap[4];
document.getElementById("NickVotasv").innerHTML = NickVotap[5];
document.getElementById("NickVotasvo").innerHTML = NickVotap[6];
document.getElementById("NickVotaip").innerHTML = NickVotap[8];
document.getElementById("NickVotaph").innerHTML = NickVotap[9];
document.getElementById("NickVotapr").innerHTML = NickVotap[10];
document.getElementById("NickVotaer").innerHTML = NickVotap[11];
document.getElementById("NickVotaphr").innerHTML = NickVotap[12];
document.getElementById("NickVotapbb").innerHTML = NickVotap[13];
document.getElementById("NickVotapso").innerHTML = NickVotap[14];
document.getElementById("NickVotasho").innerHTML = NickVotap[15];
document.getElementById("NickVotaphbp").innerHTML = NickVotap[16];
document.getElementById("NickVotapibb").innerHTML = NickVotap[17];
document.getElementById("NickVotawp").innerHTML = NickVotap[18];
document.getElementById("NickVotaera").innerHTML = CalcEra(NickVotap[11],NickVotap[7]);
document.getElementById("NickVotawhip").innerHTML = CalcWhip(NickVotap[9],NickVotap[13],NickVotap[7]);
document.getElementById("NickVotawinpercent").innerHTML = CalcWinpercent(NickVotap[0], NickVotap[1]);
document.getElementById("NickVotakper9").innerHTML = CalcKper9(NickVotap[14], NickVotap[7]);
document.getElementById("NickVotakperbb").innerHTML = CalcKperBB(NickVotap[14],NickVotap[13]);










var TomKesslerp = [
    0, /* W                 0*/
    1, /* L                 1*/
    2, /* G                 2*/
    2, /* GS                3*/
    0, /* CG                4*/
    0, /* SV                5*/
    0, /* SVO               6*/
    5 + 2/3, /* IP decimal  7*/
    5.2, /* IP clean        8*/
    15, /* H                 9*/
    17, /* R                 10*/
    6, /* ER                11*/
    0, /* HR                12*/
    6, /* BB                13*/
    3, /* SO                14*/
    0, /* SHO               15*/
    0, /* HBP               16*/
    0, /* IBB               17*/
    0, /* WP                18*/
]

document.getElementById("TomKesslerw").innerHTML = TomKesslerp[0];
document.getElementById("TomKesslerl").innerHTML = TomKesslerp[1];
document.getElementById("TomKesslerg").innerHTML = TomKesslerp[2];
document.getElementById("TomKesslergs").innerHTML = TomKesslerp[3];
document.getElementById("TomKesslercg").innerHTML = TomKesslerp[4];
document.getElementById("TomKesslersv").innerHTML = TomKesslerp[5];
document.getElementById("TomKesslersvo").innerHTML = TomKesslerp[6];
document.getElementById("TomKesslerip").innerHTML = TomKesslerp[8];
document.getElementById("TomKesslerph").innerHTML = TomKesslerp[9];
document.getElementById("TomKesslerpr").innerHTML = TomKesslerp[10];
document.getElementById("TomKesslerer").innerHTML = TomKesslerp[11];
document.getElementById("TomKesslerphr").innerHTML = TomKesslerp[12];
document.getElementById("TomKesslerpbb").innerHTML = TomKesslerp[13];
document.getElementById("TomKesslerpso").innerHTML = TomKesslerp[14];
document.getElementById("TomKesslersho").innerHTML = TomKesslerp[15];
document.getElementById("TomKesslerphbp").innerHTML = TomKesslerp[16];
document.getElementById("TomKesslerpibb").innerHTML = TomKesslerp[17];
document.getElementById("TomKesslerwp").innerHTML = TomKesslerp[18];
document.getElementById("TomKesslerera").innerHTML = CalcEra(TomKesslerp[11],TomKesslerp[7]);
document.getElementById("TomKesslerwhip").innerHTML = CalcWhip(TomKesslerp[9],TomKesslerp[13],TomKesslerp[7]);
document.getElementById("TomKesslerwinpercent").innerHTML = CalcWinpercent(TomKesslerp[0], TomKesslerp[1]);
document.getElementById("TomKesslerkper9").innerHTML = CalcKper9(TomKesslerp[14], TomKesslerp[7]);
document.getElementById("TomKesslerkperbb").innerHTML = CalcKperBB(TomKesslerp[14],TomKesslerp[13]);