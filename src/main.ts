import './ui/ui.css';
import { Game } from './core/Game';
import { registerLevel } from './world/Level';
import { AerialDuelLevel } from './world/levels/AerialDuelLevel';
import { DevSandboxLevel } from './world/levels/DevSandboxLevel';
import { SiegeLevel } from './world/levels/SiegeLevel';
import { UrubaenLevel } from './world/levels/UrubaenLevel';

const canvas = document.getElementById('game');
const uiRoot = document.getElementById('ui-root');

if (!(canvas instanceof HTMLCanvasElement)) {
  throw new Error('Expected a <canvas id="game"> element.');
}
if (!(uiRoot instanceof HTMLElement)) {
  throw new Error('Expected a <div id="ui-root"> element.');
}

const game = new Game(canvas, uiRoot);

// Level 1 (shipped) + the dev sandbox both need the game's Input + host hooks, so
// their factories close over the game instance. The L2/L3 stubs need neither.
registerLevel('aerial-duel', () => new AerialDuelLevel(game.input, game));
registerLevel('dev-sandbox', () => new DevSandboxLevel(game.input, game));
registerLevel('siege', () => new SiegeLevel(game.input, game));
registerLevel('urubaen', () => new UrubaenLevel(game.input, game));

// Boot into the real Level 1: TITLE screen -> Start -> Phase 1 (Sky).
// Dev affordance: load the page with a URL hash to jump straight into a later
// level for playtesting (`#urubaen` -> Level 3, `#siege` -> Level 2). Default L1.
const bootLevel =
  location.hash === '#urubaen' ? 'urubaen' : location.hash === '#siege' ? 'siege' : 'aerial-duel';
game.bootInto(bootLevel);
game.start();
