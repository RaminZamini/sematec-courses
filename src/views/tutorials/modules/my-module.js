const COURSE_NAME = "React JS"
const DURATION = 40
const INSTITUE = "Sematec"

const teacher = {
  firstName: "Hamid Reza",
  lastName: "Izadi Matin",
}

const showTeacherInfo = () => `${teacher.firstName} ${teacher.lastName}`

let sessionNumber = 4

/*
 * روش اول
 * export { identifire1 }
 * export { identifire2 }
 * export default identifire3
 */

// export { COURSE_NAME }
// export { DURATION }
// export { INSTITUE }
// export default showTeacherInfo

/**
 * روش دوم
 * export { identifire1, identifire2 }
 * export default identifire3
 */
export { COURSE_NAME, DURATION, INSTITUE }
export default showTeacherInfo

/**
 * روش سوم
 * export { identifire1 as newName1, identifire2 as NewName2}
 * export default identifire3
 */

export { COURSE_NAME as courseName, DURATION as duration, sessionNumber }

/**
 * export const CONSTANT = value
 * export let variable = value
 * export const functionName = () => {}
 *
 * export function functionName() {}
 * export default function functionName() {}
 * export class ClassName { ...}
 * export default class ClassName { ...}
 */
export const getCourseObjext = () => {
  return {
    courseName: COURSE_NAME,
    duration: DURATION,
    institue: INSTITUE,
    teacher,
    sessionNumber,
  }
}
