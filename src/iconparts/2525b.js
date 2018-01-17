import { defaultProperties } from "./shared-functions.js";

export default function(
  iconParts,
  metadata,
  colors,
  STD2525,
  monoColor,
  alternateMedal
) {
  //  2525B extra icon parts
  /*
  iconParts
  The existing object of icon parts
  
  metadata
  propterties object
  
  colors
  color object
  
  STD2525
  Is it 2525 then true, otherwise false
  
  alternateMedal
  true/false for sea mine stuff
  */

  var affiliation = metadata.affiliation || "Friend";
  //If hostile and not monoColor, make it red, otherwise use the iconColor.
  var iconColor = colors.iconColor[affiliation];

  //var numberSIDC = metadata.numberSIDC;
  var icn = {};

  icn["2525B.STN"] = {
    type: "path",
    fill: false,
    d:
      "m 70,85 60,0 0,30 -60,0 z m 30,-15 0,60 m 35.411,-4.824 a 42.8324,42.8324 0 0 1 -47.888,15.56 42.8324,42.8324 0 0 1 -29.5964,-40.7361 42.8324,42.8324 0 0 1 29.5966,-40.736 42.8324,42.8324 0 0 1 47.8878,15.56"
  }; //WAR.SSUF.CBTT.STN
  icn["2525B.STN.PKT"] = [
    { type: "path", fill: false, d: "m 70,85 60,0 0,30 -60,0 z m 30,-15 0,60" },
    { type: "text", stroke: false, x: 100, y: 145, fontsize: 30, text: "PK" }
  ]; //WAR.SSUF.CBTT.STN.PKT
  icn["2525B.STN.ASWSHP"] = [
    { type: "path", fill: false, d: "m 70,85 60,0 0,30 -60,0 z m 30,-15 0,60" },
    { type: "text", stroke: false, x: 100, y: 145, fontsize: 30, text: "AS" }
  ]; //WAR.SSUF.CBTT.STN.ASWSHP
  icn["2525B.NCBTT.STN"] = [
    { type: "path", fill: false, d: "m 70,85 60,0 0,30 -60,0 z m 30,-15 0,60" },
    { type: "text", stroke: false, x: 100, y: 145, fontsize: 30, text: "NC" }
  ]; //WAR.SSUF.NCBTT.STN
  icn["2525B.STN.RSC"] = [
    { type: "path", fill: false, d: "m 70,85 60,0 0,30 -60,0 z m 30,-15 0,60" },
    { type: "text", stroke: false, x: 100, y: 145, fontsize: 30, text: "RS" }
  ]; //WAR.SSUF.NCBTT.STN.RSC

  icn["2525B.SUB.STN"] = [
    { type: "path", d: "m 70,85 60,0 0,30 -60,0 z m 30,-15 0,60" },
    { type: "text", stroke: false, x: 100, y: 145, fontsize: 30, text: "SS" }
  ]; //WAR.SBSUF.SUB.STN
  icn["2525B.ASWSUB"] = {
    type: "path",
    d:
      "m 80,85 40,0 0,-20 -40,0 z m 20,-30 0,40 m -40,15 15,15 50,0 15,-15 -15,-15 -50,0 z"
  }; //WAR.SBSUF.SUB.STN.ASWSUB

  for (var key in icn) {
    if (!icn.hasOwnProperty(key)) continue;
    if (iconParts.hasOwnProperty(key)) console.warn("Override of: " + key);
    defaultProperties.call(this, icn[key], iconColor);
    iconParts[key] = icn[key];
  }
}
