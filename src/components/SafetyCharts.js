import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, ComposedChart, Area
} from 'recharts';

// Hook to detect when element is in viewport
const useInView = () => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isInView]);

  return [ref, isInView];
};

// 1. Incident Trend and Total Hours
export const IncidentTrendChart = () => {
  const [ref, isInView] = useInView();
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (isInView) {
      setAnimationKey(prev => prev + 1);
    }
  }, [isInView]);

  const data = [
    { year: '2018-2019', injuries: 21, rate: 0.87, hours: 1346283 },
    { year: '2019-2020', injuries: 37, rate: 2.76, hours: 1381500 },
    { year: '2020-2021', injuries: 16, rate: 1.57, hours: 2064193 },
    { year: '2021-2022', injuries: 21, rate: 2.60, hours: 1768093 },
    { year: '2022-2023', injuries: 29, rate: 2.06, hours: 2851295 },
    { year: '2023-2024', injuries: 13, rate: 0.80, hours: 3138751 },
    { year: '2024-2025', injuries: 17, rate: 1.64, hours: 2190000 }
  ];

  return (
    <div ref={ref} className="w-full h-[400px] bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Incident Trend and Total Hours</h3>
      {isInView && (
        <ResponsiveContainer width="100%" height="90%">
          <ComposedChart data={data} key={animationKey}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" angle={-45} textAnchor="end" height={80} />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="injuries" fill="#2563eb" animationDuration={1500} animationBegin={0} />
            <Line yAxisId="right" type="monotone" dataKey="rate" stroke="#ef4444" strokeWidth={3} animationDuration={1500} animationBegin={500} />
          </ComposedChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

// 2. Hazard Waste
export const HazardWasteChart = () => {
  const [ref, isInView] = useInView();
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (isInView) {
      setAnimationKey(prev => prev + 1);
    }
  }, [isInView]);

  const data = [
    { year: '2017', total: 12300, wasteSolvent: 2000, batteries: 1500, steelGrit: 2000, resin: 1800, paintSludge: 1500, paintBooth: 1000, oilWaste: 1000, hydroTest: 500, emptyDrums: 1000 },
    { year: '2018', total: 3400, wasteSolvent: 500, batteries: 400, steelGrit: 600, resin: 500, paintSludge: 400, paintBooth: 300, oilWaste: 300, hydroTest: 200, emptyDrums: 200 },
    { year: '2019', total: 30666, wasteSolvent: 5000, batteries: 3500, steelGrit: 5000, resin: 4500, paintSludge: 3500, paintBooth: 3000, oilWaste: 2666, hydroTest: 1500, emptyDrums: 2000 },
    { year: '2020', total: 33258, wasteSolvent: 5500, batteries: 3800, steelGrit: 5300, resin: 4700, paintSludge: 3700, paintBooth: 3200, oilWaste: 2858, hydroTest: 1700, emptyDrums: 2500 },
    { year: '2021', total: 93871, wasteSolvent: 15000, batteries: 11000, steelGrit: 15000, resin: 13500, paintSludge: 11000, paintBooth: 9000, oilWaste: 8371, hydroTest: 5000, emptyDrums: 6000 },
    { year: '2022', total: 120896, wasteSolvent: 20000, batteries: 14000, steelGrit: 19000, resin: 17500, paintSludge: 14000, paintBooth: 12000, oilWaste: 10896, hydroTest: 6500, emptyDrums: 7000 },
    { year: '2023', total: 39883, wasteSolvent: 6500, batteries: 4800, steelGrit: 6500, resin: 5800, paintSludge: 4800, paintBooth: 3900, oilWaste: 3383, hydroTest: 2000, emptyDrums: 2200 },
    { year: '2024', total: 62091, wasteSolvent: 10000, batteries: 7500, steelGrit: 10000, resin: 9000, paintSludge: 7500, paintBooth: 6000, oilWaste: 5091, hydroTest: 3000, emptyDrums: 4000 },
    { year: '2025', total: 45657, wasteSolvent: 7500, batteries: 5500, steelGrit: 7300, resin: 6600, paintSludge: 5500, paintBooth: 4400, oilWaste: 3757, hydroTest: 2200, emptyDrums: 2900 }
  ];

  return (
    <div ref={ref} className="w-full h-[400px] bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Hazard Waste</h3>
      {isInView && (
        <ResponsiveContainer width="100%" height="90%">
          <BarChart data={data} key={animationKey}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="wasteSolvent" stackId="a" fill="#ef4444" animationDuration={2000} animationBegin={0} />
            <Bar dataKey="batteries" stackId="a" fill="#f97316" animationDuration={2000} animationBegin={100} />
            <Bar dataKey="steelGrit" stackId="a" fill="#f59e0b" animationDuration={2000} animationBegin={200} />
            <Bar dataKey="resin" stackId="a" fill="#eab308" animationDuration={2000} animationBegin={300} />
            <Bar dataKey="paintSludge" stackId="a" fill="#84cc16" animationDuration={2000} animationBegin={400} />
            <Bar dataKey="paintBooth" stackId="a" fill="#22c55e" animationDuration={2000} animationBegin={500} />
            <Bar dataKey="oilWaste" stackId="a" fill="#10b981" animationDuration={2000} animationBegin={600} />
            <Bar dataKey="hydroTest" stackId="a" fill="#14b8a6" animationDuration={2000} animationBegin={700} />
            <Bar dataKey="emptyDrums" stackId="a" fill="#06b6d4" animationDuration={2000} animationBegin={800} />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

// 3. Irrigation Water Consumption
export const IrrigationWaterChart = () => {
  const [ref, isInView] = useInView();
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (isInView) {
      setAnimationKey(prev => prev + 1);
    }
  }, [isInView]);

  const data = [
    { year: '2020-2021', gallons: 146667 },
    { year: '2021-2022', gallons: 146250 },
    { year: '2022-2023', gallons: 148750 },
    { year: '2023-2024', gallons: 114167 },
    { year: '2024-2025', gallons: 101583 }
  ];

  return (
    <div ref={ref} className="w-full h-[400px] bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Irrigation Water Consumption</h3>
      <p className="text-sm text-gray-600 mb-4">Gallons</p>
      {isInView && (
        <ResponsiveContainer width="100%" height="85%">
          <BarChart data={data} key={animationKey}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" angle={-20} textAnchor="end" height={80} />
            <YAxis />
            <Tooltip />
            <Bar dataKey="gallons" fill="#3b82f6" animationDuration={1500} animationBegin={0} />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

// 4. AED per Month
export const AEDChart = () => {
  const [ref, isInView] = useInView();
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (isInView) {
      setAnimationKey(prev => prev + 1);
    }
  }, [isInView]);

  const data = [
    { year: '2021-2022', value: 3955 },
    { year: '2022-2023', value: 3890 },
    { year: '2023-2024', value: 2936 },
    { year: '2024-2025', value: 2646 }
  ];

  return (
    <div ref={ref} className="w-full h-[400px] bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">AED per Month</h3>
      {isInView && (
        <ResponsiveContainer width="100%" height="85%">
          <BarChart data={data} key={animationKey}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" angle={-20} textAnchor="end" height={80} />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#10b981" animationDuration={1500} animationBegin={0} />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

// 5. Solar Panel Cleaning Water Consumption
export const SolarPanelWaterChart = () => {
  const [ref, isInView] = useInView();
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (isInView) {
      setAnimationKey(prev => prev + 1);
    }
  }, [isInView]);

  const data = [
    { month: 'Jan 24', liters: 50000 },
    { month: 'Feb 24', liters: 53000 },
    { month: 'Mar 24', liters: 87200 },
    { month: 'Apr 24', liters: 48800 },
    { month: 'May 24', liters: 23000 },
    { month: 'Jun 24', liters: 42000 },
    { month: 'Jul 24', liters: 68000 },
    { month: 'Aug 24', liters: 80000 },
    { month: 'Sep 24', liters: 96000 },
    { month: 'Oct 24', liters: 79000 },
    { month: 'Nov 24', liters: 69000 },
    { month: 'Dec 24', liters: 77000 },
    { month: 'Jan 25', liters: 67000 },
    { month: 'Feb 25', liters: 110000 },
    { month: 'Mar 25', liters: 102000 },
    { month: 'Apr 25', liters: 48000 },
    { month: 'May 25', liters: 50000 },
    { month: 'Jun 25', liters: 53000 }
  ];

  return (
    <div ref={ref} className="w-full h-[500px] bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Solar Panel Cleaning Water Consumption</h3>
      <p className="text-sm text-gray-600 mb-4">Liters per Month</p>
      {isInView && (
        <ResponsiveContainer width="100%" height="88%">
          <BarChart data={data} key={animationKey}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" angle={-45} textAnchor="end" height={80} />
            <YAxis />
            <Tooltip />
            <Bar dataKey="liters" fill="#06b6d4" animationDuration={2500} animationBegin={0} />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};
