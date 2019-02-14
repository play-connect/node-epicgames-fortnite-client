/* eslint-disable import/no-dynamic-require */

const launcherPackageName = process.env.KYSUNE_EPICGAMES_CLIENT || 'epicgames-client';

const { EInputType } = require(`${launcherPackageName}`);

class BR {

  constructor(app) {

    this.app = app;
    this.client = app.launcher;

  }

  parse(data, selectedInputType) {

    if (!data) return false;

    const result = {};
  
    const { stats } = data;
    
    Object.keys(stats).forEach((param) => {

      let paramValue = stats[param];

      param = param.split('_');

      const subGame = param[0];
      const paramName = this.rename(param[1]);
      const inputType = this.readInputType(param[2]);
      const playlist = param[5];
      const playlistMode = param[6];

      if (subGame !== 'br') return;

      if (typeof result[inputType] === 'undefined') result[inputType] = {};
      if (typeof result[inputType][playlist] === 'undefined') result[inputType][playlist] = {};
      if (playlistMode && typeof result[inputType][playlist][playlistMode] === 'undefined') result[inputType][playlist][playlistMode] = {};

      if (paramName === 'lastModified') paramValue = new Date(paramValue * 1000);
      
      if (playlistMode) result[inputType][playlist][playlistMode][paramName] = paramValue;
      else result[inputType][playlist][paramName] = paramValue;
    });
    
    return typeof selectedInputType === 'number' ? result[selectedInputType] : result;
  }

  rename(name) {
    switch (name) {
      case 'placetop6': return 'placeTop6';
      case 'placetop25': return 'placeTop25';
      case 'placetop1': return 'placeTop1';
      case 'matchesplayed': return 'matchesPlayed';
      case 'lastmodified': return 'lastModified';
      case 'minutesplayed': return 'minutesPlayed';
      case 'playersoutlived': return 'playersOutLived';
      case 'placetop10': return 'placeTop10';
      case 'placetop12': return 'placeTop12';
      case 'placetop3': return 'placeTop3';
      default: return name;
    }
  }

  readInputType(inputType) {
    switch (inputType) {
      case 'keyboardmouse': return EInputType.MouseAndKeyboard;
      case 'controller': return EInputType.Controller;
      case 'touch': return EInputType.Touch;
      default: return inputType;
    }
  }

}

module.exports = BR;
