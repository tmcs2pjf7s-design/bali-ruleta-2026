-- ═══════════════════════════════════════════════════════════
--  RULETA DE BALI 2026 · Setup Supabase
--  Ejecuta esto en: supabase.com → SQL Editor → New query
-- ═══════════════════════════════════════════════════════════

-- 1. Crear tabla principal
CREATE TABLE IF NOT EXISTS bali_ruleta (
  id          TEXT     PRIMARY KEY DEFAULT 'state',
  pool        JSONB    NOT NULL DEFAULT '[]'::jsonb,
  assignments JSONB    NOT NULL DEFAULT '[null,null,null,null,null,null]'::jsonb,
  next_id     INTEGER  NOT NULL DEFAULT 1,
  updated_at  TIMESTAMPTZ DEFAULT now()
);

-- 2. Fila inicial
INSERT INTO bali_ruleta (id)
VALUES ('state')
ON CONFLICT (id) DO NOTHING;

-- 3. Row Level Security
ALTER TABLE bali_ruleta ENABLE ROW LEVEL SECURITY;

-- 4. Política: acceso total para anon
--    (la app tiene su propia contraseña de acceso)
DROP POLICY IF EXISTS "allow_all_anon" ON bali_ruleta;
CREATE POLICY "allow_all_anon" ON bali_ruleta
  FOR ALL TO anon
  USING (true)
  WITH CHECK (true);

-- ✅ Listo. Ya puedes cerrar el SQL Editor.
