import { component$ } from '@builder.io/qwik';
import { Score } from './score';
import ScoreboardBackground from './svg/scoreboard-background.svg';

export const Scoreboard = component$(() => {
    return (
        <div style="position: relative; width: 100%; aspect-ratio: 181.371 / 100">
            <img src={ScoreboardBackground} style="width:100%" />
            <Score style="position: absolute; left: 10.1%; top: 53.3%; width: 9.6%; height: 17.4%" />
            <Score style="position: absolute; left: 83.1%; top: 53.3%; width: 9.6%; height: 17.4%" />
        </div>
    );
});