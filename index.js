import getArgs from './helpers/args.js';
import { printError, printSuccess, printHelp } from './services/log.service.js';
import {
  getKeyValue,
  saveKeyValue,
  TOKEN_DICTIONARY,
} from './services/storage.service.js';

const saveToken = async (token) => {
  if (!token.length) {
    printError("Token doesn't exist");
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
    printSuccess('Token was saved');
  } catch (error) {
    printError(error.message);
  }
};

const startCLI = () => {
  const args = getArgs(process.argv);
  console.log(args);

  if (args.h) {
    // help
    printHelp();
  }

  if (args.s) {
    // save city
  }

  if (args.t) {
    // save token
    return saveToken(args.t);
  }
  // result
};

startCLI();
