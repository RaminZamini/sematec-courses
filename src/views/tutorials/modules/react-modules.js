/**
 * import { identifire1, identifire2 } from 'module' => import from node_modules
 * import { identifire1, identifire2 } from 'path/module' => import from src
 * import defaultIdentifier from 'path/module' => import from src
 *
 * path => relative => from current folder
 *    ./  => current folder
 *    ../ => one level up
 */

/* 
import { COURSE_NAME } from "./my-module"
import { DURATION } from "./my-module"
import { INSTITUE } from "./my-module" 
import showTeacherInfo from "./my-module" 
*/
/* 
import { COURSE_NAME, DURATION, INSTITUE } from "./my-module"
import showTeacherInfo from './my-module'
*/

import showTeacherInfo, { COURSE_NAME, DURATION, INSTITUE } from "./my-module"
/**
 * import newDefaultName, { identifire1 as newName1, identifire2 as newName2 } from 'path/module'
 */
import sti, { COURSE_NAME as C_N, DURATION as C_D } from "./my-module"
/**
 * import * as allIdentifiers from 'path/module'
 */
import * as modules from "./my-module"

export const ReactModules = () => {
  return (
    <>
      <h2>
        Course: {COURSE_NAME}, duration: {DURATION}{" "}
      </h2>
      <p>Institue: {INSTITUE}</p>
      <p>Teacher: {showTeacherInfo()}</p>

      <hr />
      <h2>
        {" "}
        Course: {C_N}, duration: {C_D}{" "}
      </h2>
      <p>Teacher: {sti()}</p>

      <hr />
      <h2>
        Course: {modules.COURSE_NAME}, duration: {modules.DURATION}{" "}
      </h2>
      <p>Institue: {modules.INSTITUE}</p>
      <p>Teacher: {modules.default()}</p>
    </>
  )
}
