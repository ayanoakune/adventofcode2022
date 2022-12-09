import { input } from "./day7-input";

// @ts-ignore
let answer = null;
let disk = {};
let maxSpace = 70000000;
let usedSpace = 0;
let requiredSpace = 30000000;

// @ts-ignore
function getCommand(l, disk) {
  if ("$" !== l[0]) {
    return false;
  }

  let dir = null;
  if ("cd" === l[1]) {
    if ("/" !== l[2]) {
      dir = l[2];
    } else {
      dir = null;
    }
  }

  return [true, l[1], dir];
}

// @ts-ignore
function getCurrentDir(disk, dirArr) {
  let dir = disk;
  for (let i = 0; i < dirArr.length; i++) {
    if (undefined === dir[dirArr[i]]) {
      dir[dirArr[i]] = {};
    }

    dir = dir[dirArr[i]];
  }

  return dir;
}

// @ts-ignore
function hehe(folder, find, minSpace) {
  let folderTotal = 0;
  let objectKeys = Object.keys(folder);
  for (let i = 0; i < objectKeys.length; i++) {
    if (typeof folder[objectKeys[i]] === "number") {
      folderTotal += folder[objectKeys[i]];
      usedSpace += folder[objectKeys[i]];
    } else {
      folderTotal += hehe(folder[objectKeys[i]], find, minSpace);
    }
  }

  if (find) {
    // @ts-ignore
    if (folderTotal > minSpace && folderTotal < answer) {
      answer = folderTotal;
    }
    // @ts-ignore
    if (folderTotal > minSpace && null === answer) {
      answer = folderTotal;
    }
  }

  return folderTotal;
}

export function day7part2() {
  const lines = input.split(/\r?\n/);

  // @ts-ignore
  let cmd = null;
  let dir = null;

  // @ts-ignore
  let dirArr = [];

  lines.forEach((line) => {
    if (!line) {
      return;
    }

    const l = line.split(" ");

    if ("$" === l[0]) {
      // @ts-ignore
      const command = getCommand(l);
      // @ts-ignore
      cmd = command[1];
      // @ts-ignore
      dir = command[2];

      if ("cd" === cmd) {
        if (dir) {
          if (".." === dir) {
            // @ts-ignore
            dirArr.pop();
          } else {
            dirArr.push(dir);
            // @ts-ignore
            if (null === getCurrentDir(disk, dirArr)) {
              // @ts-ignore
              // getCurrentDir(disk, dirArr) = {};
            }
          }
        }
      }
    } else {
      // @ts-ignore
      if ("ls" === cmd) {
        if ("dir" === l[0]) {
          // Adding directory.
          // @ts-ignore
          if (!getCurrentDir(disk, dirArr)[l[1]]) {
            // @ts-ignore
            getCurrentDir(disk, dirArr)[l[1]] = {};
          }
        } else {
          // Adding file.
          // @ts-ignore
          getCurrentDir(disk, dirArr)[l[1]] = parseInt(l[0], 10);
        }
      }
    }
  });

  // @ts-ignore
  hehe(disk, false);
  const minSpace = requiredSpace - (maxSpace - usedSpace);
  hehe(disk, true, minSpace);

  // @ts-ignore
  return answer;
}
