let m = "";
let fst = "";
let snd = "";
setMethod = function() {
  m = document.getElementById("m").value;
  ans();
};

check2nd = function() {
  fst = document.getElementById("1st").value;
  if (m && snd) {
    ans();
  }
};

check1st = function() {
  snd = document.getElementById("2nd").value;
  if (m && fst) {
    ans();
  }
};

ans = function() {
  if (fst && snd) {
    let anss = 0;
    if (m === "+") {
      anss = Number(fst) + Number(snd);
    } else if (m === "-") {
      anss = Number(fst) - Number(snd);
    } else if (m === "*") {
      anss = Number(fst) * Number(snd);
    } else if (m === "/") {
      anss = Number(fst) / Number(snd);
    }

    document.getElementById("ans").value = "=" + anss;
  }
};
