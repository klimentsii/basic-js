import { NotImplementedError } from '../extensions/index.js';

export default function createDreamTeam(members) {
  if(Array.isArray(members) == false)
    return false;
  
  members = members.filter(member => typeof(member) == "string");
  for(let i = 0; i < members.length; i++)
    members[i] = members[i].trim().substr((0), [1]).toUpperCase();
  return members.sort().join("");
}
