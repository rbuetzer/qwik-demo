import { component$ } from '@builder.io/qwik';
import confetti from 'canvas-confetti';

export const throwConfetti = async () => {
    console.log('hello confetti');
    var myCanvas = document.createElement('canvas');
    myCanvas.setAttribute('style', 'position:absolute; top: 0; left: 0; height: 100vh; width: 100vw; pointer-events: none;')
    document.body.appendChild(myCanvas);

    var myConfetti = confetti.create(myCanvas, {
        resize: true,
        useWorker: true
    });

    await myConfetti({
        particleCount: 100,
        spread: 160
    });

    document.body.removeChild(myCanvas);
}

export const ConfettiTile = component$(() => {
    return (
        <button onClick$={throwConfetti} class="text-9xl border border-black p-8">
            🥳
        </button>
    );
});