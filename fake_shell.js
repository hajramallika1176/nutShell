const parentDirectory = "..";
const currentDirectory = ".";
const rootPath = "mallikahajra@Mallika-ka-MacBook-Pro~";
const allDirectories = [];
const files = ["fake_shell.js"];
const PATH = ["/Users/mallikahajra"];

const echoCommand = function (arg) {
  let sliceMessage = [...arg].join(" ");

  if ((sliceMessage[0] === '"')) {
    sliceMessage = (sliceMessage.slice(1, sliceMessage.length-1));
  }

  console.log(sliceMessage);
};

const TouchCommand = function (file) {
  files.push(file);
};

const lsCommand = function () {
  const allFiles = files.map(function (file) { return file; }).join(" ");
  console.log(allFiles);
};


const getRelativePath = function (directory) {
  if (directory === parentDirectory) {
    allDirectories.pop();
  }
  const directories = allDirectories.join(" ");
  f(directories);
};

const getAbsolutePath = function (directory) {
  allDirectories.push(directory);
  const directories = allDirectories.join(" ");
  f( directories);
};

function isRelativePath(directory) {
  return directory === parentDirectory || directory === currentDirectory;
}

const addPath = function (directory) {
  PATH.push(directory);
};

const cdCommand = function (directory) {
  if (directory) {
    isRelativePath(directory) ? getRelativePath(directory) : getAbsolutePath(directory);
  } else {
    promptMessage = rootPath + pwd + mod;
  };
  
};

const  mkdirCommand = function(directory){
  addPath(directory);
  // promptMessage = rootPath +" "+ directory +" %";
}

const pwdCommand = function () {
  console.log(PATH.join("/"));
};

function runCommand(commandMessage) {
  const [command, ...arg] = commandMessage.split(" ");
  let output = "";
  
  switch (command) {
    case "echo": return echoCommand(arg);
    case "ls": return lsCommand();
    case "cd": return cdCommand(arg.join());
    case "touch": return TouchCommand(arg.join());
    case "pwd": return pwdCommand(arg.join());
    case "mkdir": return mkdirCommand(arg.join());
    default: output = "default command";
  }
  console.log(output);
}

let pwd = "~";
let mod = " %";
let promptMessage = rootPath + mod;

const f = function (arg) {
  promptMessage = rootPath + " " + arg + mod;
};


const creatPromptMessage = function () {
  return prompt(promptMessage);
};

while (true) {
  const command = creatPromptMessage();
  runCommand(command);
  // console.log(output);
}

// prompt - promt