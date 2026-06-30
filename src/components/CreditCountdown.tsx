import { useEffect, useState } from "react";

function getNextDailyReset() {
  const now = new Date();
  const next = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
  return next;
}

function getNextMonthlyReset() {
  const now = new Date();
  const next = new Date(now.getFullYear(), now.getMonth() + 1, 1, 0, 0, 0);
  return next;
}

function useCountdown(target: Date) {
  const [diff, setDiff] = useState<number | null>(null);

  useEffect(() => {
    function tick() {
      const ms = target.getTime() - Date.now();
      setDiff(ms > 0 ? ms : 0);
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  if (diff === null) {
    return { hours: "--", minutes: "--", seconds: "--" };
  }

  const totalSeconds = Math.floor(diff / 1000);
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");

  return { hours, minutes, seconds };
}

function CountdownBox({ label, target }: { label: string; target: Date }) {
  const { hours, minutes, seconds } = useCountdown(target);
  return (
    <div className="flex flex-col items-center gap-1 min-w-[90px]">
      <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-bold">
        {label}
      </span>
      <div className="flex items-center gap-1 text-sm sm:text-base font-bold tabular-nums text-foreground">
        <span className="px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">
          {hours}
        </span>
        <span className="text-muted-foreground">:</span>
        <span className="px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">
          {minutes}
        </span>
        <span className="text-muted-foreground">:</span>
        <span className="px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">
          {seconds}
        </span>
      </div>
    </div>
  );
}

export default function CreditCountdown() {
  const [dailyTarget, setDailyTarget] = useState<Date | null>(null);
  const [monthlyTarget, setMonthlyTarget] = useState<Date | null>(null);

  useEffect(() => {
    setDailyTarget(getNextDailyReset());
    setMonthlyTarget(getNextMonthlyReset());
  }, []);

  if (!dailyTarget || !monthlyTarget) return null;

  return (
    <div className="w-full py-4 mt-4 border-t border-border/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-center text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-3 font-bold">
          ⏳ Prossimo ripristino crediti
        </p>
        <div className="flex items-center justify-center gap-6 sm:gap-10 flex-wrap">
          <CountdownBox label="Giornaliero" target={dailyTarget} />
          <CountdownBox label="Mensile" target={monthlyTarget} />
        </div>
      </div>
    </div>
  );
}
