const timers = process.argv.slice(2);

const timer = (alarms) => {
  if (alarms.length > 0) {
    for (let alarm of alarms) {
      if (alarm >= 0) {
        setTimeout(() => process.stdout.write("\x07"), alarm * 1000);
      }
    }
  }
};

timer(timers);
