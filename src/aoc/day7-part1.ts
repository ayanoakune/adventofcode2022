import { input } from "./day7-input";

let disk = {};
let total = 0;

function getCommand(l: any[]) {
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

function getCurrentDir(disk: object, dirArr: any[]) {
  let dir = disk;
  for (let i = 0; i < dirArr.length; i++) {
    // @ts-ignore
    if (undefined === dir[dirArr[i]]) {
      // @ts-ignore
      dir[dirArr[i]] = {};
    }

    // @ts-ignore
    dir = dir[dirArr[i]];
  }

  return dir;
}

function hehe(folder: object) {
  let folderTotal = 0;
  let objectKeys = Object.keys(folder);
  for (let i = 0; i < objectKeys.length; i++) {
    // @ts-ignore
    if (typeof folder[objectKeys[i]] === "number") {
      // @ts-ignore
      folderTotal += folder[objectKeys[i]];
    } else {
      // @ts-ignore
      folderTotal += hehe(folder[objectKeys[i]]);
    }
  }

  if (folderTotal <= 100000) {
    total += folderTotal;
  }

  return folderTotal;
}

export function day7part1() {
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

  hehe(disk);

  return total;
}
