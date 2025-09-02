javascript:(function () {
  console.log("🚀 Script started by 9800555977");
  const locations = ["PAKUR DUMP - STO", "Gangarampur - STO", "RAIGANJ - STO", "KALIAGANJ-STO", "CHANCHAL-STO", "BG DALKHOLA 1 -STO", "MALDA - STO", "BG MALDA 1 -STO", "KRISHNANAGAR - STO", "BERHAMPORE T9 - STO", "BG BERHAMPORE 1 -STO", "SONAR BANGLA HUB - S",

"MAHESHPUR RAJ", "LITTIPARA", "AMRAPARA", "GUMANI", "HIRANPUR", "KENDUA", "PAKURIA", "KUTALPOKAR", "BARHET", "PAKUR", "TINPAHAR", "RAJMAHAL", "GUNPUR", "GOPIKANDAR", "UDHWA", "BARHARWA", "MAHARAJPUR", "THAKUR GHANTI", "SUNDAR PAHARI", "KATHIKUND", "BORIO",

"KALIACHAK", "SUJAPUR", "SHAHBAZPUR", "GOLAPGANJ (K-CHAK)", "BAISHNABNAGAR", "MALDA", "MOTHABARI", "MANIKCHAK", "MATHURAPUR (MLD)", "ITAHAR", "FULBARI (MLD)", "RAIGANJ", "THANGAPARA", "BARDANGA", "BUNIADPUR (DD)", "KUSHMANDI", "KALIAGANJ", "KUMARGANJ", "KUMEDPUR", "ADINA", "BALURGHAT", "NALAGOLA", "PAKUAHAT", "PATIRAM", "DALKHOLA", "MAHIPAL", "HEMTABAD", "RASIKPUR", "SAMSI", "TUNGIDIGHI", "ENGLISH BAZAR", "GAZOLE", "GANGARAMPUR", "HARISHCHANDRAPUR", "BILASPUR", "CHANCHOL", "LOHAGARA", "LAKSHMIGHAT", "MANGALBARI", "PUKHURIA", "PAKUA HAT","RASAKHOA", "RATUA", "ARAIDANGA", "DOMOHNA", "BAMONGOLA", "KARANDIGHI", "TULSIHATA", "USAHARAN", "ASHOKGRAM", "KARNAJORA", "HARIRAMPUR (MLD)", "NAZIRPUR(MLD)", "21 MILE", "BORTOLI", "SREEPUR", "MALON", "8 MILE", "TEOR", "ASHAPUR","LASKAR HAT","GOPALPOKHOR","DEBIPUR (MLD)","TAPAN",

"BARNIA", "BETAI", "PALSANDA", "TEHATTA", "JURANPUR", "NAZIRPUR(TEH)", "DEBAGRAM", "SIKARPUR", "CHANDERGHAT",

"BISHNUPUR(SNT)", "BHIMPUR", "MURARAI", "RAJGRAM", "MARGRAM", "KALESWAR", "PAIKAR", "MAYURESWAR", "CHATRA", "RAMPURHAT", "SATPALSA", "BASICMORE", "MOLLARPUR", "TARAPITH", "MD. BAZAR", "DUNIGRAM", "BANIOR", "NALHATI","SAINTHIA",

"AZIMGUNJ", "PANCHGRAM", "PANCHTHUPI", "FATELLAPUR", "KHARGRAM", "NABAGRAM", "BHARATPUR", "TALIBPUR", "BAHUTALI", "KULI", "PORADANGA", "LALBAG", "KANDI", "FARAKKA", "ANTARDWIPA", "AURANGABAD", "JIAGANJ", "JEMO KANDI", "LALGOLA", "BACHHRA","SATUI", "BELDANGA", "NOWDA", "PATEKEBARI", "SARBANGAPUR", "KALITALA", "HARIHARPARA", "TRIMOHINI","DOMKOL","BHAGWANGOLA", "RANITALA", "SALAR", "DHULIAN", "DHULAURI (LALGOLA)", "SANNYASIDANGA", "NABIPUR", "SAGARPARA", "JALANGI",];

const exceptionLocations = ["MAHESHPUR RAJ", "LITTIPARA", "AMRAPARA", "GUMANI", "HIRANPUR", "KENDUA", "PAKURIA", "KUTALPOKAR", "BARHET", "PAKUR", "TINPAHAR", "SUNDAR PAHARI", "RAJMAHAL", "GUNPUR", "GOPIKANDAR", "KATHIKUND", "AZIMGUNJ", "PANCHGRAM", "PANCHTHUPI", "FATELLAPUR", "KHARGRAM", "NABAGRAM", "BHARATPUR", "TALIBPUR", "BISHNUPUR(SNT)", "BHIMPUR", "MURARAI", "RAJGRAM", "MARGRAM", "KALESWAR", "PAIKAR", "MAYURESWAR", "CHATRA", "RAMPURHAT", "SATPALSA", "BASICMORE", "BAHUTALI", "KULI", "LALBAG", "KANDI", "FARAKKA", "ANTARDWIPA", "AURANGABAD", "JIAGANJ", "BACHHRA", "BELDANGA", "NOWDA", "PATEKEBARI", "SARBANGAPUR", "KALITALA", "RANITALA", "DHULAURI (LALGOLA)", "MOLLARPUR", "TARAPITH", "MD. BAZAR", "DUNIGRAM", "NALHATI", "BARNIA", "BETAI", "PALSANDA", "TEHATTA", "JURANPUR", "NAZIRPUR(TEH)", "DEBAGRAM", "SIKARPUR", "CHANDERGHAT", "KALIACHAK", "SUJAPUR", "SHAHBAZPUR", "GOLAPGANJ (K-CHAK)", "BAISHNABNAGAR", "MALDA", "MOTHABARI", "MANIKCHAK", "MATHURAPUR (MLD)", "ITAHAR", "BARDANGA", "ADINA", "PAKUAHAT","GAZOLE","RATUA",];

const Spi1162or1163 = {
"KALIACHAK": { "1163-BAG-AL/REGULAR/ALL/MCV1": 1 },
"MOTHABARI": { "1163-BAG-AL/REGULAR/ALL/MCV1": 1 },
"MANIKCHAK": { "1163-BAG-AL/REGULAR/ALL/MCV1": 1 },
"RAJGRAM": { "1162-BAG-AL/REGULAR/ALL/LCV2": 0.95, "1163-BAG-AL/REGULAR/ALL/MCV1": 0.95, },
"MURARAI": { "1162-BAG-AL/REGULAR/ALL/LCV2": 1, "1163-BAG-AL/REGULAR/ALL/MCV1": 1, },
"BARHET": { "1163-BAG-AL/REGULAR/ALL/MCV1": 1 },
"SANNYASIDANGA": { "1162-BAG-AL/REGULAR/ALL/LCV2": 0.70 },
};

const Spi1164or1167 = {
 "MALDA - STO": { "1164-BAG-AL/REGULAR/ALL/MCV2": 3.50, "1167-BAG-AL/REGULAR/ALL/MCV3": 3.50, },
 "BG MALDA 1 -STO": { "1164-BAG-AL/REGULAR/ALL/MCV2": 3.50, "1167-BAG-AL/REGULAR/ALL/MCV3": 3.50, },
 "RAIGANJ - STO": { "1164-BAG-AL/REGULAR/ALL/MCV2": 1.30, "1167-BAG-AL/REGULAR/ALL/MCV3": 0.01 },
 "Gangarampur - STO": { "1164-BAG-AL/REGULAR/ALL/MCV2": 1.30, "1167-BAG-AL/REGULAR/ALL/MCV3": 0.01 },
 "KALIAGANJ-STO": { "1164-BAG-AL/REGULAR/ALL/MCV2": 0.60, "1167-BAG-AL/REGULAR/ALL/MCV3": 1, },
 "CHANCHAL-STO": { "1164-BAG-AL/REGULAR/ALL/MCV2": 1, "1167-BAG-AL/REGULAR/ALL/MCV3": 0.95, },
 "SAINTHIA-T6-STO": { "1164-BAG-AL/REGULAR/ALL/MCV2": 1, "1167-BAG-AL/REGULAR/ALL/MCV3": 0.55, },
 "KRISHNANAGAR - STO": { "1164-BAG-AL/REGULAR/ALL/MCV2": 1, "1167-BAG-AL/REGULAR/ALL/MCV3": 0.55, },
 "RAMPUR-STO": { "1164-BAG-AL/REGULAR/ALL/MCV2": 1, "1167-BAG-AL/REGULAR/ALL/MCV3": 0.70 },
 "BG DALKHOLA 1 -STO": { "1164-BAG-AL/REGULAR/ALL/MCV2": 1, "1167-BAG-AL/REGULAR/ALL/MCV3": 0.55 },
 "PAKUR DUMP - STO": 3,
 "BERHAMPORE T9 - STO": 1,
 "BG BERHAMPORE 1 -STO": 0.70,

"RAJGRAM": 1, "FARAKKA": 1.60,

"AMRAPARA": 1, "BARHARWA": 1, "GUMANI": 1, "KENDUA": 1, "MAHESHPUR RAJ": 1, "PAKUR": 1, "UDHWA": 1, "TINPAHAR": 1, "LITTIPARA": 1, "PAKURIA": 1, "KUTALPOKAR": 1, "RAJMAHAL": 1, "BARHET": 1, "GUNPUR": 1, "HIRANPUR": 1,

"TEHATTA": 1, "ADINA": 1, "BALURGHAT": 1, "BILASPUR": 1, "GOLAPGANJ (K-CHAK)": 1, "HARISHCHANDRAPUR": 1, "ITAHAR": 1.10, "KALIAGANJ": 1, "KUMEDPUR": 1, "MALDA": 1, "MOTHABARI": 1, "MANIKCHAK": 1, "PATIRAM": 1, "RASAKHOA": 1, "RAIGANJ": 1, "RATUA": 1, "TUNGIDIGHI": 1, "PAKUA HAT": 1, "MATHURAPUR (MLD)": 1, "NAZIRPUR(MLD)": 1, "MALON": 1, "UTTAR KUMEDPUR": 1, "CHANCHOL": 1, "KARANDIGHI": 1, "KARANDIGHI": 1, "LAKSHMIGHAT": 1, "DALKHOLA": 1, "BAMONGOLA": 1, "HEMTABAD": 1, "TULSIHATA": 1, "THANGAPARA": 1, "USAHARAN": 0.70, "ASHOKGRAM": 0.70, "TRIMOHINI (HILLI)": 1, };

const prioritizeLocations = ["MAHESHPUR RAJ", "LITTIPARA", "AMRAPARA", "GUMANI", "HIRANPUR", "KENDUA", "PAKURIA", "KUTALPOKAR", "BARHET", "PAKUR", "SUNDAR PAHARI", "GUNPUR", "GOPIKANDAR", "AZIMGUNJ", "PANCHGRAM", "PANCHTHUPI", "KHARGRAM", "NABAGRAM", "BHARATPUR", "TALIBPUR", "BISHNUPUR(SNT)", "BHIMPUR", "MURARAI", "RAJGRAM", "MARGRAM", "KALESWAR", "PAIKAR", "MAYURESWAR", "LALBAG",];

const basepercentage = 0.55;
const specialpercentage = 0.95;
const Special1162or1163 = ["1162-BAG-AL/REGULAR/ALL/LCV2", "1163-BAG-AL/REGULAR/ALL/MCV1"];
const Special1164or1167 = ["1164-BAG-AL/REGULAR/ALL/MCV2", "1167-BAG-AL/REGULAR/ALL/MCV3"];


const delay = (ms) => new Promise(r => setTimeout(r, ms));
let lastFoundIndex = -1;

const calculateDecreaseValue = (location, findValue, rate, percentage) => {
    switch (location) {
      case "SONAR BANGLA HUB - S":
        return (findValue === 25.000 || findValue === 19.000 || findValue === 13.000) ? 2 : rate * (percentage / 100);
      default:
        return rate * (percentage / 100);
    }
};
const getCustompercentage = (location, spi) => {
    if (Special1162or1163.includes(spi)) {
      if (Spi1162or1163[location]) {
        const v = Spi1162or1163[location];
        return typeof v === 'object' ? (v[spi] ?? basepercentage) : v;
      }
      return basepercentage;
    }
    if (Special1164or1167.includes(spi) && Spi1164or1167[location]) {
      const v = Spi1164or1167[location];
      return typeof v === 'object' ? (v[spi] ?? specialpercentage) : v;
    }
    return null;
  };
const triggerButtonClick = (btnId) => {
  let tries = 0;
  const intervalId = setInterval(() => {
    const btn = sap.ui.getCore().byId(btnId);
    if (btn) {
      btn.$().focus();
      btn.firePress();
      clearInterval(intervalId);
    }
    if (tries++ > 100) clearInterval(intervalId);
  }, 10);
};
const clickYesButton = () => {
  document.querySelectorAll('[id^="__mbox-btn-"]').forEach(btn => {
    const bdi = btn.querySelector('[id$="-BDI-content"]');
    if (bdi && bdi.innerText.trim().toUpperCase() === "YES") {
      triggerButtonClick(btn.id);
    }
  });
};
const clickOkButton = () => {
    document.querySelectorAll('[id^="__mbox-btn-"]').forEach(btn => {
      const bdi = btn.querySelector('[id$="-BDI-content"]');
      if (bdi && bdi.innerText.trim().toUpperCase() === "OK") {
        triggerButtonClick(btn.id);
      }
    });
  };
  const captchaMap = new Map([
    [470997522, "dsjcbka"], [-2021761189, "eG7aK"], [-574377900, "DT6JX"], [-1234756461, "CUU5"],
    [1943541608, "gcngc"], [-222761405, "a861"], [-661005137, "9w5ya6"], [-1456785283, "YPFF"],
    [1830576523, "dcen4"], [-1877094343, "fegpc"], [967285705, "V4XBG"], [-181308805, "m66p4"],
    [-1321189735, "MCSXH"], [1598929192, "TK58P"], [-252721701, "aNG4bg"], [-1797770364, "rule"],
    [1282760615, "6T9JBCDS"], [8690631, "8k2yk"], [-1220644722, "26156"], [-480173694, "jw62k"],
    [276200973, "B4T9S"], [-983802401, "EMJkb"], [2019528598, "XKWDN"], [1370008859, "6ne3"],
    [-603561619, "VFh@4@"], [318069735, "usual"], [1544259138, "need"], [257089095, "2mw6m"],
    [1631315852, "hEDra"], [1643611478, "K9gt"], [1495199047, "dister"], [-334509272, "3ygb3"],
    [1759883603, "gXFLd"], [-1404029604, "ydn63"], [1983377940, "fish"], [1574875801, "DXHm"],
    [273948773, "TWGPnZ"], [2135888739, "7YB2U"], [-1551519414, "mdpwb"], [-905942756, "pn423"],
    [-2099893556, "DWXM5"], [-1470889584, "KNghk"], [470718604, "cmrr5"], [-257235418, "3kr47"],
    [-680568032, "y4gp6"], [-59212806, "hNM6g"], [-282678597, "RFV9"], [507847946, "FMr7"],
    [988788987, "g55gd"], [-860087060, "HE3X6"], [1914033279, "XgDD"], [-1444501745, "fdamc"],
    [-2074762886, "Wjk5L"], [-1981356324, "TLu=V"], [-1258041719, "3fby7"], [1518227052, "yyh22"],
    [-1830553664, "865301"], [1625870010, "nwp3n"], [822259867, "83tsU"], [1799782407, "arch"],
    [1354248945, "72cme"], [1160649388, "SKARD"], [-2055545374, "2nnc7"], [-1574049424, "u@JbgE"],
    [216112729, "gxenp"], [-1789339687, "2nw6c"], [-965109990, "fwme4"], [-118209171, "w4yc6"],
    [-1423605848, "mmbhb"], [654078450, "7rckd"], [2115432796, "w7pxm"], [-1470771669, "nydgx"],
    [703070028, "WVHVR"], [-1937560593, "3gk72"], [-1519196129, "8nydx"], [1521661679, "FoxLearn"],
    [639315206, "7PhLQ"], [1135824894, "kmcb2"], [-673897959, "XDHYN"], [-1116910889, "77cch"],
    [476523939, "pykeh"], [-1169273088, "xhkn4"], [1700303638, "c46kr"], [-1911699576, "RthDY"],
    [766357115, "2mnch"], [34309334, "fa636d"], [829090207, "mgkec"], [1759957588, "KiLL"],
    [1237548849, "852g8"], [157478309, "d6b64"], [-1992748865, "stack"], [-2097195860, "b6Y97j"],
    [950021601, "fyxmp"], [1913089898, "ckm27"], [1792865947, "ry2n4"], [1575695709, "y5n87"],
    [2115986562, "f4y53"], [-1973492819, "e3TJ6Jdp"], [2073372771, "wxrec"], [584286308, "dk3g"],
    [-221431682, "herrd"], [2100057275, "7wh8r"], [-1583107945, "nnx77"], [1319940634, "Xud9K"],
    [-839538984, "g8peb"], [-1474168876, "=bg="], [-844710198, "nn83h"], [2031413137, "has"],
    [-1196690093, "G4Q=m"], [403502134, "fTE9"], [-382249298, "xr857"], [-742307858, "crmce"],
    [1137199002, "6b25f"], [-107026443, "8n8cg"], [1952935520, "ibE2"], [-2074907540, "6AR8R"],
    [-613333180, "hh7ZqY"], [-1456117688, "hkx3y"], [-345186870, "e5hb"], [384951891, "ChanceNaLo"],
    [-1053069555, "QTTDb"], [406440787, "xy783"], [-1768924575, "f8233"], [-545788012, "YPIF"],
    [-1849547951, "frmgZW"], [1471668589, "gWek"], [-2135828836, "EYLq"], [847214017, "H6Wg"],
    [821133715, "just"], [-775514889, "neynt"], [970556231, "p28h6"], [1875577037, "c4x7w"],
    [1657761165, "fd67y"], [1628812989, "MZ9N"], [-1379279285, "5ykwc"], [1178999126, "kHKNg"],
    [-1684862668, "n44yd"], [-849517617, "fg8xm"], [1272136410, "59CTR"], [1264121328, "ZrLU"],
    [1147408991, "TEXR4Q"], [599999285, "ic8"], [1428750356, "GhKdW"], [-1775875399, "4NV3A"],
    [337887687, "n3fp3"], [-708640442, "d573r"], [-987788114, "cghp4"], [842993529, "253nb"],
    [433695294, "3763y"], [-504090875, "overlooks"], [710701515, "ex5mp"], [1496217183, "4D7YS"],
    [2018395701, "AWSKH"], [307440895, "khmcb"], [769738664, "87pbg"], [-1031872917, "699EN"],
    [-2112489415, "rcke4"], [-1085339078, "rg4hh"], [323669064, "3p8b5"], [-874728958, "9M4BP"],
    [1311842835, "XkCWpBTS"], [-694020007, "14"],
  ]);
const srcHashCache = new Map();
let lastProcessedHash = null;

const hashString = (str) => {
let hash = 0;
for (let i = 0; i < str.length; i++) {
  hash = ((hash << 5) - hash) + str.charCodeAt(i);
  hash |= 0;
}
return hash;
};

const processCaptcha = (img) => {
const src = img.getAttribute("src");
if (!src || !src.includes(",")) return;

let hash = srcHashCache.get(src);
if (!hash) {
    hash = hashString(src.split(",")[1]);
    srcHashCache.set(src, hash);
  }
  const val = captchaMap.get(hash);
  if (!val) return;

const input = Array.from(document.querySelectorAll("input[id^='__input'][id$='-inner']"))
.find(el => el.placeholder?.toLowerCase().includes("captcha"));
if (!input) return;

if (hash === lastProcessedHash && input.value.trim() === val) return;

input.value = val;
input.dispatchEvent(new Event("input", { bubbles: true }));
input.focus();
lastProcessedHash = hash;
console.log("✅ Captcha filled:", val);
clickYesButton();
};
const captchaObserver = new MutationObserver(() => {document.querySelectorAll('[id^="CaptchaImage"]').forEach(processCaptcha);});
const captchaContainer = document.querySelector("div[id^='__data'] img#CaptchaImage")?.parentElement || document.body;
captchaObserver.observe(captchaContainer, { childList: true, subtree: true, attributes: true });

const fillInputsQuickly = (inputs) => {
  const filledIndexes = [];
  inputs.forEach(({ index, value }) => {
    const inputElement = document.querySelector(`#__xmlview0--idBidAmount-__xmlview0--idUtclVCVendorAssignmentTable-${index}-inner`);
    if (inputElement) {
      inputElement.value = value;
      inputElement.focus();
      filledIndexes.push(index);
    }
  });
  if (filledIndexes.length > 0) runScript(filledIndexes);
};
const fillCustomBatch = async (inputs) => {
const batchSize = 3;
const maxRemaining = 5;
const validInputs = inputs.filter(item => !item.skip);

const firstBatch = validInputs.slice(0, batchSize);
  if (firstBatch.length > 0) {
    fillInputsQuickly(firstBatch);
    console.log(`✅ First batch filled (${firstBatch.length}):`, firstBatch.map(i => i.index));
  }
const remaining = validInputs.slice(batchSize, batchSize + maxRemaining);
if (remaining.length > 0) {
    await delay(5000);
    fillInputsQuickly(remaining);
    console.log(`✅ Remaining batch filled (max ${maxRemaining}):`, remaining.map(i => i.index));
  }
};
const runScript = () => {
  const buttons = document.querySelectorAll('[id^="__xmlview0--idUtclsaveTxt"]');
  buttons.forEach((btn, index) => {
    const bdi = btn.querySelector('[id$="-BDI-content"]');
    const input = document.querySelector(`#__xmlview0--idBidAmount-__xmlview0--idUtclVCVendorAssignmentTable-${index}-inner`);
    if (bdi && bdi.innerText.trim().toUpperCase().startsWith('SAVE-') && input && input.value.trim() !== "") {
      triggerSave(btn);
    }
  });
};
const triggerSave = (buttonElement) => {
  let i = 0;
  const intervalId = setInterval(() => {
    const sapBtn = sap.ui.getCore().byId(buttonElement.id);
    if (sapBtn) {
      const jQBtn = sapBtn.$();
      if (jQBtn.length > 0) {
        jQBtn.focus();
        sapBtn.firePress();
        clearInterval(intervalId);
      }
    }
    if (i++ > 100) clearInterval(intervalId);
  },0);
};
setInterval(async () => {
const inputsToFill = [];
const tableText = document.querySelectorAll('[id^="__text40-__xmlview0--idUtclVCVendorAssignmentTable-"]');
const tableRate = document.querySelectorAll('[id^="__text48-__xmlview0--idUtclVCVendorAssignmentTable-"]');
const findValueEl = document.querySelectorAll('[id^="__text46-__xmlview0--idUtclVCVendorAssignmentTable-"]');
const customerEl = document.querySelectorAll('[id^="__text55-__xmlview0--idUtclVCVendorAssignmentTable-"]');
const spiEl = document.querySelectorAll('[id^="__text47-__xmlview0--idUtclVCVendorAssignmentTable-"]');
const depotEl = document.querySelectorAll('[id^="__text42-__xmlview0--idUtclVCVendorAssignmentTable-"]');

for (let i = 0; i < tableText.length; i++) {
  if (i <= lastFoundIndex) continue;

const location = tableText[i].textContent.trim();
const rate = parseFloat(tableRate[i].textContent);
const findValue = parseFloat(findValueEl[i].textContent);
const customer = customerEl[i].textContent.trim();
const spi = spiEl[i]?.textContent.trim();
const depot = depotEl[i]?.textContent.trim();
if (!locations.includes(location)) continue;
const identifierElement = document.querySelector(`#__identifier0-__xmlview0--idUtclVCVendorAssignmentTable-${i}-title span[data-sap-ui]`);
const hasDigit = identifierElement && /\d+/.test(identifierElement.textContent.trim());
const skipRow = hasDigit && locations.includes(location);
if (skipRow) {
console.log(`⏩ Row skipped due to identifier+location: ${location}`);
continue;}
const L1AmountCheckElement = document.querySelector(`#__text53-__xmlview0--idUtclVCVendorAssignmentTable-${i}`);
const numberValue = L1AmountCheckElement ? L1AmountCheckElement.textContent.trim() : "";
const hasNonZeroNumber = /^\d+$/.test(numberValue) && numberValue !== "0";
if (hasNonZeroNumber) {
console.log(`⏩ Row skipped due to non-zero L1 Bid Amount  (${numberValue}): ${location}`);
continue;}
if (["SADHU TRADERS.","SUDHA BUILDERS","UMA BUILDERS","HENA HARDWARE.","BASAK BUILDERS","MD SAHIDUL ISLAM","MITSUBISHI POWER INDIA PVT LTD","GANNON DUNKERLEY n CO LIMITED","ROHAN BUILDERS INDIA PVT LTD","KUMBHAT ENTERPRISE","JANAPRIYA HARDWARE","SUBHAS KUMAR DAS","RAFIQUL MALLICK","MS S D ENTERPRISE AND CHITRA HARDWA"].includes(customer)) continue;
if ([24.000,23.000,22.000,21.000,18.000,11.500].includes(findValue)) continue;
if (["1152-BAG-AL/REGULAR/DEALER/LCV2","1153-BAG-AL/REGULAR/DEALER/MCV1","1154-BAG-AL/REGULAR/DEALER/MCV2","1157-BAG-AL/REGULAR/DEALER/MCV3","1162-BAG-AL/REGULAR/ALL/LCV-2","1163-BAG-AL/REGULAR/ALL/MCV-1","1164-BAG-AL/REGULAR/ALL/MCV-2","1167-BAG-AL/REGULAR/ALL/MCV3","1166-BAG-AL/REGULAR/ALL/HCV2"].includes(spi)) continue;
if (["DEOGARH","SAHIBGANJ","MALDA"].includes(depot) && ["1162-BAG-AL/REGULAR/ALL/LCV2"].includes(spi)) continue;
if (["DEOGARH","SAHIBGANJ","BERHAMPORE","SAINTHIA","KRISHNANAGAR","MALDA"].includes(depot) && ["1164-BAG-AL/REGULAR/ALL/MCV-2"].includes(spi)) continue;
if (["DEOGARH","SAHIBGANJ","BERHAMPORE","SAINTHIA","KRISHNANAGAR","MALDA"].includes(depot) && ["1163-BAG-AL/REGULAR/ALL/MCV1"].includes(spi)) {
if (!exceptionLocations.includes(location)) continue;}
if (["DEOGAR-H","SAHIBGAN-J","BERHAMPORE","SAINTHIA","KRISHNANAGAR","MALD-A"].includes(depot) && ["1167-BAG-AL/REGULAR/ALL/MCV3"].includes(spi)) {
if (!["PAKUR DUMP - STO","Gangarampur - STO","RAIGANJ - STO","KRISHNANAGAR - STO","KALIAGANJ-STO"].includes(location)) continue;}
let percentage = getCustompercentage(location, spi) ??
((Special1162or1163.includes(spi) || Special1164or1167.includes(spi)) ? specialpercentage : basepercentage);
const decrease = calculateDecreaseValue(location, findValue, rate, percentage);
const value = Math.ceil(rate - decrease);
    if (prioritizeLocations.includes(location) && (findValue === 19.000 || findValue === 20.000)) {
      inputsToFill.unshift({ index: i, value });
    } else if (prioritizeLocations.includes(location)) {
      inputsToFill.splice(1, 0, { index: i, value });
    } else {
      inputsToFill.push({ index: i, value });
    }
      lastFoundIndex = i;
    }
    if (inputsToFill.length) {
      await fillCustomBatch(inputsToFill);
    }
  },0);
setInterval(clickOkButton, 1234);
})();
