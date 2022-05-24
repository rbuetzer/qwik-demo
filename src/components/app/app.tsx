import { component$, Host } from '@builder.io/qwik';
import { ConfettiTile } from '../tiles/confetti';

export const App = component$(() => {
  return (
    <Host class="my-app p-20">
      <h1 class="text-3xl mb-2">My Qwik App</h1>

      <ConfettiTile />
    </Host>
  );
});
