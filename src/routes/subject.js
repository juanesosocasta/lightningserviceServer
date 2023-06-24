const express = require("express");
const SubjectController = require("../controllers/subject");

const api = express.Router();

api.get("/subjects", SubjectController.getSubjects)
api.post("/new-subject", SubjectController.postSubject)
api.put("/update-subject", SubjectController.updateSubject)
api.delete("/delete-subject", SubjectController.deleteSubject)
api.get("/find-subject/:piaaV", SubjectController.filterByPIAAVersion)


module.exports = api;

// {
//     "department": "fire",
//     "academic_activity": "morphies",
//     "activity_code": 666,
//     "number_credits": 999,
//     "piaa_version": 2,
//     "piaa_status": true,
//     "file_date": "22july22",
//     "theory_hours": 35,
//     "offsite_hours": 25,
//     "hoursnon_attendance_reprovals": 2,
//     "last_chance": true,
//     "duration_semester": 34,
//     "practical_hours": 54,
//     "presential_teacher_hours": 2,
//     "maximum_quotas" : 23,
//     "passing_score": 3,
//     "weeks_duration": 16,
//     "file_number": {
//         "month_file": 4,
//         "year_file": 2
//     }
// }