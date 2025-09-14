export const themes = {
  light: {
    background: 'bg-zinc-400',
    text: 'text-black',
    button: 'bg-blue-500 text-white',
  },
  dark: {
    background: 'bg-zinc-900',
    text: 'text-white',
    button: 'bg-blue-700 text-white',
  },
  pika: {
    background: 'bg-yellow-300',
    text: 'text-purple-800',
    button: 'bg-purple-500 text-white',
  },
  limbo: {
    background: 'bg-blue-200',
    text: 'text-black',
    button: 'bg-blue-400 text-white',
  },
};

export type ThemeType = keyof typeof themes;