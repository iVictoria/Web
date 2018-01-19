// All you JavaScript code for assignment 4 should be in this file
// Functions adapted from lecture slides

window.onload = function () {
    document.getElementById("menu_1").onclick = function () { generateTable(); return false; };
    document.getElementById("menu_21").onclick = function () { generateTable("pop100"); return false; };
    document.getElementById("menu_22").onclick = function () { generateTable("pop12mil"); return false; };
    document.getElementById("menu_31").onclick = function () { generateTable("1milAmer"); return false; };
    document.getElementById("menu_32").onclick = function () { generateTable("asia"); return false; };
    document.getElementById("menu_41").onclick = function () { generateTable(); return false; };
    document.getElementById("menu_42").onclick = function () { generateTableLanguage("arabic"); return false; };
    document.getElementById("menu_43").onclick = function () { generateTableLanguage("chinese"); return false; };
    document.getElementById("menu_44").onclick = function () { generateTableLanguage("french"); return false; };
    document.getElementById("menu_45").onclick = function () { generateTableLanguage("hindi"); return false; };
    document.getElementById("menu_46").onclick = function () { generateTableLanguage("korean"); return false; };
    document.getElementById("menu_47").onclick = function () { generateTableLanguage("japanese"); return false; };
    document.getElementById("menu_48").onclick = function () { generateTableLanguage("russian"); return false; };
}

function generateTable(value) {

    // get the reference for the body
    var tbl = document.querySelector("#outputTable");

    // revove existing Body element
    var tblExistingBody = tbl.querySelector("tbody");
    if (tblExistingBody) tbl.removeChild(tblExistingBody);

    // creates a <tbody> element
    var tblBody = document.createElement("tbody");

    // creating all table rows
    for (var i = 0; i < countries.length; i++) {
        // creates a table row
        var row = document.createElement("tr");

        // Create a <td> element and put them at the end of the table row
        row.appendChild(getImgFile(countries[i]['Code']));
        row.appendChild(getTdElement(countries[i]['Code']));
        row.appendChild(getTdElement(countries[i]['Name']['English']));
        row.appendChild(getTdElement(countries[i]['Continent']));
        row.appendChild(getTdElement(countries[i]['AreaInKm2']));
        row.appendChild(getTdElement(countries[i]['Population']));
        row.appendChild(getTdElement(countries[i]['Capital']));

        switch (value) {
            case "pop100":
                document.getElementById("subtitle").innerHTML = "List of Countries and Dependencies - Population greater than 100 million";
                if (countries[i]['Population'] > 100000000)
                    tblBody.appendChild(row);
                break;
            case "pop12mil":
                document.getElementById("subtitle").innerHTML = "List of Countries and Dependencies - Population between 1-2 million";
                if (countries[i]['Population'] > 1000000 && countries[i]['Population'] < 2000000)
                    tblBody.appendChild(row);
                break;
            case "1milAmer":
                document.getElementById("subtitle").innerHTML = "List of Countries and Dependencies - Area greater than 1 million Km2, Americas";
                if (countries[i]['AreaInKm2'] > 1000000 && countries[i]['Continent'] == "Americas")
                    tblBody.appendChild(row);
                break;
            case "asia":
                document.getElementById("subtitle").innerHTML = "List of Countries and Dependencies - All countries in Asia";
                if (countries[i]['Continent'] == "Asia")
                    tblBody.appendChild(row);
                break;
            default:
                document.getElementById("subtitle").innerHTML = "List of Countries and Dependencies";
                tblBody.appendChild(row);
        }
    }
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
}

function generateTableLanguage(value) {

    // get the reference for the body
    var tbl = document.querySelector("#outputTable");

    // revove existing Body element
    var tblExistingBody = tbl.querySelector("tbody");
    if (tblExistingBody) tbl.removeChild(tblExistingBody);

    // creates a <tbody> element
    var tblBody = document.createElement("tbody");

    // creating all table rows
    for (var i = 0; i < countries.length; i++) {
        // creates a table row
        var row = document.createElement("tr");

        // Create a <td> element and put them at the end of the table row
        row.appendChild(getImgFile(countries[i]['Code']));
        row.appendChild(getTdElement(countries[i]['Code']));

        switch (value) {
            case "french":
                document.getElementById("subtitle").innerHTML = "List of Countries and Dependencies - Country / Dep. Name in French";
                row.appendChild(getTdElement(countries[i]['Name']['Franch']));
                break;
            case "arabic":
                document.getElementById("subtitle").innerHTML = "List of Countries and Dependencies - Country / Dep. Name in Arabic";
                row.appendChild(getTdElement(countries[i]['Name']['Arabic']));
                break;
            case "chinese":
                document.getElementById("subtitle").innerHTML = "List of Countries and Dependencies – Country / Dep. Name in Chinese (中文)";
                row.appendChild(getTdElement(countries[i]['Name']['Chinese']));
                break;
            case "hindi":
                document.getElementById("subtitle").innerHTML = "List of Countries and Dependencies - Country / Dep. Name in Hindi";
                row.appendChild(getTdElement(countries[i]['Name']['Hindi']));
                break;
            case "korean":
                document.getElementById("subtitle").innerHTML = "List of Countries and Dependencies - Country / Dep. Name in Korean";
                row.appendChild(getTdElement(countries[i]['Name']['Korean']));
                break;
            case "japanese":
                document.getElementById("subtitle").innerHTML = "List of Countries and Dependencies - Country / Dep. Name in Japanese";
                row.appendChild(getTdElement(countries[i]['Name']['Japanese']));
                break;
            case "russian":
                document.getElementById("subtitle").innerHTML = "List of Countries and Dependencies - Country / Dep. Name in Russian";
                row.appendChild(getTdElement(countries[i]['Name']['Russian']));
                break;
        }
        row.appendChild(getTdElement(countries[i]['Continent']));
        row.appendChild(getTdElement(countries[i]['AreaInKm2']));
        row.appendChild(getTdElement(countries[i]['Population']));
        row.appendChild(getTdElement(countries[i]['Capital']));
        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
}


// Create a <td> element and a text
function getTdElement(text) {
    var cell = document.createElement("td");
    var cellText = document.createTextNode(text);
    cell.appendChild(cellText);
    return cell;
}

// creates an <img> element and puts it in a <td> element
function getImgFile(filename) {
    var imgSrc = document.createElement("img");
    var imgText = "flags/" + filename + ".png";
    imgSrc.src = imgText;
    imgSrc.alt = filename;
    imgSrc.width = 30;

    var cell = document.createElement("td");
    cell.appendChild(imgSrc);
    return cell;
}
