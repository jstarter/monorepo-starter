import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { hi } from '@demo/shared'
import { consola } from 'consola'

export const fileURL = import.meta.url
const __dirname = dirname(fileURLToPath(import.meta.url))

hi(__dirname, 'Justorez')

consola.info('Using monorepo 1.0.0')
consola.start('Building project...')
consola.warn('A new version of monorepo is available: 1.0.1')
consola.success('Project built!')
consola.error(new Error('This is an example error. Everything is fine!'))
consola.box('I am a simple box')
