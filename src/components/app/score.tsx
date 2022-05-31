import { component$, Host, useStore } from '@builder.io/qwik';

export const Score = component$(() => {
    const store = useStore({
        score: 0
    });
    

    return (
        <Host>
            <div 
                onClick$={() => store.score++}
                style="height: 100%; width: 100%; line-height: 100%; font-size: 9vw; font-family: sans-serif; text-align: center; user-select: none; cursor: pointer"
            >
                {store.score}
            </div>
        </Host>
    );
});