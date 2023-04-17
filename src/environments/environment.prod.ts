export const environment = {
  production: true,
  baseUrl:"http://localhost:8080",
  signupUrl : "/api/v1/laboratories/save",
  loginUrl : "/api/v1/laboratories/login",
  updateReport :"/api/v1/laboratories/updateReport",
  saveReport :"/api/v1/laboratories/saveReport",
  deleteReport :"/api/v1/laboratories/deleteReport?report_id=",
  getReport:"/api/v1/laboratories/getReport?reportId=",
  getReports :"/api/v1/laboratories/getAllReports",
  getPatientReports :"/api/v1/laboratories/getAllPatientReports",
  getCurrentUser :"/api/v1/laboratories/currentUser",

  // ADMIN ENDPOİNT Strings
  activateLaborant :"/api/v1/admin/laborantAccountActivate?activated=true&laborant_id=",
  deleteLaborant :"/api/v1/admin/deleteLaborant?laborant_id=",
  roleUpgrage :"/api/v1/admin/changeRole?laborant_id=",
  getReportsWithLaborant :"/api/v1/admin/getAllReportsLaboratories",
  getLaborants :"/api/v1/admin/getAllLaboratories",
  getLaborantDetails:"/api/v1/admin/laborantDetail?laborant_id="
};
