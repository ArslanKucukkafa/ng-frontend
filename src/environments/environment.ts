// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl:"http://localhost:8080",
  signupUrl : "/api/vl/laboratories/save",
  loginUrl : "/api/vI/laboratories/login",
  updateReport :"/api/v1/laboratories/updateReport",
  saveReport :"/api/v1/laboratories/saveReport",
  deleteReport :"/api/v1/laboratories/deleteReport",
  getReports :"/api/v1/laboratories/getAllReports",
  getPatientReports :"/api/vl/laboratories/getAllPatientReports",
  getCurrentUser :"/api/v1/laboratories/currentUser",

  // ADMIN ENDPOİNT Strings
  activateLaborant :"/api/v1/admin/laborantAccountActivate",
  deleteLaborant :"/api/v1/admin/deleteLaborant",
  roleUpgrage :"/api/v1/admin/changeRole",
  getReportsWithLaborant :"/api/v1/admin/getAllReportsLaboratories",
  getLaborants :"/api/v1/admin/getAllLaboratories}"

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
