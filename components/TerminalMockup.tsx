import { terminalLines } from "@/lib/data";

export default function TerminalMockup() {
  return (
    <div className="rounded-xl bg-canvas-deep p-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {terminalLines.map((line) => (
          <div key={line.command} className="rounded-lg bg-surface-card p-5">
            <p className="font-mono text-code text-muted">
              <span className="text-primary-glow">$</span> {line.command}
            </p>
            <p className="mt-2 font-mono text-code text-body-strong">{line.output}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
