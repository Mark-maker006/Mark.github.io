'use client';

import { useState } from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import { dashboardData } from '@/data/dashboard';
import { TiltCard } from './TiltCard';

export function ProgressChart() {
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);
  const maxValue = Math.max(...dashboardData.chartData.map((d) => d.value));

  return (
    <TiltCard className="cursor-pointer">
      <Tooltip.Provider delayDuration={200}>
        <div className="bg-neutral-surface dark:bg-dark-neutral-surface rounded-2xl border border-neutral-border dark:border-dark-neutral-border p-6 overflow-hidden">
          <h3 className="text-lg font-semibold text-neutral-textMain dark:text-dark-neutral-textMain mb-6">
            本周工作统计
          </h3>

          <div className="relative h-64 pl-12 pr-4">
            <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="relative flex items-center"
                >
                  <span className="text-xs text-neutral-textMuted dark:text-dark-neutral-textMuted whitespace-nowrap">
                    {Math.round(maxValue - (maxValue / 4) * i)}
                  </span>
                  <div className="absolute left-0 right-0 border-t border-dashed border-neutral-border dark:border-dark-neutral-border" />
                </div>
              ))}
            </div>

            <div className="absolute left-12 right-4 bottom-0 top-0 flex items-end justify-between gap-2">
              {dashboardData.chartData.map((item, index) => {
                const heightPercent = (item.value / maxValue) * 100;
                const isHovered = hoveredBar === index;

                return (
                  <Tooltip.Root key={item.label} open={isHovered}>
                    <Tooltip.Trigger asChild>
                      <div
                        className="flex-1 flex flex-col items-center gap-2 cursor-pointer min-w-0"
                        onMouseEnter={() => setHoveredBar(index)}
                        onMouseLeave={() => setHoveredBar(null)}
                      >
                        <div
                          className={`w-full max-w-10 rounded-t-lg transition-all duration-200 ${
                            isHovered
                              ? 'bg-primary-500 dark:bg-dark-primary-500'
                              : 'bg-primary-400 dark:bg-dark-primary-400'
                          }`}
                          style={{ height: `${heightPercent * 0.8}%` }}
                        />
                        <span className="text-xs text-neutral-textMuted dark:text-dark-neutral-textMuted truncate">
                          {item.label}
                        </span>
                      </div>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content
                        className="bg-neutral-textMain dark:bg-dark-secondary-500 text-white dark:text-dark-neutral-background px-3 py-2 rounded-lg text-sm font-medium shadow-lg z-50"
                        sideOffset={5}
                      >
                        {item.label}: {item.value}
                        <Tooltip.Arrow className="fill-neutral-textMain dark:fill-dark-secondary-500" />
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                );
              })}
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-neutral-border dark:border-dark-neutral-border">
            <h4 className="text-sm font-medium text-neutral-textMain dark:text-dark-neutral-textMain mb-4">
              趋势分析
            </h4>
            <div className="h-20">
              <svg viewBox="0 0 300 80" className="w-full h-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="areaGradientLight" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#FBBF24" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="areaGradientDark" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#D4FF00" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#D4FF00" stopOpacity="0" />
                  </linearGradient>
                </defs>

                <path
                  d="M0,60 Q30,50 60,55 T120,40 T180,45 T240,25 T300,30"
                  fill="none"
                  stroke="#FBBF24"
                  strokeWidth="2"
                  className="dark:stroke-[#D4FF00]"
                />
                <path
                  d="M0,60 Q30,50 60,55 T120,40 T180,45 T240,25 T300,30 L300,80 L0,80 Z"
                  fill="url(#areaGradientLight)"
                  className="dark:fill-url(#areaGradientDark)"
                />

                <circle cx="60" cy="55" r="4" fill="#FBBF24" className="dark:fill-[#D4FF00]" />
                <circle cx="120" cy="40" r="4" fill="#FBBF24" className="dark:fill-[#D4FF00]" />
                <circle cx="180" cy="45" r="4" fill="#FBBF24" className="dark:fill-[#D4FF00]" />
                <circle cx="240" cy="25" r="4" fill="#FBBF24" className="dark:fill-[#D4FF00]" />
                <circle cx="300" cy="30" r="4" fill="#FBBF24" className="dark:fill-[#D4FF00]" />
              </svg>
            </div>
          </div>
        </div>
      </Tooltip.Provider>
    </TiltCard>
  );
}