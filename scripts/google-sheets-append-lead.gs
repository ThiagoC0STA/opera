/**
 * Google Apps Script: append lead rows to the active spreadsheet.
 *
 * If you already have an old header row, replace row 1 with the new columns or use a new sheet tab.
 *
 * Setup:
 * 1. Create a Google Sheet (or open your Excel file in Google Sheets via Drive).
 * 2. Extensions > Apps Script > paste this file > Save.
 * 3. Run `setupHeaderRow` once from the editor (authorize the script), or paste headers manually.
 * 4. Project Settings > Script properties > Add row:
 *    - Property: INGEST_SECRET
 *    - Value: (same random string as GOOGLE_SHEETS_INGEST_SECRET on your server)
 * 5. Deploy > New deployment > Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone (or Anyone with Google account, if you prefer)
 * 6. Copy the Web app URL into GOOGLE_SHEETS_WEB_APP_URL in your hosting env.
 */

function setupHeaderRow() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Nome",
      "Telefone",
      "Email",
      "CPF",
      "Data de Nascimento",
      "Gênero",
      "Data envio (ISO)",
      "Consentimento",
      "Origem",
    ]);
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
      data.phone || "",
      data.email || "",
      data.cpf || "",
      data.birthDate || "",
      data.gender || "",
      data.submittedAt || new Date().toISOString(),
      data.consentCommunications === true ? "sim" : "nao",
      data.source || "",
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
