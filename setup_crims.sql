-- ═══════════════════════════════════════════════════════════
--  CRIMS DETECTIVE · Setup Supabase
--  Ejecuta esto en: supabase.com → SQL Editor → New query
-- ═══════════════════════════════════════════════════════════

-- 1. Tabla de jugadores (totales acumulados)
CREATE TABLE IF NOT EXISTS crims_players (
  player         TEXT        PRIMARY KEY,
  total_pts      INTEGER     NOT NULL DEFAULT 0,
  cases_solved   INTEGER     NOT NULL DEFAULT 0,
  cases_attempted INTEGER    NOT NULL DEFAULT 0,
  rank_title     TEXT        NOT NULL DEFAULT 'Detective Novato',
  updated_at     TIMESTAMPTZ DEFAULT now()
);

-- 2. Tabla de partidas (historial por caso)
CREATE TABLE IF NOT EXISTS crims_scores (
  id           UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  player       TEXT        NOT NULL,
  case_idx     INTEGER     NOT NULL,
  case_title   TEXT,
  correct      BOOLEAN     NOT NULL,
  clues_found  INTEGER     DEFAULT 0,
  pts_earned   INTEGER     DEFAULT 0,
  accused      TEXT,
  created_at   TIMESTAMPTZ DEFAULT now()
);

-- 3. Row Level Security
ALTER TABLE crims_players ENABLE ROW LEVEL SECURITY;
ALTER TABLE crims_scores  ENABLE ROW LEVEL SECURITY;

-- 4. Políticas: acceso total para anon
DROP POLICY IF EXISTS "allow_all_anon" ON crims_players;
CREATE POLICY "allow_all_anon" ON crims_players
  FOR ALL TO anon USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "allow_all_anon" ON crims_scores;
CREATE POLICY "allow_all_anon" ON crims_scores
  FOR ALL TO anon USING (true) WITH CHECK (true);

-- 5. Filas iniciales de jugadores
INSERT INTO crims_players (player, rank_title)
VALUES
  ('Ruslan', 'Detective Novato'),
  ('Anabel', 'Detective Novata')
ON CONFLICT (player) DO NOTHING;

-- ✅ Listo. Ya puedes cerrar el SQL Editor.
