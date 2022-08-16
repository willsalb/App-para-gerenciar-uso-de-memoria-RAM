const os = require("os");

setInterval(() => {
  const { arch, platform, freemem, totalmem } = os;

  const TRAM = totalmem() / 1024 / 1024;
  const FRAM = freemem() / 1024 / 1024;
  const usage = (TRAM / FRAM) * 100;

  const stats = {
    os: platform(),
    Arch: arch(),
    TotalRAM: `${parseInt(TRAM)} MB`, //parseInt transforma em números inteiros.
    Freemem: `${parseInt(FRAM)} MB`,
    Usage: `${usage.toFixed(2)} %`,
  };

  console.clear();
  console.table(stats);
  exports.stats = stats; //Exportando o modulo chamado "stats" que ta recebendo o objeto stats.
}, 1000);
