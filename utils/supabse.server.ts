import { createServerClient } from "@supabase/auth-helpers-remix";
import type { Database } from "db_types";

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_KEY!;
export const createServerSupabase = ({
  request,
  response,
}: {
  request: Request;
  response: Response;
}) =>
  createServerClient<Database>(supabaseUrl, supabaseKey, { request, response });
