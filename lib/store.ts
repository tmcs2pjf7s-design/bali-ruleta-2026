import { atom } from 'jotai'
import type { Lang } from './i18n'

export const langAtom = atom<Lang>('es')
