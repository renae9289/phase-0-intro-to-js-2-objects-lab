var employee = {}
function updateEmployeeWithKeyAndValue(employee, key, value) {
employee[key] = value;
return employee;
}
var employee ={}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
function destructivelyDeleteFromEmployeeByKey (employee, key) {
    delete employee[key];
    return employee;
}
function deleteFromEmployeeByKey (employee, key) {
    var newObj = Object.assign({}, employee);
    delete newObj [key];
    return newObj;
}
function updateObjectWithKeyAndValue(object, key, value) {
    var newObj = Object.assign({}, object, {[key]: value});
    return newObj;
  }