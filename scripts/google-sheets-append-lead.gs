/**
 * Google Apps Script: one row per lead, exactly 6 columns (same order as the site payload).
 *
 * Columns A–F only:
 *   Nome | Telefone | Email | CPF | Data de Nascimento | Gênero
 *
 * If "Nome" shows an ISO date, your Web App is still an OLD deployment (old script wrote
 * submittedAt first). Fix: paste this whole file, Save, Deploy > Manage deployments >
 * Edit > New version > Deploy. Then run writeHeadersRow1() once.
 *
 * Setup:
 * 1. Extensions > Apps Script > paste this file > Save.
 * 2. Run writeHeadersRow1() once (overwrites row 1 with A–F headers only).
 * 3. Script properties: INGEST_SECRET = same as GOOGLE_SHEETS_INGEST_SECRET on the server.
 * 4. Deploy > Web app > new version each time you change code.
 */

/** Writes exactly six headers to row 1 (columns A–F). */
function writeHeadersRow1() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const headers = [
    "Nome",
    "Telefone",
    "Email",
    "CPF",
    "Data de Nascimento",
    "Gênero",
  ];
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
    // Must match A–F headers and the JSON fields sent by /api/leads (see route.ts).
    sheet.appendRow([
      data.fullName || "",
      data.phone || "",
      data.email || "",
      data.cpf || "",
      data.birthDate || "",
      data.gender || "",
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
