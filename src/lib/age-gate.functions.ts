import { createServerFn } from "@tanstack/react-start";
import { useSession } from "@tanstack/react-start/server";

type AgeGateSession = { confirmed?: boolean };

function getSessionConfig() {
  const password = process.env.AGE_GATE_SESSION_SECRET;
  if (!password) throw new Error("AGE_GATE_SESSION_SECRET is not set");
  return {
    password,
    name: "age-gate",
    maxAge: 60 * 60 * 24 * 30, // 30 days
    cookie: {
      httpOnly: true,
      secure: true,
      sameSite: "lax" as const,
      path: "/",
    },
  };
}

export const isAgeConfirmed = createServerFn({ method: "GET" }).handler(async () => {
  const session = await useSession<AgeGateSession>(getSessionConfig());
  return { confirmed: Boolean(session.data.confirmed) };
});

export const confirmAge = createServerFn({ method: "POST" }).handler(async () => {
  const session = await useSession<AgeGateSession>(getSessionConfig());
  await session.update({ confirmed: true });
  return { ok: true as const };
});
