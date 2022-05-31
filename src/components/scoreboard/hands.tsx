import { component$, Host, useStore, useWatch$ } from '@builder.io/qwik';
import MinuteHand from "./svg/minute-hand.svg";
import SecondHand from "./svg/second-hand.svg";

export const Hands = component$(() => {
    const store = useStore({
        isRunning: false,
        startTime: 0,
        elapsedTime: 0,
    });

    
    useWatch$((track) => {
        const isRunning = track(store, 'isRunning');

        if (!isRunning) {
            return;
        }

        store.startTime = performance.now() - store.elapsedTime;

        const updateHands = (timestamp: DOMHighResTimeStamp) => {
            store.elapsedTime = timestamp - store.startTime;
        }
        const timer = setInterval(() => {
            window.requestAnimationFrame(updateHands);
        }, 10);
        return () => {
            clearInterval(timer);
        };
    });

    const {elapsedTime: elapsedMilliseconds} = store;

    const minuteWandRotation = elapsedMilliseconds / 3_600_000;
    const secondWandRotation = elapsedMilliseconds / 60_000;

    return (
        <Host>
            <div
                style="display: flex; height: 100%; justify-content: center; align-items: center; cursor: pointer"
                onClick$={() => store.isRunning = !store.isRunning}
            >
                <img style={`position: absolute; height: 90%; transform: rotate(${minuteWandRotation}turn)`} src={MinuteHand} alt="" />
                <img style={`position: absolute; height: 90%; transform: rotate(${secondWandRotation}turn)`} src={SecondHand} alt="" />
            </div>
        </Host>
    );
});