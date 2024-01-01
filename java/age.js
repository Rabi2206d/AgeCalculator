let userinput = document.getElementById("userinput");
userinput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");

function changeDate() {
    let birthdate = new Date(userinput.value);

    let d1 = birthdate.getDate();
    let m1 = birthdate.getMonth() + 1;
    let y1 = birthdate.getFullYear();

    let toDate = new Date();
    let d2 = toDate.getDate();
    let m2 = toDate.getMonth() + 1;
    let y2 = toDate.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;

    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 - m1;
    }
    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDateInMonth(y1, m1) + d2 - d1;
    }
    if (m3 < 0) {
        m3 = 11;
        y3--;
    }
    result.innerHTML = `You are <span>${y3}</span> Years, <span>${m3}</span> Month, <span>${d3}</span> Days Old`;

    function getDateInMonth(year, month) {
        return new Date(year, month, 0).getDate();
    }
}
