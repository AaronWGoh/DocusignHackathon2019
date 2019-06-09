import * as mm from '@magenta/music';

//const model = new mm.MusicVAE('/path/to/checkpoint');
const player = new mm.Player();

model
  .initialize()
  .then(() => model.sample(1))
  .then(samples => {
    player.resumeContext();
    player.start(samples[0])
  });

