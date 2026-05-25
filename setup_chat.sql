-- ══════════════════════════════════════════════════
--  CHAT BALI 2026 · Ejecuta en Supabase SQL Editor
-- ══════════════════════════════════════════════════
CREATE TABLE IF NOT EXISTS bali_chat (
  id           UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  author       TEXT        NOT NULL,
  message      TEXT        NOT NULL,
  is_suggestion BOOLEAN    DEFAULT false,
  created_at   TIMESTAMPTZ DEFAULT now()
);
ALTER TABLE bali_chat ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "allow_all_anon" ON bali_chat;
CREATE POLICY "allow_all_anon" ON bali_chat
  FOR ALL TO anon USING (true) WITH CHECK (true);

-- Activa Realtime para la tabla
ALTER PUBLICATION supabase_realtime ADD TABLE bali_chat;
-- ✅ Listo
