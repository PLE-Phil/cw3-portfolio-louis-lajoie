var gmonChien;

function commencerMaTache(){
    gmonChien.addEventListener("click", tournerChien);
}

function terminerMaTache(){
    gmonChien.removeEventListener("click", tournerChien);
}

commencerMaTache();

terminerMaTache();
