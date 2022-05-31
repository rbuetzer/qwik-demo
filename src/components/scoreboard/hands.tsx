import { component$, Host } from '@builder.io/qwik';
import MinuteHand from "./svg/minute-hand.svg";
import SecondHand from "./svg/second-hand.svg";

export const Hands = component$(() => {

    const elapsedMilliseconds = 30_000;

    const minuteWandRotation = elapsedMilliseconds / 3_600_000;
    const secondWandRotation = elapsedMilliseconds / 60_000;

    return (
        <Host>
            <div
                style="display: flex; height: 100%; justify-content: center; align-items: center; cursor: pointer"
                onClick$={() => alert('hello')}
            >
                <img style={`position: absolute; height: 90%; transform: rotate(${minuteWandRotation}turn)`} src={MinuteHand} alt="" />
                <img style={`position: absolute; height: 90%; transform: rotate(${secondWandRotation}turn)`} src={SecondHand} alt="" />
            </div>
        </Host>
    );
});