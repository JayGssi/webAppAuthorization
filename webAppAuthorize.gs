//アプリケーション利用者がデータベース(SpreadSheet)に存在した場合において、
//アプリケーションが利用可能となるプログラム。e-mailを承認のために利用している。
function doGet() { 
  const user = Session.getActiveUser() 
  let html   = HtmlService.createTemplateFromFile('index')
  html.email = user.getEmail()

  const SHEET = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1')
  const numColumn = SHEET.getLastColumn() 
  const numRow    = SHEET.getLastRow() -1 
  const dataRange = SHEET.getRange(2, 1, numRow, numColumn)
  
  html.data = dataRange.getValues()
  html.flag = 0

  return html.evaluate()
}
