import { createClient } from '@supabase/supabase-js'

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(url, key)

export interface PlayerRow {
  player:     string
  emoji:      string
  total_pts:  number
  cases_done: number
  rank:       string
}

export interface ScoreRow {
  id?:        number
  player:     string
  case_id:    number
  pts:        number
  solved:     boolean
  created_at?: string
}

export const RANK_THRESHOLDS = [
  { min: 2000, rank: 'Comisario Jefe',    emoji: '⭐⭐⭐' },
  { min: 1200, rank: 'Inspector Jefe',    emoji: '⭐⭐' },
  { min: 600,  rank: 'Detective Senior',  emoji: '⭐' },
  { min: 200,  rank: 'Detective',         emoji: '🔍' },
  { min: 0,    rank: 'Detective Novato',  emoji: '🎓' },
]

export function getPlayerRank(pts: number) {
  return RANK_THRESHOLDS.find(r => pts >= r.min) ?? RANK_THRESHOLDS[RANK_THRESHOLDS.length - 1]
}

export const DB = {
  async loadPlayers(): Promise<PlayerRow[]> {
    const { data } = await supabase.from('crims_players').select('*')
    return (data as PlayerRow[]) ?? []
  },

  async recordScore(row: ScoreRow) {
    await supabase.from('crims_scores').insert(row)
    const players = await DB.loadPlayers()
    const p = players.find(x => x.player === row.player)
    const newPts  = (p?.total_pts  ?? 0) + row.pts
    const newDone = (p?.cases_done ?? 0) + 1
    const rank    = getPlayerRank(newPts).rank
    await supabase.from('crims_players').upsert({
      player: row.player, emoji: p?.emoji ?? '🔍',
      total_pts: newPts, cases_done: newDone, rank,
    }, { onConflict: 'player' })
  },
}
