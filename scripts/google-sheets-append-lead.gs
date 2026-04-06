/**
 * Google Apps Script: one row per lead.
 *
 * Sheet columns A–C only: Nome | Email | Telefone
 * (The site form also requires 18+ and marketing consent; those are not stored here.)
 *
 * Deploy a new Web App version after any change. Run writeHeadersRow1() to refresh row 1.
 */

function writeHeadersRow1() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const headers = ["Nome", "Email", "Telefone"];
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
}

function setupHeaderRow() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  if (sheet.getLastRow() === 0) {
    writeHeadersRow1();
  }
}

function doPost(e) {
  try {
    const props = PropertiesService.getScriptProperties();
    const expected = props.getProperty("INGEST_SECRET");
    const data = JSON.parse(e.postData.contents);

    if (expected && data.ingestSecret !== expected) {
      return jsonOut({ ok: false, error: "unauthorized" });
    }

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.appendRow([
      data.fullName || "",
      data.email || "",
      data.phone || "",
    ]);

    return jsonOut({ ok: true });
  } catch (err) {
    return jsonOut({ ok: false, error: String(err) });
  }
}

function jsonOut(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
