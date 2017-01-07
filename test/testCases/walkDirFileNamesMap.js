/*eslint no-console: "error" */
'use strict';

const assert = require('assert');
const arghun = require('../../');
const opt = { dirMap: true };
const expected =  { './test/testData/A-characters':
      [ 'Acros-Krik.txt',
        'AdmiralGialAckbar.html',
        'Ak-Rev.xml',
        'Almec.json',
        'AskAak.json',
        'MasAmedda.html',
        'StassAllie.raml' ],
     './test/testData/A-characters/even-more-A':
      [ 'Amee.html',
        'BailAntilles.js',
        'CassianAndor.js',
        'Padmé-Amidala.css',
        'RaymusAntilles.html',
        'WedgeAntilles.doc' ],
     './test/testData/A-characters/how-abou-moreA':
      [ '.AZI-3',
        'CommanderAppo.html',
        'FaroArgyus.js',
        'PasselArgente.css',
        'QueenApailana.html',
        'SetiAshgad.json' ],
     './test/testData/B-characters':
      [ 'BanaBreemu.txt',
        'CadBane.html',
        'KitsterBanai.html',
        'LuxBonteri.html',
        'MoradminBast.html',
        'PondaBaba.html' ],
     './test/testData/B-characters/crap': [ 'JarJarBinks.xml' ],
     './test/testData/B-characters/even-more-B': [ 'Sora-Bulq.html' ],
     './test/testData/B-characters/more-B': [ 'Beed.doc', 'EzraBridger.html', 'SharaBey.js' ],
     './test/testData/B-characters/more-B/inside-B': [ 'MinaBonteri.js', 'TheBendu.html' ],
     './test/testData/B-characters/more-B/inside-B/custom':
      [ 'BorvotheHutt.css',
        'Bossk.js',
        'Depa-Billable.json',
        'SioBibble.js' ],
     './test/testData/B-characters/my-man': [ 'BB-8.css' ],
     './test/testData/C-characters':
      [ 'ArvelCrynyd.doc',
        'C1-10P.html',
        'Cordé.js',
        'Lando-Calrissian.css',
        'Ransolm-Casterfo.html',
        'SalaciousBCrumb.js' ],
     './test/testData/C-characters/even-more-c':
      [ 'CaptainJeremochColton.html',
        'CommanderCody.html',
        'KaydelKoConnix.js',
        'RushClovis.js' ],
     './test/testData/C-characters/my-man': [ 'C-3PO.html', 'Chewbacca.html' ],
     './test/testData/D-characters':
      [ 'BiggsDarklighter.less',
        'Cin-Drallig.css',
        'FigrinD\'an.html',
        'Ima-GunDi.html',
        'JocladDanva.css',
        'KesDameron.js',
        'LokDurd.css' ],
     './test/testData/D-characters/even-more-d':
      [ 'CloneTrooperDogma.html',
        'DaultayDofine.html',
        'Droidbait.css',
        'JanDodonna.html',
        'LottDod.html',
        'RinnrivinDi.html' ],
     './test/testData/D-characters/more-and-more-D':
      [ 'BrenDerlin.html',
        'Count-Dooku.js',
        'Dengar.html',
        'Dormé.html',
        'GeneralOroDassyne.html',
        'GizorDellso.sass' ],
     './test/testData/D-characters/my-man': [ 'PoeDameron.js' ],
     './test/testData/E-characters':
      [ 'Doctor Cornelius Evazan.html',
        'EV-9D9.html',
        'EbeEEndocott.html',
        'Eirtaé.html',
        'Ellé.html',
        'Embo.html',
        'Emperor\'sRoyalGuards.html',
        'Galen Erso.html',
        'JasEmari.html',
        'Jyn Erso.html',
        'LyraErso.html',
        'Morallo Eval.html' ],
     './test/testData/F-characters':
      [ 'Boba Fett.html',
        'Commander Fil.html',
        'Feral.html',
        'Jango Fett.js',
        'Onaconda Farr.html' ],
     './test/testData/F-characters/even-more-f':
      [ 'Clone Trooper Fives.html',
        'FN-2199.html',
        'Fode,js',
        'Kit Fisto.html' ],
     './test/testData/F-characters/moremoremore': [ 'Bib Fortuna.html', 'Commander Fox.html', 'FX-7.html' ],
     './test/testData/F-characters/my-man': [ 'Finn.js' ],
     './test/testData/G-characters':
      [ 'Adi Gallia.js',
        'Commander Gree.raml',
        'Gardulla the Hutt.html',
        'Garindan.less',
        'Gonk droid.html',
        'Saw Gerrera.raml',
        'Yarna d\'al\' Gargan.js' ] };

async function walkDirFileNamesMap(path) {

  try {

    const result = await arghun.walkDir(path, opt);
    assert.deepEqual(result, expected, 'walkDir failed with dirMap option set to true');
  }

  catch(err) {

    console.log(err);
    throw new Error(err);
  }
}

module.exports = walkDirFileNamesMap;
