import { component$, Host } from '@builder.io/qwik';
import { Scoreboard } from './scoreboard';

export const App = component$(() => {
  return (
    <Host class="my-app">
      <Scoreboard />
    </Host>
  );
});
