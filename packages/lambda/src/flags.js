const LOGGING_FLAGS = process.env.DEBUG ? ['--enable-logging', '--log-level=0', '--v=99'] : []

export default [
  ...LOGGING_FLAGS,
  '--disable-gpu',
  '--single-process', // Currently wont work without this :-(

  // https://groups.google.com/a/chromium.org/d/msg/headless-dev/qqbZVZ2IwEw/Y95wJUh2AAAJ
  '--no-zygote', // helps avoid zombies

  '--no-sandbox',
]
